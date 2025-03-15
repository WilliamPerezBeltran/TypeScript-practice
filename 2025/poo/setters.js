var Persona = /** @class */ (function () {
  function Persona() {
    this._name = "";
  }
  Object.defineProperty(Persona.prototype, "name", {
    get: function () {
      return this._name;
    },
    set: function (newName) {
      if (newName.length < 3) {
        throw new Error(" name to short");
      }
      this._name = newName;
    },
    enumerable: false,
    configurable: true,
  });
  return Persona;
})();
var persona = new Persona();
persona.name = "romero";
console.log(persona.name);
