export class Matematica {
    somar(numbers) {
        return numbers.reduce((acc, atual) => acc + atual);
    }
    subtrair(numbers) {
        return numbers.reduce((acc, atual) => acc - atual);
    }
    dividir(numbers) {
        return numbers.reduce((acc, atual) => acc / atual);
    }
    multiplicar(numbers) {
        return numbers.reduce((acc, atual) => acc * atual);
    }
}
