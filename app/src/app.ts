import { verifica } from "./verificador/verifica.js";
import { Tela } from "./atualizador/telas.js";

const botoes : HTMLButtonElement[] = Array.from(document.querySelectorAll('[data-botao]'));

//tirar esse limpador depois, usando só pra testes
const limpador = new Tela();
limpador.limpaTela();

if(botoes) {
    for(let botao of botoes) {
        botao.addEventListener('click', e => {
            e.preventDefault();
            verifica(botao);
        });
    }
} else {
    throw Error('Não foi possível encontrar os botões, verifique se os data attribues estão certos.');
}

/*
function zerarTela () {
    tela.value = '0';
    valoresTela = [''];
    indiceValores = 0;

    zeraNumerosSelecionados();
}
function atualizarTela (valor) {
    tela.value = valor;
}
function atualizarValor (valor) {
    numerosSelecionados[0] = corrigirErros(numerosSelecionados[0]);
    return valor = valor + numerosSelecionados[0];
}
function zeraNumerosSelecionados () {
    numerosSelecionados.splice(0);
}
function corrigirErros (valor) {
    if(valor == "undefined" 
        || valor == isNaN
            || valor == null
                || valor == '0'
                    || valor == ''){
        
        valor = '0';
    }
    return valor;
}
function verificaOperacao () {
    //em projeto
}

// varíaveis: 1.Selecionando Html
let tela = document.querySelector('.calculadora__cabecalho-display');
let botoes = document.querySelectorAll('.calculadora__botoes-botao');

// varíaveis: 2.valores relacionados a número
let numerosSelecionados = [];
let valoresTela = [''];
let indiceValores = 0;
let adicionarNumero = true;

// varíaveis: 3.valores resultado
let resultado = '';

// varíaveis: 4.valores Diversos
let apertouSimbolo = false;
let zerouTela = false;
let adicionarSimbolo = false;

// operações
let operaçãoEscolhida = '';

function aplicarOperação () {
    atualizarTela(operaçãoEscolhida);
    
    apertouSimbolo = true;
    adicionarNumero = true;
    adicionarSimbolo = false;
    
    valoresTela.push('');
    indiceValores++;
}

zerarTela();

for(let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function () {
        console.log(adicionarSimbolo);
        //botão limpar
        if(botoes[i].innerHTML == 'C'){
            zeraNumerosSelecionados();
            zerarTela();
            zerouTela = true;
            adicionarNumero = true;
        }

        //botão somar
        if(botoes[i].innerHTML == '+' && adicionarSimbolo == true){
            operaçãoEscolhida = botoes[i].innerHTML;
            aplicarOperação();
        }
        //botão subtrair
        if(botoes[i].innerHTML == '-' && adicionarSimbolo == true){
            operaçãoEscolhida = botoes[i].innerHTML;
            aplicarOperação();
        }
        //botão vezes
        if(botoes[i].innerHTML == '*' && adicionarSimbolo == true){
            operaçãoEscolhida = botoes[i].innerHTML;
            aplicarOperação();
        }
        //botão dividir
        if(botoes[i].innerHTML == '/' && adicionarSimbolo == true){
            operaçãoEscolhida = botoes[i].innerHTML;
            aplicarOperação();
        }
        
        //botão resultado
        if(botoes[i].innerHTML == '='){
            adicionarNumero = false;
        }

        //salvar número ou ponto selecionado pt.1
        if(botoes[i].innerHTML <= 9 || botoes[i].innerHTML == '.'){
            adicionarSimbolo = true;
            numerosSelecionados.push(botoes[i].innerHTML);
            if(adicionarNumero == false){
                alert(`para fazer uma nova soma por favor limpe o resultado atual para evitar erros.
                (ou aperte no simbolo de mais para acrescentar um valor a mais na soma atual)`);
            }
        }
        
        //salvar número selecionado pt.2 + mostrar na tela
        if(adicionarNumero == true && zerouTela == false && apertouSimbolo == false){
            
            // ta entrando aqui
            console.log('entrou');

            valoresTela[indiceValores] = atualizarValor(valoresTela[indiceValores]);
            zeraNumerosSelecionados();
            valoresTela[indiceValores] = corrigirErros(valoresTela[indiceValores]);
            atualizarTela(valoresTela[indiceValores]);
        }

        //somar o Array de números selecionados + mostrar na tela resultados
        if(adicionarNumero == false) {
            for(let i = 0; i < valoresTela.length; i++){
                valoresTela[i] = corrigirErros(valoresTela[i]);
                valoresTela[i] = parseFloat(valoresTela[i]);
            }
            if(operaçãoEscolhida == '+'){
                resultado = valoresTela.reduce((acc,item) => acc + item, 0);
            }
            if(operaçãoEscolhida == '-'){
                resultado = valoresTela.reduce((acc,item) => acc - item);
            }
            if(operaçãoEscolhida == '*'){
                resultado = valoresTela.reduce((acc,item) => acc * item);
            }
            if(operaçãoEscolhida == '/'){
                resultado = valoresTela.reduce((acc,item) => acc / item);
            }
            atualizarTela(resultado);
        }

        //reset para funcionalidades únicas
        if(zerouTela == true){
            zerouTela = false;
        }
        if(apertouSimbolo == true){
            apertouSimbolo = false;
        }
    }
}
*/