export class Telas {
    private tela : HTMLInputElement = <HTMLInputElement>document.querySelector('[data-tela=""]');
    private historico : HTMLElement = <HTMLElement>document.querySelector('[data-tela="historico"]');
    private mensagem : HTMLElement = <HTMLElement>document.querySelector('[data-tela="mensagem"]');

    public limpaTela () : void {
        this.tela.value = '0';
    }

    public atualizarTela (userValor : string) : void {
        // console.log(`atualizando a tela com o valor: ${userValor}`);
        this.tela.value = userValor;
    }

    public atualizaHistorico (userHistoric : string) : void {
        if(userHistoric !== '') {
            this.historico.textContent = userHistoric;
        }
    }
    public apagaHistorico () : void {
        this.historico.textContent = 'Histórico apagado';
    }
    
    public atualizaMensagem (userMensage : string) : void {
        this.mensagem.textContent = userMensage;
    }
    public apagaMensagem () : void {
        this.mensagem.textContent = 'Tudo certo!';
    }
}
