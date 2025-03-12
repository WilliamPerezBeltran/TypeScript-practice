class Persona {
	protected name:string;

	constructor(name:string){
		this.name = name 
	}
	
	presentarse(){
		return `hola ${this.name}`;

	}
}

class Estudiante extends Persona{
	private grado:string;

	constructor(name:string, grado:string){
		super(name);	
		this.grado = grado;
	}



	presentarse(){
		return `${super.presentarse()}----- ${this.grado}`;
	}
}

let estudiante = new Estudiante("roberto", "20");
console.log(estudiante.presentarse());



