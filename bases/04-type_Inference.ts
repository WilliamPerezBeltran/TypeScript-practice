let counter: number;
counter = 234;
console.log(counter);

function setCounter(max = 10) {
  console.log(max);
  // return max
}

function setCounter1(max = 10) {
  console.log(max);
  return max++;
}

console.log(setCounter());
console.log(setCounter1());

let arrayw: string[] = ['s', 's', 's'];
console.log(arrayw);

function increment(counter: number): number {
  let c = counter;
  c = c + 1;
  // return counter++
  return c;
}
console.log(increment(4));



console.log("=================================")

let mycounter:number
mycounter = 3

console.log(mycounter)


let mycounter2 = function(name:string){
 return `${name} return string`
}
console.log(mycounter2("will"))
