let name = prompt('cual es tu nombre?');
let edad1 = parseInt(prompt('Cual es tu edad?'));
console.log(`hola ${name}, tienes ${edad1} el proximo año tendras ${edad1 + 1}`);

/* ------------------------------- */
let figure = prompt('debes elegir una figura: circulo, triangulo o rectangulo');
let base;
let heigth;
let radio;

switch(figure){
    case 'triangulo':
        baseTriangulo=parseInt(prompt(' introduce la base del triangulo'));
        alturaTriangulo=parseInt(prompt(' introduce la altura del triangulo'));
        alert(`el area del triangulo es ${(baseTriangulo * alturaTriangulo)/2 }`)
        break
    case 'rectangulo':
        baseRectangulo=parseInt(prompt(' introduce la base del rectangulo'));
        alturaRectangulo=parseInt(prompt(' introduce la altura del rectangulo'));
        alert(`el area del rectangulo es ${(baseRectangulo * alturaRectangulo) }`)
        break;
    case 'circulo':
        radio=prompt(`introduce el radio del circulo `);
        alert(`el area del circulo es ${Math.pi * Math.pow(radio,2)}`);       
         break;
    default: alert('la figura geometrica no es valida')
}
/* ------------------------------- */
//solicita un numero e imprime todos los numeros paras e impares desde 1 hasta ese numero con el mensaje: 'es par' o 'es impar'

let num = parseInt(prompt('introduce un numero'));
for(let i=1; i<=num; i++){
    if(i%2 === 0){
        alert(`${i} es par`);
    }else{
        alert(`${i} es impar`)
    }
}

// --------------------------- 

/* escribe un programa que pida un numero entero mayor que 1 y que escriba si el numero es primo o no

Un numero primo es aquel que solo es divisible por si mismo y la unidad */

let num2 = parseInt(prompt('introduce un numero'));
let divisores = 0

if( num2 === 1){
    console.log('el numero no es válido')
}else{

    for(let i=2; i < num2; i++ ){
        if(num2 % i == 0){
            console.log(`${num2} / ${i} = ${num2/i} no es primo`)
            break;
        }
    }
}
if(divisores== 0){
    console.log(`${num2} es primo`)
}

//------------------------------
/* escriba un programa que pida un numero entero mayor que ero y calcle su factorial.
el factorial es el resultado de multiplicar ese numero por sus anteriores ahasta la unidad:
!5 = 5 * 4 * 3 * 1
 */

let num3 = parseInt(prompt('introduce un numero'));
let resultado = 1;

for(let i = num3; i>0; i--){
    resultado *= i
}

console.log(`el factorial de ${num3} es ${resultado}`)

//-----------------------------
/* escribe un programa que permita ir introduciendo una serie indeterminada de numeros mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos numeros se han introducido */

let suma = 0;
let contador = 0;
while(suma <=50){
    suma += parseInt(prompt('introduce un numero para añadir a la suma'))
    contador ++
}
console.log(`la suma total es de : ${suma}`);
console.log(`el total de numeros introducidos es: ${contador}`);

//-------------------------------------------------
/* crea 3 arrays. El primero tendra 5 numeros y el segundo se llamara pares y el tercero impares, ambos estaran vacios. Despues multiplica cada uno de los numeros del primer array por un numero aleatorio entre 1 y 10, si el resultado es par guarda ese numero en el array de pares y si es impar en el array de impares. muestra por consola:
-la multiplicacion que se produce junto con su resultado con el formato 2x 3=6
-el array de pares e impares */

