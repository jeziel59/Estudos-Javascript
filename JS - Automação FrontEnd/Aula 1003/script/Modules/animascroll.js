export default function animaScroll() {
  const section = document.querySelectorAll('[data-anima="scroll"]');
  const metadeWindow = window.innerHeight * 0.6;
  function anima() {
    section.forEach((section) => {
      const secTop = section.getBoundingClientRect().top;
      const isSectionVisible = secTop - metadeWindow < 0;
      if (isSectionVisible) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }
  if (section.length) {
    anima();
    window.addEventListener("scroll", anima);
  }
}
