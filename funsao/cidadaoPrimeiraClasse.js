//Funsão em JS é First-Class Object (Citizens)
//Higher-order function

//criar de forma literal 

function fun1(){}

//Armazenar em uma variavel 

const fun2 = function(){}

//Armazenar em uma array
const array = [function (a,b){ return a + b}, fun1, fun2 ]
console.log(array[0](2,3))

//Armazenar em um atributo de objeto 

const obj = {}
obj.falar = function (){ return 'Opa'}

console.log(obj.falar())

//passar funsao como parametro

function run(fun){
    fun()
}

run(function(){ console.log('Executando...')})

//Uma funsão pode retornar/conter uma funsão

function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,3)(4)

const maisCinco = soma(2,3)
maisCinco(4)