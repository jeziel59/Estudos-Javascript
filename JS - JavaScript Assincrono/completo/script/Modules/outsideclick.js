
export default function outsideClick(element, events,  callback) { // 6- recebendo o parametro this  // parametro de click // e a função do callback
  const html = document.documentElement // 7- const recebe o html todo
  const outside = 'data-outside' // 8- verifica se o click foi na caixa

  if (!element.hasAttribute(outside)) { // 9- se o element(this=li) não tiver o data-outside 
    events.forEach(userEvent => { // 10- para cada item do events(click e touch)
      //setTimeOut é adicionado, porque sem ele é realizado todo o processo já no primeiro clique, sendo assim quando clicamos no icone, que não é a li
      // já está removido o atributo, colocando o set time out só é ativado a função de remoção no clique fora da caixa
       setTimeout(() =>  html.addEventListener(userEvent, handleClickOuside)) // 11- adiciona ao html o event listener de click e touch acionando a function handleclickoutside, 
    })
  element.setAttribute(outside,'') // 12- adiciona ao element(this=li) o data-outside
  }
  function handleClickOuside(event) {  // 13- function que verifica se o click não foi na caixa da li
    if(!element.contains(event.target)) { // 14-  event.target é exatamente onde foi clicado, verifica se o click não foi em event (this=li)
      element.removeAttribute(outside) // 15- caso não tenha sido na caixam remove o atributo data-outside
      events.forEach(userEvent => { // 16- remove o event de click do html
      html.removeEventListener(userEvent, handleClickOuside)
      })
    callback()// 17- caso afirmações acima verdadeiras, adicona o callback da outsideclick
    }
  }
}