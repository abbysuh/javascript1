// Timers
// let clearBtn = document.querySelector("#clearBtn");
// let myTimeout;

// Set Timeout - Waits a certain amount of time, then fires
// let annoyingPopup = () => {
//   alert("Hey!!!! Have you seen my INSANE and WACKY DISCOUNTS?!?!?!?!");
// };

// function startTimer() {
//   setTimeout(() => {
//     alert("Hey guys, you're cool!")
//   },5000);
// };

// function startTimer() {
//   myTimeout = setTimeout(annoyingPopup, 5000)
// };
//
// startTimer();

// Stop Timeout — Clear the timeout.

// function cancelTimer() {
//   clearTimeout(myTimeout);
// };
//
// clearBtn.addEventListener("click", cancelTimer);

// Store an asyncranous events in a variable.

// let myInterval;
//
// function remindUser() {
//   alert("Hey, balloon are on SALE!!!!")
// };
//
// myInterval = setInterval(remindUser, 3000);
//
// function clear() {
//   clearInterval(myInterval);
// }
//
// clearBtn.addEventListener("click", clear);

/* Let's try it!
Write a program that prompts the user for a time (in ms) they want to wait.
Take the response and create a setTimeout. After the time expires, alert the user with a random quote.
Add an interval that prompts for a number of how often the user wants to be alerted and have the message change every time the alert happens. HINT: DO NOT write multiple messages, have JS change it for you.
Create two buttons: one that cancels the timeout, and one that cancels the interval. */



// usersTimeout = prompt("Give me a time in milliseconds(ms). (Note that 1 second = 1000 ms)", "2000 milliseconds");
//
// usersInterval = prompt("How long do you want to wait between each alert? (In milliseconds, 1 second = 1000ms)", "2000 milliseconds");
//
// quotes = ["Alea iacta est", "Carpe diem", "Semper fidelis", "Et tu Brute?"];
//
// let timeoutRef;
// let intRef

// function createTimeout(time) {
//   let endIndex = time.indexOf(" ")
//   let parsedTime = parseInt(time.substring(0, endIndex));
//   if (!isNaN(parsedTime)) {
//     timeoutRef = setTimeout(alertRandomQuote, parsedTime)
//   } else {
//     usersTimeout;
//   }
// }

// function createTimer(time, type) {
//   let endIndex = time.indexOf(" ")
//   let parsedTime = parseInt(time.substring(0, endIndex));
//   if (!isNaN(parsedTime)) {
//     if (type === "timeout") {
//       timeoutRef = setTimeout(alertRandomQuote, parsedTime);
//   } else if (type === "interval"){
//     intRef = setInterval(alertRandomQuote, parsedTime);
//   }
// } else {
//   usersTimeout;
//   }
// }
//
// function alertRandomQuote() {
//   let maxIndex = quotes.length-1;
//   let indexToChoose = Math.floor(Math.random() * maxIndex);
//   alert(quotes[indexToChoose]);
// }
//
// // createTimer(usersTimeout, "timeout");
// createTimer(usersTimeout, "interval");
//
// let clearTimer = document.querySelector("#clearTimer");
// let clearInt = document.querySelector("#clearInt");
//
// clearTimer.addEventListener("click", () => {
//   clearInterval(timeoutRef);
// });
//
// clearInt.addEventListener("click", () => {
//   clearInterval(intRef);
// });

// Storing Values

// Local Storage

// Session Storage


function storeUserInfo() {
  if(!sessionStorage.getItem("firstName")) {
    let firstName = prompt("What is your first name?");
    sessionStorage.setItem("firstName", firstName);
  }
}

storeUserInfo();


let retrievedValue = sessionStorage.getItem("firstName");
alert(`Hello ${retrievedValue}!`);
