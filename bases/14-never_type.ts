function fn(a: string | number): boolean {
  if (typeof a === "string") {
    return true;
  } else if (typeof a === "number") {
    return false;
  }   
}

console.log(fn("devuelve no tipy variable "))