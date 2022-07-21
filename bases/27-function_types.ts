// A function type has two parts: parameters and
// return type. When declaring a function type,
// you need to specify both parts with the following syntax:

// (parameter: type, parameter:type,...) => type

let add = function (x: number, y: number): number {
  return x + y;
};

console.log(add(2, 3));

let result = add(2, 3);
console.log(result);

let add2: (x: number, y: number) => number;

// let ole = (x:number, y:number):number=>{
// 	return x+y

// }

let ole = (x: number, y: number): number => x + y;

let result1 = ole(2, 3);

console.log(result1);
