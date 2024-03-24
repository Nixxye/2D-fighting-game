import { Fase } from "../Estados/Fase.js"


export class GerenciadorEstados {
  constructor() {
    this.estadoAtual = 'Fase';
    this.estados = {
      'Fase': new Fase()
    }
    setInterval(() => this.executar(), 20);
  }
  trocarEstado(estado) {
    if (this.estados[estado] !== undefined) this.estadoAtual = estados;
  }
  getEstado() {
    return this.estadoAtual;
  }
  executar() {
    this.estados[this.estadoAtual]?.executar();
  }
}
