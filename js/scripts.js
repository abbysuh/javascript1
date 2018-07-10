// let bestNumber = true;
// let bestNumber = 42; // Number
// let isTrue = true; // Boolean
// let isTrue = false; // False

// && - Logical AND
// console.log(bestNumber && isTrue); // Are both false or one false? && both sides have to be true to be true. Can chain these in an infinite change, all have to be true, if one is false, all will be false.

// || - Logical OR
// console.log(bestNumber || isTrue); // Either one or the other is true. If anything chained together is true, all of it is true. Both and and or statements will stop being read until they find one is true or false, in or statements one true makes the whole thing true.

// ! - Logical // NOT:
// console.log(!isTrue); // Opposite of the variable/statement. "Console.log(NOTisTrue);"

// Truthy and Falsy
// Everything in JavaScript has to boil down to yes or no, true or false, 0 or 1. Even if your JavaScript is 100 of lines, it still is being understood in instances of yes and no. Truthy and Falsy are categories in which JavaScript describes values as truth and false. True, empty objects, empty arrays, numbers, strings, dates are truthy, false, null, undefined, the number 0, NaN, empty strings, and document.all are falsy.

// COMPARISON OPERATORS
// Loose Equal ==
// let num = 11;
// let string = "11";
// console.log(num == string); // Since JavaScript is loosely typed, in loose equality == you are looking for if the value is the same, even if they're not the same type.

// Strict Equal ===
// console.log(num === string); // Strict equals === checks for the value and the type being the same. You generally want to use strict equality to make sure things are the same type and same value.

// let string = "12";
// console.log(num != string); // NOT equal, type doesn't matter.

// console.log(num !== string); // They are not strictly equal, which means true.

//IN CLASS EXERCISE I
// let prim = "string"; // Declare and Define a string.
// let objectString = new String(prim); // Declare a new string and a call a string object.
// console.log(prim === objectString);
// console.log(prim == objectString);

// ARITHMETIC OPERATORS
// Modulo (%)
// console.log(5 % 2); // Modulo(%) - remainder, returns 1, 5/2 is 2 R 1.

//Increment ++ and Decrement --
// let start = 1;

// ... after some logic.

// start++; // start = start + 1; 2
// console.log(start);
// start--; // start = start - 1; 0
// console.log(start);

// NaN - Not a number
// let nonNumber = "cheese";
// console.log(parseInt(nonNumber)); // You're trying to do something that involves numbers with a non-number.

// console.log(NaN === NaN); // 2 objects compared are always false.
// let nonNumber = "cheese";
// console.log(!isNaN(nonNumber)); // (opposite) Is it not a number?

// parseInt(), Parse integer - Convert any value into a number
// let fifty = "50";
// console.log(parseInt(fifty)); // NaN if not a number.
// let nonString = 50000;
// console.log(nonString.toString()); // Turn a value into a string
// Both parseInt() and .toString are methods. Method calls do not reassign the value of the called value. You have to reassign the value.

// Assignment operators +=, -=, *=, /=
// let nonString = 50000;
// nonString += 20; // nonString = nonString + 20, changes the value.
// console.log(nonString); // 50020

// String Concantenation
// let nonString = "50000";
// console.log(nonString += 20); // Literally sticking the string value and 20 - 50000 20.

// IN CLASS EXERCISE II
// let firstNumber = parseInt(prompt("Tell me a number!", "10"));
// let secondNumber = parseInt(prompt("Tell me another number!", "10"));
// let numOne = parseInt(firstNumber);
// let numTwo = parseInt(secondNumber);
// alert(numOne + numTwo);
// alert(firstNumber + secondNumber);

// CONTROL FLOW - A way to write your program to think for itself.

// If/else
// if(!isNaN(firstNumber) && !isNaN(secondNumber)) alert(firstNumber + secondNumber); // Just to check if this if this is true, only time you can write in one straight line. No options, just checking if 1 condition is true.

// if (!NaN(firstNumber) && !isNaN(secondNumber)) {
//   alert(firstNumber + secondNumber); // if this is true, execute this code
// } else {
//   alert("No dummy!"); // If else, do this.
// }

// if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
//   alert(firstNumber + secondNumber); // if this is true, execute this code
// } else if(isNaN(secondNumber)) {
//   secondNumber = parseInt(prompt("No I said a number!!", "10"));
//   firstNumber = parseInt(prompt("No I said a number!!", "10"));
//   alert(firstNumber + secondNumber);
// } else {
//   alert("No dummy!");
// }

//switch - Evalulate an expression and match to your case clause, executes statements with that case.
// let greeting = prompt("Tell me how to say hello", "Hola");
//
// switch (greeting.toLowerCase()) { // Normalizing the data.
//   case "hello":
//     alert(`I love saying ${greeting}!`);
//     break;
//   case "wassup":
//     alert(`${greeting} is SOO 90s!!`)
//     break;
//   default:
//     alert(`I've never heard ${greeting} before!`); // Catch non-greetings or ones you never heard of
//     break;
// }

// // Ternary - Evaluating yes or no controls
// let money = 10;
// let currency = confirm("In dollars or not?");
//
// currency ? alert(`${money}`) : alert(money); // ? = likely a ternary

age = parseInt(confirm("Are you older than 18"));

if(age) {
  under80 = confirm("Are you under 80 years old?");
  if (under80){
    let isCool = confirm("Do you like Star Wars?");
    if (!isCool) return null;
    alert("You are awesome!")
    } else {
  let isOld = confirm("Do you enjoy prunes?");
    }
  { else {
    alert("You were shot first!")
  }
