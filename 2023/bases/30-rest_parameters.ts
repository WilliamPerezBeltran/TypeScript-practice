/*

To declare a rest parameter, you prefix the parameter name with three dots and use the array type as the type annotation:

function fn(...rest: type[]) {
   //...
}

*/

function total_example(numbers: number[]): number {
  let total = 0;
  numbers.forEach((num) => (total += num));

  return total;
}
// normalmente tendriamos que pasarle un array
// con los valores
// con el rest operator ... podriamos omitir el array
// y pasarle los valores uno por uno
// como se ve el la funcion total
console.log(total_example([]));
console.log(total_example([1, 2, 3, 4]));

console.log('=======================');

function total(...numbers: number[]): number {
  let total = 0;
  numbers.forEach((num) => (total += num));

  return total;
}

console.log(total());
console.log(total(1, 2, 3));
console.log(total(1, 2, 3, 23, 24, 32));
