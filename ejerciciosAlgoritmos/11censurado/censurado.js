/* dado un texto y una busqueda, censurar todas las coincidencias de l busqueda en el texto con [-censuraro-] 

Si el texto o busquea están vacios mostrar: "no puedes leer el texto y la busqueda" en el caso de que ambos parámetros no lleguen
*/

function censurado(texto=false, busqueda=false){
    let resultado = "";

    if(!texto && !busqueda){
        resultado = "no puedes leer el texto y la busqueda";
    }else if(!texto && busqueda){
        resultado = "no puedes leer el texto";
    }else if(texto && !busqueda){
        resultado = "no puedes hacer la busqueda"
    }else if(texto && busqueda){
       resultado = texto.replace(new RegExp(busqueda, 'gi'),busqueda, "[-censurado]")
        //resultado = new RegExp(busqueda, 'gi')
    
 }
    return resultado;

}
console.log(censurado("hola43 holamanola hola caracol", "hola"));