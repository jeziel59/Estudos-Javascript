export default function initTooltip() {

}

const tooltips = document.querySelectorAll('[data-tooltip'); // 1- Selecionamos o item que irá receber a tooltip

tooltips.forEach((item) => { // 2- caso tenha varios itens com tooltip, pada cada  um vamos adicionar um evenet listener
  item.addEventListener('mouseover', onMouseOver ) // 3- adicionando o event listener de mouse over, ativando a função onMouseOver
})

function onMouseOver() { // 3- função que ativa as outras
  const tooltipBox = criarToolTipBox(this);  // 4- criação do elemento

  this.addEventListener('mousemove', onMouseMove) // 6 ativação da posição do mouse no mouse move
  this.addEventListener('mouseleave', onMouseLeave) // 9- ativa o removedor no mouse leave

function onMouseMove(event) { // 7- o elemento recebe a posição exata do mouse
    tooltipBox.style.top = event.pageY + 20 + 'px'; // 8- a posição exata do move é enviada com +20 px para se diatanciar do ponteiro
    tooltipBox.style.left = event.pageX + 20 + 'px';// 8- a posição exata do move é enviada com +20 px para se diatanciar do ponteiro
  }

function onMouseLeave() { // 10 - função que remove o element e os eventos
    tooltipBox.remove() //remove o elemento tooltip na saida do mouse
    tooltipBox.removeEventListener('mouseleave', onMouseLeave)// remove o evento
    tooltipBox.removeEventListener('mousemove', onMouseMove)//remove o evento
}
}

function criarToolTipBox(element) { // 5- Criação do elemento HTML
  const tooltipBox = document.createElement('div') // a const recebe um create elemento com a tag selecionada
  const text = element.getAttribute('aria-label') // const recebe o valor da string em aria-label
  tooltipBox.classList.add('tooltip') // adiciona a classe tooltip
  tooltipBox.innerText = text // o elemento div criado recebe o innertext do aria-label
  console.log(tooltipBox) // elemento div ja criado, com classe e texto
  // adiciona a div ao final do body
  document.body.appendChild(tooltipBox) 
  return tooltipBox
  // se deve agora criar o CSS referente a esta tooltip
}