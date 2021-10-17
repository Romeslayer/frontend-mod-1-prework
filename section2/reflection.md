## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?
  * I have absolutely no problem asking questions when I am unable to make progress. Asking questions has never bothered me, nor am I too proud to figuratively bang my head against the keyboard for an hour. I feel as though even though I am used to learning skills by myself, I know when I am truly stuck and cannot proceed.

1. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?
  * It felt empowering to navigate through the terminal without having to be guided through each step. The most uncomfortable thing that I experienced is error messages, but I was able to quickly solve them by googling.

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.
  * A conditional statement is an `if` statement that has some criteria that needs to be met before the code is run. Conditional statements are used to make a decision on what to do. A conditional in daily life is `if` I feel hungry, then I'll eat, `else` then I don't eat. A conditional I would imagine for a website would be if customer has enough funds in their account to purchase then, ship item, if not then return "Error not enough funds."
1. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.
  * You can add multiple conditions if you use the `else if` statement after your first `if` statement and accompanying code block. EX: ```javascript
  var index = 0;
  if (index === 1) {
    //run this code
  } else if (index === 2){
    //run this code
  } else {
    //run this code
  };
  ```
  The example above would be read by the program by starting with the first `if` and checking the variable index to see if it is equal to 1, which it is not so that would evaluate to false and the program would skip over the next code block. Then it will check the next `else if` would evaluate to true, which it will not be, so the progam moves on to the last `else` and runs that code block.

1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?
  * The tools that I have to check two different conditions are met are the logical operators `&&` and `||`. The first logical operator `&&` refers to *logical and* it will check if both of the conditionals statements on either side of operator are `true`. The second logical operator `||` refers to *logical or* checks if either conditional statement returns `true`, if one is true then the operator returns `true`, if both conditional statements returned `false` then the operator returns `false`.

1. What questions do you still have about `if` statements and/or functions?
  * Is there a way to make conditional statements that doesn't have to check each condition? I feel like larger programs would get very confusing very quickly with tons of conditional `if`s.
