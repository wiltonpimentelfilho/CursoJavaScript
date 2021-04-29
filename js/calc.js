function Calculadora() {
	// body...
	var num1 = document.getElementById('num1').value;
	var num2 = document.getElementById('num2').value;
	var operacao = document.getElementById('operacao').value

	if (num1 == '' || num1 == null){
		alert('Digite um número válido');
		return false;
	}

	if (num2 == '' || num2 == null) {
		alert('Digite um número válido');
		return false;
	}

	num1 = parseFloat(num1);
	num2 = parseFloat(num2);


	switch (operacao){

		case '1':
			resultado = num1 + num2;
			break;

		case '2':
			resultado = num1 - num2;
			break;

		case '3':
			resultado = num1 * num2;
			break;

		case '4':
			resultado = num1 / num2;
			break;

		default:
			alert('Opção selecionada é inválida!');
			return false;
	}

	
	document.getElementById('result').value = resultado;
}