abstract class Employee {
  constructor(private firstName: string, private lastName: string) {}

  abstract getSalary(): number;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  compensationStatement(): string {
    return `${this.fullName} makes ${this.getSalary()} a month.`;
  }
}

class FullTimeEmployee extends Employee {
  constructor(firstName: string, lastName: string, private salary: number) {
    super(firstName, lastName);
  }

  getSalary(): number {
    return this.salary;
  }

  compensationStatement(): string {
    return `particular method call in fulltimeemployee`;
  }
}

class Contractor extends Employee {
  constructor(
    firstName: string,
    lastName: string,
    private rate: number,
    private hours: number
  ) {
    super(firstName, lastName);
  }

  getSalary(): number {
    return this.rate * this.hours;
  }
}

let john = new FullTimeEmployee('John', 'Doe', 12000);
let jane = new Contractor('Jane', 'Doe', 100, 160);

console.log(john.compensationStatement());
console.log(jane.compensationStatement());
console.log(jane.fullName);
console.log(jane.compensationStatement());
console.log(jane.getSalary());
console.log(john.compensationStatement());



console.log("================================")
console.log()
console.log()

console.log("Summary")
console.log("Abstract classes cannot be instantiated.")
console.log("An Abstract class has at least one abstract method.")
console.log("To use an abstract class, you need to inherit it and provide the implementation for the abstract methods.")

console.log()
console.log()