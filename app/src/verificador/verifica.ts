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
        //SIMBOLOS
        if(basic.simbolos.includes(botaoApertado)) {
            console.log(`encontramos um simbolo: ${botaoApertado}`);
        }
        //OPERAÇÕES
        if(basic.operacoes.includes(botaoApertado)) {
            telaController.atualizarTela(botaoApertado);
            basic.updatePressed(botaoApertado);
            
            if(numerosApertado) {
                //      POSSÍVEL ERRO:
                //      AO APERTAR 2X EM UM SIMBOLO DE OPERAÇÃO É POSSÍVEL Q BUGUE 
                //      PORQUE OS numerosApertado É ZERADO.

                let numerosTemp = parseInt(numerosApertado);
                
                numbersController.adiciona(numerosTemp, basic);
                numerosApertado = '';
            }
            // console.log(`encontramos uma operação: ${botaoApertado}`);
        }
        //NÚMEROS
        if(basic.numeros.includes(botaoApertado)) {
            if(numerosApertado) {
                numerosApertado += botaoApertado;
                telaController.atualizarTela(numerosApertado);
            } else {
                numerosApertado = botaoApertado;
                telaController.atualizarTela(numerosApertado);
            }
            console.log(numbersController.getArray());
            //problemas no numbers escolhidos
        }

    }
}