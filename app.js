let listaAmigos = [];
let inputNome = document.querySelector('input');
let lista = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');
let sorteioFeito = false;


function adicionarAmigo() {
    let nomeAmigo = inputNome.value;

    if (sorteioFeito) {
        resultado.innerHTML = '';
        sorteioFeito = false;
    }

    if (!nomeAmigo || !isNaN(nomeAmigo)) {
        alert('Você deve inserir um nome válido!');
        limparEfocarCampo();
        return;
    }

    listaAmigos.push(nomeAmigo);

    lista.innerHTML = '';

    let listaNaPagina = '';

    for (let i = 0; i < listaAmigos.length; i++) {
        listaNaPagina += `<li>${listaAmigos[i]}</li>`;
    }

    lista.innerHTML = listaNaPagina;

    limparEfocarCampo();

    console.log('Amigo adicionado: ', nomeAmigo);
    console.log('Lista: ', listaAmigos);
}

function limparEfocarCampo() {
    inputNome.value = '';
    inputNome.focus();
}

function sortearAmigo() {

    if (!listaAmigos.length) {
        alert('Não há Amigos para sortear.');
        return;
    }
    if (listaAmigos.length === 1) {
        alert('Adicione mais amigos para poder sortear.');
        return;
    }

    let nomeAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let nomeSorteado = listaAmigos[nomeAleatorio];

    resultado.innerHTML = `O amigo secreto sorteado é: ${nomeSorteado}`;
    lista.innerHTML = '';

    listaAmigos = [];
    sorteioFeito = true;

    console.log('Nome sorteado: ' + nomeSorteado);

}
