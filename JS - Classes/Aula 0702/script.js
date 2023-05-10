

const button = {
 get tamanho() {
  return this._numero || 100 // caso não definido retorna 100
 },
 set tamanho(numero) {
  this._numero = numero * 10; // caso seja definido um valor, será multiplicado por 10
 }
}

// caso seja definido apenas o get, o valor será estatico
// get e set são acessados como propriedade e não função
button.tamanho = 5
console.log(button) //{_numero: 50}

//1 class construtora
class Button1 {
  constructor(text, color) {
    this.text = text,
    this.color = color
  }
  get element() {//2 get- irá receber os parametros e setar ou não o type
    const type = this._elementType || 'button' //3  caso não for definido valor, considerado button
    const buttonElement = document.createElement(type) //4 poderá ou nao receber valor
    buttonElement.innerText = this.text
    buttonElement.style.color = this.color
    return buttonElement
  }
  set element(type) {
    this._elementType = type //5 atribui valor, caso informado
  }
}

const blueButton = new Button1('comprar', 'blue')
console.log(blueButton.element) //6 retorna button por padrão
blueButton.element = 'div' //7 setando com set o valor div
console.log(blueButton.element) //8 retorna div




