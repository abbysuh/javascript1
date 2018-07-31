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
  console.log(e.keyCode); // What key did they hit?
  e.keyCode; // What is getting typed in.
})

// RegEx — Regular expression, use to see if their input matches a pattern.
