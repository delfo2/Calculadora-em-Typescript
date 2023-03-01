export class ChosenNumbers {
    private numbers : number[] = [];
    
    public adiciona (number : number) : void {
        if(this.passouDeDois(this.numbers)) {
            console.log('o array chegou ao limite de bla bla bla');
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