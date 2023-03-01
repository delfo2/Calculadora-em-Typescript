import { Matematica } from "../operators/matematica.js";
import { BasicData } from "./basic-data.js";
export class ChosenNumbers {
    constructor() {
        this.numbers = [];
        this.matematica = new Matematica();
        this.data = new BasicData();
    }
    adiciona(number) {
        if (this.passouDeDois(this.numbers)) {
        }
        else {
            this.numbers.push(number);
            console.log(`número (${number}) adicionado com sucesso.)`);
            console.log(`o Array atualmente conta com o(s) números: ${this.numbers}`);
        }
    }
    passouDeDois(array) {
        return array.length > 1;
    }
}
