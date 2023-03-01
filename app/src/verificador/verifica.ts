import { Tela } from "../atualizador/tela.js";
import { BasicData } from "../memory/basic-data.js";
import { ChosenNumbers } from "../memory/chosen-numbers.js";

const basic = new BasicData();
const telaController = new Tela();
const numbersController = new ChosenNumbers();

let numerosApertado : string;

export function verifica (botao : HTMLButtonElement) : void {
    let botaoApertado = botao.textContent;
    if(botaoApertado){
        if(basic.simbolos.includes(botaoApertado)) {
            console.log(`encontramos um simbolo: ${botaoApertado}`);
        }
        if(basic.operacoes.includes(botaoApertado)) {
            telaController.atualizarTela(botaoApertado);
            basic.updatePressed(botaoApertado);

            if(numerosApertado) {
                let numerosTemp = parseInt(numerosApertado);
                numbersController.adiciona(numerosTemp);
                numerosApertado = '';
            }
            // console.log(`encontramos uma operação: ${botaoApertado}`);
        }
        if(basic.numeros.includes(botaoApertado)) {
            if(numerosApertado) {
                numerosApertado += botaoApertado;
                telaController.atualizarTela(numerosApertado);
            } else {
                numerosApertado = botaoApertado;
                telaController.atualizarTela(numerosApertado);
            }
        }

    }
}