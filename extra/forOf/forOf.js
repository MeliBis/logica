let precios = [100,250,500];

for (let value of precios) {
    console.log('precio sin iva: ' + value);
    //valor modificado:
    value *= 1.21;
    console.log('precio con iva: ' +value );
}

//-------------------------------------
//sobre una cadena:
let cadena= "hola, caracola";
for (let letra of cadena) {
    console.log(letra)
}

//sobre map

let matriculas = new Map([["ZA","Zamora"], ["SA", "salamanca"], ["VA", "valladolid"]]);
for(let matricula of matriculas){
    console.log(matricula);
}
//otro resultado
let matriculas2 = new Map([["ZA","Zamora"], ["SA", "salamanca"], ["VA", "valladolid"]]);
for (let [matricula, provincia] of matriculas2){
    console.log(matricula + " " + provincia)
}

//sobre un set

let tiradasDado = new Set([1,3,6,2,1,6,6,3,3]);

for (let tirada of tiradasDado){
    console.log(tirada);
}

//-------------------------------------
//diferencia for Of y for In
let names = ['paco', 'jose', 'cesar']

for (let name of names) {
    console.log(name)
}

for (let name in names) {
 console.log(name)
    }
    
//continue-break

for(let index in names){
    if(names[index]=== 'jose'){
        continue
    }console.log(index)
}
