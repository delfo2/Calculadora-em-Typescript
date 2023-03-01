export class BasicData {
    constructor() {
        this.simbolos = ['C', '.', '='];
        this.operacoes = ['+', '-', '*', '/'];
        this.numeros = Array.from({ length: 11 }, (_, i) => i.toString());
        this.lastPressed = '';
    }
    updatePressed(string) {
        this.lastPressed = string;
    }
    getPressed() {
        return this.lastPressed;
    }
}
