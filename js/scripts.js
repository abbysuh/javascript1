// Highlight the function that you want to try and cmd+/ or ctrl+/

// Dog Years
let age = parseInt(prompt("How old are you?", "24"));

if (isNaN(age)) {
  alert("Please enter a numerical value!");
} else {
  function dogYears(age) {
    return (age*7);
  };
};

// Lifetime Supply
// alert(`You are ${dogYears(age)} in dog years!`);
//
// let ageNow = parseInt(prompt("How old are you?", "24"));
// let amountProduct = parseInt(prompt("How much of the product do you need a day?", "2"));
