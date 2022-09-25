import './style.css'
import * as THREE from 'three'

import Experience from './Experience/Experience.js'

import ThreeJSOverlayView from '@ubilabs/threejs-overlay-view';
import {getMapsApiOptions, loadMapsApi} from './api/loadMapsApi';
// const experience = new Experience(document.querySelector('canvas.webgl'))

let devDataArray = [
    {
        "id": 2277,
        "point": [
            37.7991166537222,
            -122.469282690181,
            47.7165412621928
        ],
        "identifier": "Alice",
        "timestamp": 67819,
        "floor_label": null,
        "hor_accuracy": 8.02313,
        "ver_accuracy": 5.468533,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2278,
        "point": [
            37.7991166537222,
            -122.469282690181,
            47.7165412621928
        ],
        "identifier": "Alice",
        "timestamp": 67819,
        "floor_label": null,
        "hor_accuracy": 8.02313,
        "ver_accuracy": 5.468533,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2279,
        "point": [
            37.7991166537222,
            -122.469282690181,
            47.7165412621928
        ],
        "identifier": "Alice",
        "timestamp": 67819,
        "floor_label": null,
        "hor_accuracy": 8.02313,
        "ver_accuracy": 5.468533,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2280,
        "point": [
            37.7991166537222,
            -122.469282690181,
            47.7165412621928
        ],
        "identifier": "Alice",
        "timestamp": 67819,
        "floor_label": null,
        "hor_accuracy": 8.02313,
        "ver_accuracy": 5.468533,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2281,
        "point": [
            37.7991166537222,
            -122.469282690181,
            47.7165412621928
        ],
        "identifier": "Alice",
        "timestamp": 67819,
        "floor_label": null,
        "hor_accuracy": 8.02313,
        "ver_accuracy": 5.468533,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2282,
        "point": [
            37.7991166537222,
            -122.469282690181,
            47.7165412621928
        ],
        "identifier": "Alice",
        "timestamp": 67819,
        "floor_label": null,
        "hor_accuracy": 8.02313,
        "ver_accuracy": 5.468533,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2283,
        "point": [
            37.7991166537222,
            -122.469282690181,
            47.7165412621928
        ],
        "identifier": "Alice",
        "timestamp": 67819,
        "floor_label": null,
        "hor_accuracy": 8.02313,
        "ver_accuracy": 5.468533,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2284,
        "point": [
            37.7991166537222,
            -122.469282690181,
            47.7165412621928
        ],
        "identifier": "Alice",
        "timestamp": 67819,
        "floor_label": null,
        "hor_accuracy": 8.02313,
        "ver_accuracy": 5.468533,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2285,
        "point": [
            37.7991166537222,
            -122.469282690181,
            47.7165412621928
        ],
        "identifier": "Alice",
        "timestamp": 67819,
        "floor_label": null,
        "hor_accuracy": 8.02313,
        "ver_accuracy": 5.468533,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2286,
        "point": [
            37.7991166537222,
            -122.469282690181,
            47.7165412621928
        ],
        "identifier": "Alice",
        "timestamp": 67819,
        "floor_label": null,
        "hor_accuracy": 8.02313,
        "ver_accuracy": 5.468533,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2287,
        "point": [
            37.8031521235847,
            -122.468698177516,
            22.1244491011654
        ],
        "identifier": "Alice",
        "timestamp": 190293,
        "floor_label": null,
        "hor_accuracy": 12.39203,
        "ver_accuracy": 5.320204,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2288,
        "point": [
            37.8031521235847,
            -122.468698177516,
            22.1244491011654
        ],
        "identifier": "Alice",
        "timestamp": 190293,
        "floor_label": null,
        "hor_accuracy": 12.39203,
        "ver_accuracy": 5.320204,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2289,
        "point": [
            37.8031521235847,
            -122.468698177516,
            22.1244491011654
        ],
        "identifier": "Alice",
        "timestamp": 190293,
        "floor_label": null,
        "hor_accuracy": 12.39203,
        "ver_accuracy": 5.320204,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2290,
        "point": [
            37.8031521235847,
            -122.468698177516,
            22.1244491011654
        ],
        "identifier": "Alice",
        "timestamp": 190293,
        "floor_label": null,
        "hor_accuracy": 12.39203,
        "ver_accuracy": 5.320204,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2291,
        "point": [
            37.8031521235847,
            -122.468698177516,
            22.1244491011654
        ],
        "identifier": "Alice",
        "timestamp": 190293,
        "floor_label": null,
        "hor_accuracy": 12.39203,
        "ver_accuracy": 5.320204,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2292,
        "point": [
            37.8031521235847,
            -122.468698177516,
            22.1244491011654
        ],
        "identifier": "Alice",
        "timestamp": 190293,
        "floor_label": null,
        "hor_accuracy": 12.39203,
        "ver_accuracy": 5.320204,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2293,
        "point": [
            37.8031521235847,
            -122.468698177516,
            22.1244491011654
        ],
        "identifier": "Alice",
        "timestamp": 190293,
        "floor_label": null,
        "hor_accuracy": 12.39203,
        "ver_accuracy": 5.320204,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2294,
        "point": [
            37.8031521235847,
            -122.468698177516,
            22.1244491011654
        ],
        "identifier": "Alice",
        "timestamp": 190293,
        "floor_label": null,
        "hor_accuracy": 12.39203,
        "ver_accuracy": 5.320204,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2295,
        "point": [
            37.8031521235847,
            -122.468698177516,
            22.1244491011654
        ],
        "identifier": "Alice",
        "timestamp": 190293,
        "floor_label": null,
        "hor_accuracy": 12.39203,
        "ver_accuracy": 5.320204,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2296,
        "point": [
            37.8031521235847,
            -122.468698177516,
            22.1244491011654
        ],
        "identifier": "Alice",
        "timestamp": 190293,
        "floor_label": null,
        "hor_accuracy": 12.39203,
        "ver_accuracy": 5.320204,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2297,
        "point": [
            37.8051561851257,
            -122.473247762346,
            54.2127616768266
        ],
        "identifier": "Alice",
        "timestamp": 430929,
        "floor_label": null,
        "hor_accuracy": 13.938123,
        "ver_accuracy": 4.3402304,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2298,
        "point": [
            37.8051561851257,
            -122.473247762346,
            54.2127616768266
        ],
        "identifier": "Alice",
        "timestamp": 430929,
        "floor_label": null,
        "hor_accuracy": 13.938123,
        "ver_accuracy": 4.3402304,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2299,
        "point": [
            37.8051561851257,
            -122.473247762346,
            54.2127616768266
        ],
        "identifier": "Alice",
        "timestamp": 430929,
        "floor_label": null,
        "hor_accuracy": 13.938123,
        "ver_accuracy": 4.3402304,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2300,
        "point": [
            37.8051561851257,
            -122.473247762346,
            54.2127616768266
        ],
        "identifier": "Alice",
        "timestamp": 430929,
        "floor_label": null,
        "hor_accuracy": 13.938123,
        "ver_accuracy": 4.3402304,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2301,
        "point": [
            37.8051561851257,
            -122.473247762346,
            54.2127616768266
        ],
        "identifier": "Alice",
        "timestamp": 430929,
        "floor_label": null,
        "hor_accuracy": 13.938123,
        "ver_accuracy": 4.3402304,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2302,
        "point": [
            37.8051561851257,
            -122.473247762346,
            54.2127616768266
        ],
        "identifier": "Alice",
        "timestamp": 430929,
        "floor_label": null,
        "hor_accuracy": 13.938123,
        "ver_accuracy": 4.3402304,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2303,
        "point": [
            37.8051561851257,
            -122.473247762346,
            54.2127616768266
        ],
        "identifier": "Alice",
        "timestamp": 430929,
        "floor_label": null,
        "hor_accuracy": 13.938123,
        "ver_accuracy": 4.3402304,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2304,
        "point": [
            37.8051561851257,
            -122.473247762346,
            54.2127616768266
        ],
        "identifier": "Alice",
        "timestamp": 430929,
        "floor_label": null,
        "hor_accuracy": 13.938123,
        "ver_accuracy": 4.3402304,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2305,
        "point": [
            37.8051561851257,
            -122.473247762346,
            54.2127616768266
        ],
        "identifier": "Alice",
        "timestamp": 430929,
        "floor_label": null,
        "hor_accuracy": 13.938123,
        "ver_accuracy": 4.3402304,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2306,
        "point": [
            37.8051561851257,
            -122.473247762346,
            54.2127616768266
        ],
        "identifier": "Alice",
        "timestamp": 430929,
        "floor_label": null,
        "hor_accuracy": 13.938123,
        "ver_accuracy": 4.3402304,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2307,
        "point": [
            37.8078454737861,
            -122.475970351007,
            53.444486095161
        ],
        "identifier": "Alice",
        "timestamp": 949201,
        "floor_label": null,
        "hor_accuracy": 4.3910132,
        "ver_accuracy": 6.5939923,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2308,
        "point": [
            37.8078454737861,
            -122.475970351007,
            53.444486095161
        ],
        "identifier": "Alice",
        "timestamp": 949201,
        "floor_label": null,
        "hor_accuracy": 4.3910132,
        "ver_accuracy": 6.5939923,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2309,
        "point": [
            37.8078454737861,
            -122.475970351007,
            53.444486095161
        ],
        "identifier": "Alice",
        "timestamp": 949201,
        "floor_label": null,
        "hor_accuracy": 4.3910132,
        "ver_accuracy": 6.5939923,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2310,
        "point": [
            37.8078454737861,
            -122.475970351007,
            53.444486095161
        ],
        "identifier": "Alice",
        "timestamp": 949201,
        "floor_label": null,
        "hor_accuracy": 4.3910132,
        "ver_accuracy": 6.5939923,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2311,
        "point": [
            37.8078454737861,
            -122.475970351007,
            53.444486095161
        ],
        "identifier": "Alice",
        "timestamp": 949201,
        "floor_label": null,
        "hor_accuracy": 4.3910132,
        "ver_accuracy": 6.5939923,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2312,
        "point": [
            37.8078454737861,
            -122.475970351007,
            53.444486095161
        ],
        "identifier": "Alice",
        "timestamp": 949201,
        "floor_label": null,
        "hor_accuracy": 4.3910132,
        "ver_accuracy": 6.5939923,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2313,
        "point": [
            37.8078454737861,
            -122.475970351007,
            53.444486095161
        ],
        "identifier": "Alice",
        "timestamp": 949201,
        "floor_label": null,
        "hor_accuracy": 4.3910132,
        "ver_accuracy": 6.5939923,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2314,
        "point": [
            37.8078454737861,
            -122.475970351007,
            53.444486095161
        ],
        "identifier": "Alice",
        "timestamp": 949201,
        "floor_label": null,
        "hor_accuracy": 4.3910132,
        "ver_accuracy": 6.5939923,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2315,
        "point": [
            37.8078454737861,
            -122.475970351007,
            53.444486095161
        ],
        "identifier": "Alice",
        "timestamp": 949201,
        "floor_label": null,
        "hor_accuracy": 4.3910132,
        "ver_accuracy": 6.5939923,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2316,
        "point": [
            37.8078454737861,
            -122.475970351007,
            53.444486095161
        ],
        "identifier": "Alice",
        "timestamp": 949201,
        "floor_label": null,
        "hor_accuracy": 4.3910132,
        "ver_accuracy": 6.5939923,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2317,
        "point": [
            37.8101503463572,
            -122.477231249187,
            52.224182349167
        ],
        "identifier": "Alice",
        "timestamp": 1549320,
        "floor_label": null,
        "hor_accuracy": 4.5059194,
        "ver_accuracy": 2.349014,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2318,
        "point": [
            37.8101503463572,
            -122.477231249187,
            52.224182349167
        ],
        "identifier": "Alice",
        "timestamp": 1549320,
        "floor_label": null,
        "hor_accuracy": 4.5059194,
        "ver_accuracy": 2.349014,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2319,
        "point": [
            37.8101503463572,
            -122.477231249187,
            52.224182349167
        ],
        "identifier": "Alice",
        "timestamp": 1549320,
        "floor_label": null,
        "hor_accuracy": 4.5059194,
        "ver_accuracy": 2.349014,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2320,
        "point": [
            37.8101503463572,
            -122.477231249187,
            52.224182349167
        ],
        "identifier": "Alice",
        "timestamp": 1549320,
        "floor_label": null,
        "hor_accuracy": 4.5059194,
        "ver_accuracy": 2.349014,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2321,
        "point": [
            37.8101503463572,
            -122.477231249187,
            52.224182349167
        ],
        "identifier": "Alice",
        "timestamp": 1549320,
        "floor_label": null,
        "hor_accuracy": 4.5059194,
        "ver_accuracy": 2.349014,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2322,
        "point": [
            37.8101503463572,
            -122.477231249187,
            52.224182349167
        ],
        "identifier": "Alice",
        "timestamp": 1549320,
        "floor_label": null,
        "hor_accuracy": 4.5059194,
        "ver_accuracy": 2.349014,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2323,
        "point": [
            37.8101503463572,
            -122.477231249187,
            52.224182349167
        ],
        "identifier": "Alice",
        "timestamp": 1549320,
        "floor_label": null,
        "hor_accuracy": 4.5059194,
        "ver_accuracy": 2.349014,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2324,
        "point": [
            37.8101503463572,
            -122.477231249187,
            52.224182349167
        ],
        "identifier": "Alice",
        "timestamp": 1549320,
        "floor_label": null,
        "hor_accuracy": 4.5059194,
        "ver_accuracy": 2.349014,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2325,
        "point": [
            37.8101503463572,
            -122.477231249187,
            52.224182349167
        ],
        "identifier": "Alice",
        "timestamp": 1549320,
        "floor_label": null,
        "hor_accuracy": 4.5059194,
        "ver_accuracy": 2.349014,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2326,
        "point": [
            37.8101503463572,
            -122.477231249187,
            52.224182349167
        ],
        "identifier": "Alice",
        "timestamp": 1549320,
        "floor_label": null,
        "hor_accuracy": 4.5059194,
        "ver_accuracy": 2.349014,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2327,
        "point": [
            37.8154983944002,
            -122.477614754636,
            51.8312942089217
        ],
        "identifier": "Alice",
        "timestamp": 2632719,
        "floor_label": null,
        "hor_accuracy": 6.192402,
        "ver_accuracy": 4.392301,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2328,
        "point": [
            37.8154983944002,
            -122.477614754636,
            51.8312942089217
        ],
        "identifier": "Alice",
        "timestamp": 2632719,
        "floor_label": null,
        "hor_accuracy": 6.192402,
        "ver_accuracy": 4.392301,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2329,
        "point": [
            37.8154983944002,
            -122.477614754636,
            51.8312942089217
        ],
        "identifier": "Alice",
        "timestamp": 2632719,
        "floor_label": null,
        "hor_accuracy": 6.192402,
        "ver_accuracy": 4.392301,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2330,
        "point": [
            37.8154983944002,
            -122.477614754636,
            51.8312942089217
        ],
        "identifier": "Alice",
        "timestamp": 2632719,
        "floor_label": null,
        "hor_accuracy": 6.192402,
        "ver_accuracy": 4.392301,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2331,
        "point": [
            37.8154983944002,
            -122.477614754636,
            51.8312942089217
        ],
        "identifier": "Alice",
        "timestamp": 2632719,
        "floor_label": null,
        "hor_accuracy": 6.192402,
        "ver_accuracy": 4.392301,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2332,
        "point": [
            37.8154983944002,
            -122.477614754636,
            51.8312942089217
        ],
        "identifier": "Alice",
        "timestamp": 2632719,
        "floor_label": null,
        "hor_accuracy": 6.192402,
        "ver_accuracy": 4.392301,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2333,
        "point": [
            37.8154983944002,
            -122.477614754636,
            51.8312942089217
        ],
        "identifier": "Alice",
        "timestamp": 2632719,
        "floor_label": null,
        "hor_accuracy": 6.192402,
        "ver_accuracy": 4.392301,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2334,
        "point": [
            37.8154983944002,
            -122.477614754636,
            51.8312942089217
        ],
        "identifier": "Alice",
        "timestamp": 2632719,
        "floor_label": null,
        "hor_accuracy": 6.192402,
        "ver_accuracy": 4.392301,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2335,
        "point": [
            37.8154983944002,
            -122.477614754636,
            51.8312942089217
        ],
        "identifier": "Alice",
        "timestamp": 2632719,
        "floor_label": null,
        "hor_accuracy": 6.192402,
        "ver_accuracy": 4.392301,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2336,
        "point": [
            37.8154983944002,
            -122.477614754636,
            51.8312942089217
        ],
        "identifier": "Alice",
        "timestamp": 2632719,
        "floor_label": null,
        "hor_accuracy": 6.192402,
        "ver_accuracy": 4.392301,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2337,
        "point": [
            37.8271745300725,
            -122.47955872939,
            48.3705155223618
        ],
        "identifier": "Alice",
        "timestamp": 3728812,
        "floor_label": null,
        "hor_accuracy": 8.1394201,
        "ver_accuracy": 4.29401,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2338,
        "point": [
            37.8271745300725,
            -122.47955872939,
            48.3705155223618
        ],
        "identifier": "Alice",
        "timestamp": 3728812,
        "floor_label": null,
        "hor_accuracy": 8.1394201,
        "ver_accuracy": 4.29401,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2339,
        "point": [
            37.8271745300725,
            -122.47955872939,
            48.3705155223618
        ],
        "identifier": "Alice",
        "timestamp": 3728812,
        "floor_label": null,
        "hor_accuracy": 8.1394201,
        "ver_accuracy": 4.29401,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2340,
        "point": [
            37.8271745300725,
            -122.47955872939,
            48.3705155223618
        ],
        "identifier": "Alice",
        "timestamp": 3728812,
        "floor_label": null,
        "hor_accuracy": 8.1394201,
        "ver_accuracy": 4.29401,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2341,
        "point": [
            37.8271745300725,
            -122.47955872939,
            48.3705155223618
        ],
        "identifier": "Alice",
        "timestamp": 3728812,
        "floor_label": null,
        "hor_accuracy": 8.1394201,
        "ver_accuracy": 4.29401,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2342,
        "point": [
            37.8271745300725,
            -122.47955872939,
            48.3705155223618
        ],
        "identifier": "Alice",
        "timestamp": 3728812,
        "floor_label": null,
        "hor_accuracy": 8.1394201,
        "ver_accuracy": 4.29401,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2343,
        "point": [
            37.8271745300725,
            -122.47955872939,
            48.3705155223618
        ],
        "identifier": "Alice",
        "timestamp": 3728812,
        "floor_label": null,
        "hor_accuracy": 8.1394201,
        "ver_accuracy": 4.29401,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2344,
        "point": [
            37.8271745300725,
            -122.47955872939,
            48.3705155223618
        ],
        "identifier": "Alice",
        "timestamp": 3728812,
        "floor_label": null,
        "hor_accuracy": 8.1394201,
        "ver_accuracy": 4.29401,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2345,
        "point": [
            37.8271745300725,
            -122.47955872939,
            48.3705155223618
        ],
        "identifier": "Alice",
        "timestamp": 3728812,
        "floor_label": null,
        "hor_accuracy": 8.1394201,
        "ver_accuracy": 4.29401,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2346,
        "point": [
            37.8271745300725,
            -122.47955872939,
            48.3705155223618
        ],
        "identifier": "Alice",
        "timestamp": 3728812,
        "floor_label": null,
        "hor_accuracy": 8.1394201,
        "ver_accuracy": 4.29401,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2347,
        "point": [
            37.8301694451371,
            -122.479332303097,
            46.3491052115743
        ],
        "identifier": "Alice",
        "timestamp": 9328912,
        "floor_label": null,
        "hor_accuracy": 2.391042,
        "ver_accuracy": 4.432002,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2348,
        "point": [
            37.8301694451371,
            -122.479332303097,
            46.3491052115743
        ],
        "identifier": "Alice",
        "timestamp": 9328912,
        "floor_label": null,
        "hor_accuracy": 2.391042,
        "ver_accuracy": 4.432002,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2349,
        "point": [
            37.8301694451371,
            -122.479332303097,
            46.3491052115743
        ],
        "identifier": "Alice",
        "timestamp": 9328912,
        "floor_label": null,
        "hor_accuracy": 2.391042,
        "ver_accuracy": 4.432002,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2350,
        "point": [
            37.8301694451371,
            -122.479332303097,
            46.3491052115743
        ],
        "identifier": "Alice",
        "timestamp": 9328912,
        "floor_label": null,
        "hor_accuracy": 2.391042,
        "ver_accuracy": 4.432002,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2351,
        "point": [
            37.8301694451371,
            -122.479332303097,
            46.3491052115743
        ],
        "identifier": "Alice",
        "timestamp": 9328912,
        "floor_label": null,
        "hor_accuracy": 2.391042,
        "ver_accuracy": 4.432002,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2352,
        "point": [
            37.8301694451371,
            -122.479332303097,
            46.3491052115743
        ],
        "identifier": "Alice",
        "timestamp": 9328912,
        "floor_label": null,
        "hor_accuracy": 2.391042,
        "ver_accuracy": 4.432002,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2353,
        "point": [
            37.8301694451371,
            -122.479332303097,
            46.3491052115743
        ],
        "identifier": "Alice",
        "timestamp": 9328912,
        "floor_label": null,
        "hor_accuracy": 2.391042,
        "ver_accuracy": 4.432002,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2354,
        "point": [
            37.8301694451371,
            -122.479332303097,
            46.3491052115743
        ],
        "identifier": "Alice",
        "timestamp": 9328912,
        "floor_label": null,
        "hor_accuracy": 2.391042,
        "ver_accuracy": 4.432002,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2355,
        "point": [
            37.8301694451371,
            -122.479332303097,
            46.3491052115743
        ],
        "identifier": "Alice",
        "timestamp": 9328912,
        "floor_label": null,
        "hor_accuracy": 2.391042,
        "ver_accuracy": 4.432002,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    },
    {
        "id": 2356,
        "point": [
            37.8301694451371,
            -122.479332303097,
            46.3491052115743
        ],
        "identifier": "Alice",
        "timestamp": 9328912,
        "floor_label": null,
        "hor_accuracy": 2.391042,
        "ver_accuracy": 4.432002,
        "cil_accuracy": 0.6827,
        "activity": "driving",
        "dev": "prod3"
    }
]
  
let devAltitude = devDataArray[0].point[2]

let VIEW_PARAMS = {
    center: {
        lat: devDataArray[0].point[0],
        lng: devDataArray[0].point[1]
    },
    tilt: 67.5,
    heading: 60,
    zoom: 18
};

function handleInputChange(e) {
    let target = document.getElementById("timestampSlider")

    let stickman = window.experience.world.stickman
  
    let val = target.value
    
    let magicNum = (devDataArray[devDataArray.length - 1].timestamp - devDataArray[0].timestamp) / 100
    let timestamp = val * magicNum

    for (let i = 0; i < devDataArray.length; i++){
        if (devDataArray[i].timestamp < timestamp && timestamp < devDataArray[parseInt(i)+1].timestamp) {
            stickman.index = i;
            break
        }
    }
  
    stickman.timestamp = timestamp | 0
    stickman.magicNum = magicNum
    stickman.updateOnce()
  }
  
function playReplay() {
  let stickman = window.experience.world.stickman
  clearInterval(stickman.intervalId)
  stickman.intervalId = setInterval(stickman.animationTimestamp, stickman.magicNum)
}

function pauseReplay() {
  let stickman = window.experience.world.stickman
  clearInterval(stickman.intervalId)
}

function timeSpeedOne() {
  let prev_time = document.getElementsByClassName("speed_active")
  prev_time[0].classList.remove("speed_active")
  let time_one =  document.getElementById("speed_one")
  time_one.classList.add("speed_active")

  let stickman = window.experience.world.stickman
  stickman.magicNum = (devDataArray[devDataArray.length - 1].timestamp - devDataArray[0].timestamp) / 100
  clearInterval(stickman.intervalId)
  stickman.intervalId = setInterval(stickman.animationTimestamp, stickman.magicNum)
}

function timeSpeedTwo() {
    let prev_time = document.getElementsByClassName("speed_active")
    prev_time[0].classList.remove("speed_active")
    let time_two =  document.getElementById("speed_two")
    time_two.classList.add("speed_active")

    let stickman = window.experience.world.stickman
    stickman.magicNum = stickman.magicNum / 2
    clearInterval(stickman.intervalId)
    stickman.intervalId = setInterval(stickman.animationTimestamp, stickman.magicNum)
}

function timeSpeedThree() {
  let prev_time = document.getElementsByClassName("speed_active")
  prev_time[0].classList.remove("speed_active")
  let time_three =  document.getElementById("speed_three")
  time_three.classList.add("speed_active")

  let stickman = window.experience.world.stickman
  stickman.magicNum = stickman.magicNum / 3
  clearInterval(stickman.intervalId)
  stickman.intervalId = setInterval(stickman.animationTimestamp, stickman.magicNum)
}

function timeSpeedFive() {
  let prev_time = document.getElementsByClassName("speed_active")
  prev_time[0].classList.remove("speed_active")
  let time_five =  document.getElementById("speed_five")
  time_five.classList.add("speed_active")

  let stickman = window.experience.world.stickman
  stickman.magicNum = stickman.magicNum / 5
  clearInterval(stickman.intervalId)
  stickman.intervalId = setInterval(stickman.animationTimestamp, stickman.magicNum)
}

function timeSpeedTen() {
  let prev_time = document.getElementsByClassName("speed_active")
  prev_time[0].classList.remove("speed_active")
  let time_ten =  document.getElementById("speed_ten")
  time_ten.classList.add("speed_active")

  let stickman = window.experience.world.stickman
  stickman.magicNum = stickman.magicNum / 10
  clearInterval(stickman.intervalId)
  stickman.intervalId = setInterval(stickman.animationTimestamp, stickman.magicNum)
}


async function main() {
    const map = await initMap();

    const overlay = new ThreeJSOverlayView({
        ...VIEW_PARAMS.center
    });
    
    overlay.setMap(map);

    const scene = overlay.getScene();
    const experience = new Experience({scene: scene, overlay: overlay, viewParams: VIEW_PARAMS, devDataArray: devDataArray, devAltitude: devAltitude})
    // const cube = new Mesh(
    //   new BoxGeometry(20, 20, 20),
    //   new MeshStandardMaterial({color: 0xff0000})
    // );
    // const cube = new THREE.Mesh(
    //   new THREE.BoxGeometry(20, 20, 20),
    //   new THREE.MeshStandardMaterial({color: 0x0000ff})
    // );
    // scene.add(cube);
    // let cylinderLocation = {...VIEW_PARAMS.center, altitude: devAltitude}
    // overlay.latLngAltToVector3(cylinderLocation, experience.cylinder.mesh.position)
    // let innerSphereLocation = {...VIEW_PARAMS.center, altitude: devAltitude}
    // overlay.latLngAltToVector3(innerSphereLocation, experience.spheres.inner.mesh.position)
    // let outerSphereLocation = {...VIEW_PARAMS.center, altitude: devAltitude}
    // overlay.latLngAltToVector3(outerSphereLocation, experience.spheres.outer.mesh.position)
    // const cubeLocation2 = {...VIEW_PARAMS2.center, altitude: 100};
    // overlay.latLngAltToVector3(cubeLocation2, cube.position);

    // scene.add(cylinder.mesh);
    // scene.add(cube2);
    overlay.update = () => {
        overlay.requestRedraw()
    }
}

async function initMap() {
    const {mapId} = getMapsApiOptions();
    await loadMapsApi();

    let rangeInput = document.getElementById('timestampSlider')
    let playButton = document.getElementById('play')
    let pauseButton = document.getElementById('pause')
    let speedOne = document.getElementById('speed_one')
    let speedTwo = document.getElementById('speed_two')
    let speedThree = document.getElementById('speed_three')
    let speedFive = document.getElementById('speed_five')
    let speedTen = document.getElementById('speed_ten')

  
    rangeInput.addEventListener('input', handleInputChange)
    playButton.addEventListener('click', playReplay)
    pauseButton.addEventListener('click', pauseReplay)
    speedOne.addEventListener('click', timeSpeedOne)
    speedTwo.addEventListener('click', timeSpeedTwo)
    speedThree.addEventListener('click', timeSpeedThree)
    speedFive.addEventListener('click', timeSpeedFive)
    speedTen.addEventListener('click', timeSpeedTen)



    return new google.maps.Map(document.querySelector('#map'), {
        mapId: mapId,
        disableDefaultUI: true,
        backgroundColor: 'transparent',
        gestureHandling: 'greedy',
        ...VIEW_PARAMS
    });
}

main().catch(err => {
    console.error('uncaught error in main: ', err)
})
