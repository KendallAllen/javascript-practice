// Randomly select a secret number between 1 and 100
var secretNumber = Math.floor(Math.random() * 100) + 1;

// Ask user to guess the secret number
var guess = prompt("Please enter your guess: "); 

// If they don't guess the secret number, tell them whether they were high or low and have them guess again
while (guess != secretNumber) {
    if (guess < secretNumber) {
        guess = prompt(guess + " is too low of a guess. Guess again!"); 
    } else if (guess > secretNumber) {
        guess = prompt(guess + " is too high of a guess. Guess again!")
    };
};

// This will execute iff guess === secretNumber
console.log("You got it!");
