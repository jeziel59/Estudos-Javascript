
function areaQuadrado(lado) {//função estabelecida // conteudo entre parenteses é uma var interna
  return lado * lado //conteudo da função
}
console.log(areaQuadrado(6))//Chama a função e da valor // "6" no caso é o valor enviado ára "lado"

function res() {
  return 10 * 3 // =30
}
var total = 5 * res(); // é possivel chamar uma função diretamente em equações, lembrando de chamar a função com parenteses " res() "
console.log(total)


function imc(peso, altura) {//peso e altura são os parametros, variaveis utilizadas dentro da função
  let imc = peso / (altura ** 2); //calculo do imc
  return imc;//manda o imc de volta
}
console.log(`Seu IMC é de ${imc(80, 1.80)}`) //console chamando a função com os argumentos

function corFavorita(cor) {
  if (cor == 'amarelo') { // aspas pois é um texto
    return "Você gosta do sol!"; // retorna esse texto para a caixa onde veio a cor
  } else if (cor == 'azul') {
    return "Você gosta do ceu!";
  } else if (cor == 'verde') {
    return "Você gosta da flotesta!";
  } else {
    return "Você não gosta de nenhuma cor"; // caso nenhuma cor, enviara esse texto
  }
}
console.log(`Que legal, ${corFavorita('')}`) //aspas pois é um texto

addEventListener('click', function(){console.log('Clicou') });
//addEventListener com o 'Click" executa uma função
// a função está comprimida na linha, mas é a mesma sintax 

function terceiraIdade(idade) {
//Caso o dado informado não for um numero, é enviado o return, e todo resto da função é ignorado
  if (typeof idade !== 'number') {
    return 'por favor preencha um numero'

  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade('oi'))

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
}
console.log(totalPaises); // erro, totalPaises não definido

var profissao = 'Designer';
function dados() {
  var nome = 'André'; 
  var idade = 28; //Não utilizado porque na função da return repete
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}
dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
outrosDados(); // retorna um erro pois está dentro de outra função