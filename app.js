//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
    let listaDeNomes = [];
    
 //criar uma função que adiciona o nome anexado no array. Utilize document.getElementById ou document.querySelector

    function limparNome () {
        nomeDoAmigo = document.getElementById('amigo');
        nomeDoAmigo.value = ''
    }

function adicionarAmigo() {
    console.log('botão foi pressionado');
    let nomeDoAmigo = document.getElementById('amigo').value;


    //se não tiver nada digitado será alertado.
    if (nomeDoAmigo === '') {
        alert ('Coloque o nome de uma pessoa.');
    } else {
        listaDeNomes.push(nomeDoAmigo);
        console.log()

        limparNome();

        console.log('nome incluido');
    }

    

 }


 document.getElementById('amigo')