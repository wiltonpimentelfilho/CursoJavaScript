
function calcDiaria(){

	var entrada = prompt("Entre com o valor do seu salário: ");
	var salario = (entrada / 30).toFixed(2);
	return salario;
}

document.write("O valor do seu dia de trabalho é de: " + calcDiaria());

	

