export default function animaScroll() {
const section = document.querySelectorAll('[data-anima="scroll"]')

if (section.length) {
const metadeWindow = window.innerHeight * 0.6;
   function anima() {
    section.forEach((section) => {
      const secTop = section.getBoundingClientRect().top;
      const isSectionVisible = (secTop - metadeWindow) < 0; 
      if (isSectionVisible) {
        section.classList.add('ativo')
      }
    })
   }
anima()
window.addEventListener('scroll', anima)
}
}