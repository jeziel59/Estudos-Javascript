/*
//Função construtora class
class Button {
constructor (text, background) { //parametros da construção
this.text = text
this.background = background
}
element() { // metodo para criar o elemento
  const buttonElement = document.createElement('button') // cria o botao
  buttonElement.innerText = this.text // adiciona texto ao botao
  buttonElement.style.background = this.background // adiciona background
  return buttonElement // retorna o elemento
}
appendTo(target) { // metodo que utiliza o metodo de criação de elemento, e adiciona no html
  const targetElement = document.querySelector(target) // selecionando o elemento com o parametro body
  targetElement.appendChild(this.element()) // utilizando this. e acionando o metodo element 
  return targetElement // adiciona no body
}
}
const blueButton = new Button('Comprar', 'blue')
console.log(blueButton.element(this.element)) // retorna o elemento
console.log(blueButton) // retorna o objeto

console.log(blueButton.appendTo('body')) // utiliza a const blueButton e o metodo que adiciona ao html

*/
/*
// Criando objeto com a função construtora
const blueButton = new Button('Cpmprar', 'blue')
// Objeto criado com a função construtora utilizando o metodo de criação de button
console.log(blueButton.element())
//Função construtora comum
function Button(text, background) {
  this.text = text
  this.background = background
  }
    // Criando metodo para a função construtora 
  Button.prototype.element = function() {
    const buttonElement = document.createElement('button')
    buttonElement.innerText = this.text
    buttonElement.style.background = this.background
    return buttonElement
  }
    // Criando objeto com a função construtora
  const blueButton = new Button('Cpmprar', 'blue')
    // Objeto criado com a função construtora utilizando o metodo de criação de button
  console.log(blueButton.element())
*/

/*
class Button {
  constructor(options) {
    this.options = options;
  }
  static createButton(text, background) { // criando metodo na class
    const buttonElement = document.createElement('button')
    buttonElement.innerText = text
    buttonElement.style.background = background
    return buttonElement
  }
}
const blueOptions = {
  backgroundColor: 'blue',
  color: 'white',
  text: 'Clique',
  borderRadius: '4px',
}
const blueButton = new Button(blueOptions);
const blueStatic = Button.createButton('clique', 'blue') //utilizando createButton como metodo de button(class)

console.log(blueStatic)
*/

class Button {
  constructor(text, background) {
    this.text = text;
    this.background = background;
  }
  element() {
    const elementButton = document.createElement('button');
    elementButton.innerText = this.text;
    elementButton.style.background = this.background;
    return elementButton
  }
  static createBlue(text) {
    return new Button(text, 'blue'); // pré define a propriedade background para blue
  }
}

const blueButton = Button.createBlue('Comprar'); // passaando apenas o texto

console.log(blueButton) // retorna o objeto com comprar e blue