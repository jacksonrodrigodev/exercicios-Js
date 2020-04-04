//novo recurso ES2015

 const pessoa={
     nome: 'Ana',
     idade: 5,
     endereco:{
         lougradouro:'Rua ABC',
         numero:1000
     }
 }

 const { nome, idade } = pessoa
 console.log(nome,idade)

 const{ idade:i,nome:n}=pessoa
 console.log(n,i)

 const { sobreNome,bemHumorada = true}=pessoa
 console.log(sobreNome,bemHumorada)

 const { endereco:{lougradouro,numero,cep} } = pessoa
 console.log(lougradouro,numero,cep)

// const {conta:{ag,num} } = pessoa

//console.log(ag,num)
