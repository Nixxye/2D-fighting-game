import { Desenhavel } from "./Desenhavel.js"
import { Plataforma } from "./Plataforma.js"
import { Colisoes } from "./Colisoes.js"

export const TAMANHO_COLIDIVEIS = [50, 50]

export class Mapa extends Desenhavel {
    constructor() {
        super({
            pos: [0, 0],
            id: "Jogador"
        })
        this.plataformas = []
        this.colisoes = Colisoes
        this.criarPlataformas()
    }
    criarPlataformas() {
        this.colisoes.forEach((linha, i) => {
            linha.forEach((coluna, j) => {
                if (coluna === 1) {
                    this.plataformas.push(new Plataforma({
                        tamanho: TAMANHO_COLIDIVEIS,
                        posicao: [
                            TAMANHO_COLIDIVEIS[0] * j,
                            TAMANHO_COLIDIVEIS[1] * i
                        ] 
                    }))
                }
            })
        })
    }
    desenhar() {
        this.plataformas.forEach(
            plataforma => plataforma.desenhar()
            )
    }
}
