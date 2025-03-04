//  Never Type
// El tipo never se usa en funciones que nunca devuelven un valor (por ejemplo, cuando lanzan errores o entran en bucles infinitos).

// Ejemplo:

function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    console.log("Esto nunca termina...");
  }
}