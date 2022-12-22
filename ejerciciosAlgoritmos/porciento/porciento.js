function porciento(porcentaje, numero){
    let operacion = (numero * (porcentaje/100))
    /* console.log(operacion) */
    let resultado = `El ${porcentaje} porciento de ${numero} es ${operacion}%`
    return resultado;
}
console.log(porciento(12,897));