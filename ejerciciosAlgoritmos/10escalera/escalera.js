/* dado un numero, mostrar una escalera con escalones de "[-]"
usando el numero para los niveles de la escalera */

function escalera(numero){
    let escalera_completa = "";

    for(let nivel = 1; nivel <= numero; nivel ++){
       /*  console.log("nivel: ", nivel); */
       let escalones = "";

       for(let escalon= 1 ; escalon <= nivel; escalon++){
        escalones += "[-]";
       }
       escalera_completa += escalones + '\n';
      /*  console.log("nivel",nivel, escalones); */
    }
    return escalera_completa;
}
console.log(escalera(5));