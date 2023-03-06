export class Matematica {
    somar(numbers) {
        return numbers.reduce((acc, atual) => { return [acc[0] + atual]; }, [0]);
    }
    subtrair(numbers) {
        let resultado = [];
        if (numbers.length > 1) {
            resultado = [numbers[0] - numbers[1]];
        }
        else {
            resultado = numbers;
        }
        return resultado;
    }
    dividir(numbers) {
        let resultado = [];
        if (numbers.length > 1) {
            resultado = [numbers[0] / numbers[1]];
        }
        else {
            resultado = numbers;
        }
        return resultado;
    }
    multiplicar(numbers) {
        let resultado = [];
        if (numbers.length > 1) {
            resultado = [numbers[0] * numbers[1]];
        }
        else {
            resultado = numbers;
        }
        return resultado;
    }
}
