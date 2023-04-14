const controles = document.querySelector('#controles') // Selecionamos o Formulario
const css = document.querySelector('.css') // A area que exibira o CSS
const btn = document.querySelector('.btn') // o Botão que irá ser estilizado

function handleChange(event) { // função que cria a const, e chama o objeto e o show css
  const name = event.target.name // const name guarda o nome do objeto clicado
  const value = event.target.value // const valur, o valor
  handleStyle[name](value); // chamamos o objeto com o nome e o valor de cada
  showCss() // e após cada envio, executamos o show css
}

controles.addEventListener('change', handleChange) // a cada mudança, executamos o handle change, que irá executar o objeto

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

function showCss() { // aqui separamos em block com span com split e join
  css.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}