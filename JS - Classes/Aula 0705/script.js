import CountDown from './countdown.js' // importanto o plugin de contagem 

 // criando um objeto com a construtora class, passando como parametro a data desejada
const TempoParaNatal = new CountDown('24 December 2023 23:59:59 GMT-0300')
const TempoParaAnoNovo = new CountDown('31 December 2023 23:59:59 GMT-0300')
 // metodo sendo utilizado como propriedade
 //pois agora é uma propriedade construida com o class
console.log(TempoParaNatal.total)
console.log(TempoParaAnoNovo.total)
console.log(TempoParaNatal)