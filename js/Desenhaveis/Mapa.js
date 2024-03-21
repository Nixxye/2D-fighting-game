import { Desenhavel } from "./Desenhavel.js"
import { Plataforma } from "./Desenhaveis/Plataforma.js"

export class Mapa extends Desenhavel {
    constructor() {
        super({
            pos: [0, 0],
            id: "Jogador"
        })
        this.plataformas = []
        this.plataformas.push(new Plataforma())
    }
}
