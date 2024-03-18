// Subject - Observer Design Pattern
// Singleton Design Pattern

export class GerenciadorInputs {
    constructor() {
        if (GerenciadorInputs.instancia) {
            GerenciadorInputs.instancia = this
            return GerenciadorInputs.instancia
        }
        
        this.observadores = []
        
        this.teclasPressionadas = {
            w: false,
            a: false,
            s: false,
            d: false,
            espaco: false
        }
        this.ultimaTecla = null;
        
        addEventListener("keydown", (tecla) => this.teclaPressionada(tecla));
        addEventListener("keyup", (tecla) => this.teclaSolta(tecla));
        
        return GerenciadorInputs.instancia
    }
    teclaSolta(tecla) {
        switch (tecla.key) {
            case 'w':
                this.teclasPressionadas.w = false;
                break;
            case 'a':
                this.teclasPressionadas.a = false;
                break;
            case 's':
                this.teclasPressionadas.s = false;
                break;
            case 'd':
                this.teclasPressionadas.d = false;
                break;
            case ' ':
                this.teclasPressionadas.espaco = false;
                break;
            default:
                break;
        }
        this.notificar()
    }
    teclaPressionada(tecla) {
        switch (tecla.key) {
            case 'w':
                this.teclasPressionadas.w = true;
                this.ultimaTecla = 'w';
                break;
            case 'a':
                this.teclasPressionadas.a = true;
                this.ultimaTecla = 'a';
                break;
            case 's':
                this.teclasPressionadas.s = true;
                this.ultimaTecla = 's';
                break;
            case 'd':
                this.teclasPressionadas.d = true;
                this.ultimaTecla = 'd';
                break;
            case ' ':
                this.teclasPressionadas.espaco = true;
                this.ultimaTecla = 'espaco';
                break;
            default:
                break;
        }
        this.notificar()
    }
    adicionarObservador(observador) {
        if (!observador || this.observadores.includes(observador)) return
        
        this.observadores.push(observador)
    }
    removerObservador(observador) {
        if (!this.observadores.includes(observador)) return

        this.observadores = this.observadores.splice(indexOf(observador), 1)
    }
    notificar() {
        this.observadores.forEach(
            observador => observador.atualizar()
        )
    }
}

class Observador {
    static gerInputs;
    constructor() {
        Observador.gerInputs.adicionarObservador(this)
    }
    atualizar() {

    }
}

Observador.gerInputs = new GerenciadorInputs()

export class ObservadorJogador extends Observador {
    constructor(jogador) {
        super()
        this.mapaTeclas = new Map()
        this.mapaTeclas.set('w', "Cima")
        this.mapaTeclas.set('a', "Esquerda")
        this.mapaTeclas.set('s', "Baixo")
        this.mapaTeclas.set('d', "Direita")

        this.jogador = jogador;
    }
    atualizar() {
        if (this.mapaTeclas.has(Observador.gerInputs.ultimaTecla)) {
            this.jogador.mudarDirecao(this.mapaTeclas.get(Observador.gerInputs.ultimaTecla))
            // Se a tecla ainda estiver pressionada, o jogador se move:
            this.jogador.andando = Observador.gerInputs.teclasPressionadas[Observador.gerInputs.ultimaTecla]
        }
    }
}
