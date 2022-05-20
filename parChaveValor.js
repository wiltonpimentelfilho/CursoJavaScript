// Conceito "chave/valor"

const saudacao = 'Opa!';

function exec() {
	const saudacao = "Diz aí!!!!"
	return saudacao
}

// Objetos são grupos aninhados de chaves/valores

const cliente = {
	nome:'Pedro',
	idade:'32',
	peso: '76',
	endereço: {
		rua: 'Rua dos bobos',
		numero: 0,
	}
}

console.log(saudacao);
console.log(exec());
console.log(cliente);
console.log(cliente.nome);