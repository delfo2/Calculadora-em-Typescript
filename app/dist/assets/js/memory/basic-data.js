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
    updateAllPressed(tecla) {
        this.allPressed = this.allPressed + tecla;
        console.log(this.allPressed);
    }
    deleteAllPressed() {
        this.allPressed = '';
    }
    getAllPressed() {
        return this.allPressed;
    }
}
