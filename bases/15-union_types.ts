function add(a:any,b:any){
	if (typeof(a) === "string" && typeof(b)==="string"){
		return a.concat(b)

	}
	if (typeof(a) === "number" && typeof(b)=== "number"){
		return a+b
	}

	throw new Error("parameter must be string or number")

}

console.log(add(1,2))
console.log(add("1","2"))
console.log(add("1",2))
console.log(add(true, false))


console.log(" to resolve this issue mus be use 'union type |'")

function add1(a:number | string ,b:number | string ){
	if (typeof(a) === "number" && typeof(b)=== "number"){
		return a+b
	}
	if (typeof(a) === "string" && typeof(b)==="string"){
		return a.concat(b)

	}

	throw new Error("parameter must be string or number")

}

console.log(add1(1,2))
console.log(add1("1","2"))
console.log(add1("1",2))
