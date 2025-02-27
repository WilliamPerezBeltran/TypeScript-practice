// https://www.typescripttutorial.net/typescript-tutorial/typescript-access-modifiers/
// https://www.typescripttutorial.net/typescript-tutorial/typescript-access-modifiers/
// https://www.typescripttutorial.net/typescript-tutorial/typescript-access-modifiers/
// https://www.typescripttutorial.net/typescript-tutorial/typescript-access-modifiers/

class PersonA {
  public ssn: string;
  public firstName: string;
  public lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
let personA = new PersonA('171-28-1258', 'william', 'perez');
console.log(personA.getFullName());
console.log(personA.ssn); // compile error

/*

The public modifier allows class properties and methods to be 
accessible from all locations. If you don’t specify any access 
modifier for properties and methods, they will take the public 
modifier by default.

For example, the getFullName() method of the Person class has 
the public modifier. The following explicitly adds the public 
modifier to the getFullName() method:
*/
