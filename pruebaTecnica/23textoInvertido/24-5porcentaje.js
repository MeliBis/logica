/* cuanto es el x por ciento de x numero? */

function porcentaje(porcentaje, numero){
    let operacion = (numero * (porcentaje / 100));
    let resultado = `el ${porcentaje}% de ${numero} es ${operacion}`
    return resultado;
}
console.log(porcentaje(20,100));