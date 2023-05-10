const regexpCEP = /\d{5}[-\s]?\d{3}/g;
///\d{5} começa com 5 digitos
// [-\s]? // pode ter traço ou espaço
//\d{3} // seguido se 3 digitos
///g; // seleciona geral
const ceps = [
  '87114-655',
  '87114 655',
  '87114655'
];

for(cep of ceps) {
  console.log(cep, cep.match(regexpCEP));
}

const regexpCPF = /(?:\d{3}[-.]?){3}\d{2}/g;
// /(?: pode ou não começar assim
// \d{3} // 3 digitos
// [-.]?) // com - e . opcional 
//{3}  // repetido 3 vezes
// \d{2}/g; // seguido de 2 digitos
const cpfs = [
  '000.000.000-00',
  '000-000-000-00',
  '000.000.000.00',
  '000000000-00',
  '00000000000'
];

for(cpf of cpfs) {
  console.log(cpf, cpf.match(regexpCPF));
}

const regexpCNPJ = /\d{2}[-.]?(?:\d{3}[-.]?){2}[-\/]?\d{4}[-.]?\d{2}/g;
/*
/\d{2}[-.]? começa com dois digitos com - e . opcional
(?:\d{3}[-.]?){2} seguido de 3 digitos com - e . opcional, repete 2 vezes e não forma grupo
[-\/]? barra e traço opcional
\d{4}[-.]? seguido de 4 digitos com - e . opcional
\d{2}/g; // finaliza c 2 digitos
*/ 
const cnpjs = [
  '00.000.000/0000-00',
  '00000000000000',
  '00-000-000-0000-00',
  '00.000.000/000000',
  '00.000.000.000000',
  '00.000.000.0000.00',
];

for(cnpj of cnpjs) {
  console.log(cnpj, cnpj.match(regexpCNPJ));
}


const regexpTELEFONE = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;
/* 
/(?:\+?55\s?)? // pode ou não começar com + 55 ou espaço, ou nada disso e não forma grupo
(?:\(?\d{2}\)?[-\s]?)? // seguido de pode ou não ter ( seguido de 2 digitos e pode ou n ter ) que pode ou n ter espaço, ou nada disso e não forma grupo
\d{4,5}[-\s]? // seguido de 4 ou 5 digitos, e pode ou não ter espaço ou traço
\d{4}/g; // seguido de 4 digitos
*/
const telefones = [
  '+55 11 98888-8888',
  '+55 11 98888 8888',
  '+55 11 988888888',
  '+55 11988888888',
  '+5511988888888',
  '5511988888888',
  '11 98888-8888',
  '11 98888 8888',
  '(11) 98888 8888',
  '(11) 98888-8888',
  '11-98888-8888',
  '11 98888 8888',
  '11988888888',
  '11988888888',
  '988888888',
  '(11)988888888',
  '98888 8888',
  '8888 8888'
];

const regexpEMAIL = /[\w.-]+@[\w-]+\.[\w-.]+/gi;
/*
/[\w.-]+ sequencia de caractere com . ou -
@[\w-]+ seguido de arroba com sequencia com . ou -
\.[\w-.]+/gi; // seguido de ponto mais sequencia com . ou - com case insensitive
*/ 
const emails = [
  'email@email.com',
  'email@email.com.org',
  'email-email@email.com',
  'email_email@email.com',
  'email.email23@email.com.br',
  'email.email23@empresa-sua.com.br',
  'c@contato.cc',
];

for(email of emails) {
  console.log(email, email.match(regexpEMAIL));
}


const regexpTAG = /(?<=<\/?)[\w]+/gi;
/*
/(?<=<\/?) se atras tiver < com ; opcional
[\w]+/gi; // seguido de caracteres
*/
const tags = [
  '<div>Isso é uma div</div>',
  '<div class="ativa">Essa está ativa</div>',
  '<img src="imagem" />',
  '<img src="imagem">',
  '<ul class="ativa">',
  '<li>Essa está ativa</li>',
  '</ul>'
];

for(tag of tags) {
  console.log(tag, tag.match(regexpTAG));
}
