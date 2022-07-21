// https://www.typescripttutorial.net/typescript-tutorial/typescript-access-modifiers/
// https://www.typescripttutorial.net/typescript-tutorial/typescript-access-modifiers/
// https://www.typescripttutorial.net/typescript-tutorial/typescript-access-modifiers/
// https://www.typescripttutorial.net/typescript-tutorial/typescript-access-modifiers/

class PersonA {
  private ssn: string;
  private firstName: string;
  private lastName: string;

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
console.log(person.ssn); // compile error
