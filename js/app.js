
// Conceptual questions
// 1. With const or let
// 2. By listing the variable and reassigning the value if let. If const, we have to use a function.
// 3. Concatenation or interpolation


// Strings
// 1.
let firstVariable = "Hello World";
  firstVariable = 5;
  secondVariable = firstVariable;
  secondVariable = "word";
  console.log(firstVariable);

// 2.
  yourName = "Steve";
  greeting = "Hello, my name is ";
  console.log(greeting + yourName);

// Booleans
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  a < b;
  c > d;
  'Name' === 'Name';
  a < b !== c;
  a = a < d;
  e === 'Kevin';
  48 !== '48';

// Farm
const animal = (maybeCow) => {
const animalArr = maybeCow.split("");
const animalStr = animalArr.join("");
console.log(animalStr);
  if(animalStr === cow) {
    console.log("Mooooo!");
  } else {
     console.log("Hey! You're not a cow!");
  }
  
animal('cow');
animal('platypus');

  
// Driver's Ed
let age = i;
  if(i >= 16) {
    console.log("Here are the keys");
  } else {
    console.log("Sorry, you're too young");
  }

console.log(20);
console.log(12);

I know I am close with these, but I can't figure out what I'm doing wrong


// Just Loop It
for(let i = 0; i <= 10; i++){
  console.log(i);
}

for(let i = 10; i <= 4000; i++){
  console.log(i);
}

for(let i = 10; i <= 4000; i += 2){
  console.log(i);
}


// Let's Get Even
for(let i = 0; i <= 100; i += 2){
  if(i % 2 === 0);
  console.log(i + " is an even number")
}


// Give Me Five
for(let i = 0; i <= 100; i++){
  if(i % 5 === 0) {
 console.log("I found a " + i + "." + " High five!")
 } else {
  if (i % 3 === 0) {
    console.log("I found a " + i + "." + " Three is a crowd");
  }
 }
}


// Savings Account
let bank_account = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let total = 1;
  for(i = 1; i <= 10; i++){
    total += bank_account[i];
}

console.log(i);


// Multiples of 3 and 5
let sum = 0;
for (let i = 1; i <= 1000; i++){
  if (i % 5 === 0 || i % 3 === 0){
    sum += i;
 }
};
console.log(`${sum}`);


// Easy Does It
const quotes = ["Some body", "once told me", "the world was gonna roll me"];


// Random
const  randomThings = [1, 10, "Hello", true];
console.log(randomThings[0]);
randomThings[2] = "World";
console.log(randomThings);

// We've Got Class
const ourClass = ["Gizmo", "Zoom", "Github", "Slack"];
console.log(ourClass[2]);
ourClass[2] = "Octocat";
ourClass.push("Cloud City");
console.log(ourClass);


// Mix It Up
const myArray = [5, 10, 500, 20];
myArray.push("Egon");
myArray.pop();
myArray.unshift("Bob Marley");
myArray.shift();
myArray.reverse();

console.log(myArray);


// Biggie Smalls
const biggieSmalls = (num) => {
  if(num < 100){
  console.log("little number");
} else {
  console.log("big number");
}
}

biggieSmalls(43);
biggieSmalls(9000);


// Monkey in the Middle
const littleNumber = (num) => {
if(num < 5) {
  console.log("little number");
} else {
  if(num >= 10) {
    console.log("big number");
  } else {
    console.log("monkey");
  }
}
}

littleNumber(3);
littleNumber(17);
littleNumber(8);


// What's in Your Closet?
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// 1.
console.log("Kristyn is rocking that " + kristynsCloset[6] + " today!")

// 2.
kristynsCloset.shift();
let rogueShoe = "left shoe";
console.log(rogueShoe);
console.log(kristynsCloset);

// 3.
kristynsCloset.splice(5, 0, "raybans");
console.log(kristynsCloset);

// 4.
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);

// 5.
console.log(thomsCloset[0][1]);

// 6.
console.log(thomsCloset[1][1]);

// 7.
console.log(thomsCloset[2][2]);

// 8. 
console.log("Thom is looking fierce in a " + thomsCloset[0][1] + ", " + thomsCloset[1][1] + ", and " + thomsCloset[2][1] + "!");

// 9. 
thomsCloset[1][2] = "Footie pajamas";
console.log(thomsCloset[1]);


// Functions
// 1.
const printGreeting = (name) => {
  console.log("Hello there, " + name + "!");
}

printGreeting("Slimer");

// 2. 
const reversedWordOrder = (str) => {
  //1 split string/words into an array
  const arraySplit = str.split(" ");
  //2 reverse array
  console.log(arraySplit);
  const reversedArray = arraySplit.reverse();
  console.log(reversedArray);
  console.log(reversedArray.join(" "));
}
  //3 turn array into string
  console.log(reversedWordOrder("Ishmael me Call"));
  console.log(reversedWordOrder("I use Lâncome on my comb"));
// console.log(reverseWordOrder("I use Lâncome on my comb"));

// // I would like to go over this one because I couldn't figure it out and had to resort to looking at the exercise


// 3.
const calculate = (num1, num2, operation) => {
  if(operation === "add"){
    return num1 += num2;
  } else if(operation === "sub"){
      return num1 -= num2;
    } else if (operation === "multi"){
      return num1 * num2;
    } else if (operation === "div"){
      return num1 / num2;
    }
  }
  
console.log(calculate(4, 3, "add"));
console.log(calculate(4, 3, "sub"));
console.log(calculate(4, 3, "multi"));
console.log(calculate(4, 3, "div"));


// Unnamed
// 1.
const printCool = (name) => {
  console.log(name + " is cool");
}

console.log(printCool("Captain Reynolds"));

// 2.
const calculateCube = (num) => {
  console.log(Math.pow(num, 3));
}

console.log(calculateCube(5));

// 3.
const isAVowel = (letter) => {
  if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
    return true;
  } else {
    return false;
  }
}

console.log(isAVowel("a"));
console.log(isAVowel("q"));
console.log(isAVowel(2));
console.log(isAVowel("kumquat"));


// 4.
const getTwoLengths = (string1, string2) => {
 console.log(string1.length);
 console.log(string2.length);
 return [string1.length, string2.length];
}

console.log(getTwoLengths("yo mamma", "antidisestablismentarianism"));


// 5. 
const getmultipleLengths = (string) => {

}

// Not sure how to set this one up

// 6.
const maxOfThree = (num1, num2, num3) => {
  if(num1 >= num2 && num3){
    return num1
  } else if(num1 <= num2 >= num3){
    return num2
  } else if(num1 && num2 <= num3){
    return num3
  }

console.log(maxOfThree(6, 9, 1));

// 7.
const printLongestWord = (array) =>
  let longest = " ";

  array.forEach(function(word)) {
    if(word.length > longestWord.length){
      longestWord = word;
    }
  });
  return longestWord;

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

// Not sure how to set this one up either. Stack Overflow kinda helped, but the function isn't working

// 8.
const transmogrify = (num1, num2, num3) => {
  let result = num1 * num2;
  console.log(Math.pow(result, num3));
}

console.log(transmogrify(5, 3, 2));


// Syntax
// {} curly braces define the object
// keyName: value ("string", number, boolean)
// Method - myMethod(); - function used when console.log-ed


// Me
const me = {
  name: 'Steve',
  age: 30,
  email: 'blarf@blarf.com'
};
me.age = 1000;

me['placeOfResidence'] = 'A closet';

console.log(me);


// Slimer
const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}

console.log(monster.name);
monster.type = "phantom";
monster.age = 6;
console.log(monster);


// Ogres
const adventurer = {
  name: 'Dirk Thirsty',
  hitPoints: 500,
  weapon: 'fists',
  attack: 40
}
console.log(adventurer);

const ogre = {
  hitPoints: 250,
  weapon: 'butt',
  attack: 50
}
console.log(ogre);

const fight = (adventurer, ogre) => {
  console.log(adventurer.hitPoints);
  console.log(ogre.hitPoints);
  if(adventurer.hitPoints > ogre.hitPoints) {
    console.log('adventurer wins');
  } else {
    console.log('ogre wins');
  }
  }
  fight(adventurer, ogre);

  // let dead = false 

// while(dead) {

//   ogre attacks adv

//   if adv hp <= 0 
//     say he's dead
//     dead = true

//   else 
//     adv attacks ogre

//     if ogre hp <= 0 
//       say hes dead
//       dead = true

// }



// Extras
1. Mama Cat
const cat1 = {
  name: "Ms. Chubbikins",
  breed: "Calico",
  age: 6
}

console.log(cat1.age);
console.log(cat1.breed);

// 2. Papa Cat
const cat2 = {
  name: "Garfield",
  breed: "Cartoon",
  age: 39
}

// 3. Combine Cats
const combineCats = (mama, papa) => {

}

console.log(combineCats(cat1, cat2));











