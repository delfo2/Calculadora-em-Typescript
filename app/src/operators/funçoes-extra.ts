import { Telas } from "../atualizador/telas.js";
import { BasicData } from "../memory/basic-data.js";
import { ChosenNumbers } from "../memory/chosen-numbers.js";
import { zeraNumerosApertados } from "../verificador/verifica.js";

export class ExtraFunctions {
    public aplicaFuncaoExtra(
        basic : BasicData,
        chosenButton : string,
        tela : Telas,
        memoryNumbers : ChosenNumbers,
        chosenNumber : string) {
            if(chosenButton == 'C') {
                memoryNumbers.apagaArray();
                zeraNumerosApertados();
                basic.deleteAllPressed();
                tela.apagaHistorico();
                tela.limpaTela();
            }

            if(chosenButton == '.') {
                console.log(`operador escolhido: ${chosenButton}`);
                tela.atualizaMensagem('função não disponível!');
                if(chosenNumber.length !== 0) {
                    tela.atualizarTela(chosenNumber);
                } else {
                    tela.limpaTela();
                }
            }

            if(chosenButton == '=') {

                setTimeout(() =>{

                    basic.deleteAllPressed();
                    tela.apagaHistorico();
                }, 2000);

                if(chosenNumber.length !== 0) {
                    let tempNumber = parseInt(chosenNumber);
                    memoryNumbers.adiciona(tempNumber, basic);
                }
                if(chosenNumber.length === 0) {
                    tela.atualizaMensagem('Escolha mais números!');
                    tela.limpaTela();
                    
                } else {
                    tela.atualizarTela(memoryNumbers.getArray().toString());
                }
                basic.updatePressed('');
                zeraNumerosApertados();
            }
    }
}