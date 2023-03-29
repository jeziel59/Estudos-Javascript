/*Objetos nativos são aqueles definidos na especificação da linguagem e são implementados independente do host.

// Construtores de objetos nativos
Object
String
Array
Function

Objetos do host são aqueles implementados pelo próprio ambiente. Por exemplo no browser possuímos objetos do DOM, como DomList, HTMLCollection e outros. Em Node.js os objetos do Host são diferentes, já que não estamos em um ambiente do browser.

// Objetos do browser
NodeList
HTMLCollection
Element

USER
Objetos do user, são os objetos definidos pelo seu aplicativo. Ou seja, qualquer objeto que você criar ou que importar de alguma biblioteca externa.

const Pessoa = {
  nome: 'André';
}
*/
VERIFICAR SE EXISTE
O typeof retorna o tipo de dado. Caso esse dado não exista ou não tenha sido definido, ele irá retornar undefined. Ou seja, quando não for undefined quer dizer que existe.

if (typeof Array.from !== "undefined") {
  console.log('existe')
} else {
  console.log('não existe')
}
if (typeof NodeList !== "undefined");

// Liste 5 objetos nativos
JavaScript Number Object. ...
JavaScript Boolean Object. ...
JavaScript String Object. ...
JavaScript Date Object. ...
JavaScript Array Object. ...
// Liste 5 objetos do browser

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
