// par nome/valor

const saudacao = 'Opa!' //contexto léxico 1

function exec(){
    const saudacao = 'Falaaa' //contexto léxico 2
    return saudacao
}

//Obejetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        longradouro: 'Rua muito Legal',
        numero:123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)