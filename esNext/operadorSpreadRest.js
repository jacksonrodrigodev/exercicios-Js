// Operador ... rest(juntar)/spread(espalhar)
//Usar rest com parametro de função 

//Usar spread com objeto
const funcionario = {nome:'Maria', salario: 12348.99}
const clone = {ativo:true, ...funcionario}
console.log(clone)

// Usar spread com array 
const grupoA = ['João', 'Maria', 'Gloria']
const grupoFinal =['Pedro',...grupoA,'Rafaela']
console.log(grupoFinal)
