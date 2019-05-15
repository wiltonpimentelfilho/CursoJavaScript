var timerId = null; //Variável que armazena a chamada da função 'setTimeout'

function iniciaJogo(){

	var url = window.location.search;

	var nivel = url.replace('?', '');

	var tempo_segundos = 0;

	if (nivel == 1 ) {
		tempo_segundos = 20;
	}

	if (nivel == 2 ) {
		tempo_segundos = 15;

	}

	if (nivel == 3 ) {
		tempo_segundos = 10;
		
	}

	//Inserindo os Segundos no SPAN (imagem do cronômetro)
	document.getElementById('cronometro').innerHTML = tempo_segundos;

	//Quantidade de balões

	var qtde_baloes = 18;
	criaBaloes(qtde_baloes);

	//Imprimir qtde de Baloes Inteiros
	document.getElementById('baloes_inteiros').innerHTML = qtde_baloes;
	document.getElementById('baloes_estourados').innerHTML = 0;

	contagemTempo(tempo_segundos + 1);
}

	function contagemTempo(segundos){

		segundos = segundos - 1;

		if (segundos == -1){
			clearTimeout(timerId);
			gameOver();
			return false;
		}
		
		document.getElementById('cronometro').innerHTML = segundos;

		//A função 'setTimeout' recebe dois parâmetros ('Um função', o tempo em milisegundos)
		timerId = setTimeout('contagemTempo('+segundos+')', 1000);

	}

	function criaBaloes(qtde_baloes){

		for (var i = 1; i <= qtde_baloes ; i++) {

			var balao = document.createElement('img');
			balao.src = 'imagens/balao_azul_pequeno.png';
			balao.style.margin = '15px';
			balao.id = 'b'+i;
			balao.onclick = function(){ estourar(this);}

			document.getElementById('cenario').appendChild(balao);

			}
	}

	function estourar(e){
		var idBalao = e.id;

		document.getElementById(idBalao).setAttribute('onclick',' ');
		document.getElementById(idBalao).src = 'imagens/balao_pirata_pequeno.jpg';
		pontuacao(-1);
	}

	function pontuacao(acao){

		var baloes_inteiros = document.getElementById('baloes_inteiros').innerHTML;
		var baloes_estourados = document.getElementById('baloes_estourados').innerHTML;

		baloes_inteiros = parseInt(baloes_inteiros);
		baloes_estourados = parseInt(baloes_estourados);

		baloes_inteiros = baloes_inteiros + acao;
		baloes_estourados = baloes_estourados - acao;

		document.getElementById('baloes_inteiros').innerHTML = baloes_inteiros;
		document.getElementById('baloes_estourados').innerHTML = baloes_estourados;

		gameWinner(baloes_inteiros);

	}
	function gameWinner(baloes_inteiros){
		if (baloes_inteiros == 0){
			alert("Você Conseguiu, PARABÉNS!");
			paraJogo();
		}
	}

	function paraJogo(){
		clearTimeout(timerId);
	}


	function gameOver(){
		alert("Fim de Jogo!");
	}