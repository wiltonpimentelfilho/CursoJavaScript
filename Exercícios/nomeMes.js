
function nomeMes(){
    const mes = ['','janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    let indice = prompt('Entre com um número para saber o mês equivalente: ');
    for(x in mes){
        console.log(mes[indice]);
    }
    return
}
nomeMes();