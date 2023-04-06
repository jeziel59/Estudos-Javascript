export default function initModal() {
  
const botaoAbrir = document.querySelector('[data-modal="abrir"]'); // botao abrir
const botaoFechar = document.querySelector('[data-modal="fechar"]'); // botao fechar do modal
const containerModal = document.querySelector('[data-modal="container"]'); // conteiner do modal

if (botaoAbrir && botaoFechar && containerModal) { // se os 3 botoes existirem, executa
function toggleModal(event) { 
event.preventDefault() //cm a pag ainda n existe prevent
containerModal.classList.toggle('ativo') // se não estiver com a classe adicina, se estiver remove
}
function cliqueForaDoModal(event) {
  if (event.target === this) { // se o target do click for no container do modal, e não especificamente no modal, executa o toggle  
    toggleModal(event)
  }
}
botaoAbrir.addEventListener('click', toggleModal)
botaoFechar.addEventListener('click', toggleModal)
containerModal.addEventListener('click', cliqueForaDoModal)
}
}

