export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-tab="menu"] a[href^="#"]');
  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    console.log(href);
    const section = document.querySelector(href);
    console.log(section);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
