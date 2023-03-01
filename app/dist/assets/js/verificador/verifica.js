import { Tela } from "../atualizador/tela.js";
const telaController = new Tela();
let numeroApertado;
const simbolos = ['C', '.', '='];
const operacoes = ['+', '-', '*', '/'];
const numeros = Array.from({ length: 11 }, (_, i) => i.toString());
export function verifica(botao) {
    let botaoApertado = botao.textContent;
    if (botaoApertado) {
        if (simbolos.includes(botaoApertado)) {
            console.log(`encontramos um simbolo: ${botaoApertado}`);
        }
        if (operacoes.includes(botaoApertado)) {
            console.log(`encontramos uma operação: ${botaoApertado}`);
        }
        if (numeros.includes(botaoApertado)) {
            if (numeroApertado) {
                numeroApertado += botaoApertado;
                telaController.atualizarTela(numeroApertado);
            }
            else {
                numeroApertado = botaoApertado;
                telaController.atualizarTela(numeroApertado);
            }
        }
    }
}
