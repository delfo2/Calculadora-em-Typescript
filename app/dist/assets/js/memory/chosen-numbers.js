export class ChosenNumbers {
    constructor() {
        this.numbers = [];
    }
    adiciona(number) {
        if (this.passouDeDois(this.numbers)) {
            console.log('o array chegou ao limite de bla bla bla');
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
