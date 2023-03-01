import { Matematica } from "../operators/matematica.js";
import { BasicData } from "./basic-data.js";

export class ChosenNumbers {
    private numbers : number[] = [];
    private matematica = new Matematica();
    private data = new BasicData();

    public adiciona (number : number) : void {
        if(this.passouDeDois(this.numbers)) {
            
        } else {
            this.numbers.push(number);
            console.log(`número (${number}) adicionado com sucesso.)`);
            console.log(`o Array atualmente conta com o(s) números: ${this.numbers}`);
        }
    }

    private passouDeDois (array : number[]) : boolean {
        return array.length > 1;
    }

}