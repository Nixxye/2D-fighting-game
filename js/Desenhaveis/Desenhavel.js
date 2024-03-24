import { GerenciadorGrafico } from "../Gerenciadores/GerenciadorGrafico.js"

export class Desenhavel{
    static gerGrafico;
    constructor({
        pos = [0, 0], 
        dir="", 
        id="", 
        tam = null,
        frames = {
            frameAtual: 0,
            max: 4,
            delay: 10,
            t: 0
        }        
    }
    ) {
        this.direcao = dir
        this.id = id
        this.posicao = pos
        this.andando = false
        this.frames = frames
        this.dano = 0
        this.velocidade = [0, 0]
        if (Desenhavel.gerGrafico && !tam) this.tamanho = Desenhavel.gerGrafico.getTamanho(this.id + this.direcao)
        else this.tamanho = tam
    }
    desenhar() {
        if (Desenhavel.gerGrafico) {
            this.frames = Desenhavel.gerGrafico.desenhar({
                id: this.id + this.direcao,
                posicao: this.posicao,
                frames: this.frames,
                tamanho: this.tamanho
            })
        }
    }
    executar() {
        this.desenhar({
            id: this.id,
            pos: this.posicao,
            frames: this.frames
        })
    }
    colidir(novaPosicao, dano = 0) {
        // Por enquanto nada por padrão
    }
}