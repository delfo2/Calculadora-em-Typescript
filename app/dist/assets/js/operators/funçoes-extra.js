import { zeraNumerosApertados } from "../verificador/verifica.js";
export class ExtraFunctions {
    aplicaFuncaoExtra(basic, chosenButton, tela, memoryNumbers, chosenNumber) {
        if (chosenButton == 'C') {
            memoryNumbers.apagaArray();
            zeraNumerosApertados();
            tela.limpaTela();
        }
        if (chosenButton == '.') {
            console.log(`operador escolhido: ${chosenButton}`);
            tela.atualizarTela('função não disponível!');
            setTimeout(() => {
                tela.atualizarTela(chosenNumber);
            }, 500);
        }
        if (chosenButton == '=') {
            if (chosenNumber.length !== 0) {
                let tempNumber = parseInt(chosenNumber);
                memoryNumbers.adiciona(tempNumber, basic);
            }
            if (chosenNumber.length === 0) {
                console.log('o array de chosenNumber estava vario, estamos colocando o valor zero.');
                tela.atualizarTela('Escolha mais números!');
                setTimeout(() => {
                    tela.atualizarTela('0');
                }, 1000);
            }
            else {
                tela.atualizarTela(memoryNumbers.getArray().toString());
            }
            basic.updatePressed('');
            zeraNumerosApertados();
        }
    }
}
