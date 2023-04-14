export default function initAnimaNumeros() {
// Observador **
// observa um objeto para verificar se houve alguma mudança
const observeTarget = document.querySelector('.numeros') // selecionando o numeros para identificar mudanças
const observer = new MutationObserver(handleMutation); // tipo de objeto que observa, acionando a function handlemutation
observer.observe(observeTarget,{attributes: true})

function handleMutation(mutation) {
  if(mutation[0].target.classList.contains('ativo')) { // verificando em mutation[0] se contem a classe ativo
    observer.disconnect() //caso sim, desconectar
    animaNumeros() // e ai sim ativar a função desejada, nesse caso para dar inicio a contagem
  }
}

function animaNumeros() { // função de animação
const numeros = document.querySelectorAll('[data-numero]') // recebendo a array de nuemros
numeros.forEach((numero) => { // para cada item da array executa
  const total = +numero.innerText; // colocando em total os itens da array transformados em numeros
  const incremento = Math.floor(total / 100) // incremento que fara a contagem até o total, total / 100 e arredondado com math.floor
  let start = 0; // inicio da contagem
  const timer = setInterval(() => { // timer que realizara a contagem recebendo de uma função anonima de setInterval pora realizar a contagem
    start = start + incremento; // inicio da contagem recebe ele mesmo + o incremento
    numero.innerText = start; // a area de numero recebe o start que vai incrementando
    if(start > total) { // quando o start for maior que o igual
    numero.innerText = total; // a arrea numero recebe o total
    clearInterval(timer) // e o timer é parado
    }
  }, 25 * Math.random()) // o intervalo de contagem de cada numero é gerado aleatoriamente
})
}
}