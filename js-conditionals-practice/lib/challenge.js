/*
 * Work through each of the prompts below.
 *
 * Pro tip: comment out your solution to each prompt before moving on, so your
 * console only has messages from the prompt you're currently working on.
 *
 * Remember to make a commit after completing each prompt!
 */


  Prompt:
 /*
 * Create a variable called age and assign it to your age (or a number). Write
 * a conditional that matches the following conditions:
 *
 * - if age is less than or equal 19, print "You're still a teenager!"
  */  
    let age = 25
    if (age <= 19) {
    console.log("You're still a teenager!")
}



 /* Prompt:
 *
 * Create a variable called favoriteNumber and assign your favorite number to
 * it. Write a conditional that matches the following conditions:
 *
 *   - if favoriteNumber is less than 10, print "A little number!" to the
 *   console
 *  - otherwise, print "Not a little number!" to the console
  */
    let favoriteNumber = 7
    if(favoriteNumber < 10)
        console.log("A little number!")


/*
 * Prompt:
 * 
 * Create a variable called a and assign it a number. Write a conditional that
 * matches the following conditions:
 *   - if (a * 3) % 2 is equal to 0, print "After running our calculations, the
 *   result is even"
 *   - otherwise, print "After running our calculations, the result is odd"
  */
    let a = 10
   if(a * 3 % 2 === 0) {
       console.log ("After running our calculations, the result is even");
   } else {console.log ("After running our calculations, the result is odd");
}


/*
 * Prompt:
 *
 * Create a variable called b and assign it a random number between 0 and 100.
 * Write a conditional that matches the following conditions:
 *
*/    let b = 26
/*. - if b is less than 25, print "bottom quartile"
*/    if( b < 25)
        console.log("bottom quartule")
        
 /*   - if b is between 25 and 50, print "lower quartile"
  */ if(b > 25 && b < 50)
        console.log("lower quartile")

 /*   - if b is between 50 and 75, print "upper quartile"
   */ if(b > 50 && < 75)
        console.log("upper quartile")

/*   - if b is between 75 and 100, print "top quartile"
    */ if(b > 75 && b < 100)
  console.log("top quartile")











