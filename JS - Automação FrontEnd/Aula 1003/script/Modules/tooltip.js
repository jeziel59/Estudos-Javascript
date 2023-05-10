export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip");

  function criarToolTipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    console.log(tooltipBox);
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  function onMouseOver() {
    function onMouseMove(event) {
      tooltipBox.style.top = event.pageY + 20 + "px";
      tooltipBox.style.left = event.pageX + 20 + "px";
    }
    function onMouseLeave() {
      tooltipBox.remove();
      tooltipBox.removeEventListener("mouseleave", onMouseLeave);
      tooltipBox.removeEventListener("mousemove", onMouseMove);
    }
    const tooltipBox = criarToolTipBox(this);
    this.addEventListener("mousemove", onMouseMove);
    this.addEventListener("mouseleave", onMouseLeave);
  }
  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
}
