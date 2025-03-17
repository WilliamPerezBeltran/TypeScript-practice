const persona = {
	rasta: "",
	nombre: ["will","osc"],
	genero: "masculino",
	age: 23,
	bio: function(){
		console.log(`${this.nombre[0]} ${this.genero} ${this.age}`);
		
	},
	saludo: function(){
		console.log( `hola bitches ${this.genero}`);
	},
	name:{
		pila: "bob",
		apellido: "rasta",
		"key": "sslproxies",
	},
}
console.log(persona.nombre);
persona.rasta = " rasta william fernando perez beltran"
console.log(persona.rasta);
console.log(persona.nombre);

console.log(persona.genero);
console.log(persona.age);
console.log(persona.bio());
console.log(persona.saludo());
console.log(persona.name.pila);
console.log(persona.name.apellido);
console.log(persona.name.key);
console.log(persona["name"]["key"]);

const x = "my string";
const xx = new String("my otro String");

console.log(x);
console.log(xx);
console.log(xx[0]);

const string4 = new String("Un objeto String");
console.log(string4);
