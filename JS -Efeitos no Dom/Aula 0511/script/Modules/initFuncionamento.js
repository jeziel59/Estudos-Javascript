export default function initFuncionamento() {
// Após adicionar no HTML os dias e o horario de funcionamento, puxamos ele para o JS
//deve-se criar o indicador fechado, e caso a classe for incluida, está indicandoaberto

const funcionamento = document.querySelector('[data-semana]') //  recebendo os dias da semana que funciona, como uma string
// Puxamos para outra const o data set com o devido nome
// Transformando em Array utilizando o split por virgula, e o map para transformar em numeros
const diasSemana = funcionamento.dataset.semana.split(',').map(Number); 

const funcionamento2 = document.querySelector('[data-horario')
const horario = funcionamento2.dataset.horario.split(',').map(Number)

const dataAgora = new Date() // Utilizando o construtor na const
const diaAgora = dataAgora.getDay() // podemos puxar dela o dia atual
const horarioAgora = dataAgora.getHours() // e a hora atual

// recebe true ou false, se o index da semana for diferente de -1, recebe true // recebe menos 1 se for false porque não existe na array
const semanaAberto = diasSemana.indexOf(diaAgora) !== -1; 
// se o horario estiver entre o index 0 e 1, recebe true ou false
const horarioAberto = (horarioAgora >= horario[0] && horarioAgora < horario[1]) 

// Se a const semanaAberto e horarioAberto for true, o objeto do data- selecionado recebe classe aberto
if (semanaAberto && horarioAberto) {
  funcionamento.classList.add('aberto')
}
}