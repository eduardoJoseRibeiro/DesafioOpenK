let linhas = document.getElementById("linhas");
let colunas = document.getElementById("colunas");
let gerarBtn = document.getElementById("form__gerar--btn");
let matriz = document.getElementById("matriz");
let divCheckDestacar = document.getElementById("form__destacar--btn");
let checkDestacar = document.getElementById("form__destacar--check");
let formDestacar = document.getElementById("form__destacar");
let corPrincipal = document.getElementById("principal");
let corSecundaria = document.getElementById("secundaria");
let ok = document.getElementById("form__destacar--ok");

gerarBtn.addEventListener("click", function(e){
	e.preventDefault();
	matriz.innerHTML = geraMatriz(linhas.value, colunas.value);
	mostraDivCheckDestacar(linhas.value, colunas.value);
});

checkDestacar.addEventListener("change", function(e){
	e.preventDefault();
	if(checkDestacar.checked){
		formDestacar.style.display = "block";
	}else{
		formDestacar.style.display = "none";
	}
});

ok.addEventListener("click", function(e){
	e.preventDefault();
	colorirDiagonais();
});

function geraMatriz(nLinhas, nColunas){
	let inserir = "";
	for(let i = 1; i <= nLinhas; i++){
		inserir += "<div class='matriz__linha'>";
		for(let j = 1; j <= nColunas; j++){
			if(i == j && (i + j) == (parseInt(nLinhas) + 1)){
				inserir += "<div class='matriz__elemento principal secundaria'>" + i + " "+ j + "</div>";
			}else if((i + j) == (parseInt(nLinhas) + 1)){
				inserir += "<div class='matriz__elemento secundaria'>" + i + " "+ j + "</div>";
			}else if(i == j){
				inserir += "<div class='matriz__elemento principal'>" + i + " "+ j + "</div>";
			}else{
				inserir += "<div class='matriz__elemento'>" + i + " "+ j + "</div>";
			}
		}
		inserir += "</div>";
	}
	return inserir;
}

function mostraDivCheckDestacar(nLinhas, nColunas){
	if(nLinhas == nColunas){
		divCheckDestacar.style.display = "block";
		console.log("São iguais " + nLinhas + "  " + nColunas);
	}else{
		divCheckDestacar.style.display = "none";
		console.log("São Diferentes " + nLinhas + "  " + nColunas);
	}
}

function colorirDiagonais(){
	let elementos = document.querySelectorAll(".matriz__elemento");
	for(let i = 0; i < elementos.length; i++){
		if(elementos[i].classList.contains("principal")){
			defineCor(elementos[i], 0);
		}else if(elementos[i].classList.contains("secundaria")){
			defineCor(elementos[i], 1);
		}
	}
}

function defineCor(elemento, tipo){
	let diagonais = [corPrincipal, corSecundaria];

	if(diagonais[tipo].value == "azul"){
		elemento.classList.add("azul");
		elemento.classList.remove("vermelho");
		elemento.classList.remove("verde");
		elemento.classList.remove("default");
	}else if(diagonais[tipo].value == "vermelho"){
		elemento.classList.add("vermelho");
		elemento.classList.remove("azul");
		elemento.classList.remove("verde");
		elemento.classList.remove("default");
	}else if(diagonais[tipo].value == "verde"){
		elemento.classList.add("verde");
		elemento.classList.remove("vermelho");
		elemento.classList.remove("azul");
		elemento.classList.remove("default");
	}else{
		elemento.classList.add("default");
		elemento.classList.remove("vermelho");
		elemento.classList.remove("verde");
		elemento.classList.remove("azul");
	}
}