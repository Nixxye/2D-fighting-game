import { GerenciadorEstados } from "./Gerenciadores/GerenciadorEstados.js"
import { GerenciadorGrafico } from "./Gerenciadores/GerenciadorGrafico.js"
import { Desenhavel } from "./Desenhaveis/Desenhavel.js"
import { Jogador } from "./Desenhaveis/Jogador.js"
import { ObservadorJogador } from "./Gerenciadores/GerenciadorInputs.js"


const gerGrafico = new GerenciadorGrafico()
const jogador = new Jogador()
const observador = new ObservadorJogador(jogador)

gerGrafico.carregarImagens().then(() => {
    Desenhavel.gerGrafico = gerGrafico
    const gerEstados = new GerenciadorEstados()
    setInterval(() => {
        gerGrafico.apagar()
        jogador.executar()
    }, 20)
});