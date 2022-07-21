// function name(parameter: type, parameter:type,...): returnType {
//    // do something
// }

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(1, 2));

function echo(message: string): void {
  console.log(`${message}`);
}
console.log(echo('ny name is name'));
