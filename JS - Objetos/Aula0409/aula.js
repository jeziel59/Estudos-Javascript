
//MÉTODOS DE OBJECT **
//Object.create(obj, defineProperties) retorna um novo objeto 
//que terá como protótipo o objeto do primeiro argumento.

//Objetos base com tipo prototipos**
// Objeto base com tipo prototipos para enviar aos novos objetos
//mas não entra em prototipos, entra dentro do objeto
const carro = {
  rodas: 4,
  marca:'marca', // caso o objeto que sera criado não tiver "marca", será utilizado esse
  ano(valor) { // forma de incluir um valor junto a criação do objeto
    this.ano = valor
    return this// retornando this objeto 
  },
  acelerar() {
    return this.marca + ' Acelerou'
  },
  buzinar() {
    return this.marca + ' Buzinou'
  },
}
// criando objeto com base no objeto carro, esse objeto herda as funções 
const honda = Object.create(carro).ano(1995) //.ano(1995) utilizando a função ano 
honda.marca = "Honda"

// Object Assign **
//Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos 
//enumeráveis dos demais objetos. O assign irá modificar o objeto alvo.

//Criação de um objeto com duas funções
const funcaoAuto = {
  acelerar() {
    return 'Acelerou'
  },
  freiar() {
    return 'Freiou'
  }
}

//Dois objetos
const moto = {
  rodas: 2,
  capacete: true,
}

const carro2 = {
  rodas: 4,
  mala: true,
}
//Colocando no prototype dos dois objetos as duas funções criadas
Object.assign(carro2, funcaoAuto)
Object.assign(moto, funcaoAuto)

//saida
//moto.acelerar()
//'Acelerou'
//moto.freiar()
//'Freiou'

//Define Propreties **
// Define propriedade imutaveis

// criação de objeto vazio
const motoR1 = {}
// definindo as propriedades do objeto
Object.defineProperties(motoR1, {
  rodas: {
    value: 2,
    configurable: false,// impede deletar e mudança de valor
    enumerable: true, // torna enumerável
  },
  capacete: {
    value: true,
    configurable: true,
    writable: false, // impede mudança de valor
  }
})

console.log(motoR1)


// Get e Set **
// função em um objeto dentro de um objeto para setar valores

//função comum
const bike = {
  capacete: true,
}

// Defininfo propriedades
Object.defineProperties(bike, {
  rodas: { // objeto dentro do objeto
    get() { // pega o valor da const _rodas
      return this._rodas; // retorna _rodas
    },
    set(valor) { //seta o valor a _rodas
      this._rodas = valor * 4 + " Total rodas" // equação para dar valor a _rodas com base no parametro passado
    }
  }
})

// bike.rodas //bike.rodas sem valor rpe definido = // undefined
// bike.rodas = 5 definindo o valor
// bike 
// {capacete: true, _rodas: 20} // bike já com o valor passado pela equação

// GetOwnPropertyDescriptoys() **
//Lista todos os métodos e propriedades de um objeto, com as suas devidas configurações.

Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, 'innerHeight');
// Puxa de uma única propriedade


// Object keys - values - entries **
//metodo para criar arrays com os objetos, esse metodo puxa apenas os enumerados

//Object.keys(obj) retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto. 
//Object.values(obj) retorna uma array com os valores do objeto.
//Object.entries(obj) retorna uma array com array's contendo a chave e o valor.

const motoR6 =  Object.keys(moto) //motoR6 (4) ['rodas', 'capacete', 'acelerar', 'freiar']

// Object GetOwnPropertyNames **
//metodo para criar arrays com os objetos, esse metodo sim puxa os enumerados

Object.getOwnPropertyNames(Array);
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype);
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

const carro5 = {
  marca: 'Ford',
  ano: 2018,
}
Object.getOwnPropertyNames(carro5);
// ['marca', 'ano']

// Object GetPrototypeOf e ObjectIs **

//Object.getPrototypeOf(), retorna o protótipo do objeto
//Object.is(obj1, obj2) verifica se os objetos são iguais e retorna true ou false.const frutas = ['Banana', 'Pêra']

const frutas = ['Banana', 'Pêra']
Object.getPrototypeOf(frutas); // retorna prototype de array
Object.getPrototypeOf(''); // retorna prototype de String


// Object.is(obj1, obj2) verifica se os objetos são iguais e retorna true ou false.
const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];

Object.is(frutas1, frutas2); // false // apesar de ter o mesmo conteudo, são objetos distintos 

const frutas3 = frutas1
console.log(Object.is(frutas1, frutas3)) // True // verdadeiro pois frutas 3 é apenas referencia de frutas 1

// Object freeze seal e prevenExtension **
// Object.freeze() impede qualquer mudança nas propriedades. Object.
// seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas. Object.
// preventExtensions() previne a adição de novas propriedades.

const carro6 = {
  marca: 'Ford',
  ano: 2018,
}
Object.freeze(carro6); // não permite alterações
Object.seal(carro6); // sela o objeto, nao consegue incluir nem excluir
Object.preventExtensions(carro6); // não consegue mais adicionar e sim retirar 

//verificação com object.is
Object.isFrozen(carro6); // true
Object.isSealed(carro6); // true
Object.isExtensible(carro6); // false

// Propriedades e metodos do prototipo **********************

const frutas4 = ['Banana', 'Uva'];
frutas.constructor; // Array // 
frutas.constructor.prototype // prototipo do construtor array
const frase = 'Isso é uma String';
frase.constructor; // String
frase.constructor.prototype // construtor de string


// HasOwnProperty **
//verificar se a propriedade foi criada com ela

const frutas5 = ['Banana', 'Uva'];
//verificando se tem a propriedade
frutas5.hasOwnProperty('map'); // false // a propriedade não é do obj frutas
Array.hasOwnProperty('map'); // false // a propriedade não é da array
Array.prototype.hasOwnProperty('map'); // true // a propriedade é dp prototype de array


//O Objeto frutas5 tem somente as proriedades;
// Object.getOwnPropertyNames(frutas5)
// (3) ['0', '1', 'length']
// restante é herdado


// PropertyIsEnumerable **
//{}.propertyIsEnumerable() verifica se a propriedade é enumerável.
Array.prototype.propertyIsEnumerable('map'); // false
window.propertyIsEnumerable('innerHeight'); // true

// IsPrototyoeOf(Valor) **
//Verifica se é o protótipo do valor passado.
const frutas6 = ['Banana', 'Uva'];

Array.prototype.isPrototypeOf(frutas6); // true


// To String **
// Retorna o tipo do objeto. O problema é toString() ser uma função dos protótipos de Array, 
// String e mais. Por isso é comum utilizarmos a função direto do Object.prototype.toString.call(valor).

const frutas = ['Banana', 'Uva'];
frutas.toString(); // 'Banana,Uva'// transforma em String
typeof frutas; // object // informa que é um object
Object.prototype.toString.call(frutas); // [object Array] // informa que é um objeto, do tipo array

const frase = 'Uma String';
frase.toString(); // 'Uma String'
typeof frase; // string
Object.prototype.toString.call(frase); // [object String]

const carro = {marca: 'Ford'};
carro.toString(); // [object Object]
typeof carro; // object
Object.prototype.toString.call(carro); // [object Object]

const li = document.querySelectorAll('li');
typeof li; // object
Object.prototype.toString.call(li); // [object NodeList]
