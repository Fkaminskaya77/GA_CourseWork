/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */

/*
 * Prompt 1:
 *
 * Create a loop that counts from 0 to 10, printing each number.
 */
for(i = 0; i <= 10; i++)
  console.log(i)
/*
 * Prompt 2:
 *
 * Create a loop that prints every even number between 0 and 100.
 */
for(i=0; i <= 100; i += 2)
  console.log(i)

/*
 * Prompt 3:
 *
 * Create a loop that counts from -5 to 5, printing each number.
 */
for(let i = -5; i <= 5; i++) 
console.log(i)


/*
 * Prompt 4:
 *
 * Create a loop that counts down from 10 to 0, printing each number.
 */
for(let i = 10; i >= 0; i--)
console.log (i)
/*
 * Prompt 5:
 *
 * Create a loop that counts down from 5 to -5, printing each number.
 */
for(let i = 5; i >= -5; i--)
console.log (i)

/*
 * Prompt 6:
 *
 * Create a loop that counts from 0 to 50 in multiples of 2 (instead of 1),
 * printing each number.
 */
for(let i = 0; i <= 50; i += 2)
  console.log(i)

/*
 * Prompt 7:
 *
 * For the numbers 0 - 100, print out "I found a [ number ]. High five!" if the
 * number is a multiple of five.
 *
 *Sample Output:
 // - I found a 5. High five!
 */ let i = 5
    if (i % 5 === 0){
  console.log(" I found a [5]. High Five!")
  console.log(" I found a [i]. High Five!")
// I found a 10. High five!
let i = 10
if( i % 5 === 0) {
  console.log(" I found a [10]. High Five!")
  console.log(" I found a [i]. High Five!")
}


  /* Prompt 8:
 
   Create a variable called someNumber and assign it a random number between
    0 and 100.
    */   someNumber = 33
/*
 * Create a conditional that matches these requirments:
 * - if someNumber is less than 30, print "that's a small number"
      */  
      let someNumber = 33
      if(someNumber < 30)
      console.log("that's a small number!")

 //   - if someNumber is between 30 and 60, print "the number is medium sized"
      let someNumber = 33
      if(someNumber > 30 && someNumber < 60)
      console.log("the number is medium sized")
  
 // - if someNumber is greater than 60, print "We got a big one!"
       let someNumber = 33
       if(someNumber > 60)
       console.log("We got a big one!")   





/*
 * Prompt 9:
 *
 * Iterate over the starWars array printing each character's name and index
 *
 *i.e. 0. Han, 1. C3PO, 2. R2D2
 */

// const StarWars = ['Han', 'C3PO', 'R2D2', 'Luke', 'Leia', 'Anakin'];

for(let i = 0; i<StarWars.length; i++) {
  console.log(i + ".", StarWars[i]);
}


 *// Prompt 10:
 *
 *// Write a loop that pushes every even number between 0 and 100 into an array,
 *//then print the array.
 for(let i = 0; i <= 100; i += 2)



 * Prompt 11:
 *
 * Find the median number in the following nums array (the mid point), then
 * console.log that number.
 *
 * Hint: What does Math.floor() do?


      
      
let nums = [
  14,
  11,
  16,
  15,
  13,
  16,
  15,
  17,
  19,
  11,
  12,
  14,
  19,
  11,
  15,
  17,
  11,
  18,
  12,
  17,
  12,
  71,
  18,
  15,
  12
];
//sort the array
nums.sort();
//find the midpoint of the array by dividing the length of the array by 2.
const midpoint = Math.floor(nums.length / 2); 
//midpoint gave out 15
console.log(midpoint(nums)) //15
 
  Also tryed this method  even though i think they are pretty much
  the same thing...it gave me 15 trying to understand what the difference is between the 2
  when just using the midpoint and using both median and midpoint in the same code.
  the only difference I could find is the true or false statment in the second method.

nums.sort();
const midpoint = Math.floor(nums.length / 2);
 const median = nums.length % 2 === 1
 nums[midpoint]//15
 console.log(median(nums))//15



 /* Prompt 12:
 *
 *Did you know that you can nest loops? The catch is that you have to use
 *different incrementers (normally i). You'll commonly see developers use
 * another 1-letter incrementer (j, k, l, etc).
 *
 /* Create an "outer" loop that counts up from 1 to 10 with an incrementer of i.
   */ for (let i = 1; i <= 10; i++) 
 //Create an "inner" loop that counts from 11 to 20 with an incrementer of j.
     for (let j = 11; j <= 20; j++) 
 //Inside the inner loop, print `i: ${i} / j: ${j}` (Use backtics!)
    console.log(`i: ${i} / j: ${j}`);

/*
 * Prompt 13:
 *
 * Using nested loops, print the values inside the nested arrays.
    
*/
let nestedArrays = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']];

for(i = 0; i < nestedArrays[i].length; i++){
for(j = 0; j < nestedArrays[i].length; j++) {
  console.log(nestedArrays[i][j]);
}