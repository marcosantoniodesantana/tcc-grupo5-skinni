//Código responsavél por inserir titulo com limitação e corte nas tags marcadas com o id titulo-item
let listaTitulo = [
	"Camisa Ousa Desafiar o Deus da Guerra",
	"Camisa Escanor Body Builder",
	"Camisa Social Ninja",
	"Moletom Ninja",
	"Camisa Zabuza Momochi",
	"Camisa Colisão",
	"Camisa a Arte é Uma Explosão, BOOM!"
];

const tituloProduto = document.querySelectorAll("#titulo-item");
console.log(tituloProduto.length)

for (var i = 0; i < tituloProduto.length; i++) {
	//document.write(tituloProduto[i].innerHTML = listaTitulo)
	tituloProduto[i].innerHTML = listaTitulo[i+0];

	let limite = 20;

	for (let analise of tituloProduto){
		const verifica = analise.innerText.length > limite;
		const pontos = verifica ? "..." : "";
		analise.innerText = analise.innerText.substring(0, limite) + pontos;
	}

	if (tituloProduto[i].innerText.length < limite) {
		tituloProduto[i].classList.toggle("altura");
	}


}

	let intensVitrine = document.querySelectorAll(".itens");
//Parte responsavél por fazer a execução do menu

let sombraMenu = document.querySelector("#sombra-menu");

let menubt = document.querySelector('#menu-bar');
menubt.addEventListener("click", () =>{
	let menuOptions = document.querySelector('.menu');
	menuOptions.classList.toggle('visible');
	
	sombraMenu.classList.toggle("sombra-menu");
	document.querySelector(".cabecalho").classList.toggle("camada");

	let menuIcon = document.querySelector(".fa-solid");

	if (menuIcon.classList.contains('fa-bars')) {
		menuIcon.classList.remove('fa-bars');
		menuIcon.classList.toggle('fa-xmark');
		document.querySelector('#menu-bar').classList.toggle('menu-clicado');
	}else{
		menuIcon.classList.remove('fa-xmark');
		menuIcon.classList.toggle('fa-bars');
		document.querySelector('#menu-bar').classList.remove('menu-clicado');
	}

});

//Fecha o menu caso ele esteja aberto e a página seja rolada

window.addEventListener("scroll", ()=>{
	while(sombraMenu.classList == "sombra-menu"){
		menubt.click();break;
	}
});

document.querySelector(".menu > ul > li:nth-child(2)").classList.toggle("marcador-pagina");

//Parte que adiciona a biblioteca de aparecimento gradual com animação

let linkConta = document.querySelector('.menu > ul > li:nth-child(1)').addEventListener("click", ()=>{
let subMenuOptions = document.querySelector('.submenu');
	subMenuOptions.classList.toggle('menu-option-visible');
});

document.querySelectorAll(".vitrine > .itens").forEach((iten) =>{
iten.setAttribute('data-aos', 'fade-up');
iten.setAttribute('data-aos-duration', '2000');
});

//Munitora a caixa de pesquisa

let caixaPesquisa = document.querySelector("#pesquisa");
caixaPesquisa.addEventListener("input", ()=>{
	if(caixaPesquisa.value.length > 0){
		document.querySelector(".barra-pesquisa").classList.add("pesquisando");
		document.querySelector(".pesquisar-icon").style.color = "rgb(229 227 43)";
	}else{
		document.querySelector(".barra-pesquisa").classList.remove("pesquisando");
		document.querySelector(".pesquisar-icon").style.color = "#000000";
	}
});

//Rolagem para as laterais

let vitrine = document.querySelector('.vitrine');

let rolarDireita =  document.querySelector(".proximo").addEventListener("click", () =>{
 vitrine.scrollBy(350, 0);
});

let rolarEsquerda = document.querySelector('.anterior').addEventListener("click", ()=> {
vitrine.scrollBy(-350, 0);
});

//TESTANDO NOVA ROLAGEM PARA AS LATERAIS:

let pEsquerda = document.querySelector(".p-esquerda");

let pDireita = document.querySelector(".p-direita");

let nVitrine = document.querySelector(".vitrine-mais-vendidos");

pDireita.addEventListener("click", ()=>{
	nVitrine.scrollBy(350, 0);
})

pEsquerda.addEventListener("click", ()=>{
	nVitrine.scrollBy(-350, 0);
})

//IMPORTANTE!!!!!! => https://michalsnik.github.io/aos/