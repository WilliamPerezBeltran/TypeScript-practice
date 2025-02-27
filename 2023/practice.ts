// variables
// let variableName: type;

// array
// let arrayName: type[];

// ============================================================================0

let arr: string[] = [];

arr.push('2');
arr.push('2');
arr.push('2');
console.log(arr);

let ar: [number, string] = [2, 'sf'];
console.log(ar);
// ============================================================================0

// entrada=>salida
let greeting: (name: string) => string;
greeting = function (william) {
  return william;
};
// entrada=>salida
let greeting1: (name: string) => number;

greeting1 = function (william) {
  return 23;
};

console.log(greeting('sfsfa'));
console.log(greeting1('sfsfa'));
// ============================================================================0

let items: number[];
items = [1, 2, 3, null];
// let items1 = [1, 2, "3", null];

console.log(items);
// console.log(items1)

// ============================================================================0

let employee: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};

employee = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  jobTitle: 'Web Developer'
};

console.log(employee);
// ============================================================================0
let skill: [string, number];
skill = ['Programming', 5];
console.log(skill);
// ============================================================================0

enum Meses {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec
}

function isItSummer(month: Meses) {
  let isSummer: boolean;
  switch (month) {
    case Meses.Jun:
    case Meses.Jul:
    case Meses.Aug:
      isSummer = true;
      break;
    default:
      isSummer = false;
      break;
  }
  return isSummer;
}

console.log(isItSummer(Meses.Jun)); // true
console.log(isItSummer(Meses.Jul)); // true
console.log(isItSummer(Meses.Aug)); // true
console.log(isItSummer(Meses.Oct)); // true
// ============================================================================
var Month;
(function (Month) {
  Month[(Month['Jan'] = 0)] = 'Jan';
  Month[(Month['Feb'] = 1)] = 'Feb';
  Month[(Month['Mar'] = 2)] = 'Mar';
  Month[(Month['Apr'] = 3)] = 'Apr';
  Month[(Month['May'] = 4)] = 'May';
  Month[(Month['Jun'] = 5)] = 'Jun';
  Month[(Month['Jul'] = 6)] = 'Jul';
  Month[(Month['Aug'] = 7)] = 'Aug';
  Month[(Month['Sep'] = 8)] = 'Sep';
  Month[(Month['Oct'] = 9)] = 'Oct';
  Month[(Month['Nov'] = 10)] = 'Nov';
  Month[(Month['Dec'] = 11)] = 'Dec';
})(Month || (Month = {}));

console.log(Month);
// ============================================================================

enum ApprovalStatus {
  draft,
  submitted,
  approved,
  rejected
}

const request: {
  id: number;
  status: ApprovalStatus;
  description: string;
} = {
  id: 1,
  status: ApprovalStatus.approved,
  description: 'Please approve this request'
};

if (request.status === ApprovalStatus.approved) {
  console.log('esta aprovada');
} else {
  console.log('No esta aprovada');
}

// ============================================================================

let wa: any;
wa = { a: 'we' };
console.log(wa);
// ============================================================================

let anotherVariable: string | number;

anotherVariable = 'string';
console.log(anotherVariable);
anotherVariable = 23;
console.log(anotherVariable);
// ============================================================================
type chars = string;
let message: chars;
message = 'type alias in typescript';
console.log(message);
// ============================================================================
interface product {
  name: string;
  price: number;
}
let products: product[];
products = [
  { name: 'phone', price: 700 },
  { name: 'tablet', price: 900 },
  { name: 'laptop', price: 1200 }
];

console.log(products);

// ============================================================================
/*

function name(parameter: type, parameter:type,...): returnType {
   // do something
}

*/

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(1, 45));
let sum = add(2, 3);
console.log(sum);
// ============================================================================
function echo(message: string): void {
  console.log(message.toUpperCase());
}
echo('el mensaje');
// ============================================================================
function add3(a: number, b: number) {
  return a + b;
}
// ============================================================================

let add100: (x: number, y: number) => number;

add100 = function (a, b) {
  return a + b;
};

console.log(add100(2, 3));

// ============================================================================
let resta = function (x: number, y: number): number {
  return x - y;
};
console.log(resta(20, 10));

// ==================optional parameter in function=========================
function multiply(a: number, b: number, c?: number): number {
  if (typeof c !== 'undefined') {
    return a * b * c;
  }
  return a * b;
}
console.log(multiply(1, 2));
// ================default parameter in function===============================

function sumaTres(a: number, b: number, c: number = 85): number {
  return a + b + c;
}
console.log(sumaTres(1, 2, 3));
console.log(sumaTres(1, 2));
// ============================================================================

// ============================================================================
