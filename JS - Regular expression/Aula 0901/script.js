// Procura: @ ou ©
const regexp = /\u0040|\u00A9/g;

'andre@origamid.com ©'.replace(regexp, '---');
// andre---origamid.com ---


function handleKeyboard(event) {
  console.log(event.key);
}
// Com Destructuring
function handleKeyboard({key}) {
  console.log(key);
}

document.addEventListener('keyup', handleKeyboard);
