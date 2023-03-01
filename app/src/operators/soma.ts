export class Matematica {
    public somar (numbers : number[]) : number {
        return numbers.reduce((acc, atual) => acc + atual);
    }
    public subtrair (numbers : number[]) : number {
        return numbers.reduce((acc, atual) => acc - atual);
    }
    public dividir (numbers : number[]) : number {
        return numbers.reduce((acc, atual) => acc / atual);
    }
    public multiplicar (numbers : number[]) : number {
        return numbers.reduce((acc, atual) => acc * atual);
    }
}