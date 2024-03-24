const KNOCKBACK = 100;

function colisaoRetangular(r1 = {
    posicao,
    tamanho
},
r2 = {
    posicao, 
    tamanho
}) {
    return r1.posicao[0] + r1.tamanho[0] >= r2.posicao[0] &&
    r1.posicao[0] <= r2.posicao[0] + r2.tamanho[0] &&
    r1.posicao[1] + r1.tamanho[1] >= r2.posicao[1] &&
    r1.posicao[1] <= r2.posicao[1] + r2.tamanho[1] 
}
function posicaoDisponivel(colisoes, tamanhoColidivel, {posicao, tamanho}) {
    // Tomar 5 pontos para checar a colisão
   return !(
        // Norte
        colisoes[Math.round((posicao[0] + tamanho[0] / 2)/tamanhoColidivel[0]), Math.floor((posicao[1])/tamanhoColidivel[1])] || 
        // Sul
        colisoes[Math.round((posicao[0] + tamanho[0] / 2)/tamanhoColidivel[0]), Math.ceil((posicao[1] + tamanho[1])/tamanhoColidivel[1])]  ||
        // Oeste
        colisoes[Math.floor((posicao[0])/tamanhoColidivel[0]), Math.round((posicao[1] + tamanho[1] / 2)/tamanhoColidivel[1])] || 
        // Leste
        colisoes[Math.ceil((posicao[0] + tamanho[0])/tamanhoColidivel[0]), Math.round((posicao[1] + tamanho[1] / 2)/tamanhoColidivel[1])] ||
        // Centro
        colisoes[Math.round((posicao[0] + tamanho[0] / 2)/tamanhoColidivel[0]), Math.round((posicao[1] + tamanho[1] / 2)/tamanhoColidivel[1])]
   )
}
function calcularPosicao(r1 = {
    posicao,
    tamanho
},
r2 = {
    posicao,
    tamanho
},
knockback = 0
) {
}
export class GerenciadorColisoes {
    constructor() {

    }
    colisaoMapa(colisoes, tamanho, personagens = []) {
        personagens.forEach(personagem => {
            if (!posicaoDisponivel(colisoes, tamanho, personagem)) {
                console.log("No")
                personagem.colidir()
            }  
        })
    }
    colisaoSimples(lista1, lista2) {
        lista1.forEach(elemento1 => {
            lista2.forEach(elemento2 => {
                if (colisaoRetangular(elemento1, elemento2)) {
                    // Ideia: A colisão só será tratada por um elemento, não faz sentido os dois se moverem sempre.
                    // Modificar para levar em conta o momento:
                    elemento1.colidir(
                        calcularPosicao(elemento1, elemento2, 1),
                        elemento2.dano
                    )
                    elemento2.colidir(
                        calcularPosicao(elemento2, elemento1, 1),
                        elemento1.dano
                    )
                }
            })
        })
    }
}