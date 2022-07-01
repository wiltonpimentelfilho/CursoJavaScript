const prompt = require('prompt-sync')(); //Chamando o pacote prompt-sysnc para poder executar o código no terminal.
                                         //Sem ele, teria que chamar a função em uma página HTML.//

var nome = prompt('Entre com seu nome: ');
//var nome = 'Wilton'

function mostra(){
    console.log('Olá, ' + nome + '!')
//    document.write('Olá, ' + nome + '!')
    return
}
mostra();