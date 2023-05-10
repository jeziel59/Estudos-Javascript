export default class validarCpf {
  constructor(element) {
    this.element = element;//recebe a lista de cpf
  }
  limpar(cpf) {
    return cpf.replace(/\D/g, "");// 12° retorna apenas digitos
  }
  construir(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4"); //14° Aciciona traços com regexp
  }
  formatar(cpf) {//10° caso deja valido
    const cpfLimpo = this.limpar(cpf);//11° passa pelo metodo de linpar
    return this.construir(cpfLimpo);//13° e retorna passado pelo construir
  }
  validar(cpf) {  //7° metodo que ira validar e retornar true ou false se o metodo de cpf está correto
    const matchCPF = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g)//  
    return(matchCPF && matchCPF[0] === cpf) // caso o cpf corresponder com o regexp, irá retornar true
  }
  validarNaMudança(cpfElement) { //5° metodo que ira limpar,validar adicionar e remover classe de erro
    if(this.validar(cpfElement.value)) { //6° achionando o metodo de validação com o this // 8° caso esteja correto if, caso não false
      cpfElement.value = this.formatar(cpfElement.value) //9° caso true, entra para formatar.. apenas o value 
      cpfElement.classList.add('valido')//recebe classe de valido
      cpfElement.classList.remove('erro') // remove classe de invalido
      cpfElement.nextElementSibling.classList.remove('ativar') // remove elemento incluido para anunciar erro
    } else {
      cpfElement.classList.add('erro') //caso falso adiciona classe de erro
      cpfElement.classList.remove('valido') // remove classe de valido
      cpfElement.nextElementSibling.classList.add('ativar') // adiciona elemento de invalido
    }
  }
  adicionarEvento() {//3° evento que verifica se ouve mudanca em this element
    this.element.addEventListener("change", () => {
      this.validarNaMudança(this.element);//4°caso haja aciona o metodo de validação
    });
  }
  adicionarErroSpan() {
    const errorElement = document.createElement('span') // cria um span que recebera classe de atvo, por padrão é display none
    errorElement.classList.add('errotext') // display none
    errorElement.innerText = 'CPF Invalido'//texto da caixa
    this.element.parentElement.insertBefore(errorElement, this.element.nextElementSibling)// inserindo antes do proximo filho, o elemento criado errorElement
  }
  iniciar() { //1° inicia o plugin de validação
    this.adicionarEvento() // 2° com o this(input selecionada) acionamos o metodo de add eventos de mudança
    this.adicionarErroSpan()// ativando metodo que adiciona um elemento por JS para mensagem de erro
    return this
  }
}
