// const { generateRandomNumber, celeciusToFahrenheit } = require("./utils");
// console.log(`Random number: ${generateRandomNumber()}`);
// console.log(`Celecius to Fahrenheit: ${celeciusToFahrenheit(0)}`);

import getPosts, { getPostLength } from "./postController.js";

console.log(getPosts());
console.log(getPostLength());
