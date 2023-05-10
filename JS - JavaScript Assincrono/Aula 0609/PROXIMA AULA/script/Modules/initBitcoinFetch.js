export default function initBitcoinFetch() {
//fetch de api utilizando then

  fetch("https://blockchain.info/ticker")
  .then((response) => response.json()) //transforma a api em json
  .then((json) => { 
    const btc = document.querySelector(".btcPreco"); // seleciona a area que ira ser inserido
    btc.innerText = (1000 / json.BRL.sell).toFixed(4); // divide uma api por 1000 e fixa em 4 casas
  })
  .catch((erro) => {
    console.log(Error(erro)); // caso de erro apresenta erro no log
  });
}




