// https://www.typescripttutorial.net/typescript-tutorial/typescript-function-overloadings/
// primer caso

function addNumber(a: number, b: number): number {
  return a + b;
}

function addString(a: string, b: string): string {
  return a + b;
}

console.log(addNumber(1, 2));
console.log(addString('1', '2'));
console.log("==================")
// podriamos hacer esto para optimizarlo

function add(a: number | string, b: number | string): number |string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }

  if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  }
}

console.log(add(3, "4"));
console.log("==================")


// To better approach

function addBetterApproach(a:number,b:number):number
function addBetterApproach(a:string,b:string):string
function addBetterApproach(a:any, b:any):any{
	return a+ b
}

console.log(addBetterApproach(10, 20));
console.log(addBetterApproach('10', '20'));
console.log("==================")

/*
The count() function can return a number or an array 
depending on the number of argument that you pass into it:
*/

class Counter {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let values = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            // this.current = target;
            return values;
        }
        return ++this.current;
    }
}

let counter = new Counter();

console.log(counter.count()); // return a number
console.log(counter.count(20)); // return an array