/*
In the exercises below, write your own code where indicated
to achieve the desired result.

A couple examples that are already completed. Your task is to complete
any remaining prompt.

When navigated to the root of this project directory, you should be able to run this
file from your terminal with the command `node section1/exercises/variables.js`
*/


// EXAMPLE: Write code below to assign Harry Potter's name to a variable and
// log that variable to the console:
var name = "Harry Potter";
console.log(name);

// EXAMPLE: Write code below to add 2 to the variable `students` and
// log the result:
var enrolledStudents = 22 + 2;
console.log(enrolledStudents);

// YOU DO:
// Write code below to save the string 'Harry Potter must not return to Hogwarts!'
// log that variable to the console.
var harry = 'Harry Potter must not return to Hogwarts';
console.log(harry);

// YOU DO:
// Declare three variables, named `firstName`, `isHungry` and `numberOfPets`.
  // Store the appropriate data types in each.
// log all three variables to the console.
var firstName, isHungry, numberOfPets;
firstName = "DéNaje";
numberOfPets = 2;
isHungry = false;
console.log(`${firstName} has ${numberOfPets} pets and is he hungry? ${isHungry}`);
// IN WORDS:
// How did you decide to use the data type you did for each of the three variables above?
  // The first variable 'firstName' refers to a word which would need to be a string.
  // The variable 'numberOfPets' would need a number data type to know how many pets I have.
  // The variable 'isHungry' could be a string of 'yes' or 'no' but I figured since thats a binary choice a boolean value would also suffice.


// YOU DO:
// Re-assign the values to the three variables from the previous challenge to different
  // values (but same data type).
// log all three variables to the console.
firstName = 'Romello';
numberOfPets = 0;
isHungry = true;
console.log(`Next we have ${firstName} who has ${numberOfPets} pets and are they hungry? ${isHungry}`);


// YOU DO:
// Using the variables below, log the total number of snacks to the console:
var healthySnacks = 6;
var junkFoodSnacks = 8;
console.log(healthySnacks + junkFoodSnacks);

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?
