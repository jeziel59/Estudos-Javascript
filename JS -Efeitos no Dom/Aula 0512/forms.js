/*
const userName = document.querySelector('.userName')// area que recebera o nome em change
const name1 = document.querySelector('#nome') // campo do nome do usuario
function handleChangeNome(event) { 
  userName.innerText = event.target.value // função adiciona o valor de nome no campo userName
}
name1.addEventListener('change', handleChangeNome) // função sendo ativada pelo change
*/
/*


// Validação 
const verificacao = document.querySelector('#contato') // selecionando toda lista de input

function handleChange(event) {
  const target = event.target
  if (!target.checkValidity()) { // caso não foi valido
    target.classList.add('invalido') // é adicionado a classe de invalido
    verificacao.nome.setCustomValidity(' Seu nome é importante!') // mensagem de retorno personalizada para nome 
    target.nextElementSibling.innerText = target.validationMessage // exibe mensagem de requisito padrão
  }
}
verificacao.addEventListener('change', handleChange) // ao change, xecuta a função de verificação


// Select // checkbox // radio

function handleColor(event) {
  if(event.target.checked) { // caso radio ou check estiver marcado;
    console.log(event.target.checked)
    console.log(event.target.value)
  }
  document.body.style.backgroundColor = event.target.value //style de body recebe o background com o value da
}
verificacao.addEventListener('change', handleColor)
*/

//recebendo em objeto

const contato = document.querySelector('#contato');
const dados = {} // objeto que ira receber

function handleChange(event) {
  dados[event.target.name] = event.target.value // a propriedade name era o value preenchido em change
}

contato.addEventListener('change', handleChange)