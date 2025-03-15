class Persona {
  private _name: string = "";

  set name(newName: string) {
    if (newName.length < 3) {
      throw new Error(" name to short");
    }
    this._name = newName;
  }

  get name() {
    return this._name;
  }
}

let persona = new Persona();
persona.name = "romero";
console.log(persona.name);
