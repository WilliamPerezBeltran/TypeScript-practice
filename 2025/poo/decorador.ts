/*

   fuente: https://www.entredata.org/aprendiendo-typescript/decoradores-en-typescript-anadiendo-poder-a-tu-codigo
*/



console.log("======================= Aplicando decoradores a una clase ============================");
function decorator(constructor: Function){
	console.log("splash");
}

@decorator
class MiClase{
	constructor(){
		console.log("entro al constructor de MiClase");
	}
}

let miclase = new MiClase();
console.log(miclase);
/*

 la ejecucion de este codigo va ser:

 splash 
 entro al constructor de MiClase
 MiClase{}

 primero se ejecuta el decorador, luego el contructor con la inicializacion  con new MiClase()

 */



console.log("======================= Aplicando un decorador a un método  ============================");

function methodDecorator(target: Object, propertyKey: string, descriptor: PropertyDescriptor){
		console.log("entro al methodDecorator");
}

class MiClase2{
	@methodDecorator
	miMetodo(){
		console.log("entro al metodo");
	}
}


let miclase2 = new MiClase2();
console.log(miclase2.miMetodo());


function methodDecorator_(
  target: Object,                // 🔹 La clase que contiene el método
  propertyKey: string,           // 🔹 El nombre del método decorado
  descriptor: PropertyDescriptor // 🔹 Información sobre el método (acceso, modificación, etc.)
) {
  console.log('Método decorado');
}




console.log("======================= Aplicando un decorador a una propiedad  ============================");

function propertyDecorator(target: Object, propertyKey: string ){
		console.log("entro al propertyDecorator");
}

class MiClase3{
	@propertyDecorator
	miPropiedad?: string;
}


let miclase3 = new MiClase3();

miclase3.miPropiedad = "Eric demaine"
console.log(miclase3.miPropiedad);










