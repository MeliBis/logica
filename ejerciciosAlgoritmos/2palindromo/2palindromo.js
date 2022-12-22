/* dada una cadena de texto, comprobar si es un palindromo o no
Los palindromos son palabras que se. leen igual aun estando invertio
por ejemplo: ana, bob, otto, allivesevilla */

function palindromo (texto){
    let invertido = texto.split('').reverse().join('');
    console.log(invertido);

    return invertido === texto;
  /*   if(invertido == texto ){
        return true;
    }else{
        return false;
    } */
}

console.log ("¿es un palindromo? " + palindromo('mel'));