class Database{
	static instancia: Database | null = null;

	private constructor(private name:string){}

	getName(){
		return this.name;
	}

	static create(name:string){
		if(Database.instancia === null){
			Database.instancia = new Database(name);
		}
		return Database.instancia;

	}
}

const db3 =  Database.create("latorre");
const db1 =Database.create("latorre");

const db2 =Database.create("asdfdf");

console.log(db1 === db2);
console.log(db1 === db2);
console.log(db1 === db3);



