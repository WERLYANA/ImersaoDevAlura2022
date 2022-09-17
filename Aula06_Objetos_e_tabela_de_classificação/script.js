//        chave. valor.
var mah = {nome:"Mah", vitorias:0, empates:0, derrotas:0, pontos:0};
var jonny = {nome:"Jonny", vitorias:0, empates:0, derrotas:0, pontos:0};
var p1801 = {nome:"1801", vitorias:0, empates:0, derrotas:0, pontos:0};

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias*3) + jogador.empates;
    return pontos;
}

mah.pontos = calculaPontos(mah);
jonny.pontos = calculaPontos(jonny);
p1801.pontos = calculaPontos(p1801);

var jogadores = [mah, jonny, p1801];

function exibeJogadores(jogadores) {
    var elemento = "";
    for (var i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>"+ jogadores[i].nome +"</td>"
        elemento += "<td>"+ jogadores[i].vitorias +"</td>"
        elemento += "<td>"+ jogadores[i].empates +"</td>"
        elemento += "<td>"+ jogadores[i].derrotas +"</td>"
        elemento += "<td>"+ jogadores[i].pontos +"</td>"
        elemento += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>"
        elemento += "</tr>"
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento
}

exibeJogadores(jogadores);

function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);

    exibeJogadores(jogadores);
}

function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);

    exibeJogadores(jogadores);
}

function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;

    exibeJogadores(jogadores);
}