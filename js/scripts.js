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
unction calcLifetimeSupply(currentAge, dailyUse, maxAge) {
  if(isNaN(currentAge) && isNaN(dailyUse) && isNaN(maxAge)) {
    alert("Please give me a number!");
    let currentAgeSecondTry = prompt("Whats your age?");
    let dailyUseSecondTry = prompt("How many per year?");
    let maxAgeSecondTry = prompt("You gonna die doe?");
    calcLifetimeSupply(currentAgeSecondTry, dailyUseSecondTry, maxAgeSecondTry);
  } else {
    if(curentAge < maxAge) {
      let supply = (maxAge - currentAge) * (dailyUse * 365);
      alert(`You will need ${supply} to last until you're ${maxAge}`);
    } else {
      alert("this is...awkward...youre dead.");
    }
  }
}
