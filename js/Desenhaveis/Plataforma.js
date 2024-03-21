import { Desenhavel } from "./Desenhavel.js"

export class Plataforma extends Desenhavel {
    constructor () {
        super({
            pos: [10, 100],
            tam: [1000, 20],
            id: "Plataforma"
        })
    }
}