let valor 
console.log(valor) // quando a variavel não é inicializada o valor é undefined

valor = null // Serve para zera a variavel se a mesma estiver com endereço se referencia de uma outra variavel

console.log(valor)

//console.log(valor.toString()) // ERRO ao tentar acesssar propriedade de um valor null

const produto = {}

//console.log(produto.nome.a) // ERRO ao tentar acessar o atrinuto de um objeto undefined
console.log(produto) /// não gera undefined pois já está definido o objeto vazio {}
console.log(produto.nome)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined, deixar que o js faça isso. 
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)