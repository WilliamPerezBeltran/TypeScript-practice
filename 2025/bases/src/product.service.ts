
import { Product } from "./product.model";

export const products:Product[] = []

export function send(data:Product){
	products.push(data) 
}

export function count():number{
	let total = 0;
	products.forEach((item)=>{
		total += item.stock 
	})
	return total
}
