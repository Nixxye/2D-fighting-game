import { Desenhavel } from "./Desenhavel.js"
import { ObservadorJogador } from "../Gerenciadores/GerenciadorInputs.js"

export class Jogador extends Desenhavel {
    constructor() {
        super({
            pos: [0, 0],
            dir: "Cima",
            id: "Jogador"
        })
        this.velocidade = 10
        this.andando = false
        this.observador = new ObservadorJogador(this) 
    }
    mudarDirecao(direcao) {
        if (!direcao) return
        this.direcao = direcao
    }
    executar() {
        this.mover()
        this.desenhar({
            id: this.id,
            pos: this.posicao,
            frames: this.frames
        })
    }
    mover() {
        if (!this.andando) return
        switch (this.direcao) {
            case "Cima":
                this.posicao[1] -= this.velocidade
                break
            case "Baixo":
                this.posicao[1] += this.velocidade
                break
            case "Direita":
                this.posicao[0] += this.velocidade
                break
            case "Esquerda":
                this.posicao[0] -= this.velocidade
                break
            default:
                break
        }
    }
}