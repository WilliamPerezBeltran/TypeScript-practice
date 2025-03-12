class Database{

	private	static instance: Database;

	private constructor(){
		console.log("Conected DB");
	}

	static getInstance(): Database{
		if(!Database.instance){
			Database.instance = new Database();
		}
		return Database.instance;
	}

	query(sql:string){
		console.log(`Ejecute query: ${sql}`);
	}
}

const db1 = Database.getInstance();
db1.query("SELECT * from usuarios");
const db2 = Database.getInstance();
db2.query("SELECT * from usuarios");

console.log(db1 === db2);

