// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const botao = document.querySelector(".pesquisar");
botao.addEventListener("click", handleclick);
function handleclick(event) {
  event.preventDefault();
  const cepEdit = document.querySelector("#cep");
  const cep = cepEdit.value;
  const cep2 = fetch(`https://viacep.com.br/ws/${cep}/json/`);
  cep2
    .then((response) => {
      return response.text();
    })
    .then((response) => {
      const div = document.querySelector(".end");
      div.innerText = response;
    });
}
// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
function btc() {
  const bit = fetch("https://blockchain.info/ticker");
  bit
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response.BRL.buy;
    })
    .then((response) => {
      const money = response.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      const div2 = document.querySelector(".bit");
      div2.innerText = "Valor de compra da BitCoin " + money;
    });
}
btc()
setInterval(function () {
  btc();
}, 10000);

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
  divPiada = document.querySelector('.piada')
  
function piada() {
  const piada = fetch('https://api.chucknorris.io/jokes/random')
.then((response) => {
  return response.json();
}).then((response) => {
  divPiada.innerText = response.value
})
}
piada()
const btn = document.querySelector('.proxima')
btn.addEventListener('click', piada)