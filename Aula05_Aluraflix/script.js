function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    //endsWith quer dizer termina com
    if (filmeFavorito.endsWith(".jpg" )){
        listarFilmesNaTela(filmeFavorito);
    } else {
        console.error("Endereço de filme inválido");
    }
    document.getElementById("filme").value="";
}

function listarFilmesNaTela(filme) {
    console.log(filme);

    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}