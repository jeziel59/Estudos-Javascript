const controles = document.querySelector('#controles') // Selecionamos o Formulario
const css = document.querySelector('.css') // A area que exibira o CSS
const btn = document.querySelector('.btn') // o Botão que irá ser estilizado

const handleStyle = {//objeto que contem em cada propriedade, uma função com o nome da operação em CSS
  element: btn, // elemento a ser mudado
  innerText(value) {
    this.element.innerText =  value
  },
  color(value) {
    this.element.style.color = value
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value
  },
  height(value) {
    this.element.style.height = value + 'px'
  },
  width(value) {
    this.element.style.width = value + 'px'
  },
  border(value) {
    this.element.style.border = value + 'px'
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + 'px'
  },
  fontFamily(value) {
    this.element.style.fontFamily = value 
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'rem'
  },
}
controles.addEventListener('change', handleChange)

function handleChange(event) { 
  const name = event.target.name 
  const value = event.target.value 
  handleStyle[name](value);
  saveValues(name, value); // 1- colocamos a função de salvar para iniciar dentro da função de chamada
  showCss()
}
function saveValues(name, value) {// 2- função de salvar 
  localStorage[name] = value; // salvará no objeto padrao localstorage, a propriedade com name e value
}
function setValues() { // 4- seta os valores salvos antes
  const properties = Object.keys(localStorage); // a const properties recebe os valores do local storage
  properties.forEach(propriedade => { // e para cada valor
    controles.elements[propriedade].value = localStorage[propriedade]; //  const 'controles' que é o formulario, no indice a propriedade do looping, recebe o valor dessa propriedade do local storage
    handleStyle[propriedade](localStorage[propriedade]); // executa a função de setar valores com o local storage no indice do looping
  })
  showCss(); // executa também o show css
}
function showCss() { // aqui separamos em block com span com split e join
  css.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}
setValues() // 3- inicia a função de setar os valores
