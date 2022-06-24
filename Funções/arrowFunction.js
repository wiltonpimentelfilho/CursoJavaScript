//Armazenando uma função em uma variável
const imprimirSoma = function (a, b){
    console.log(a + b);
}

imprimirSoma(2,3);

//Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(4, 7));

//Arrow function com retorno implícito

const subtrai = (a, b) => (a-b)
console.log(subtrai(8,2));

//Arrow function com operador ternário ' ? '.
//O Operador ternário é composto de 3 partes:
// . A primeira parte é uma expressão que irá retornar verdadeiro ou falso: 'nota>=7';
// . A segunda parte que será retornada se a expressão for verdadeira: 'Aprovado';
// . A terceira parte que será retornada se a expressão for falsa; 'Reprovado'

const statusAluno = nota => nota>=7 ? 'Aprovado' : 'Reprovado'

console.log(statusAluno(7))