// Put a DOM node in the HTML (ID on h3) Filler text if you want.

const h3 = document.querySelector("#temp"); // Need to query the DOM. Read ahead to step 3.
let scale = prompt("What temperature do you want to use (Fahrenheit — F or Celcius — C)?", "F or C"); // Ask user for a temperature scale
let temp = prompt("What is your temperature?", "100"); // Ask user for a temperature

// Plan out the problem and the problem solving process before writing out the code. Declare all variables you need before hand.

function convertTemp(scale, temp) { // Function definition
  scale = scale.toLowerCase();
  let returnValue; // Will need to return a value eventually.
  let oppositeValue = scale === "c" ? "Fahrenheit" : "Celcius"; // oppositeValue = scale if it's strictly equal to c convert to the opposite, which is Fahrenheit, if it's falsie, then return Celcius.
  temp = parseInt(temp); // User entered temp
  if (!isNaN(temp)) { // If the temp is the number, return temperature conversion.
    returnValue = scale === "c" ? (9/5 * temp) + 32 : (5/9) * (temp-32);
    h3.innerText = `Your temperature is ${returnValue} ${oppositeValue}`; // innerText puts text in the thing before the period.
  } else { // Edgecasing, if they don't enter a number, reask the scale and temperature and restate the function
    let scale = prompt("What temperature do you want to use (Fahrenheit — F or Celcius — C)?", "F or C");
    let temp = prompt("What is your temperature?", "100");
    convertTemp(scale, temp); // Do not need "function" after the function definition.
  }
}

convertTemp(scale, temp); // Call function.

h3.addEventListener("click", (e) => {
  let valueArray = e.target.innerText.split(" "); // Making an array using the text inputs on h3.
  scale = valueArray[valueArray.length-1] === "Celcius" ? "C" : "F"; // Gives the scale (Index is 5 and -1 is the last value)
  temp = valueArray[valueArray.length-2]; // Gets the temperature, which is the 2nd to last value in the array.
  convertTemp(scale, temp); // Calls the function, to get the opposite of the values.
});
