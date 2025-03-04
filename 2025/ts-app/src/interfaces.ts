
console.log(/*========= interface simple ===================*/)

interface Per {
	nombre:string;
	edad:number;
}

const usua: Per = {nombre: "raul", edad:234}
console.log(usua.nombre)


console.log(/*=========interfaces complejas ===================*/)

interface Persona {
	nombre:string,
	edad:number,
}

interface Curso {
	titulo: string; 
	duracion: number;
}
interface Estudiante {
	nombre: string;
	cursos: Curso[];
	mostrarCurso: () => void;
}

const estudiante: Estudiante = {
	
	nombre: "william",
	cursos:[{ titulo:"a",duracion:2 },{ titulo:"s",duracion:23 },{ titulo:"t",duracion:34 }],
	mostrarCurso(){
		this.cursos.forEach((item)=>console.log(item.titulo))
	}
}

console.log(estudiante.nombre)
console.log(estudiante.mostrarCurso())


console.log(/*========= Extender interfaces ===================*/)

interface Animal {
	vuela: boolean;
	corre: boolean;
}

interface Perro extends Animal {
	name: string;
}

const perroAnimal: Perro = {
	vuela: true,
	corre: true,
	name: "string",
}

console.log(perroAnimal.vuela)
console.log(perroAnimal.corre)
console.log(perroAnimal.name)
console.log("=====")
console.log("=====")

Object.keys(perroAnimal).forEach(item => console.log(item))
Object.keys(perroAnimal).forEach(item => console.log(item))
console.log("=====")
Object.keys(perroAnimal).forEach((item) =>{
	console.log(item)
} )
console.log("=====")




console.log(/*========= readonly ===================*/)
interface Configuration{
	readonly key: string;
	puerto: number;
}

const variable:Configuration = {
	key: "dkasfjkajfklaj234234",
	puerto: 8080
}

Object.keys(variable).forEach((item) =>{console.log(item)})
console.log()







