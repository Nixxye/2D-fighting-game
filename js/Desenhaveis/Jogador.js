import { Desenhavel } from "./Desenhavel.js"
import { ObservadorJogador } from "../Gerenciadores/GerenciadorInputs.js"

const VEL_MAX = 20;
const ACELERACAO = 2;

export class Jogador extends Desenhavel {
    constructor() {
        super({
            pos: [0, 0],
            dir: "Cima",
            id: "Jogador"
        })
        this.andando = false
        this.observador = new ObservadorJogador(this) 
        // Para poder retornar caso ocorra uma colisão -> Procurar por uma abordagem melhor
        this.posicaoAnterior = [0, 0]
    }
    mudarDirecao(direcao) {
        if (!direcao) return
        this.direcao = direcao
    }
    executar() {
        this.mover()
        this.desenhar()
    }
    mover() {
        if (!this.andando) {
            if (this.velocidade[0] != 0) {
                if (this.velocidade[0] > 0) {
                    this.velocidade[0] -= ACELERACAO / 2
                }
                else {
                    this.velocidade[0] += ACELERACAO / 2
                }                
            }
            if (this.velocidade[1] != 0) {
                if (this.velocidade[1] > 0) {
                    this.velocidade[1] -= ACELERACAO / 2
                }
                else {
                    this.velocidade[1] += ACELERACAO / 2
                }                
            }
        } 
        else {
            switch (this.direcao) {
                case "Cima":
                    if (this.velocidade[1] > -VEL_MAX) this.velocidade[1] -= ACELERACAO
                    break
                case "Baixo":
                    if (this.velocidade[1] < VEL_MAX) this.velocidade[1] += ACELERACAO
                    break
                case "Direita":
                    if (this.velocidade[0] < VEL_MAX) this.velocidade[0] += ACELERACAO
                    break
                case "Esquerda":
                    if (this.velocidade[0] > -VEL_MAX) this.velocidade[0] -= ACELERACAO
                    break
                default:
                    break
            }            
        }
        this.posicaoAnterior = this.posicao
        this.posicao[0] += this.velocidade[0]
        this.posicao[1] += this.velocidade[1]
    }
    colidir(novaPosicao = this.posicaoAnterior, dano = 0) {
        this.posicao = novaPosicao
        this.velocidade = [0, 0]
    }
}