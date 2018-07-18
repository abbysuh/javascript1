// FUNCTIONS

// Functions have input and output.

// Anonymous functions - cannot refer to itself, not hoisted, only fire once
// Function definition
// function (string) { // Need function keyword, followed by the (). After the () are the arguments or parameters
//   return string.toUpperCase(); // Data transformation and return
// }; // End of function

// Named functions
// Function definition
// function addTwo(num) {
//   return num + 2;
// };
//
// // Call the function
// console.log(addTwo(22)); // Call Site
//
// let myNewNumber = addTwo(34);
// console.log(myNewNumber);
//
// function logMyString(string) {
//   console.log(string);
// };
//
// logMyString("JR is the best EVARR!!!");

// Function Declaration - Hoisted
// function alertsAd () {
//   alert("Hey we got a sale on Garthoks!");
// };
//
// alertsAd(); // the () invokes the function
// Function hoisting only happens to function declaration not function expression.

// Function Expression - Not Hoisted
// let confirmStuff = function(someString) {
//   confirm(someString);
// }
//
// confirmStuff("Do you want to watch Frozen?");

// Anything in a function disappears after the function is done running.

// Recursion Functions
// let i = 0;
// function iCallMyself() {
//   console.log(i);
//   i++;
//   if (i < 10)iCallMyself();
// }
//
// iCallMyself();

// Fat arrow functions - new Anonymous functions
// Basic implementation
// (logFunction, alertFunction) => { // No function keyword
//   logFunction("Hello world!");
//   alertFunction("Goodbye friends!");
// };
//
// // Only 1 argument
// string => { // Paraenthesis are optional, 1 argument
//   console.log(string);
// };
//
// // Only can be named in function Expression
// let logString = string => {
//   console.log(string);
// };
//
// logString("Hello cats!");

// // Implicit return
// string => (string.toUpperCase()); // Only to do 1 thing.
// if you have no arguments, you need empty Paraenthesis
