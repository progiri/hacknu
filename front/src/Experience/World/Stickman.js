import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Stickman
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug

        this.overlay = this.experience.overlay
        this.viewParams = this.experience.viewParams
        this.devDataArray = this.experience.devDataArray
        console.log(this.devDataArray)

        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('stickman')
        }

        // Resource
        this.resource = this.resources.items.stickmanModel

        this.setModel()
        this.setAnimation()
        // this.cloneModel()
        this.updateModel()
    }

    updateOnce() {
        console.log("yeah")
        this.viewParams.center.lat = this.devDataArray[this.index].point[0]
        this.viewParams.center.lng = this.devDataArray[this.index].point[1]
        this.devAltitude = this.devDataArray[this.index].point[2]
        this.modelLocation = {...this.viewParams.center, altitude: this.devAltitude};
        this.overlay.latLngAltToVector3(this.modelLocation, this.model.position );
    }

    updateModel() {
        this.intervalId = null
        this.timestamp = 0
        this.index = 0
        this.magicNum = (this.devDataArray[this.devDataArray.length - 1].timestamp - this.devDataArray[0].timestamp) / 100
        console.log(this.magicNum)
    
        this.animationTimestamp = () => {
            let range_input = document.getElementById('timestampSlider')
            if (this.index == this.devDataArray.length - 1) {
                this.index = 0
                this.timestamp = 0
                range_input.value = 0
            }

            if(this.timestamp > this.devDataArray[this.index].timestamp) {
                this.viewParams.center.lat = this.devDataArray[this.index].point[0]
                this.viewParams.center.lng = this.devDataArray[this.index].point[1]
                // this.cylinder.mesh.scale.y = this.devDataArray[this.index].point[2]
                // this.cylinder.mesh.position.z = -this.devDataArray[this.index].point[2] / 2 - 1.5
                this.devAltitude = this.devDataArray[this.index].point[2]
                this.modelLocation = {...this.viewParams.center, altitude: this.devAltitude};
                this.overlay.latLngAltToVector3(this.modelLocation, this.model.position );

                this.index++
            }
            range_input.value = parseInt(range_input.value) + 1 
            this.timestamp = this.timestamp + this.magicNum
        }
        this.intervalId = setInterval(this.animationTimestamp, this.magicNum)
    }
    // updateModel() {
    //     let index = 0
    //     let intervalId = null
    //     const animation = () => {
    //         if(index < this.devDataArray.length) {
    //             this.viewParams.center.lat = this.devDataArray[index].point[0]
    //             this.viewParams.center.lng = this.devDataArray[index].point[1]
    //             this.modelLocation = {...this.viewParams.center, altitude: 10};
    //             this.overlay.latLngAltToVector3(this.modelLocation, this.model.position );
    //             index++
    //             console.log(this.viewParams.center)
    //         } else {
    //             clearInterval(intervalId)
    //         }
    //     }

    //     intervalId = setInterval(animation, 1000)
    // }

    setModel()
    {
        this.model = this.resource.scene
        this.model.scale.set(10, 10, 10)
        this.model.rotation.x = Math.PI / 2
        // this.model.position 

        this.modelLocation = {...this.viewParams.center, altitude: 10};
        this.overlay.latLngAltToVector3(this.modelLocation, this.model.position );

        this.scene.add(this.model)

        this.model.traverse((child) =>
        {
            if(child instanceof THREE.Mesh)
            {
                child.castShadow = true
            }
        })
    }
    
    // cloneModel() {
    //     this.newModel = this.model.clone()
    //     this.scene.add(this.newModel)
    //     return this.newModel
    // }

    setAnimation()
    {
        this.animation = {}
        
        // Mixer
        this.animation.mixer = new THREE.AnimationMixer(this.model)
        
        // Actions
        this.animation.actions = {}
        
        this.animation.actions.idle = this.animation.mixer.clipAction(this.resource.animations[0])
        this.animation.actions.walking = this.animation.mixer.clipAction(this.resource.animations[2])
        this.animation.actions.running = this.animation.mixer.clipAction(this.resource.animations[1])
        
        this.animation.actions.current = this.animation.actions.idle
        this.animation.actions.current.play()

        // Play the action
        this.animation.play = (name) =>
        {
            const newAction = this.animation.actions[name]
            const oldAction = this.animation.actions.current

            newAction.reset()
            newAction.play()
            newAction.crossFadeFrom(oldAction, 1)

            this.animation.actions.current = newAction
        }

        // Debug
        if(this.debug.active)
        {
            const debugObject = {
                playIdle: () => { this.animation.play('idle') },
                playWalking: () => { this.animation.play('walking') },
                playRunning: () => { this.animation.play('running') }
            }
            this.debugFolder.add(debugObject, 'playIdle')
            this.debugFolder.add(debugObject, 'playWalking')
            this.debugFolder.add(debugObject, 'playRunning')
        }
    }

    update()
    {
        this.animation.mixer.update(this.time.delta * 0.001)
    }
}