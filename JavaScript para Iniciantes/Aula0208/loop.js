// for (para) var que é igual a zero, for menor que 10, executa e recebe mais 1
// incremento no inicio
for (var num = 0; num <= 10; num++) {
//ação a ser executada
  console.log(num);
}
//while(enquanto) i for maior ou igual a zero, i recebe -1
var i = 10
while (i >= 0) {
  console.log(i);
  i--;
}
//while a for menor ou igual a 10 a recebe ele mesmo mais 2
var a = 0
while (a <= 10) {
  console.log(a);
  a = a + 2;
}
var videoGames = ['Switch', 'PS4', 'XBox', '3DS']
//enquanto item for menor que o comprimento da array, item recebe +1
for (var item = 0; item < videoGames.length; item++ ) {
  console.log(videoGames[item]) // conforme item recebe mais um, muda o item da array
  if (videoGames[item] === 'XBox') {
    break;
  }
}
//foreach chama uma função, para cada item da array
videoGames.forEach(function(item){
  console.log(item)
})
//  caso queira passar qual o numero(index) de cada item, basta colocar index do lado do valor(item)
var frutas = ['maça', 'banana', 'pera', 'abacaxi']
frutas.forEach(function(item, index){
  console.log(item, index)
})