function getdata():Promise<string>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			console.log(" 1 1 1 1");
			resolve("2 2 2 2");
		},2000);
			
	});
}

getdata();

/*
	Una promise o promesa en castellano es un objeto que presenta la terminación o el fracos de una operación asíncrona.
	promise => Object thats represent tree statemens: pending, fufilled, rejected.
	es un objecto que representa una operacion asincrona en la cual puede tener tres estados: pendiente, completado y rechazado.
*/


function datos(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{ 
			console.log("3-3-3-3-3") 
			resolve(console.log("4-4-4-4-4"))
		},3000);

	});

}
datos().then((mensaje)=>console.log(mensaje));


function obtenerData(){
	return new Promise(()=>{
		setTimeout(()=>{
			console.log("Get data from the source ");
		});
	});
}
async function ejecutar(){
	try{
		console.log("entro al try del ejecutar");
		const resultado = await obtenerData();
	}catch(err){
		console.log( `funciont ejectuar error ${err}`);
	}
}

ejecutar()



class Usuario{
	constructor(private name:string){}	

	 obtenerPerfil(){
		return new Promise(()=>{
			setTimeout(()=>{
				console.log("----------------execution------------");
			},5000)
		});
	}
}
const usuario = new Usuario("william");
usuario.obtenerPerfil();


console.log("---------------------");

fetch("https://api.escuelajs.co/api/v1/users?limit=20")
	.then(response => response.json())
	.then(data => console.log(data))




function dataFetch(){
	return fetch("https://api.escuelajs.co/api/v1/users?limit=20")
}

async function williDatos(){
	try{
		const data = await dataFetch();
		console.log(data);
	}catch(err){
		console.log(err);
	}
}

williDatos();






























