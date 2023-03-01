import { Matematica } from "../operators/matematica.js";
import { BasicData } from "./basic-data.js";

export class ChosenNumbers {
    private numbers : number[] = [];
    private matematica = new Matematica();

    public adiciona (number : number, basic : BasicData) : void {
        this.addAtArray(number);

        //AO SER JOGADO NO REDUCE, OS DOIS NÚMEROS ESTÃO VIRANDO NEGATIVOS.

        if(basic.getPressed() == '+') {
            this.numbers = this.matematica.somar(this.numbers);
            console.log(this.numbers);
            
        }
        if(basic.getPressed() == '-') {
            this.numbers = this.matematica.subtrair(this.numbers);
            console.log(this.numbers);
            
        }
        if(basic.getPressed() == '*') {
            this.numbers = this.matematica.multiplicar(this.numbers);
            console.log(this.numbers);
            
        }
        if(basic.getPressed() == '/') {
            this.numbers = this.matematica.dividir(this.numbers);
            console.log(this.numbers);

        }
    }

    public getArray () : number[] {
        return this.numbers;
    }

    private addAtArray (number : number) : void {
        this.numbers.push(number);
    }
}