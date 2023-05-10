import ValidarCpf from "./validarCpf.js";


// Para iniciar, puxamos a lista que tem o cpf para uma const 
// e ativamos na constructor class o metodo iniciar
const cpf = document.querySelector("#cpf");
const validarCpf = new ValidarCpf(cpf).iniciar();
