const date = new Date();
console.log(date.getHours());
console.log(date.getTime());
console.log(date.toISOString());

const date1 = new Date(2000, 1, 12);
console.log(date1.getHours());
console.log(date1.getTime());
console.log(date1.toISOString());
console.log(date1);

class MyDate {
  year: number;
  month: number;
  day: number;
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

let mydate = new MyDate(1995, 4, 15);
console.log("======");
console.log(mydate);

class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

let person = new Person("walle");
console.log(person);
console.log(person.name);
person.name = "otro name ";
console.log(person.name);
console.log("================");
console.log("================");
class Person1 {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
  public method(): string {
    return `my string ${this.name}`;
  }
  public getName(): string {
    return this.name;
  }
}
let person1 = new Person1("walle");
console.log(person1.method());
console.log(person1.getName());
