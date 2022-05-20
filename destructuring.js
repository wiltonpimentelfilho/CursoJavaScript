// Destructuring = capturar, retirar...
// Destructuring em objeto
const pessoa = {
    nome:'Ana',
    idade: 17,
    endereco: {
        Rua: 'Rua da vovó',
        numero: 13
    }
}

// utilizado neste formato, o destructuring captura 
// o nome e a idade do objeto pessoa.

const {nome, idade} = pessoa;
console.log(nome, idade);


// Destructuring em array

