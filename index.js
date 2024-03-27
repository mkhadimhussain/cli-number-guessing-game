#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number
const randomNumber = Math.floor(Math.random() * 6 + 1);
// Math.random()  generate values b/w 0 to 1 (e.g 0.8, 0.9 etc)
// Math.floor()   round off the floating values (e.g 1.7 round off to 2, 1.3 round off to 1)
// * 6  it gives a number between 0 to 6 
// + 1  if we dont want 0 in number so we add 1 with 6 so it will gives numbers between 1-6
// 2) User input for guessing number
console.log("***************************************");
console.log("*Welcome to CLI Number Guessing Game*");
console.log("***************************************\n");
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess a Number between 1-6: ",
    },
]);
// 3) Compare user input with computer generated number and show result
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You Guessed the right number.");
}
else {
    console.log("You Guessed the wrong number.");
}
