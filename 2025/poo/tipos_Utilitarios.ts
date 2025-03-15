// Partial<T> => Convierte todas las propiedades en opcionales 

interface User {
	name: string;
	age: string;
	email: string
}

type partialUser = Partial<User>;

const user1: partialUser = { name: "Alice" }; // ✅ Correcto
const user2: partialUser = {}; // ✅ Correcto (todas opcionales)
const user3:partialUser = { age: "bla" } 

console.log("===============================");

interface User1 {
	name: string;
	age: number;
}

type userRequire = Required<User1>;

const user22: userRequire =  {
	name: "blabal",
	age: 234
}
// const user2: RequiredUser = {};  Error: falta 'name' y 'age'

/*
Partial<T> ===> Convierte todas las propiedades en opcionales 
Required<T> ===> Convierte todas las propiedades en obligatorias
Readonly<T> ===> Convierte todas las propiedades en solo lectura no se pueden modificar 
Pick<T,k> ===> Extrae propiedades específicas de un tipo
Omit<T> ===> Excluye propiedades especiricas de un tipo
Extract<T,U> ===> Extra tipos comunes entre dos tipos
Exclude<T, U> → Excluye tipos específicos de una unión.
Record<K, T> → Objeto con claves K y valores T.
NonNullable<T> → Elimina null y undefined.
Awaited<T> → Extrae el tipo de retorno de una promesa.




*/


type Primitive = string | number | boolean;
type OnlyNumbers = Extract<Primitive, number>;

const num: OnlyNumbers = 42; // Correcto
// const str: OnlyNumbers = "hello";  Error: Solo acepta `number`

//Facilitan la reutilización, evitan código repetitivo y mejoran el tipado.
