import Experience from '../Experience.js'
import Environment from './Environment.js'
import Floor from './Floor.js'
import Stickman from './Stickman.js'

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Wait for resources
        this.resources.on('ready', () =>
        {
            // Setup
            // this.floor = new Floor()
            this.stickman = new Stickman()
            this.environment = new Environment()
            // this.set
        })
    }

    update()
    {
        if(this.stickman) {
            this.stickman.update()
        }
    }
}