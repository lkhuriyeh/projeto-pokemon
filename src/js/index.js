/*
Objetivo 1 - quando clicarmos na seta avançar, precisamos mosrar o próximo cartão da lista
    - passo 1 - pegar o elemento html da seta avançar
    - passo 2 - identificar o clique do usuário na seta avançar
    - passo 3 - fazer aparecer o próximo cartão da lista
    - passo 4 - buscar o cartão que esta selecionado e esconder (adicionar a classe selecionado na próxima li)

Objetivo 2 - quando clicarmos na seta volar, precisamos mosrar o cartão anterior da lista
    - passo 1 - pegar o elemento html da seta voltar
    - passo 2 - identificar o clique do usuário na seta voltar
    - passo 3 - fazer aparecer o cartão anterior da lista
    - passo 4 - buscar o cartão que esta selecionado e esconder (adicionar a classe selecionado na próxima li)
    */

const btnAvancar = document.getElementById('btn-avancar')
const btnVoltar = document.getElementById('btn-voltar')
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado')
}

function mostrarCartao (indiceCartao) {
    cartoes[indiceCartao].classList.add('selecionado');
}


btnAvancar.addEventListener('click', function () {
    if (cartaoAtual === cartoes.length - 1) {
        esconderCartaoSelecionado()
        cartaoAtual=0;
        mostrarCartao (cartaoAtual)    
    } else { 
        esconderCartaoSelecionado()
        cartaoAtual++;
        mostrarCartao (cartaoAtual) 
    }
})

btnVoltar.addEventListener('click', function () {
    if (cartaoAtual === 0) {
        esconderCartaoSelecionado()
        cartaoAtual= cartoes.length-1;
        mostrarCartao (cartaoAtual)    
    } else { 
        esconderCartaoSelecionado()
        cartaoAtual--;
        mostrarCartao (cartaoAtual) 
    }
})