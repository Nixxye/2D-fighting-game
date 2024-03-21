import { GerenciadorGrafico } from "./Gerenciadores/GerenciadorGrafico.js"
import { Desenhavel } from "./Desenhaveis/Desenhavel.js"
import { Jogador } from "./Desenhaveis/Jogador.js"
import { ObservadorJogador } from "./Gerenciadores/GerenciadorInputs.js"
import { Mapa } from "./Desenhaveis/Mapa.js"


export class Fase{
  constructor() {
    this.jogadores = []
    this.jogadores.push(new Jogador())

    this.mapa = new Mapa()
    setInterval(() => {
      this.jogadores.forEach(jogador => jogador.executar())
      this.mapa.executar()
    }, 20)
  }
}
