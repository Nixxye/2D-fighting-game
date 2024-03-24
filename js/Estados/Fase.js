import { Jogador } from "../Desenhaveis/Jogador.js"
import { Mapa } from "../Desenhaveis/Mapa.js"
import { GerenciadorColisoes } from "../Gerenciadores/GerenciadorColisoes.js"

export class Fase{
  constructor() {
    this.gerColisoes = new GerenciadorColisoes()

    this.jogadores = []
    this.jogadores.push(new Jogador())

    this.mapa = new Mapa()
  }
  executar() {
    this.jogadores.forEach(jogador => jogador.executar())
    this.mapa.executar()
    this.gerColisoes.colisaoSimples(
      this.jogadores,
      this.mapa.plataformas
    )
  }
}
