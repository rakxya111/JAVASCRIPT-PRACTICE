// creating a game where u start any random game number and ask the user to keep guessing until the user enters the correct value.

let gameNum = 17;
let userNum = prompt("Guess the Number :");

while(userNum!=gameNum)
{
    userNum = prompt("You entered Wrong Number, Guess Again.");
}
console.log("Congratulations, you entered right Number.");