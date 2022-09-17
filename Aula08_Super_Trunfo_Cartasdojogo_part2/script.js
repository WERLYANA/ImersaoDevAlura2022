const carta1 = {
    nome: "Bulbasauro",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    atributos: {
        ataque: 7,
        defesa: 8,
        poder: 6
    }
};
const carta2 = {
    nome: "Pikachu",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    atributos: {
        ataque: 7,
        defesa: 8,
        poder: 6
    }
};

const carta3 = {
    nome: "Squirtle",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    atributos: {
        ataque: 6,
        defesa: 7,
        poder: 5
    }
};
const carta4 = {
    nome: "Onix",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png",
    atributos: {
        ataque: 8,
        defesa: 9,
        poder: 4
    }
};
const carta5 = {
    nome: "Psyduck",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png",
    atributos: {
        ataque: 5,
        defesa: 6,
        poder: 9
    }
};
const carta6 = {
    nome: "Ditto",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png",
    atributos: {
        ataque: 6,
        defesa: 4,
        poder: 7
    }
};
const carta7 = {
    nome: "Dragonite",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png",
    atributos: {
        ataque: 10,
        defesa: 8,
        poder: 9
    }
};
const carta8 = {
    nome: "Exeggutor",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png",
    atributos: {
        ataque: 8,
        defesa: 9,
        poder: 7
    }
};
const carta9 = {
    nome: "Snorlax",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
    atributos: {
        ataque: 9,
        defesa: 8,
        poder: 9
    }
};
const carta10 = {
    nome: "Flareon",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png",
    atributos: {
        ataque: 8,
        defesa: 8,
        poder: 9
    }
};

const cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10];
var cartaMaquina;
var cartaJogador;

var btn = document.querySelector("#refresh");
    btn.addEventListener("click", () => {
    location.reload();
});

function sortearCarta(){
    var radioFacil = document.getElementById("radioFacil");
    var radioDificil = document.getElementById("radioDificil");
    
    if (radioFacil.checked == true) {
        var numCartaMaquina = parseInt(Math.random() * 10);
        cartaMaquina = cartas[numCartaMaquina];

        var numCartaJogador = parseInt(Math.random() * 10);

        while (numCartaMaquina == numCartaJogador){
            numCartaJogador = parseInt(Math.random() * 10);
        };

        cartaJogador = cartas[numCartaJogador];

        document.getElementById("btnSortear").disabled = true;
        document.getElementById("btnJogar").disabled = false;
        document.getElementById("refresh").disabled = true;

        exibirTitulo();
        exibirCartaJogador();
        exibirCartaMaquina();

    } else if (radioDificil.checked == true) {
        var numCartaMaquina = parseInt(Math.random() * 5);
        cartaMaquina = cartas[numCartaMaquina];

        var numCartaJogador = parseInt(Math.random() * 5);

        while (numCartaMaquina == numCartaJogador){
            numCartaJogador = parseInt(Math.random() * 5);
        };

        cartaJogador = cartas[numCartaJogador];

        document.getElementById("btnSortear").disabled = true;
        document.getElementById("btnJogar").disabled = false;
        document.getElementById("refresh").disabled = true;

        exibirTitulo();
        exibirCartaJogador();
    }    
}

function exibirTitulo() {
    var titulo = document.getElementById("titulo");
    titulo.innerHTML = `<h2>Para jogar escolha o seu atributo no card:</h2>`
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
        elementoResultado.style="display: block";
        elementoResultado.innerHTML = "UHUUUUL Parabéns, Você venceu!!!"
    } else if (valorCartaMaquina > valorCartaJogador) {
        elementoResultado.style="display: block";
        elementoResultado.innerHTML = "Putz que pena, você perdeu"
    } else {
        elementoResultado.style="display: block";
        elementoResultado.innerHTML = "EMPATE! Vamos lá, jogue denovo!"
    }
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("refresh").disabled = false;

    exibirCartaMaquina();
    exibirInfoCartaMaquina();
};

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById('carta-jogador');
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    // ou divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + ": " + cartaJogador.atributos[atributo] + "<br>";
    }

    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>';
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById('carta-maquina');
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    // ou divCartaMaquina.style.backgroundImage = "url(" + cartaMaquina.imagem + ")"

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';

    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`

    divCartaMaquina.innerHTML = moldura + nome;
}

function exibirInfoCartaMaquina() {
    var divCartaMaquina = document.getElementById('carta-maquina');
    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';

    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`

    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos){
        opcoesTexto += "<br>" + atributo + ": " + cartaMaquina.atributos[atributo] + "<br>";
    }

    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>';
}