// String - Anything in quotes

var myString = "Hello work!*76";
console.log(typeof myString); //"typeof" to check what type of data

// Number - Any valid numbers, no quotes

var myNumber = 43;
console.log(typeof myNumber);

//Boolean - True or false, 1 or 0, truthy or falsey - logic gates

var isLoggedIn = false; // "Is" is a best practice and an indication of a Boolean
console.log(typeof isLoggedIn);

/* Undefined - Space and memory for this entity, but no place for it yet; declared but not defined.
    Not an error, when it's done intentionally
*/

var newVariable;
console.log(newVariable); //newVriable - Not defined, error, no reference at all to this, in red, "reference error"

//Null - Does not exist, no value at all.

isLoggedIn = null;
console.log(typeof isLoggedIn);
