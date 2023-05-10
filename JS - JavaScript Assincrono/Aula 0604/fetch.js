
fetch('./dados.json')

.then (r => r.text())
.then(jsonText => {
  const jsonFinal = JSON.parse(jsonText) // outro metodo de transformar em objeto

})

const config = {
  player: "Google",
  tempo: "25.5",
  aula: "2.1 JS"
}

localStorage.config = JSON.stringify(config)

console.log(JSON.parse(localStorage.config)) // mostra como objeto

