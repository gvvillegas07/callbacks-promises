// Declaramos la función que servirá como callback
function despedirse() {
console.log("Adiós, hemos terminado el proceso.");
}
// Declaramos la función principal que recibe un parámetro llamado 'miCallback'
function iniciarProceso(miCallback) {
console.log("Iniciando el proceso principal...");
// Invocamos la función que recibimos como argumento
miCallback();
}
// Llamamos a la función principal pasando 'despedirse' SIN paréntesis