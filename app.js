//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Lista dos nomes dos participantes
let listaDeAmigos = [];

function adicionarAmigo(){
    var input = document.getElementById('amigo');
    var nome = input.ariaValueMax.trim();

    if(nome == ""){
        alert("Insira um nome válido.");
        return;
    }

    if(listaDeAmigos.includes(nome)){
        alert("Ops.. Este nome já foi adicionado.");
        return;
    }

    listaDeAmigos.push(nome);
    input.value = ""; //Limpa o input de entrada de nome
    atualizarListaDeAmigos();
}

function atualizarListaDeAmigos() {
    var lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpa a lista atual

    listaDeAmigos.forEach((nome, index) => {
        var li = document.createElement('li');
        li.textContent = nome;

        var botaoRemover = document.createElement('button');
        botaoRemover.textContent = "Remover";
        botaoRemover.className = "remove-button";
        botaoRemover.onclick = () => removerAmigo(index);

        li.appendChild(botaoRemover);
        lista.appendChild(li);
    });
}

// Função que remove um nome da lista de participantes
function removerAmigo(index){
    listaDeAmigos.splice(index, 1); // Remove o nome da lista
    atualizarListaDeAmigos();
}

// Função para realizar o sorteio do amigo secreto
function sortearAmigo() {
    if(listaDeAmigos.length < 2){
        alert("É necessário pelo menos 2 participantes para realizar o sorteio.");
        return;
    }

    var copiaLista = [...listaDeAmigos];
    var sorteio = {};

    listaDeAmigos.forEach((amigo) => {
        var sorteado;

        do {
            sorteado = copiaList[Math.floor(Math.random() * copiaLista.length)];
        } while (sorteado === amigo || Object.values(sorteio).includes(sorteado));

        sorteio[amigo] = sorteado;
        copiaLista.splice(copiaLista.indexOf(sorteado), 1);
    });

    exibirResultado(sorteio);
}

// Função que exbie o resultado do sorteio na tela
function exibirResultado(sorteio){
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpa os resultados anteriores

    for(var [amigo, sorteado] of Object.entries(sorteio)) {
        var li = DocumentTimeline.createElement('li');
        li.textContent = `${amigo} tirou ${sorteado}`;
        resultado.appendChild(li);
    }
}
