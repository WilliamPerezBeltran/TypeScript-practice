/*
The protected modifier
The protected modifier allows properties and methods of a class to be accessible within same class and within subclasses.

When a class (child class) inherits from another class (parent class), it is a subclass of the parent class.

The TypeScript compiler will issue an error if you attempt to access the protected properties or methods from anywhere else.

To add the protected modifier to a property or a method, you use the protected keyword. For example:
*/
class Person {
  protected ssn: string;

  // other code
}

/*
The ssn property now is protected. It will be accessible within the Person class and in any class that inherits from the Person class. You’ll learn more about inheritance here.

The Person class declares the two private properties and one protected property. Its constructor initializes these properties to three arguments. 

To make the code shorter, TypeScript allows you to both declare properties and initialize them in the constructor like this:


*/

class PersonA {
  constructor(
    protected ssn: string,
    private firstName: string,
    private lastName: string
  ) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

/*

When you consider the visibility of properties and methods, it is a good practice to start with the least visible access modifier, which is private.

Summary
TypeScript provides three access modifiers to class properties and methods: private, protected, and public.
The private modifier allows access within the same class.
The protected modifier allows access within the same class and subclasses.
The public modifier allows access from any location.
*/
