// document.forms[1]

// let loginForm = document.forms[0];

// document.forms.(name)

let loginForm = document.forms.login;

// console.log(document.forms,loginForm);

let emailImput = loginForm.email;

// FE gives data to the backend and receives the data back to print on the page.

// ? = after is a query parameter.

// & = separating the different parameters.

let passwordInput = loginForm.password;

emailImput.addEventListener("keyup", e => {
  listItems.call(emailImput);
  // e.keyCode; // What is getting typed in.
  console.log(this);
});

// RegEx — Regular expression, use to see if their input matches a pattern.

loginForm.addEventListener("submit", e => { // Submit event type, only works on forms.
  e.preventDefault(); // Stops default action of event.
  // ... Do some checks, submit the form, etc.
  // console.log(e);
  loginForm.reset(); // Clears inputs on forms.
});

// THIS

// Property of a function, doesn't get defined until the function is called.

// Refer to the context in which the function is called - this inside of a function.

// If you don't change the definition of this in the function it will always be the window (global scope).
// let favorites = ["pickles"];
function listItems(pet) {
  // console.log(this);
  // alert (`${this.name} loves ${this.favorites[0]} and has a ${pet}.`);
};

// listItems();

let user = {
  name: "Abby",
  cart: [],
  coupon: [],
  favorites: ["the Void"],
  listFavorites: listItems // Implicitly binds this
};

// Callstack — The way the engine inside the browser handles all the different things you feed it with JavaScript.

// Implicit "this" Binding

user.listFavorites();
// log out : Ryeker loves cheese.

// Explicit Binding

let jr = {
  name: "Junior Royce?",
  cart: ["Guns N' Roses"],
  coupons: [1.99],
  favorites: ["Star Wars"]
};

// Call
// listItems.call(jr, "dog"); // Rule 1 about call is that it must be called on a function. Rule 2 is if the functiob beinf bound requires arguments, they begin as the 2nd arguments of the call.

// Apply
// listItems.apply(jr,["cat"]); // 2nd argument is in an array.
