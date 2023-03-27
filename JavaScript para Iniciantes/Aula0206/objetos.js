var pessoa = {
  nome: 'Jeziel',
  idade: 28,
}
//para acessar:
console.log (pessoa.nome)

var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado*lado
  },
  perimetro(lado){
    return this.lados * lado // a pripriedade this seleciona o objeto, e a propriedade seguido do ponto; this.lados
  }
}
console.log(quadrado.area(5)) // é chamado a var seguido da propriedade, mas podendo ser adicionado  um dado para a função
console.log(quadrado.perimetro(5))

var menu = {
  width: 800,
  height: 200,
  backgroundcolor: 'black',
}
menu.backgroundcolor = 'white'
var bg = menu.backgroundcolor // atribuindo a propriedade a uma nova var
menu.color = 'blue'

console.log('Exercicios')
// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
let pessoal = {
  nome: 'Jeziel',
  sobrenome: 'Silva',
  idade: 28,
  mostrar() {
return console.log(pessoal.nome + ' ' + pessoal.sobrenome)
  }
}
// Crie um método no objeto anterior, que mostre o seu nome completo
// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
 carro.preco = 3000

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'labrador',
  cor : 'preto',
  idade: 10,
  late(esta) {
    if (esta === 'sim') {
     return cachorro.late = 'latindo'
    } else {
     return cachorro.late = 'quieto'
    }
  }
}

cachorro.late('sim')
