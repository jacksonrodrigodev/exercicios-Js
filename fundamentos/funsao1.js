// Funsoes sem retorno

function imprimirSoma(a,b){
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2) /// somou 2 com undefined e gerou um not a number
imprimirSoma(2,10,5,41,38,97) // conciderou os 2 primeiros parametros e desconciderou o restante
imprimirSoma() // executou dois undefined e gerou um not a number 

//funsão com retorno

function somar(a=1,b=1){
    return a + b
}

console.log(somar(50+60))
console.log(somar(2)) // somando com o segundo parametro padrao b == 1
console.log(somar()) // vai fazer a soma dos valores padrão 1+1 = 2 