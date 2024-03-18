import { GerenciadorEstados } from "./Gerenciadores/GerenciadorEstados.js"
import { GerenciadorGrafico } from "./Gerenciadores/GerenciadorGrafico.js"
import { Desenhavel } from "./Desenhaveis/Desenhavel.js"
import { Jogador } from "./Desenhaveis/Jogador.js"


const gerGrafico = new GerenciadorGrafico()
const jogador = new Jogador()

gerGrafico.carregarImagens().then(() => {
    Desenhavel.gerGrafico = gerGrafico
    const gerEstados = new GerenciadorEstados()
    setInterval(() => jogador.executar(), 20)
});