let horas = prompt('Quantas horas você trabalhou neste mês? Entre com o valor: ');
let valor = prompt('Qual o valor da sua hora de trabalho? Digite o valor: ');

function calculaSalario(horas, valor){
    
    let calcula = (horas * valor);
    alert('Você ira receber R$' + calcula + ' neste período.' )
    return
}

calculaSalario(horas, valor)