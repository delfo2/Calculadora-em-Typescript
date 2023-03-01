export class Tela {
    
    constructor (
        private tela : HTMLInputElement = <HTMLInputElement>document.querySelector('[data-tela=""]')
    ) {}

    public limpaTela () : void {
        this.tela.value = '0';
    }

    public atualizarTela (userValor : string) : void {
        // console.log(`atualizando a tela com o valor: ${userValor}`);
        this.tela.value = userValor;
    }
}
