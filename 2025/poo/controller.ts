import { MyDate } from "./01-class";

const date = new MyDate(2000, 12, 3);
console.log(date);
console.log("principal date ");
console.log(date.printFormat());
date.add(12, "days");
console.log(date.printFormat());
