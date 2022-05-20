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