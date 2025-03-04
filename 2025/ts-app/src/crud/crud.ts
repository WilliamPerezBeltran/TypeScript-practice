interface User{
	id:number,
	name:string,
	email:string,
}

class UserService{
	private users: User[] = [];
	private nextId: number = 1;

	create(name:string, email:string):User{
		const newUser = { id: this.nextId++, name,email };
		this.users.push(newUser);
		return newUser;
	}

	getAll():User[]{
		return this.users;
	}

	getById(id:number): User| undefined {
		return this.users.find((item)=> item.id === id)
	}

	update(id:number,name?: string, email?:string):User | null{
		const user = this.getById(id)
		if (!user) return null;
		
		if(name) user.name = name 	
		if(email) user.email = email
		
		return user
	}	

	delete(id: number):boolean{
		const user = this.users.findIndex((item)=> item.id === id )
		if (user == -1 ) return false 

		this.users.splice(id,1)
		return true 
	}
}

let usuario = new UserService();
usuario.create("willim", "williampere@gmail.com")
usuario.create("oscar", "oscar@gmail.com")
usuario.getById(1)
console.log(usuario.getAll())
console.log(usuario.getById(1))
console.log(usuario.delete(1))
console.log(usuario.getAll())
