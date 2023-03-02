export class Matematica {

    public somar (numbers : number[]) : number[] {
        return numbers.reduce((acc, atual) => {return [acc[0] + atual]},[0]);
    }
    public subtrair (numbers : number[]) : number[] {
        let resultado : number[] = [];
        if(numbers.length > 1) {
            resultado = [numbers[0] - numbers[1]];
        } else {
            resultado = numbers;
        }
        return resultado;
    }
    public dividir (numbers : number[]) : number[] {
        let resultado : number[] = [];
        if(numbers.length > 1) {
            resultado = [numbers[0] / numbers[1]];
        } else {
            resultado = numbers;
        }
        return resultado;
    }
    public multiplicar (numbers : number[]) : number[] {
        let resultado : number[] = [];
        if(numbers.length > 1) {
            resultado = [numbers[0] * numbers[1]];
        } else {
            resultado = numbers;
        }
        return resultado;
    }
}