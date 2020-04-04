const notas = [5,6,7,8,9,10]

for (let i in notas) {
    console.log(i,notas[i])
}

const pessoa ={
    nome:'Ana',
    sobreNome:'Silva',
    idade:29,
    peso:64
}

for(let atributos in pessoa){
    console.log(`${atributos} = ${pessoa[atributos]}`)
}