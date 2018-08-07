// JSON - JavaScript Object Notation

// Not the same as JavaScript, makes data transfer easier. Replacement for XML.

let myObject = {
  name: "Abby",
  age: NaN
};

myObject = JSON.stringify(myObject); // Turns the JS object into a string.

// console.log(myObject);

// Fetch
const weCool = false;

const myPromise = new Promise((resolve,reject) => { // 2 returns
  if (weCool) resolve("We are in fact, cool.")
  else if (!weCool) reject("Sorry, we ain't cool..."); // 2 Outcomes, usually to help deal with data.
});

myPromise.then(result => {
  // console.log(result);
}) .catch(error => {
  // console.log(error);
}); // Consuming your promise. Promises only happen once.
// A promise will return a promise.

function returnTwo() {
  return 2;
}

// console.log(Promise.resolve(returnTwo));

// Fetch
let starTrekSeries;

fetch('http://stapi.co/api/v1/rest/series/search').then(response => {
  // console.log(response); // Gets a response object.
  if (response.ok) {
    console.log('Yay!');
  };
  return response.json();
}) .then(jsonResult => {
  console.log(jsonResult.series);
  starTrekSeries = jsonResult.series;
}) .catch((err) => { // Always have a catch and make sure you are more detailed in your error handling.
console.log(err);
});

// fetch('http:/localhost:3456', {
  // method: 'POST',
  // mode: 'cors',
  // headers: {
    // 'Content-Type' : 'application/json',
//},
  // body: {
  // number: 11,
  // favoriteColor: 'blue',
// }
//});

// Postman - input your own API address, if you want to test an API.
// https://fleury14.github.io/js-class/
