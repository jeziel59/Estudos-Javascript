// Mude a cor da tela para azul e depois para vermelho a cada 2s.

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).



const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const tempo = document.querySelector('.tempo')

iniciar.addEventListener('click', inicia)
pausar.addEventListener('click', pausa)
pausar.addEventListener('dblclick', reseta)

let i = 0; // contador
let timer; // irá receber o setInterval

function inicia() {
timer = setInterval(() => { // inicia contador
  tempo.innerText = i++
},100)
iniciar.setAttribute('disabled', '') // desativa ao clicar
}
function pausa() {
console.log('pausar')
clearInterval(timer) // pausa o contador timer
iniciar.removeAttribute('disabled', '') // remove atributo de iniciar ao clicar
 }
function reseta() { // limpa contador
  tempo.innerText = 0;
  i = 0
console.log('reseta')
 }