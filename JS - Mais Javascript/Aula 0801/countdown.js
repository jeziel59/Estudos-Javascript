export default class CountDown { // exportando o plugin
  constructor(futureDate) { // recebendo como parametro a data passada 
    this.futureDate = futureDate;  
  }
  get _actualDate() { 
    return new Date();// colocando a data atual em um metodo interno
  }
  get _futureDate() {
    return new Date(this.futureDate); // data do parametro em um metodo interno
  }
  get _timeStampDiff() {
    return this._futureDate.getTime() - this._actualDate.getTime(); // diferença até a data do parametro
  }
  get days() {
    return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000)); // utilizando math para arredondar 
  }
  get horas() {
    return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
  }
  get minutos() {
    return Math.floor(this._timeStampDiff / (60 * 1000));
  }
  get segundos() {
    return Math.floor(this._timeStampDiff / 1000);
  }
  get total() {
    const days = this.days;
    const hours = this.horas % 24; // restante da divisão por 24
    const minutes = this.minutos % 60
    const seconds = this.segundos % 60
    return { // metodo total retornando um objeto
      days,
      hours,
      minutes,
      seconds,
    }
  }
}
