import { Desenhavel } from "./Desenhavel.js"

export class Plataforma extends Desenhavel {
    constructor () {
        super({
            pos: [10, 700],
            tam: [1000, 60],
            id: "Plataforma"
        })
    }
}