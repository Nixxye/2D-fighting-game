class Camera {
    posicao;
    constructor(pos = [0, 0]) {
        this.posicao = pos;
    }
    centralizar(pos) {
        this.posicao = [
            (pos[0] - window.innerWidth / 2),
            (pos[1] - window.innerHeight / 2)
        ]
    }
}

export class GerenciadorGrafico {
    constructor() {
        this.canvas = document.getElementById("c")
        this.context = this.canvas.getContext("2d")
        
        this.camera = new Camera()
        this.redimensionar()
        addEventListener("resize", () => this.redimensionar())
        
        this.texturas = {
            Jogador: {
                caminho: './assets/Jogador.png',
                imagem: new Image(),
                sprites: 4,
                tamanho: [],
                escala: 5
            },
            JogadorCima: {
                caminho: './assets/JogadorCima.png',
                imagem: new Image(),
                sprites: 4,
                tamanho: [],
                escala: 5
            },
            JogadorBaixo: {
              caminho: './assets/JogadorBaixo.png',
              imagem: new Image(),
              sprites: 4,
              tamanho: [],
              escala: 5
            },
            JogadorDireita: {
              caminho: './assets/JogadorDireita.png',
              imagem: new Image(),
              sprites: 4,
              tamanho: [],
              escala: 5
            },
            JogadorEsquerda: {
              caminho: './assets/JogadorEsquerda.png',
              imagem: new Image(),
              sprites: 4,
              tamanho: [],
              escala: 5
          }
        }
    }
    redimensionar() {
        this.camera.centralizar([0,0]);

        const delta = []
        delta[0] = this.canvas.width - window.innerWidth
        delta[1] = this.canvas.height - window.innerHeight
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
        return delta
    }
    carregarImagens() {
        let imagensParaCarregar = Object.values(this.texturas);

        const promessas = [];

        imagensParaCarregar.forEach((text) => {
            const promessa = new Promise((resolve) => {
                text.imagem.src = text.caminho;
                text.imagem.onload = () => {
                  text.tamanho = [
                    (text.imagem.width / text.sprites) * text.escala,
                     text.imagem.height * text.escala
                    ];
                    resolve();
                };
            })
            promessas.push(promessa);
          });
        return Promise.all(promessas);
    }
    desenhar({
        id,
        posicao = [0, 0],
        tamanho = null,
        frames = {frameAtual: 0, max: 0, delay: 10, t: 0}
    }) {
        const textura = this.texturas[id];
        if (!textura) {
            this.context.fillStyle = 'white'
            this.context.fillRect(
              posicao[0],
              posicao[1],
              tamanho[0],
              tamanho[1]
            )
            return;
        }
        if (!tamanho) tamanho = textura.tamanho;
        this.context.save();
        this.context.translate(
          posicao[0] + tamanho[0] / 2,
          posicao[1] + tamanho[1] / 2
        );
        this.context.rotate(0);
        this.context.translate(
            -posicao[0] - tamanho[0] / 2,
            -posicao[1] - tamanho[1] / 2
            );
        this.context.globalAlpha = 1;
    
        const crop = {
          posicao: {
            x: frames.frameAtual * (tamanho[0] / textura.escala),
            y: 0
          },
          largura: textura.imagem.width / textura.sprites,
          altura: textura.imagem.height
        };
    
        const imagem = {
          posicao: {
            x: posicao[0] - this.camera.posicao[0],
            y: posicao[1] - this.camera.posicao[1]
          },
          largura: textura.imagem.width / textura.sprites,
          altura: textura.imagem.height
        };
        this.context.drawImage(
          textura.imagem,
          crop.posicao.x,
          crop.posicao.y,
          crop.largura,
          crop.altura,
          imagem.posicao.x,
          imagem.posicao.y,
          imagem.largura * textura.escala,
          imagem.altura * textura.escala
        );
    
        this.context.restore();
    
        if (frames.max < 1) return;
    
        if (textura.sprites > 1) {
          frames.t++;
        }
    
        if (frames.t % frames.delay === 0) {
          if (frames.frameAtual < frames.max - 1) frames.frameAtual++;
          else frames.frameAtual = 0;
        }
        return frames;    
    }
    getTamanho(id) {
        const textura = this.texturas[id];
        if (textura) {
            return textura.tamanho;
        }
        console.log("Sem texturas")
        return null;
    }
    apagar() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}