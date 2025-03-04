const ss = "typescript"
console.log(ss)


// Primitive types
// The following illustrates the primitive types in TypeScript:

// Name	Description
// string	Represent text data.
// number	Represent numeric values.
// boolean	Have true and false values.
// null	Have one value: null.
// undefined	Have one value: undefined. It is the default value of an uninitialized variable.
// symbol	Represent a unique constant value.
// Object types
// Object types are functions, arrays, classes, etc

let a:string = "string"
let b:number = 234
let c:boolean = true
let d:null = null
let e:undefined = undefined 

console.log(`${a} ${b} ${c} ${d} ${e}  `)


let mixed: (number | string | bollean)[] = [1,2,3,4,5,true,false,"string"];
let mixed2: (number | string | boolean)[] = [1,2,3,4,5,true,false,"string",{}];
console.log(`${mixed}`)
console.log(`${mixed2}`)



function squareOf(n: number){
	return n * n
}
console.log(squareOf(12))
console.log(squareOf("nadsf"))


let aa: object = {
	b: "x"
}
console.log(aa.b)



let aaa:any = "asdf"
const as = (aaa as string).toLowerCase()
const ass = <string>aaa.toLowerCase()
console.log(as)
console.log(ass)



type userId = string | number | boolean;
let userId: userId

function gray(userId:userId){
	return (`userid ==> ${userId}`)
}

console.log(gray(234))


// literals types

type Sizes = "S" | "M" | "L" | "XL";

let camisa: Sizes;
camisa = "S";
camisa = "M";
camisa = "L";
camisa = "XL";

console.log(camisa)


// =================================

function animal(title?:string, verdad:boolean, edad:number){
	return { 
		title,
		verdad,
		edad
	}
}
let otro = animal("animal", true,234)
let otro1 = animal(true,234)
console.log(otro)
console.log(otro1)









