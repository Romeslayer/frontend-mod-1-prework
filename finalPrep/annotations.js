// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear

// create a function buildABear that accepts arguments of name, age, fur, clothes, and specialPower
function buildABear(name, age, fur, clothes, specialPower) {
  // declare a variable, name it greeting and assign it a value of an interpolated string that uses the name argument.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // declare a variable, name it demographics and assign it a vlue of an array of the name and age arguments.
  var demographics = [name, age];
  // declare a variable, name it powerSaying and assign it a value of a string that concatenates specialPower.
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // declare a variable, name it builtBear and assign it value of an Object
  var builtBear = {
    //property of builtBear, the key is basicInfo, value is the variable named demographics
    basicInfo: demographics,
    //property of builtBear, the key is clothes, value is the argument named clothes
    clothes: clothes,
    //property of builtBear, the key is exterior, value is the argument named fur
    exterior: fur,
    //property of builtBear, the key is cost, value is an integer of 49.99
    cost: 49.99,
    //property of builtBear, the key is sayings, value an array with items; the variable named greeting, variable named powerSaying
    // and a string
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    //property of builtBear, the key is isCuddly, value is the boolean value true
    isCuddly: true,
  };
  // after the function finishes it will return the filled out bear object.
  return builtBear
}
// call the function buildABear with the arguments of  name = 'Fluffy', age = 4, fur = 'brown',clothes = array of ['pants', 'jorts', 'tanktop'], and specialPower = 'give you nightmares'
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// call the function buildABear with the arguments of  name = 'Sleepy', age = 2, fur = 'purple',clothes = array of ['pajamas', 'sleeping cap'], and specialPower = 'sleeping in'
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
// create a function named fizzBuzz that accepts 3 arguments num1, num2, and range
function fizzBuzz(num1, num2, range) {
  // create a for loop, create a counter at 0, check if the counter is less than or equal to the argument range, if that returns true, run the supsequent code and add one to the counter, if not quit loop.
  for (var i = 0; i <= range; i++) {
    // if statement that checks if the remainder of i divided by argument num1 and if the remainder of the counter and argument num2 is equal to zero. if true run code beneath, if false skip to next else if statement.
    if (i % num1 === 0 && i % num2 === 0) {
      // if above statement returns true log 'fizzbuzz' to the console and loop again
      console.log('fizzbuzz');
    // next if statement that checks if the counter divided by the argument num1 is equal to 0, if true execute code below, if false skip to next else if statement.
    } else if (i % num1 === 0) {
      // if the if statement returned true log 'fizz' to the console and loop again
      console.log('fizz');
      // next if statement that checks if the counter divided by the argument num2 is equal to 0, if true execute code below, if false skip to last else statement.
    } else if (i % num2 === 0) {
      // if the if statement above returned true log 'buzz' to the console and loop again
      console.log('buzz');
      // if none of the other conditions above are satisified execute code block below
    } else {
      // log to the console the counter number
      console.log(i);
    }
  }
}
// call function fizzBuzz with arguments num1 = 3, num2 = 5, and range = 100;
fizzBuzz(3, 5, 100);
// call function fizzBuzz with arguments num1 = 5, num2 = 8, and range = 400;
fizzbuzz(5, 8, 400);
