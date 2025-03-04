
console.log("============ Enum ==============");

enum Role {
	Admin = 1,
	user = 2,
	guest = 3,
}

const userRole:Role = Role.Admin;


enum Status{
	Success = "SUCCESS", 
	Error = "ERROR"
}

const responde = Status.Success
console.log(responde)

console.log("============ Tuples ==============");

let user:[string,number]

user = ["name", 2234]
console.log(user[0])
console.log(user[1])

// evita modificaciones 
let pointer: readonly [number, number] 
pointer = [234,234]





console.log("============ Unknown Type ==============");
console.log("============ Never Type ==============");


