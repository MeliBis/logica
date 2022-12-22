function coincidencia(frase,busqueda){
    //limpiar frase,eliminar caracteres con replace,
    let texto_limpio =frase.toLowerCase().replace(/[,.]/gi,'');  /* palabras en minusculas, quita ',' */
    let resultado = 0;

    if(texto_limpio.includes(busqueda)){
        let palabras= texto_limpio.split(" ");
        let mapa = {};

        for(let palabra of palabras){
            if(mapa[palabra]){
                mapa[palabra]++;
            }else{
                mapa[palabra]= 1;
            }
        }
       /*  console.log(palabras)
        console.log(mapa); */
        resultado=mapa[busqueda];
        }else{
            resultado=0;
    }

    return resultado;
}
console.log(
    'numero de coincidencias en la frase: ',
    coincidencia("Hola, Meli Meli que tal, soy Meli que Barrios","meli"));