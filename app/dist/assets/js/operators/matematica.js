export class Matematica {
    constructor() {
        this.nome = 'otavio';
    }
    somar(numbers) {
        return numbers.reduce((acc, atual) => { return [acc[0] + atual]; }, [0]);
    }
    subtrair(numbers) {
        return numbers.reduce((acc, atual) => { return [acc[0] - atual]; }, [0]);
    }
    dividir(numbers) {
        return numbers.reduce((acc, atual) => { return [acc[0] / atual]; }, [0]);
    }
    multiplicar(numbers) {
        return numbers.reduce((acc, atual) => { return [acc[0] * atual]; }, [0]);
    }
    getName() {
        return this.nome;
    }
}
