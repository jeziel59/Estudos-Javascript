export default function animaScroll() {
const section = document.querySelectorAll('[data-anima="scroll"]')

if (section.length) {
const metadeWindow = window.innerHeight * 0.6; // const recebe o valor de 60% da janela do usuario
   function anima() {
    section.forEach((section) => { // para cada sessão
      const secTop = section.getBoundingClientRect().top; // const recebe o valor da distancia da sec para o top da tela
      const isSectionVisible = (secTop - metadeWindow) < 0; // const recebe  60% da tela menos a distancia do topo for menor que 0 
      if (isSectionVisible) { // caso true ativa o IF
        section.classList.add('ativo')
      }
    })
   }
anima() // ativa a função ao menos uma vez, para o site iniciar visivel
window.addEventListener('scroll', anima)
}
}