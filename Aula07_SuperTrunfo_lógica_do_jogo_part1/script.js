const carta1 = {
    nome: "Bulbasauro",
    atributos: {
        ataque: 7,
        defesa: 8,
        poder: 6
    }
};
const carta2 = {
    nome: "Pikachu",
    atributos: {
        ataque: 9,
        defesa: 9,
        poder: 6
    }
};

const carta3 = {
    nome: "Squirtle",
    atributos: {
        ataque: 6,
        defesa: 7,
        poder: 5
    }
};
const carta4 = {
    nome: "Onix",
    atributos: {
        ataque: 8,
        defesa: 9,
        poder: 4
    }
};
const carta5 = {
    nome: "Psyduck",
    atributos: {
        ataque: 5,
        defesa: 6,
        poder: 9
    }
}

const cartas = [carta1, carta2, carta3, carta4, carta5];
var cartaMaquina;
var cartaJogador;

var btn = document.querySelector("#refresh");
    btn.addEventListener("click", function() {
    
    location.reload();
});

function sortearCarta(){
    var numCartaMaquina = parseInt(Math.random() * 5);
    cartaMaquina = cartas[numCartaMaquina];

    var numCartaJogador = parseInt(Math.random() * 5);

    while (numCartaMaquina == numCartaJogador){
        numCartaJogador = parseInt(Math.random() * 5);
    };

    cartaJogador = cartas[numCartaJogador];
    console.log(cartaJogador, cartaJogador.atributos);

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    document.getElementById("refresh").disabled = true;

    exibirOpcoes();

    var elementoSorteado = document.getElementById("sorteado");
    var elementoAtaqueSorteado = document.getElementById("ataque");
    var elementoDefesaSorteado = document.getElementById("defesa");
    var elementoPoderSorteado = document.getElementById("poder");

    elementoSorteado.innerHTML = cartaJogador.nome;
    elementoAtaqueSorteado.innerHTML = "Ataque: " + cartaJogador.atributos.ataque;
    elementoDefesaSorteado.innerHTML = "Defesa: " + cartaJogador.atributos.defesa;
    elementoPoderSorteado.innerHTML = "Poder: " + cartaJogador.atributos.poder;
}

function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = "";

    for (var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "' checked>" + atributo;
    }
    opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado () {
    var radioAtributos = document.getElementsByName("atributo");

    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value;
        }
    }
};
function jogar () {
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if (valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML = "UHUUUUL Parabéns, Você venceu!!!"
    } else if (valorCartaMaquina > valorCartaJogador) {
        elementoResultado.innerHTML = "Putz que pena, você perdeu"
    } else {
        elementoResultado.innerHTML = "EMPATE! Vamos lá, jogue denovo!"
    }
    
    var elementoSorteadoMaquina = document.getElementById("sorteadoMaquina");
    var elementoAtaqueSorteadoMaquina = document.getElementById("ataqueMaquina");
    var elementoDefesaSorteadoMaquina = document.getElementById("defesaMaquina");
    var elementoPoderSorteadoMaquina = document.getElementById("poderMaquina");

    elementoSorteadoMaquina.innerHTML = "Você jogou contra: "+ cartaMaquina.nome;
    elementoAtaqueSorteadoMaquina.innerHTML = "Ataque: " + cartaMaquina.atributos.ataque;
    elementoDefesaSorteadoMaquina.innerHTML = "Defesa: " + cartaMaquina.atributos.defesa;
    elementoPoderSorteadoMaquina.innerHTML = "Poder: " + cartaMaquina.atributos.poder;

    document.getElementById("refresh").disabled = false;
};