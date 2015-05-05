// Funcionalidades do Slider

// itens e quantidade de imagens no slider
var itens    = document.getElementsByClassName('item-slide');
var qtdItens = itens.length;

// tempo inicial (pré definido) para passar as imagens (em milisegundos)
var tempoSlide = 2000;

// Setando item inicial do Slider
var itemAtual = 0;

// ocultar todos os itens do slider
for (var i = 0; i < qtdItens; i++) {
	itens[i].style.display = "none";
};

// aparecer apenas o primeiro item do slider!
	itens[0].style.display = "block";


// Criar um botão dinamicamente de "Próximo" e um de "Anterior"
var botaoAnterior = document.createElement('input'),
	botaoProximo = document.createElement('input');

	botaoAnterior.setAttribute('value', 'Anterior');
	botaoAnterior.setAttribute('id', 'Anterior');
	botaoAnterior.setAttribute('type', 'submit');
	botaoProximo.setAttribute('value', 'Próximo');
	botaoProximo.setAttribute('id', 'Proximo');
	botaoProximo.setAttribute('type', 'submit');

document.getElementById('slider-bt').appendChild(botaoAnterior);
document.getElementById('slider-bt').appendChild(botaoProximo);

var nextItem = function () {

	for (var i = 0; i < qtdItens; i++) {
		itens[i].style.display = "none";
	};

	if ( (qtdItens-1) <= itemAtual )
		itemAtual = 0;
	else
		itemAtual++;

	itens[itemAtual].style.display = "block";

};

var prevItem = function () {
	for (var i = 0; i < qtdItens; i++) {
		itens[i].style.display = "none";
	};

	if ( itemAtual <= 0 )
		itemAtual = (qtdItens-1);
	else
		itemAtual--;

	console.log(itemAtual)

	itens[itemAtual].style.display = "block";
};

// Ações dos Botoes
document.getElementById('Proximo').onclick = nextItem;
document.getElementById('Anterior').onclick = prevItem;