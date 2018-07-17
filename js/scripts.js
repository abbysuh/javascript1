// ARRAYS
// A bucket to put the 6 data types in.
// let myArray = []; // Most basic form of an array - an empty array.
// let favoriteFoods = ["pizza", "hamburgers", "french-fries"];
// Need to have valid data types.
// // Values are separated by comas.
// let allTheThings = ["string", 23, ["stuff"], {}, false];
// Most data is delivered in an array or an object.
// Access to methods just like strings.
// Arrays are indexed started at 0, not 1.
// console.log(favoriteFoods[1]); // Hamburgers
// alert(favoriteFoods.length); // Gives length of the array in an alert.

// In Class - I
// let stuff = ["Star Wars Episode VIII : The Last Jedi", 11, true, 2012, "last"];
// console.log(stuff, stuff.length);
// console.log(Array.isArray(stuff); // Checks if it is an array. Returns a boolean - yes or no.

// If the index doesn't exist, it'll return "undefined"
// Push - adds to the end of an array.
// console.log(stuff);
// stuff.push("Will Ferrell"); // Reassigning the value of the let "stuff" by adding the push value.
// console.log(stuff);

// Unshift - Add to the beginning
// stuff.unshift("Chris");
// console.log(stuff);

// Pop - Remove last thing.
// let lastMember = stuff.pop();
// console.log(lastMember);

// Shift - Remove first thing in array.
// let lastMember = stuff.shift();
// console.log(lastMember);

// Splice - Remove elements and optionally add others.
// Start is index in the array. Negatives start at the end and count back the number. If greater, it'll start at the length of the array.
// let removed = stuff.splice(2); // 1 arguement
// console.log(stuff, removed); // Removes everything starting at 2nd index.
// console.log(stuff, "before");
// stuff.splice(1, 2); // 2 Arguments, 2nd number is how many things you want to remove starting at the 1st listed number. (index, how many)
// console.log(stuff, "after");
// console.log(stuff, "before");
// stuff.splice(3, 1, ["I got added!"]); // Start at 3, delete 1 thing, add the array.
// console.log(stuff, "after");

// Slice - Make a copy and doesn't alter the original.
// let copy = stuff.slice(); // Makes an exact copy.
// console.log(copy);
// let copy = stuff.slice(1); // 1 argument - Start at the index given and copies starting after.
// console.log(copy);
// let copy = stuff.slice(1, 4); // Start at the first index, end at the 2nd index, not including the ending index.
// console.log(copy);

// IndexOf - Get the index of a member of an Array
// let removeIndex = stuff.indexOf(11); // Returns the index of 11 in our stuff array.
// console.log(removeIndex);
// stuff.splice(removeIndex, 1);

// LastIndexOf - Gets the index starting at the end.

// Reverse - Reverse the array
// let myNums = [1, 2, 3, 4, 5];
// console.log(myNums.reverse()); // Will change the original.

// Sort - Sort your function how you want to.
// console.log(stuff);
// stuff.sort(); // Sorts alphanumerically, looking at the first number not the whole number.
// console.log(stuff);

// Multi-dimensional arrays - Nested ARRAYS
// let multiDimensional = [["Hello", 1], ["Bye", 0]];
// console.log(multiDimensional[0][0], multiDimensional[1][0]);

// In-class II {
// let firstFav = ["Star Wars Episode III : Revenge of the Sith", "Anakin Skywalker/Darth Vader"];
// let secondFav = ["Elf", "Buddy the Elf"];
// let thirdFav = ["Central Intelligence", "Calvin Joyner"];
// let fourthFav = ["Karate Kid", "Daniel"];
// let fifthFav = ["Deadpool", "Wade Wilson"];
// let favoriteMovies = [];
// favoriteMovies.push(firstFav, secondFav, thirdFav, fourthFav, fifthFav);
// // console.log(favoriteMovies);
//
// let titles = [];
// titles.push(favoriteMovies[0][0], favoriteMovies[1][0], favoriteMovies[2][0], favoriteMovies[3][0], favoriteMovies[4][0]);
// alert(titles);
//
// let favLeast = [];
// favLeast.push(favoriteMovies[0], favoriteMovies[1]);
// console.log(favLeast);
//
// alert(favoriteMovies.length);

// LOOPS
// When you want to execute a block of code a set amount of times.

// For Loops
// for (let i = 0; i < 5; i++) { // Declaring a variable named i, and setting the starting value to 0; condition required to execute the block of code, has to be true to run the block of code; add one
// //   console.log(`The number is ${i+10}`); // Block of code
// }
// If the condition is not met, it doesn't run.
// If the condition is never false, you have an infinite loop, do not make an infinite loop!
// Generally use ++ or --
// Do not modify i in side of the loop.

// for (let i = 0; i < 11; i++) {
//   console.log(`The number is ${i*10}.`);
// }

// const colors = ["blue", "purple", "indigo", "black"];
// for (let index = 0; index < colors.length; index++) {
//   console.log(colors[index]);
//   continue;
//   console.log("Why can't you see me"); // Breaks in the middle of the code, and continue.
//   // if (index === 1) break; // End a loop prematurely
// } // Display everything in the array.
// It is generally good practice to start at 0 unless you have a reason to not to start at the beginning of the index.

// While LOOPS
// let counter = 0; // Have to have your counter declared before.
// while (counter < 5) {
//   console.log(`before ${counter}`);
//   counter++; // Have to include the incrementing inside the loop.
//   console.log(`after ${counter}`); // Once the loop has met its condition it immediately stops running.
// }

// For each
// const captains = ["Kirk", "Picard", "Sisko", "Janeway", "Lorca"];
// captains.forEach((captains, index) => {
//   console.log(captains, index); // Returns the values of array and the index.
// })

// For of
// const captains = ["Kirk", "Picard", "Sisko", "Janeway", "Lorca"];
// for (let captain of captains) {
//   console.log(`Hello Captain ${captain}`);
// } // Returns the values of the array.

// for in is for objects.
// const me = {
//   firstName: "Abby",
//   lastName: "McLallin",
//   age: 24
// }
//
// for (let properties in me) {
//   console.log(me[properties]);
// }

// In class III
let firstFav = ["Star Wars Episode III : Revenge of the Sith", "Anakin Skywalker/Darth Vader"];
let secondFav = ["Elf", "Buddy the Elf"];
let thirdFav = ["Central Intelligence", "Calvin Joyner"];
let fourthFav = ["Karate Kid", "Daniel"];
let fifthFav = ["Deadpool", "Wade Wilson"];
let favoriteMovies = [];
favoriteMovies.push(firstFav, secondFav, thirdFav, fourthFav, fifthFav);

for (i = 0; i < favoriteMovies.length; i++) {
  if(favoriteMovies[i][0] === "Star Wars Episode III : Revenge of the Sith"); alert(`${favoriteMovies[i][0]} ${favoriteMovies[i][1]}`);
}
