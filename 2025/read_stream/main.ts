import { promises as fs } from "fs";


async function myReadFile(file:string):Promise<void>{
	try{
		const data:string = await fs.readFile(file,"utf8"); 
		console.log(data)
	}catch(err){
		console.log("Error reading file", err);

	}
}
	
 myReadFile("./files/sentiment.csv");

