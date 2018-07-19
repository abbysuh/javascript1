// DOM - Entire environment the browser is living in.

// API - Application Programming Interface
// A program waiting for requests and then gives you information back.

// Documement.all - Gives you access to all the content on the page.

// HTML elements are called DOM nodes in JavaScript, they are all objects.

// Query = question

// Querying the DOM
const body = document.getElementsByTagName("body"); // Since it's plural, it will return an array with your query. You always have to pass in a string.

// console.log(body[0]);

const header = document.getElementsByClassName("heading"); // The assumption is there is more than one use of a class name. Returns an array.

// console.log(header);

const paragraph = document.getElementById("paragraph1"); // Usually used for JavaScript, not for styling. Will only return the first instance of the ID. Returns a singl DOM node.

// console.log(paragraph);

// These are the newer, and better ones.
let div = document.querySelector("#beth-is-the-worst"); // Always return the first instance of what you're asking for. Can look for a tag name, class name, or ID. Nothing for tag, . for class, # for ID.

// let divs = document.querySelectorAll("div"); // Returns all of them, not just the first one.

// Event Listeners

// Need an event, something to listen to, and the result.

div.addEventListener(
  "mouseover", // Needs to be a valid event, in a string.
    ev => { // New and better way
      // console.log(ev); // Passes event from callback function
      div.style.backgroundColor = "indigo";
    }
   // function(ev) {
   //   div.style.backgroundColor = "indigo"; //Old way
   // } // The function (A callback function) you want to run when the event happens.
);
