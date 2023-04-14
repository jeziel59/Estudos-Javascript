import outsideclick from './outsideclick.js';
export default function dropDownMenu() {

const dropdown = document.querySelectorAll('[data-dropdown]'); // 1- seleciona os itens do li

// 2-  para cada item da ul dentro da li, adiciona o evento que ao userEvent(trouch e click), aciona a function HandleClick
dropdown.forEach(menu => {  
  ['touchstart', 'click'].forEach(userEvent => { 
    menu.addEventListener(userEvent, handleClick) 
  })
});
// 3- 
function handleClick(event) { // 3- função que adiciona e remove a classe ao li
  event.preventDefault(); // previnimos o padão do link
  this.classList.add('active') // 4- adiciona a classe 'ativo' a li
  outsideclick(this,  ['touchstart', 'click'], () => {  // 5- chamamos a function outsideclick com parametro this, de click e retornando a callback se positivo
    this.classList.remove('active') // 18- remove a classe ativo caso retorne o callback
  })
}
}


