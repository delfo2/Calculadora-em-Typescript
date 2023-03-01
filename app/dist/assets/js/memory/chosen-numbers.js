import { Matematica } from "../operators/matematica.js";
export class ChosenNumbers {
    constructor() {
        this.numbers = [];
        this.matematica = new Matematica();
    }
    adiciona(number, basic) {
        this.addAtArray(number);
        if (basic.getPressed() == '+') {
            this.numbers = this.matematica.somar(this.numbers);
            console.log(this.numbers);
        }
        if (basic.getPressed() == '-') {
            this.numbers = this.matematica.subtrair(this.numbers);
            console.log(this.numbers);
        }
        if (basic.getPressed() == '*') {
            this.numbers = this.matematica.multiplicar(this.numbers);
            console.log(this.numbers);
        }
        if (basic.getPressed() == '/') {
            this.numbers = this.matematica.dividir(this.numbers);
            console.log(this.numbers);
        }
    }
    getArray() {
        return this.numbers;
    }
    addAtArray(number) {
        this.numbers.push(number);
    }
}
