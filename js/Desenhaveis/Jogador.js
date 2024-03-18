import { Desenhavel } from "./Desenhavel.js"

export class Jogador extends Desenhavel {
    constructor() {
        super({
            pos: [0, 0],
            dir: "Cima",
            id: "Jogador"
        })
    }
}