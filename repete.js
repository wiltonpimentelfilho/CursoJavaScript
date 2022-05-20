 function repete(){ 

	var repete = 1;
	while(repete < 10){
	//	alert("Mensagem: " + repete);
	//	document.getElementById('acao').innerHTML =  'repetição nº: ' + repete + '.<br>';
		document.write('repetiu ' + repete + ' vezes.<br>');
		repete = repete + 1;
	}
}


function repeteNovo(){
	for(i=0; i < 10; i++){
		document.write('repetição nº: ' + i + '.<br>');
	}
}