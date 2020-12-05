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

greeting = function(name="william") {
  console.log('Hello');
  return name;
};
