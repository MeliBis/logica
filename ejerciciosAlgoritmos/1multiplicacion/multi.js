/* funcion con parametro 'numero
-variable con texto encabezado
-multiplicar del 1 al 10
-concatenar a la variable string con multipicacion y su resultado */

function tablaMultiplicar(numero){
   // let resultado = " # Tabla del " + numero + " #"
   let resultado = `# Tabla del ${numero} # \n` ; //template strings

   for(let i=1; i<=10; i++){
    let multiplicacion=(i* numero);
     resultado += `${i} x ${numero} = ${multiplicacion} \n`
   }
   return resultado;
}
console.log(tablaMultiplicar(5))
/* ------------ */
