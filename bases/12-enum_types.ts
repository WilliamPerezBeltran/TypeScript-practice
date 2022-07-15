enum Month{
	Jan,
	Feb,
	Mac,
	Apr,
	May,
	Jun,
	Jul,
	Aug,
	Sep,
	Oct,
	Nov,
	Dec
}

function isItSummer(month:Month){
	let isSummer:boolean
	switch(month){
		case Month.Jun:
		case Month.Jul:
		case Month.Aug:
			isSummer = true
			break;
		default:
			isSummer = false
			break
	}
	return isSummer
}

console.log(isItSummer(Month.Jun)); // true
console.log(isItSummer(6)); // true


console.log("====================")

enum Status {
	Open,
	Closed,
	Pending
}

const request = {
	id :1,
	status: Status.Open,
	description:"order open to practice"
}

console.log(request.status)
console.log(Status.Open)
console.log(Status.Closed)
console.log(Status.Pending)

if (request.status === Status.Open){
	console.log(`order open `)
}