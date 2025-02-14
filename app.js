//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
    let amigos = [];
    
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
        amigos.push(nomeDoAmigo);

        limparNome();

        //consegui fazer aparecer os nomes na lista mas não consigo limpar
        for (let i = 0; i < amigos.length; i++) {
            let criarLista = document.createElement('li');
            criarLista.textContent = amigos[i];
            listaAmigos.appendChild(criarLista) ;

        console.log('nome incluido');
    }

    docume

 }}