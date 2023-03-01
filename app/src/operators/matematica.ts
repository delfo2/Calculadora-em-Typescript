export class Matematica {
    private nome = 'otavio';

    public somar (numbers : number[]) : number[] {
        return numbers.reduce((acc, atual) => {return [acc[0] + atual]},[0]);
    }
    public subtrair (numbers : number[]) : number[] {
        return numbers.reduce((acc, atual) => {return [acc[0] - atual]},[0]);
    }
    public dividir (numbers : number[]) : number[] {
        return numbers.reduce((acc, atual) => {return [acc[0] / atual]},[0]);
    }
    public multiplicar (numbers : number[]) : number[] {
        return numbers.reduce((acc, atual) => {return [acc[0] * atual]},[0]);
    }

    public getName () : string {
        return this.nome;
    }
}