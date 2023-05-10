// Função para selecionar uma lista de CPF no html e retornar editado 

const cpfsLista = document.querySelectorAll(".cpf li"); // 1° Selecionamos a li que tem a lista
// em uma function expression utilizamos o spread em uma arrow function para passar o map em cada li rretornando o innertext
const elementsInnerText = ([...elements]) => {
  return elements.map((element) => element.innerText);
};
// Utilizamos regular expression em uma arrow function para remover tudo que não é digito e substituir por nada
const limparCpf = (cpf) => {
  return cpf.replace(/\D/g, "");
};
// regular expression para separar os numeros em grupo, e colocar pontuações corretas
const construitCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
};
// função que ativa a função de limpar e logo em seguida a de construir com o map
const formatarCpfs = (cpfs) => {
  return cpfs.map(limparCpf).map(construitCPF);
};
// função que ativa as outras 3, e envia para o html
const subCpf = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements); // recebe a array a FE elementsInnerText
  const cpfsFormatados = formatarCpfs(cpfs); // ativa a função que ativara as outras duas para limpar e construir o cpf

  cpfsElements.forEach((element, index) => { 
    element.innerText = cpfsFormatados[index];// for each que por index envia para o innertext o cpf formatado
  });
};

subCpf(cpfsLista); // ativando a função que irá ativar as outras, e incluir no html
