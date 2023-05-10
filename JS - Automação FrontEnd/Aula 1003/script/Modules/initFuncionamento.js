export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const funcionamento2 = document.querySelector("[data-horario");
  const horario = funcionamento2.dataset.horario.split(",").map(Number);
  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();
  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const horarioAberto = horarioAgora >= horario[0] && horarioAgora < horario[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}
