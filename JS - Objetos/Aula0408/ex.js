// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const sec = document.querySelectorAll("p");
console.log(sec);

const conta = Array.prototype.reduce.call(sec, (acc,item) => {
  return (acc += item.innerText.length);
},0)
console.log(conta)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function Cria(tag, classe, conteudo) {
  const elem = document.createElement(tag);
  classe ? elem.classList.add(classe) : null
  conteudo ? elem.innerText = conteudo : null
  return elem;
}
console.log(Cria("h1", "ativo", "olá"));
// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const Cria2 = Cria.bind(null,'h1','titulo')
console.log(Cria2('olá'))
