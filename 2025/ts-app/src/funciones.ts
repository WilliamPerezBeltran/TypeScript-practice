

// normal function
function suma(a:number,b:number):number{
	return a + b 
}

console.log(suma(3,3))

// parametros opcioneles y nullish coalescing ( ?? )
function sa(a?:string){
	return `hi parametro: ${a?? 'valor por defecto'}`
}

console.log(sa("string"))
console.log(sa())

function nombre(name?:string){
	return `retorna el parametro ${name ?? "ole"}`
}

console.log(nombre("william"))
console.log(nombre())

//parametros rest 
function asdf(...numeros: number[]){
	console.log(numeros)
	console.log(numeros)
	console.log(numeros)
	let array = numeros.map((item)=> item*2)
	console.log(array)
}
console.log(asdf(1,2,3,4,5))



function qwer(...numeros: number[]){
	console.log(numeros)
	console.log(numeros)
	console.log(numeros)
	let array = numeros.map((item)=> item*2)
	console.log(array)
}
console.log(asdf(1,2,3,4,5))

//sobrecarga de funciones 






/*
🎯 Conclusión
En este tutorial, aprendimos:
✅ Parámetros opcionales (?) y nullish coalescing (??).
✅ Parámetros por defecto para valores predeterminados.
✅ Parámetros rest (...) para manejar múltiples argumentos.
✅ Sobrecarga de funciones para manejar diferentes tipos de entrada.

*/























