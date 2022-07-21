/**

 
The following syntax shows how to specify
 type annotations for variables and constants:

let variableName: type;
let variableName: type = value;
const constantName: type = value;

 **/

// The following example uses number annotation for a variable:
let counter: number;

// After this, you can only assign a number to the counter variable:
counter = 1;

console.log(typeof counter);

/*
You can both use a type annotation 
for a variable and initialize it in 
a single statement like this:
*/

let counter1: number = 1;

let name1: string = 'John';
let age: number = 25;
let active: boolean = true;

// Type annotation array
let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];

// Type annotation object
let person: { name: string; age: number };
person = { name: 'jhon', age: 23 };

// Function arguments & return types

let greeting: (name: string) => string;

greeting = function (name: string) {
  return `hi ${name}`;
};

greeting = function (name = 'william') {
  console.log('Hello');
  return name;
};

console.log('===============================================');

let variable: string;
console.log(typeof variable);

variable = 'camino a casa';
console.log(variable);

let variable1: string = 'by defautl';
console.log(variable1);

let myArray: string[];
console.log(myArray);

let myArray1: string[] = ['a', 'd', 'c'];
console.log(myArray1);

let myArray2: number[] = [1, 2, 3, 4];
console.log(myArray2);

let myArray3: (string | number)[];
myArray3 = ['a', 1, 1, 2, 3, 4, 'r'];
console.log(myArray3);

let person1: {
  name: string;
  edad: number;
};

person1 = { name: 'ole', edad: 34 };

let greetting: (name: string) => string;

greetting = function (name: string) {
  return 'return a string';
};

console.log(greetting('hola mundo'));
let otraFuncition: (name: string) => number;

otraFuncition = (name: string) => {
  return 23;
};
console.log(otraFuncition('hola mundo'));
