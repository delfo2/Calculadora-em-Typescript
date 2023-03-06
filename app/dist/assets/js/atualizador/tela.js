export class Tela {
    constructor() {
        this.tela = document.querySelector('[data-tela=""]');
        this.historico = document.querySelector('[data-tela="historico"]');
        this.mensagem = document.querySelector('[data-tela="mensagem"]');
    }
    limpaTela() {
        this.tela.value = '0';
    }
    atualizarTela(userValor) {
        this.tela.value = userValor;
    }
    atualizaHistorico(userHistoric) {
        this.historico.textContent = userHistoric;
    }
    apagaHistorico() {
        this.historico.textContent = 'Histórico';
    }
    atualizaMensagem(userMensage) {
        this.mensagem.textContent = userMensage;
    }
    apagaMensagem() {
        this.mensagem.textContent = 'Tudo certo!';
    }
}
