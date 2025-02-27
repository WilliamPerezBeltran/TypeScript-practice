class Employee {
  static headCount: number = 0;
  constructor(
    private firstName: string,
    private lastName: string,
    private jobTitle: string
  ) {
    Employee.headCount++;
  }

  public static getHeadCount() {
    return Employee.headCount;
  }
}

let oscar = new Employee('oscar', 'perez', 'backend');
let william = new Employee('william', 'perez', 'backend');
let sandra = new Employee('sandra', 'perez', 'backend');
let faro = new Employee('faro', 'perez', 'backend');

console.log(Employee.getHeadCount());
