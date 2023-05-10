/*
// 1° Criada diretamente em uma string
const regexp = /\w+/gi; // 

// 2° Criada como argumento de uma RegularExpression

// 3° String
// e devemos utilizar \\ para meta characters, pois é necessário
// escapar a \ especial. As Flags são o segundo argumento
// Se passarmos uma string, não precisamos dos / /
// Seria util quando o usuario for digitar uma RegExmp, pois virá como string
const regexpObj1 = new RegExp('\\w+', 'gi');

// 4° Argumento
const regexpObj2 = new RegExp(/\w+/, 'gi');

'JavaScript Linguagem 101'.replace(regexpObj1, 'X');
// X X X

// Exemplo complexo:
//argumento
const regexpTELEFONE1 = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;
//string
const regexpTELEFONE2 = new RegExp('(?:\\+?55\\s?)?(?:\\(?\\d{2}\\)?[-\\s]?)?\\d{4,5}[-\\s]?\\d{4}', 'g');
*/

// Metodo em const
/*
const frase = "JavaScript, TypeScript e CoffeeScript";
const regexp = /\w{2,}/g;

//exec não podemos rodar diretamente pois entra em loop infinito com null
//então colocamos dentro de uma variavel
let regExmpresult;
while((regExmpresult = regexp.exec(frase)) !== null) { //regExmpresult recebe o exec, e enquanto for diferente de null
console.log(regExmpresult[0]) // exibibos o selecionado
}
*/
/*
const regexp = /\w{2,}/g;
const regexpSemG = /\w{2,}/;
const frase = 'JavaScript, TypeScript e CoffeeScript';

console.log(frase.match(regexp))
// ['JavaScript', 'TypeScript', 'CoffeeScript']

console.log(frase.match(regexpSemG))
// ["JavaScript", index: 0, input: "JavaScript,
// TypeScript e CoffeeScript", groups: undefined]
*/
/*
const frase = 'JavaScript, TypeScript, CoffeeScript';
const regexp = /Script/g
console.log(frase.split(regexp)) // (4) ['Java', ', Type', ', Coffee', '']
*/
/*
// const literal com uma ul
const tags = ` 
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

const regExp = /(?<=<\/?)\w+/g // com essa regexp vamos selecionar com lookback o que tiver entre setas
const result = tags.replace(regExp, 'div'); // utilizando a diz que criamos substituimos por div
console.log(result)
// <div>
//   <div>Item 1</div>
//   <div>Item 2</div>
// <div>

const regExp2 = /<li/g;
console.log(tags.replace(regExp2, '$& class=\'active\''))
*/
// <div>
//   <div class='active'>Item 1</div>
//   <div class='active'>Item 2</div>
// <div>
/*
const emails = `
empresa@email.com
contato@email.com
suporte@email.com
`;

const regexp3 = /(\w+@)[\w.]+/g //primeiro grupo, nome + @, segundo grupo sequencia e ponto
console.log(emails.replace(regexp3, "$1gmail.com")) // substitui por referencia grupo 1 + string
*/

const emails = `joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br
gearqq@hotmail.com`;

const regexp3 = /(\w+@)([\w.]+)/g
const resultado = emails.replace(regexp3, function(...args) {
  console.log(args)
  if(args[2] === 'homail.com.br') {
    return args[1] + 'hotmail.com'
  } else if(args[2] === 'ggmail.com.br') {
    return args[1] + 'gmail.com'
  }else if(args[2] === 'oulook.com.br') {
    return args[1] + 'outlook.com.br'
  } else {
    return args[0]
  }
})
console.log(resultado)
/*
Array de argumentos
0:"joao@homail.com.br"
1:"joao@"
2:"homail.com.br"
3:0
*/