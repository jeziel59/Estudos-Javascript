// antes da função deve-se declarar que é async e o await antes do fetch
/*
async function puxarDados() {
  try { // tente
    const responseDados = await fetch("./dados.json"); // espera a promessa
    const jsonDados = await responseDados.json(); // espera o resultado da promessa
    console.log(jsonDados); // retorna o objeto do json
    document.body.innerText = jsonDados.aula; // utiliza a propriedade 'aula' do objeto e envia para o html
  } catch { // caso erro, execute;
    console.log("Erro");
  }
}
puxarDados();
*/

async function puxarDados() {
    const promiseDados = fetch("./dados.json");  // promessa de dados
    const promiseclientes = fetch("./clientes.json"); 

    const jsonDados = await (await promiseDados).json(); // espera para promessa dados ser recebido
    const jsonclientes = await (await promiseclientes).json();
    console.log(jsonDados)
    console.log(jsonclientes)
  }

puxarDados();

async function asyncSemPromise() {
  // Console não irá esperar.
  await setTimeout(() => console.log('Depois de 1s'), 1000);
  console.log('acabou');
}
asyncSemPromise();

async function iniciarAsync() {
  await new Promise(resolve => {  // criando promessa
    setTimeout(() => resolve(), 1000) // após um seg
  });
  console.log('Depois de 1s'); // é executada a função
  const lida = 5 + 5
  console.log(lida)
}
iniciarAsync();
