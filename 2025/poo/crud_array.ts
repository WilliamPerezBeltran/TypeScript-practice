
interface Category{
	id: number;
	name: string;
	image: string;
}


interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: Category;
	images: string[];
}

interface CreateProductDto extends Omit<Product ,'id' | 'category'>{
	categoryId: Category["id"];
}

interface UpdateProductDto extends Partial<CreateProductDto>{}

class BaseHttpService{
	constructor(protected url:string){}
 	
	async getAll(){
		const response = await fetch(this.url);	
		const data = await response.json();
		return data;
	}

	getUrl(){
		return this.url;
	}
}
console.log("===========================");
(async ()=>{

const url = 'https://api.escuelajs.co/api/v1/users?limit=10';
let base = new BaseHttpService(url);

let data =  await base.getAll();
console.log(`data: ${data}`);

console.log(`data => ${JSON.stringify(data)}`)

	
})();


const url = 'https://api.escuelajs.co/api/v1/users?limit=10';
let base = new BaseHttpService(url);

async function fetchData(){
	const data = await base.getAll();
	console.log(data);
}
//fetchData();


console.log("===========================");
	





