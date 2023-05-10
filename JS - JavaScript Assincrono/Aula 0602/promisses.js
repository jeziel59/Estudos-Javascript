/*
Promise é uma função construtora de promessas. 
Existem dois resultados possíveis de uma promessa, 
ela pode ser resolvida, com a execução do primeiro argumento, 
ou rejeitada se o segundo argumento for ativado.
*/

// Verifica se uma condição é verdadeira ou false e então resolve ou rejeita
// a Promisse é um objeto construtor
const promessa = new Promise((resolve, reject) => { 
let cond = true 
if (cond) {
  setTimeout(() => { // contador até 2s
    resolve({nome: 'Jeziel', idade: 28})  
  }, 2000)

} else {
  reject('Falha') 
}
})

/*
O poder das Promises está no método then() do seu protótipo. 
O Callback deste método só será ativado quando a promise for resolvida. 
O argumento do callback será o valor passado na função resolve.*/
/*
const retorno = promessa.then((resolucao) => { // quando a promessa for true, é executado
  resolucao.profissao = 'WebDesigner' // adiciona ao objeto mais uma propriedade
  return resolucao // retorna com a nova propriedade
})
.then((resolucao) => { // em seguida ja executa outro
  console.log(resolucao)
  resolucao.hobby = 'Hotwheels'
  return resolucao
})
.then((resolucao) => {
  console.log(resolucao)
  resolucao.Sexo = 'Masc.'
  return resolucao
})
.then ((resolucao) => {
  console.log(resolucao)
}, rejeitada => { // podemos dar negação tambem como segundo argumento de then 
  console.log(rejeitada)
})
.finally(() => {
  console.log('Acabou')
})



console.log(retorno) // {nome: 'Jeziel', idade: 28, profissao: 'WebDesigner', hobby: 'Hotwheels', Sexo: 'Masc.'}


*/

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Usuario Logado')
  }, 1000)
}) 

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Usuario Carregados')
  }, 1500)
}) 

const carregouTudo = Promise.race([login, dados]) // executa quando a primeira for concluida

carregouTudo.then((resolucao) => {
  console.log(resolucao)
})