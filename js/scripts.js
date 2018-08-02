// PROTOTYPE INHERITANCE

let sentence = new String("Ann went walking one day.");
let number = new Number(32);
// console.log(Object.getPrototypeOf(number));

let dude = { // Most basic way to create an object type Object.
  catchPhrase: "Where's my car?", // A property of the object dude. KEY : VALUE pair, which makes a property
  firstName: "Big",
  lastName: "Lebowski",
  age: Infinity
};

// console.log(Object.getPrototypeOf(dude)); // Object

function User(name, email, password, favorites, cart) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.favorites = favorites;
  this.cart = cart;
}; //4th way to bind this

let cody = new User("Cody", "code-man-5000@gmail.com", "123456", [], []);
// console.log(cody);
// console.log(Object.getPrototypeOf(cody));

let ryeker = new User("Ryeker", "best_teach@truth.com", "1111", [], []);

ryeker.isAdmin = true;
ryeker["isAdmin"] = true; // Bracket notation
// console.log(ryeker, cody);

// TRY IT OUT: Build a new iser woth a form in HTML and user User prototype.
const userForm = document.forms.userForm;


  userForm.addEventListener("submit", e => {
    e.preventDefault();
    let newUser = new User(userForm.name.value, userForm.email.value, userForm.password.value, [], []);
    console.log(newUser);
    userForm.reset();
  })

// Prototype — Attach new members to that PROTOTYPE

User.prototype.calculateCartTotal = function () { // Object + prototype + name you want it to be called = function.
  let total = 0;
  this.cart.forEach(item => {
    total += item.price;
  });
  return total;
}
