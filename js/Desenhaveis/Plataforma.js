import { Desenhavel } from "./Desenhavel.js"

export class Plataforma extends Desenhavel {
    constructor () {
        super({
            pos: [10, 700],
            tam: [1000, 60],
            id: "Plataforma"
        })
    }
    // desenhar() {
    //     if (Desenhavel.gerGrafico) {
    //         this.frames = Desenhavel.gerGrafico.desenhar({
    //             id: this.id + this.direcao,
    //             posicao: this.posicao,
    //             frames: this.frames,
    //             tamanho: this.tamanho
    //         })
    //     }
    // }
}