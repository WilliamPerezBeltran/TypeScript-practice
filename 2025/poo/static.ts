class Utilidades {
  static PI: number = 3.14;

  static circunferencia(radio: number): number {
    return 2 * this.PI * radio;
  }
}

console.log(Utilidades.PI);
console.log(Utilidades.circunferencia(3.4));
