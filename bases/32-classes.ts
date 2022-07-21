// https://www.typescripttutorial.net/typescript-tutorial/typescript-access-modifiers/
// https://www.typescripttutorial.net/typescript-tutorial/typescript-access-modifiers/
// https://www.typescripttutorial.net/typescript-tutorial/typescript-access-modifiers/
// https://www.typescripttutorial.net/typescript-tutorial/typescript-access-modifiers/

// clases in javascript

/*
For example, to create a Person class that has 
three properties ssn, first name, and last name, 
you use the following constructor function:
*/

function Person(ssn, firstName, lastName) {
  this.ssn = ssn;
  this.firstName = firstName;
  this.lastName = lastName;
}
/*
Next, you can define a prototype method to get the full name of the 
person by concatenating first name and last name like this:
*/
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
/*
Then, you can use the Person “class” by creating a new object:
*/
let person = new Person('171-28-1258', 'william', 'perez');
console.log(person.getFullName());

('==========important=============');
/*
ES6 allowed you to define a class which is simply syntactic sugar 
for creating constructor function and prototypal inheritance:
*/

class PersonA {
  ssn: string;
  firstName: string;
  lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
let personA = new PersonA('171-28-1258', 'william', 'perez');
console.log(personA.getFullName());
