import { send, count } from "./product.service"
import { products } from "./product.service"

console.log(products)


send({
	title:"title perro ",
	name:"name william ",
	number:234234,
	date:new Date(),
	stock: 12
})

console.log(products)
console.log(count())





