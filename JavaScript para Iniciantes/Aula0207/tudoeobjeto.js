var nome = 'André';

nome.length; // 5
nome.charAt(1); // 'n'
nome.replace('ré', 'rei'); // 'Andrei'
nome; // 'André'

var btn = document.querySelector('#botao');
// com essa função podemos criar uma variavel, ebuscar no documento com o QuerySelector 
// a class com " . " ou o Id com " # " a classe ou id desejado, e atribuir a var
//btn.addEventListener('click', function clicou(){console.log('clicou')})
//Dessa forma, podemos por ex adicionar um event a var
btn.classList.add('ativo')
// ou adicionar uma classe

console.log('Exercicios')
// nomeie 3 propriedades ou métodos de strings
toLocaleUpperCase
toLowerCase
charAr
// nomeie 5 propriedades ou métodos de elementos do DOM
/*btn.appendChild
btn.toString
btn.className
btn.previousElementSibling
btn.nextElementSibling*/
function myFunction() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}
// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

