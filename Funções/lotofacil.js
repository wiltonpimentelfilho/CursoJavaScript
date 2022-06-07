
function lotofacil() {

    var sorteio;

    var vetor = [];

    var i = 0;
  
    while (i < 15){
        
    //  random = (min, max) => Math.floor(Math.random() * (max - min) + min)    
        sorteio = Math.floor(1 + (Math.random() * 24)); //Retorna um número aleatório entre 1 e 25
        
        if (vetor.indexOf(sorteio) < 0) {
            vetor.push(sorteio);
            i= i + 1;
        }
       }
    return vetor;
}
console.log(lotofacil());