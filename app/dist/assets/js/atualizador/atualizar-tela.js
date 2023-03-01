import { Limpador } from "./zera-tela.js";
const limpador = new Limpador();
export function atualizarTela(valor) {
    limpador.limpaTela();
    console.log('atualizando tela.');
}
