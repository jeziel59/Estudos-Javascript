class Veiculo {
  constructor(rodas) {
    this.rodas = rodas
  }
  acelerar() {
    console.log('Acelerou')
  }
}
// Neste exemplo extendemos o constructor de moto para ter a propriedade capacete, 
class Moto extends Veiculo {
  constructor(rodas, capacete) { // necessario passar os parametros da class
    super(rodas) // parametros da class passado no super
    this.capacete = capacete // novo parametro
  }
  acelerar() { 
    super.acelerar()
    console.log('acelerou rapido')
  }
  empinar() {
    console.log('Empinou com ' + this.rodas + ' rodas')
  }
}

const honda = new Moto(2, true) // parametro da class e extends
console.log(honda) //Moto {rodas: 2, capacete: true} // parametro capacete adicionado