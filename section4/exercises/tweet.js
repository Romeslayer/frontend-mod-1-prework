/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content) {
    this.author = author;
    this.content = content;
    this.timeStamp = new Date();
    this.numberOfLikes = 0;
    this.comments = [];
  }

  addLike() {
    this.numberOfLikes++;
  }

  removeLike() {
    this.numberOfLikes--;
  }

  addComment(string) {
    this.comments.push(string);
  }
}

// Make new Tweet objects
var jakeTweet, bernieTweet, sashaTweet, trumpTweet;
jakeTweet = new Tweet("Jake", "Gaze into the abyss, and the abyss gazes back");
bernieTweet = new Tweet("Bernie", "We are yet again asking for your support in this time of need.");
sashaTweet = new Tweet("Sasha", "Passionate gamer. General bacon maven. Wannabe social media fanatic. Food specialist. Music fan. Travel nerd.");
trumpTweet = new Tweet("Trump", "Banned");


console.log(jakeTweet);
console.log(bernieTweet);
console.log(sashaTweet);
console.log(trumpTweet);

/*
   TESTING
jakeTweet.addLike();
console.log(jakeTweet.numberOfLikes);
jakeTweet.removeLike();
console.log(jakeTweet.numberOfLikes);
jakeTweet.addComment("Abyss: *blushes*");
console.log(jakeTweet.comments[0]);
*/
