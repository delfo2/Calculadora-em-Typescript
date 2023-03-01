import { verifica } from "./verificador/verifica.js";
import { Tela } from "./atualizador/tela.js";
const botoes = Array.from(document.querySelectorAll('[data-botao]'));
const limpador = new Tela();
limpador.limpaTela();
if (botoes) {
    for (let botao of botoes) {
        botao.addEventListener('click', e => {
            e.preventDefault();
            verifica(botao);
        });
    }
}
else {
    throw Error('Não foi possível encontrar os botões, verifique se os data attribues estão certos.');
}
