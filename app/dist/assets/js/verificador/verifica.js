import { Tela } from "../atualizador/tela.js";
import { BasicData } from "../memory/basic-data.js";
import { ChosenNumbers } from "../memory/chosen-numbers.js";
import { ExtraFunctions } from "../operators/funçoes-extra.js";
const basic = new BasicData();
const telaController = new Tela();
const numbersController = new ChosenNumbers();
const extraFunctions = new ExtraFunctions();
let numerosApertado;
export function zeraNumerosApertados() {
    console.log(`zerando o último chosenNumber & chosenButton ...`);
    numerosApertado = '';
}
export function verifica(botao) {
    let botaoApertado = botao.textContent;
    if (botaoApertado) {
        if (basic.simbolos.includes(botaoApertado)) {
            extraFunctions.aplicaFuncaoExtra(basic, botaoApertado, telaController, numbersController, numerosApertado);
            console.log(`dentro do escopo da função verifica, o valor do númeroApertado é: ${numerosApertado}`);
        }
        if (basic.operacoes.includes(botaoApertado)) {
            telaController.atualizarTela(botaoApertado);
            if (basic.getPressed() == '') {
                basic.updatePressed(botaoApertado);
            }
            if (numerosApertado) {
                let numerosTemp = parseInt(numerosApertado);
                numbersController.adiciona(numerosTemp, basic);
                numerosApertado = '';
            }
            basic.updatePressed(botaoApertado);
        }
        if (basic.numeros.includes(botaoApertado)) {
            if (numerosApertado) {
                numerosApertado += botaoApertado;
                telaController.atualizarTela(numerosApertado);
                console.log(`dentro do verifica atualmente a operação escolhida é: ${basic.getPressed()}`);
            }
            else {
                numerosApertado = botaoApertado;
                telaController.atualizarTela(numerosApertado);
                console.log(`dentro do verifica atualmente a operação escolhida é: ${basic.getPressed()}`);
            }
            console.log(numbersController.getArray());
        }
    }
}
