const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop() // Remove o ultimo indice 
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //remove o primeiro indice 
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//Splice pode adicionar e remover elementos 

//Adicionar 
pilotos.splice(2,0,'Bottas', 'Massa')
console.log(pilotos)

//Remover
pilotos.splice(3,1) //removeu Massa
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Novo Array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)