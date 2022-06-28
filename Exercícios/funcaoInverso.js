function inverso(valor){
    const tipo = typeof valor
    
    if (tipo == 'boolean') {
        return console.log(!valor)
    }
    else if (tipo == 'number'){ 
        return console.log(-valor)
    }
    else (tipo == 'string')
       return console.log("Tipo Booleano ou número esperados, tente novamente.")
}


inverso('fal')