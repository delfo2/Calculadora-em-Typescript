export class Tela {
    constructor(tela = document.querySelector('[data-tela=""]')) {
        this.tela = tela;
    }
    limpaTela() {
        this.tela.value = '0';
    }
    atualizarTela(userValor) {
        this.tela.value = userValor;
    }
}
