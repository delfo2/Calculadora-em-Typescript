import { Telas } from "../atualizador/telas.js";
import { BasicData } from "../memory/basic-data.js";
import { ChosenNumbers } from "../memory/chosen-numbers.js";
import { ExtraFunctions } from "../operators/funçoes-extra.js";

const basic = new BasicData();
const telaController = new Telas();
const numbersController = new ChosenNumbers();
const extraFunctions = new ExtraFunctions();

let numerosApertado : string;

export function zeraNumerosApertados () : void {
    //console.log(`zerando o último chosenNumber & chosenButton ...`);
    numerosApertado = '';
}

export function verifica (botao : HTMLButtonElement) : void {
    let botaoApertado = botao.textContent;

    if(botaoApertado){
        //SIMBOLOS
        if(basic.simbolos.includes(botaoApertado)) {
            basic.updateAllPressed(botaoApertado, telaController);
            telaController.atualizaHistorico(basic.getAllPressed());

            extraFunctions.aplicaFuncaoExtra(basic, botaoApertado, telaController, numbersController, numerosApertado);
        }


        //OPERAÇÕES
        if(basic.operacoes.includes(botaoApertado)) {
            telaController.atualizarTela(botaoApertado);
            basic.updateAllPressed(botaoApertado, telaController);
            telaController.atualizaHistorico(basic.getAllPressed());
            
            if(basic.getPressed() == '') {
                basic.updatePressed(botaoApertado);
            }
            
            if(numerosApertado) {
                let numerosTemp = parseInt(numerosApertado);
                
                numbersController.adiciona(numerosTemp, basic);
                numerosApertado = '';
            }
            basic.updatePressed(botaoApertado);
        }


        //NÚMEROS
        if(basic.numeros.includes(botaoApertado)) {
            basic.updateAllPressed(botaoApertado, telaController);
            telaController.atualizaHistorico(basic.getAllPressed());

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