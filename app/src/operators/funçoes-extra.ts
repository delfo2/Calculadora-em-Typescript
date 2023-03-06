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
                tela.limpaTela();
            }
            if(chosenButton == '.') {
                console.log(`operador escolhido: ${chosenButton}`);
                tela.atualizarTela('função não disponível!');
                setTimeout(() => {
                    tela.atualizarTela(chosenNumber);
                }, 500)
            }
            if(chosenButton == '=') {
                // console.log(`operador escolhido: ${chosenButton}`);
                if(chosenNumber.length !== 0) {
                    let tempNumber = parseInt(chosenNumber);
                    memoryNumbers.adiciona(tempNumber, basic);
                    // console.log(`entrou no If(!chosenNumber) e o resultado do Array foi: ${memoryNumbers.getArray()}`);
                    // console.log(`enquanto o operador passado foi: ${basic.getPressed()}`);
                }
                if(chosenNumber.length === 0) {
                    console.log('o array de chosenNumber estava vario, estamos colocando o valor zero.');

                    tela.atualizarTela('Escolha mais números!');
                    setTimeout(() => {
                        tela.atualizarTela('0');
                    }, 1000);

                } else {
                    tela.atualizarTela(memoryNumbers.getArray().toString());
                }
                // console.log(`o resultado final do Array foi: ${memoryNumbers.getArray()}`);
                // console.log(`zerando o último operador lógico escolhido...`);
                basic.updatePressed('');
                // console.log(`o último operador lógico escolhido foi: ${basic.getPressed()}`);
                zeraNumerosApertados();
            }
    }
}