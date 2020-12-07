// Notification
console.log(
  'JavaScript has the Number type (with the letter N in uppercase) that refers to the non-primitive boxed object. You should not use this Number type as much as possible in TypeScript.'
);
/*
===The number type===

*/
var price1;
var price2;
price1 = 5;
price2 = 5;
console.log(price1 + price2);
// first way to initialize
var price3, price4;
price3 = 56;
price4 = 36;
// second way to initialize
var price5 = 23,
  price6 = 454.5;
/*
===Binary Numbers===

*/
// Note that the digit after 0b or 0B must be 0 or 1.
var bin = 4;
var anotherBin = 2;
console.log(anotherBin);
/*
===Octal Numbers===

*/
// An octal number uses a leading zero followed the letter o (since ES2015) 0o. The digits after 0o are numbers in the range 0 through 7:
var octal = 8;
/*
===Hexadecimal numbers===

*/
// Hexadecimal numbers use a leading zero followed by a lowercase or uppercase letter X (0x or 0X). The digits after the 0x must be in the range (0123456789ABCDEF). For example:
var hexadecimal = 0xa;
/*
===Big Integers===

*/
// The big integers represent the whole numbers larger than 253 – 1. A Big integer literal has the n character at the end of an integer literal like this:
var big = 9007199254740991n;
