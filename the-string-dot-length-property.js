/*

Objective:
Practice using the .length property by calculating the length of
multiple predefined strings and assigning the results to specific variables.

Instructions:
You will be provided with several predefined string variables.
Your task is to:
  - Use the .length property to calculate the length of each string.
  - Assign the length of each string to its corresponding length variable.
  - Ensure that each length variable contains the correct value.

*/

// Starter Code (Pre-filled):
// Predefined strings
let stringOne = "Coding Bootcamp";
let stringTwo = "JavaScript";
let stringThree = "";

// Your task: Assign the length of each string to the corresponding variable
let lengthOne = stringOne.length; 
console.log(lengthOne);  // Length of stringOne
let lengthTwo = stringTwo.length; 
console.log(lengthTwo);// Length of stringTwo
let lengthThree = stringThree.length;
console.log(lengthThree);// Length of stringThree


// Your code here
// let lastIndex = stringOne.length - 1;
// if("p" === stringOne[lastIndex]){
if(lengthOne === 15){
 console.log("The length variable contains the correct value. ");
} else {
  console.log("The value is incorrect");
}

// if ("t" === stringTwo[stringTwo.length -1]){
if (lengthTwo === 10){
  console.log("The length variable contains the correct value. ");
} else {
  console.log("The value is incorrect");
}

if(lengthThree == 0){
 console.log("The value is empty");
}
