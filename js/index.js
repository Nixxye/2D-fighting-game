import { GerenciadorEstados } from "./Gerenciadores/GerenciadorEstados.js"
import { Desenhavel } from "./Desenhaveis/Desenhavel.js"
import { Fase } from "./Estados/Fase.js"


const gerGrafico = new GerenciadorGrafico()

gerGrafico.carregarImagens().then(() => {
    Desenhavel.gerGrafico = gerGrafico
    const gerEstados = new GerenciadorEstados()
});