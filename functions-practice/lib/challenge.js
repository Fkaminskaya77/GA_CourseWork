/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */

/*
 * Prompt 1:
 *
 * Write a function, using the function keyword. Call the function sayHello.
 * When invoked, sayHello should print the string 'hello world'.
  */   function sayHello(){
       let string = "Hello World"
       console.log(string)
     }
      sayHello();


/*
 * Prompt 2:
 *
 * Create a function called print. Print should take a parameter called message.
 * When invoked and passed a string, print should `console.log` the message.
 */   function print(message) {
     console.log(message)
    }
  print("Print Message!");


/*
 * Prompt 3:
 *
 * Create a function called printMessage. This function should take a parameter
 * called message. When invoked and passed a string, print 'Today's message
 * is:', followed by the message passed in as a parameter.
 */ function printMessage(message) {
    console.log("Today's message is:" + message)
  }
  printMessage("Weather is 75 degrees");

/*
 * Prompt 4:
 *
 * Fix the following function:
 */

/** Starter Code */
// function (a) {
//   return a ** 2
// }

function mul(a) {
return a ** 2
}
mul(2);


/*
 * Prompt 5:
 *
 * Create a function called reverseMessage. This function should take
 * a parameter called message. When invoked and passed a string, print the
 * string in reverse. (hint: look up some ways of doing this.)
 */ function reverseMessage(message) {
let messageSplit = message.split("");
console.log(messageSplit)
let messageReverse = messageSplit.reverse();
console.log(messageReverse)
let joinMessage = messageReverse.join("");
console.log(joinMessage)
}
  reverseMessage("Wonderful");


/*
 * Prompt 6:
 *
 * Create a function called multiply that takes two parameters: a and b. When
 * invoked, multiply a times b. If b an argument is not passed in for b, then
 * double a (i.e. multiply it by two).
 *
 * Hint: use a default parameter.
 */ function mul(a,b){
    let multiply = (a * 2)
    return multiply
}
 mul(11);


/*
 * Prompt 7:
 *
 * Fix the following code. HINT: Think Objects :)
 */

/** Starter Code */
function makePerson(firstname, lastname) {
    firstname: firstname;
    lastname: lastname;
}

const zakk = makePerson('Zakk', 'F')
 const jimmy = makePerson('Jimmy', 'B')


//my code fixed
function makePerson(firstname, lastname) {
     firstname: "firstname";
     lastname:"lastname";
  return {
    firstname: firstname,
    lastname: lastname,
  }
};


const zakk = makePerson('Zakk', 'F')
 const jimmy = makePerson('Jimmy', 'B')
 
console.log(zakk.firstname)
console.log(zakk.lastname)
console.log(jimmy.firstname)
console.log(jimmy.lastname)

/*
 * Prompt 8:
 *
 * Write a function that returns an object. The object can be anything.
 */
function getCat(n, b, a) {
  const name = n;
  let breed = b;
  let age = a;
  
return {
    name: name,
    breed: breed,
    age: age,
}
};

let cat = getCat("Ms.Fluffy", "Siberian", "5")
console.log(cat.name);
console.log(cat.breed);
console.log(cat.age);

/*
 * Prompt 9:
 *
 * Write a function that returns an array. The array can be of anything.
 */
function getColor(r, p, b) {
   let red = r;
   let purple = p;
   let blue = b;

  return [red, blue, purple];
}
const color = getColor("red","purple", "blue");
console.log(color)


/*
 * Prompt 10:
 *
 * Write a function that, when called, adds a number passed in as a parameter to
 * the sum variable below. Invoke your method a few times and then print the sum
 */

/** Starter Code */
// let sum = 0
function sum(){
  let sum =0; 
  for(let i=0; i < arguments.length; i++){
     sum += arguments[i];
  }
   return sum;
}
sum(55,2);
sum(5,7);


/*
 * Prompt 11:
 *
 * Write a function that takes an array of number values and returns the sum.
 * Test it out to make sure it works.
 */ 
let arrayNumbers = [10, 2, 3 ,8]; 
let sum = 0;
for(let i = 0; i < arrayNumbers.length; i++) {
  sum += arrayNumbers[i]
}


/*
 * Prompt 12:
 *
 * Write a function that takes a string and returns an array of every word in
 * the string.
 */
function arrString() {
  let arr = string.split(" ");
  return arr;
}
let string = ("The grass is green")
string = arrString();



/*
 * Prompt 13:
 *
 * How can you write a function so that this expression works? It should print
 * the string "this works!"
 */

/** Starter Code */
// testFunc()()
function testFunc() {
  return function () {
    console.log("This works!");
  };
}
testFunc()();



/*
 * Prompt 14:
 *
 * Write a function that takes the add function below as a parameter and invokes
 * it, passing in 2 and 4.
 */

/** Starter Code */
// function add(a, b) {
//   return a + b
// }
function outsideFunction() {
  function add(a,b) {
    return a + b;
  }
  return add;
}
const add = outsideFunction();
console.log(add(2,4));

/*
 * Prompt 15:
 *
 * Write a function that returns another function. Have the inner function print
 * the string "hello world"
 */
 function outsideFunction() {
    const word1 = 'hello';
    const word2 = ' world';

    const result = insideFunction();
 
 function insideFunction() {
    return word1 + word2;
 }
return result;
}
console.log(outsideFunction());








