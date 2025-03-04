const prices:number[] = [ 1,2,23,4,55] 
const pricess:(number | string)[] = [ 1,2,23,4,55,"ajdfk"] 

let user: [string,number,boolean];

user = ["name", 23, true]

let [namee, age, mayor] = user

console.log(`answer:  ${namee} ${age} ${mayor}`)


// const xx = (id:number, name?:string, tall?:boolean)=>{
// 	return {
// 		id:id,
// 		name: name || "no deal",
// 		tall: tall || true
// 	}
// }

const xx = (id:number, name?:string, tall?:boolean)=>{
	return {
		id,
		name:`${name?? 'no deal'} `,
		tall:`${tall ?? true }` 
	}
}
console.log(xx(123,"bla",true))
console.log(xx(123,"bla"))
console.log(xx(123,))
