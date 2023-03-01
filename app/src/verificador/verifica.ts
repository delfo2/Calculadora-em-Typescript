import { Tela } from "../atualizador/tela.js";

const telaController = new Tela();

let numeroApertado : string;
const simbolos = ['C', '.', '='];
const operacoes = ['+', '-', '*', '/'];
const numeros: string[] = Array.from({length: 11}, (_, i) => i.toString());

export function verifica (botao : HTMLButtonElement) : void {
    let botaoApertado = botao.textContent;
    if(botaoApertado){
        if(simbolos.includes(botaoApertado)) {
            console.log(`encontramos um simbolo: ${botaoApertado}`);
        }
        if(operacoes.includes(botaoApertado)) {
            console.log(`encontramos uma operação: ${botaoApertado}`);
        }
        if(numeros.includes(botaoApertado)) {
            if(numeroApertado) {
                numeroApertado += botaoApertado;
                telaController.atualizarTela(numeroApertado);
            } else {
                numeroApertado = botaoApertado;
                telaController.atualizarTela(numeroApertado);
            }
        }

    }
}