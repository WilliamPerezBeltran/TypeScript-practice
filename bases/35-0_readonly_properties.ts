/*
https://www.typescripttutorial.net/typescript-tutorial/typescript-readonly/
Summary: in this tutorial, you will learn how to use the TypeScript readonly access modifier to mark class properties as immutable property.

TypeScript provides the readonly modifier that allows you to mark the properties of a class immutable. The assignment to a readonly property can only occur in one of two places:

In the property declaration.
In the constructor of the same class.
To mark a property as immutable, you use the readonly keyword. The following shows how to declare a readonly property in the Person class:
*/

class Person {
  readonly birthDate: Date;
  constructor(birthDate: Date) {
    this.birthDate = birthDate;
  }
}
let person = new Person(new Date(1990, 12, 25));
console.log(person);
console.log(person.birthDate);

// person.birthDate = new Date(1991, 12, 25); // Compile error

class PersonA {
  constructor(readonly birthDate: Date) {
    this.birthDate = birthDate;
  }
}
let personA = new PersonA(new Date(1990, 12, 25));
console.log(personA);
console.log(personA.birthDate);
