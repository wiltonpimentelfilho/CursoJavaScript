function carreguei() {
	document.getElementById('log').innerHTML += "carreguei.<br>";

}

function redimensionei() {
	document.getElementById('log').innerHTML += 'Tela redimensionada!<br>';

}

function clique() {
	document.getElementById('img1').src = 'botao.jpg';
	document.getElementById('log1').innerHTML = 'Imagem alterada!<br>';
}

function doisCliques() {
	document.getElementById('img1').src = 'AudioRetrato.png';
	document.getElementById('log1').innerHTML += 'Retorno imagem original!<br>';
}

function saiDoCampo(){
	document.getElementById('log2').innerHTML += 'Mouse saiu do campo!<br>';
}

function alterei(){
	document.getElementById('log2').innerHTML += 'Alterou o campo!<br>';
}

function entreiNoCampo(){
	document.getElementById('log2').innerHTML += 'Entrou no campo!<br>';
}

function selecionei(){
	document.getElementById('log2').innerHTML += 'Campo selecionado!<br>';
}

function pressionei(){
	document.getElementById('log2').innerHTML += 'Teclado Pressionado!<br>';
}

function resetei(){
	document.getElementById('log2').innerHTML += 'Formulário limpo!<br>';
}

function submeti(){
	document.getElementById('log2').innerHTML += 'Formulário enviado!<br>';
	return false;
}

function sobre(){
	document.getElementById('cores').style.backgroundColor = 'red';
	document.getElementById('log3').innerHTML += 'O mouse está sobre o elemento!<br>';
}

function paraBaixo(){
	document.getElementById('cores').style.backgroundColor = 'blue';
	document.getElementById('log3').innerHTML += 'A tecla do mouse foi pressionada!<br>';
}

/* function movendo(){
	document.getElementById('cores').style.backgroundColor = 'yellow';
	document.getElementById('log3').innerHTML += 'O mouse está se movendo!<br>';
}
*/
function paraCima(){
	document.getElementById('cores').style.backgroundColor = 'green';
	document.getElementById('log3').innerHTML += 'A tecla do mouse foi solta!<br>';
}


function saindo(){
	document.getElementById('cores').style.backgroundColor = 'orange';
	document.getElementById('log3').innerHTML += 'O mouse deixou o elemento!<br>';
}