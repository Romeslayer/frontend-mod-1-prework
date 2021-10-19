/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog {

};
var husky = new Dog();
var pomaranean = new Dog();
console.log(husky);
console.log(pomaranean);

// Prompt 2: Snack
class Snack {

};
var almonds = new Snack();
var peanuts = new Snack();
console.log(almonds);
console.log(peanuts);

// Prompt 3: Shirt
class Shirt {

};
var tankTops = new Shirt();
var vNeck = new Shirt();
console.log(tankTops);
console.log(vNeck);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog

class Dog1 {
  constructor() {
    this.name = "Bud";
    this.weight = 165;
    this.height = 30;
  }
};
var goldenShepard =  new Dog1();
console.log(goldenShepard);

// Prompt 2: Snack

class Snack1 {
  constructor() {
    this.name = "Peanut Butter";
    this.taste = "savory";
    this.rating = 5;
  }
}

var peanutButter = new Snack1();
console.log(peanutButter);

// Prompt 3: Shirt

class Shirt1 {
  constructor(color, size, price) {
    this.color = "white";
    this.size = "L";
    this.price = 2;
  }
}
var whiteTank = new Shirt1();
console.log(whiteTank)

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

  // Prompt 1: Dog

  class Dog2 {
    constructor(name, weight, height) {
      this.name = name;
      this.weight = weight;
      this.height = height;
    }
  };
  var chocolateLab =  new Dog2("Tony", 200, 34);
  console.log(chocolateLab);

  // Prompt 2: Snack

  class Snack2 {
    constructor(name, taste, rating) {
      this.name = name;
      this.taste = taste;
      this.rating = rating;
    }
  }
  var twix = new Snack2("Twix","chocolate", 5);
  console.log(twix);

  // Prompt 3: Shirt

  class Shirt2 {
    constructor(color, size, price) {
      this.color = color;
      this.size = size;
      this.price = price;
    }
  }
  var blueTank = new Shirt2('blue', 'M', 21.33);
  console.log(blueTank);
