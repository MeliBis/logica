class Coche{
    constructor(modelo, velocidad,antiguedad){
        this.modelo=modelo ;
        this.velocidad=velocidad;
        this.antiguedad=antiguedad;  
      }
      aumentaVelocidad(){
        this.velocidad += 1; //es un metodo
      }
      reducirVelocidad(){
        this.velocidad -= 1;
      }
}
/* var coche1= new Coche('chevy',200,2003);

document.write("<h1>Velocidad: " + coche1.velocidad+ "</h1>")
coche1.aumentaVelocidad();
coche1.aumentaVelocidad();
coche1.aumentaVelocidad();
coche1.aumentaVelocidad();
coche1.aumentaVelocidad();
document.write("<h1>Velocidad: " + coche1.velocidad+ "</h1>")
coche1.reducirVelocidad();
document.write("<h1>Velocidad: " + coche1.velocidad+ "</h1>") */

console.log('----------herenia agregar nuevo objeto----------');
class Autobus extends Coche{
    constructor(modelo, velocidad,antiguedad){
        super(modelo, velocidad,antiguedad);
        this.altura=5;
    }
    mostrarAltura(){
        return "la altura del bus es "+ this.altura
    }
}
var autobus1= new Autobus('pegaso',400,2019);
console.log(autobus1.mostrarAltura());