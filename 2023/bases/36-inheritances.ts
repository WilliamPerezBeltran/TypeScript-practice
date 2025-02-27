class Person {
  constructor(private firstName: string, private lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  describe(): string {
    return `This is ${this.firstName} ${this.lastName}.`;
  }
}

class Employee extends Person {}

let employee = new Employee('william', 'perez');
console.log(employee);

('=========================================');

class PersonA {
  constructor(private firstName: string, private lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  describe(): string {
    return `This is ${this.firstName} ${this.lastName}.`;
  }
}

class EmployeeA extends Person {
  constructor(firstName: string, lastName: string, private jobTitle: string) {
    // call the constructor of the Person class:
    super(firstName, lastName);
  }

  describe(): string {
    return super.describe() + ` i'm a ${this.jobTitle}`;
  }
}

let employeeA = new EmployeeA('william', 'perez', 'front-end developer');
console.log(employeeA);
console.log(employeeA.getFullName());
console.log(employeeA.describe());
