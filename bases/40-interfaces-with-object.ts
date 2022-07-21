interface Json{
	toJson():string
}

class Person implements Json {
	constructor( private firstName:string, private lastName:string){

	}

	toJson():string{
		console.log('this this')
		console.log(this)
		return JSON.stringify(this);
	}
}

let person = new Person('John', 'Doe');
console.log(person.toJson());