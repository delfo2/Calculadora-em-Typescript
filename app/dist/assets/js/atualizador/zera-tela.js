export class Limpador {
    constructor(tela = document.querySelector('[data-tela=""]')) {
        this.tela = tela;
    }
    limpaTela() {
        this.tela.value = '0';
    }
}
