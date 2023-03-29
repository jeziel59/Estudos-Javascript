//função construtora comum
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

//Prototype é um objeto que consegue adicionar novas propriedades a função
//Criando prototype criamos funções isoladas, que objetos novos vão ter acesso, mas nao na construtora
//nesse caso:
//estamos adicionando na função construtora Pessoa por via de prototype + function
//a propriedade andar, que nesse caso adiciona uma string a propriedade da Pessoa
Pessoa.prototype.andar = function() {
  return this.nome + ' Andou'
}
/*
andre.andar()
'Andre Pessoa Andou'
*/
//Podemos adicionar varios como;
Pessoa.prototype.nadar = function() {
  return this.nome + ' Nadou'
}
/*
andre.nadar()
'Andre Nadou'
*/
const andre = new Pessoa('Andre', 23)

//
const Carro = { // type off Carro = Object
  marca: 'Ford', // type off Carro.marca = String ou seja, aceita apenas metodos de string
  preco: 2000,// type off = Number // aceita metodos de Number
// executando função, nesse caso o que importa é o resultado true ou false, tem propriedades de valor booleano
// para acessar os metodos e propriedades dessa função executada é; Carro.andar.
// Carro.andar.constructor.name = Function, já quando ativa; Carro.andar().constructor.name é uma string
  andar() {
    return true;
  }
}
/*
Carro // Object
Carro.marca // String // retorna a pripriedade string
Carro.preco // Number // retorna a propriedade que é um number
Carro.acelerar // Function // sem ativar a função, é uma function
Carro.acelerar() // Boolean // ativando a função se torna true ou false, que é string
Carro.marca.charAt // Function // sem ativar  = function
Carro.marca.charAt(0) // String // ativando, pega a letra que é uma string
*/

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoas (nome, sobrenome, idade){
this.nome = nome
this.sobrenome = sobrenome
this.idade = idade
}
Pessoas.prototype.nomeCompleto = function() {
  return this.nome + this.sobrenome
}

const Ind = new Pessoas('jeziel', ' silva', 28)
// Liste os métodos acessados por 
// dados criados com NodeList,
//, 
Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(Document.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
// Liste os construtores dos dados abaixo
const li = document.querySelector('li');
// se verifica por ex; li.click.constructor
li; // HTMLLIElement()
li.click; // Function()
li.innerText; //String()
li.value; //Number()
li.hidden; //Boolean()
li.offsetLeft; //Number()
li.click(); // não ativa nada

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //String()

