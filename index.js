class Contador{
    
    
 constructor(ciudad,pais,clima) {
 this.ciudad = ciudad;
 this.pais = pais;
 this.clima = clima;
 this.contador = 0;
 }

 static contarGeneral = 0;

incrementoContador(){

  this.contador++;  
  Contador.contarGeneral++;
}

}

let contador1 = new Contador ("Buenos Aires, Argentina, Soleado");
contador1.incrementoContador ();

let contador2 = new Contador ("Francia, Paris, Nublado");
contador2.incrementoContador ();

let contador3 = new Contador ("Dominicana, SantoDomingo, lluvioso");
contador3.incrementoContador ();

console.log(contador1)
console.log(contador2)
console.log(contador3)
console.log(Contador.contarGeneral);