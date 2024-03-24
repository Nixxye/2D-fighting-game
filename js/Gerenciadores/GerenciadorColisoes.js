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
    const distanciaCentros = [
        r1.posicao[0] - r2.posicao[0],
        r1.posicao[1] - r2.posicao[1]
    ]
    const interseccao = [
        Math.abs(distanciaCentros[0] - (r1.tamanho[0] + r2.tamanho[0]) / 2),
        Math.abs(distanciaCentros[1] - (r1.tamanho[1] + r2.tamanho[1]) / 2)
    ]
    // Colisão no eixo Y;
    if (interseccao[0] < interseccao[1]) {
        // r1 por cima de r2:
        console.log('Colisão Y')
        if (r1.posicao[1] > r2.posicao[1]) {
            return [r1.posicao[0], r2.posicao[1] + (r2.tamanho[1] + r2.tamanho[1] + KNOCKBACK * knockback) / 2]
        }
        return [r1.posicao[0], r2.posicao[1] - (r2.tamanho[1] + r2.tamanho[1] + KNOCKBACK * knockback) / 2]          
    }
    if (r1.posicao[0] < r2.posicao[0]) {
        console.log('Colisão X')
        // Não sei pq o tamanho tem q estar dividido por 2
        return [r2.posicao[0] - (r2.tamanho[0] + r2.tamanho[0] / 2 + KNOCKBACK * knockback + 1) / 2, r1.posicao[1]]
    }
    return [r2.posicao[0] + (r2.tamanho[0] + r2.tamanho[0] + KNOCKBACK * knockback + 1) / 2, r1.posicao[1]]
}
export class GerenciadorColisoes {
    constructor() {

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