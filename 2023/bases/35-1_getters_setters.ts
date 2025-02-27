// https://www.typescripttutorial.net/typescript-tutorial/typescript-getters-setters/
class Person {
  private _age: number;
  private _firtsName: string;
  private _lastName: string;

  public set age(theAge: number) {
    if (theAge <= 0 || theAge >= 200) {
      throw new Error('The age is invalid');
    }
    this._age = theAge;
  }

  public get age() {
    return this._age;
  }

  public getFullName(): string {
    return `${this._firtsName} ${this._lastName}`;
  }

  public set firstName(theFirstName: string) {
    if (!theFirstName) {
      throw new Error('invalid fisrtName');
    }
    this._firtsName = theFirstName;
  }

  public get fisrtName() {
    return this._firtsName;
  }

  public set lastName(theLastName: string) {
    if (!theLastName) {
      throw new Error('invalidad lastname');
    }
    this._lastName = theLastName;
  }

  public get lastName() {
    return this._lastName;
  }
}

let person = new Person();
person.age = 10;
person.firstName = 'william';
person.lastName = 'perez';
console.log(person);
