// DAY 2 - July 2nd

// String - Anything in quotes
var myString = "Hello work!*76";
// console.log(typeof myString); //"typeof" to check what type of data

// Number - Any valid numbers, no quotes
var myNumber = 43;
// console.log(typeof myNumber);

// Boolean - True or false, 1 or 0, truthy or falsey - logic gates
var isLoggedIn = false; // "Is" is a best practice and an indication of a Boolean
// console.log(typeof isLoggedIn);

/* Undefined - Space and memory for this entity, but no place for it yet; declared but not defined.
    Not an error, when it's done intentionally
*/
var newVariable;
// console.log(newVariable); // newVriable - Not defined, error, no reference at all to this, in red, "reference error"

// Null - Absence, no value at all.
isLoggedIn = null;
// console.log(typeof isLoggedIn);

// Day 2 - July 5th

//FINAL PROJECT
// A "To do" web app, make as easy or complicated as you want.
// A "To do" and a "finished" category, checkboxes or other user imput.
// js1.ryekerjherndon.com/final.html

// 6th data type is a symbol - not commonly used.

/* Loosely defined language, don't need to declare the data type.
  Object oriented language, everything is an object but primitives in their primitive forms.
    var myNumber = 43; <-- primitive
    var myOtherNumber = new Number(43); <-- number object value
    */
    var myNumber = 43; // Primitive - Just the number
    var myOtherNumber = new Number(43); // Number object - Other things attached, like the "prototype" as well as the primitive value.
    // console.log(myNumber, myOtherNumber);

// String interpolation
// console.log("Hey there, " + myString + " how are you?"); //ES5 - Just in case you inherit an old project.
// console.log(`Hey there, ${myString} how are you?`); //ES6 - fully supported, preferred way.

/* A block of code - Anything in JavaScript inside {}
var dozen = 12;
  {
  dozen = 13; // Only inside this scope/block of code, otherwise dozen = 12.
}
*/

// VARIABLE TYPES

/* var
  First type of variable

  JavaScript is an asynchronous language

  Runtime - The time it takes your browser to read and compile your code. Also the time your browser begins to read your code.

  HOISTING - Looks for all the variable declarations and puts it to the top of your code. No matter where you are, every variable is declared but not defined, then it will go line and line and read your code. "Hoist" them to the top. There is times where you don't want your variables to be hoisted.

  All global, where ever you change it, it will change all of them. Changes happen after the changes occurs.

  Drawbacks - No way to easily encapsulate a variable where it doesn't leak out into other scopes.
*/
var newVariable = "I am the best variable!";
// console.log(newVariable, `After var`);

{
  newVariable = "I am the worst...";
}

// console.log(newVariable, `Outside scope var`)

/* let
  New in ES6

  Instead of var you have let.

  Lets are not hoisted, only existed when you declare it and after you declare it.

  Executes lets synchronously.

  Bound within their scopes.
*/
let otherVariable = "I am the best variable!";
// console.log(otherVariable, `After let`);

{
  let otherVariable = "I am the worst...";
  // console.log(otherVariable, `Inside scope let`);
}

// let otherVariable; //Declaration - cannot redeclare a let.
otherVariable = "My dog is ugly!"; //Redefining - can redefine a let, but not declare. Cannot declare and define a let in the same scope.
// console.log(otherVariable, `Outside scope let`);

/* const
  Const and let are very similar.

  Can be redefined.

  Not hoisted like a let.

  Cannot redeclare or change its type.

  Shouldn't redeclare or redefine a const as it's suppose to be constant.

  Sometimes in all caps.
*/
const age = 32;

{
  const age = 33;
  // console.log(age);
};

// age = 38;
// // const age; //is not valid - have to declare and define in the same line. Used mostly in module imports.
// console.log(age);

// Objects

  // Normalize data

  // Would not recommend using the object version of Boolean.

  // new ___ denotes a new object, object type is usually capitalized.

  // Date
  let today = new Date();
  let myBirthday = new Date("2/7/1994"); // Dates have to be entered in a string.
  console.log(myBirthday);

  // Math

  //Math doesn't use "new"
  let bestNumber = 42.7;
  Math.ceil(bestNumber); // floor is round down, ceil is round up.
  console.log(Math.ceil(bestNumber) * Math.PI);

  // string

  let classRoom = "Room 2";
  let objClassRoom = new String("Room 1");
  // console.log(typeof classRoom);
  // console.log(typeof objClassRoom);
  // console.log(classRoom.length);  // . refers to the value before the period (left of the period). Length refers to number of characters in string, spaces included. Length only work on strings that are objects. JavaScript is assuming that classRoom is an object to check the length, but it still is a primitive.

//Interact with your user - functions (methods) feed it a value to return something else.

//Alert
// alert("Hey there, user! Pick a path");  // No interaction, one directional, just to tell them something. Maybe they did something wrong and they need a warning.

//confirm
// confirm("Are you ready to party?");
// const isReady = confirm("Are you ready to party?");


//Prompt
// let userName = prompt("What's your name?", "John");
// console.log(userName);

/* Changes to homework
Asks for their birthday, then confirm, then alerts. */
