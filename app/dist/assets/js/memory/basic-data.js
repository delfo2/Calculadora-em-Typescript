export class BasicData {
    constructor() {
        this.simbolos = ['C', '.', '='];
        this.operacoes = ['+', '-', '*', '/'];
        this.numeros = Array.from({ length: 11 }, (_, i) => i.toString());
        this.lastPressed = '';
        this.allPressed = '';
    }
    updatePressed(string) {
        this.lastPressed = string;
    }
    getPressed() {
        return this.lastPressed;
    }
    updateAllPressed(tecla, tela) {
        let canUpdate = true;
        if (this.simbolos.includes(tecla) || this.operacoes.includes(tecla)) {
            if (this.allPressed.endsWith(tecla)) {
                tela.atualizaMensagem(`Pare de selecionar: ${tecla}`);
                this.deleteAllPressed();
                tela.apagaHistorico();
                canUpdate = false;
            }
        }
        if (canUpdate) {
            this.allPressed = this.allPressed + tecla;
        }
    }
    deleteAllPressed() {
        this.allPressed = '';
    }
    getAllPressed() {
        return this.allPressed;
    }
}
