"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Equality and Inequality with Strings
let String1 = "Hello";
let String2 = "World";
console.log(String1 === String2); // False
console.log(String1 !== String2); // True
// Lowercase Function Tests
let upperString = "HELLO";
console.log(upperString.toLowerCase() === "hello"); // True
console.log(upperString.toLowerCase() !== "HELLO"); // False
// Numerical Tests
let Num1 = 10;
let Num2 = 20;
console.log(Num1 === Num2); // False
console.log(Num1 !== Num2); // True
console.log(Num1 > Num2); // False
console.log(Num1 < Num2); // True
console.log(Num1 >= Num2); // False
console.log(Num1 <= Num2); // True
// "And" and "Or" Operators
let isTrue = true;
let isFalse = false;
console.log(isTrue && isFalse); // False
console.log(isTrue || isFalse); // True
// Test Whether an Item is in an Array
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits.includes("Banana")); // True
console.log(fruits.includes("Orange")); // False
// Test Whether an Item is Not in an Array
console.log(!fruits.includes("Orange")); // True
console.log(!fruits.includes("Banana")); // False
