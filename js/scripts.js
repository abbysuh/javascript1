 let firstName = prompt("What is your first name?", "John");

let lastName = prompt("What is your last name?", "Doe");

console.log(firstName);

if (lastName == null | lastName == "") {
  confirm("Are you sure you don't want to enter your last name?");
} else {
  alert(`Your last name is ${lastName}. What a neat last name!`);
}



let birthday = prompt("What is your birthday?", "2/7/1994");


let confirmBirthday = confirm(`Are you sure your birthday is ${new Date(birthday)}?`);

if (confirmBirthday == false) {
  alert("Butter fingers I'm guessing?")
} else {
  alert(`Your birthday is ${new Date(birthday)}.`);
}
