function verificaForm(){
	if(document.getElementById('nome').value == ""){
		alert('Preencha o nome!');
		document.getElementById('nome').style.borderColor = 'red';
		document.getElementById('nome').style.backgroundColor = '#ff7c0042';
	//	document.getElementById('nome').focus();
			return false;
	}
	return true;
}

function calcIMC() {
	if(document.getElementById('altura').value == ''){
		alert('Preencha o campo com a sua altura!');
		document.getElementById('altura').style.borderColor = "red";
		document.getElementById('altura').style.backgroundColor = '#ff7c0042';
		return false;
	}
	if(document.getElementById('peso').value == ''){
		alert('Preencha o campo com seu peso!');
		document.getElementById('peso').style.borderColor = "red";
		document.getElementById('peso').style.backgroundColor = '#ff7c0042';
		return false;
	}
	var altura = parseFloat(document.getElementById('altura').value);
	var peso = parseFloat(document.getElementById('peso').value);
	var imc = peso / (altura*altura);
	alert('Seu IMC é de: ' + imc);
}