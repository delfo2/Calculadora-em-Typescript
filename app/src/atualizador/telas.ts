export class Telas {
    private tela : HTMLInputElement = <HTMLInputElement>document.querySelector('[data-tela=""]');
    private historico : HTMLElement = <HTMLElement>document.querySelector('[data-tela="historico"]');
    private mensagem : HTMLElement = <HTMLElement>document.querySelector('[data-tela="mensagem"]');


    public Teste () : void {
        console.log(this.historico);
        console.log(this.mensagem);
        console.log('foi');
    }

    public limpaTela () : void {
        this.tela.value = '0';
    }

    public atualizarTela (userValor : string) : void {
        // console.log(`atualizando a tela com o valor: ${userValor}`);
        this.tela.value = userValor;
    }

    public atualizaHistorico (userHistoric : string) : void {
        console.log(this.historico);
        
        this.historico.textContent = userHistoric;
    }
    public apagaHistorico () : void {
        this.historico.textContent = 'Histórico';
    }
    
    public atualizaMensagem (userMensage : string) : void {
        console.log(this.mensagem);

        this.mensagem.textContent = userMensage;
    }
    public apagaMensagem () : void {
        this.mensagem.textContent = 'Tudo certo!';
    }
}
