import { GerenciadorEstados } from "./Gerenciadores/GerenciadorEstados.js"
import { GerenciadorGrafico } from "./Gerenciadores/GerenciadorGrafico.js"
import { Desenhavel } from "./Desenhaveis/Desenhavel.js"

const gerGrafico = new GerenciadorGrafico()

gerGrafico.carregarImagens().then(() => {
    Desenhavel.gerGrafico = gerGrafico
    const gerEstados = new GerenciadorEstados()
});