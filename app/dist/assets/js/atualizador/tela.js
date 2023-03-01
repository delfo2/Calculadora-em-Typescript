export class Tela {
    constructor() {
        this.tela = document.querySelector('[data-tela=""]');
    }
    limpaTela() {
        this.tela.value = '0';
    }
    atualizarTela(userValor) {
        this.tela.value = userValor;
    }
}
