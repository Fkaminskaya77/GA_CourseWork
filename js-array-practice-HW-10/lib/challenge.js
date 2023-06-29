// Use this array for the first 8 prompts
const gilmoreGirls = [
  "Lorelai Gilmore",
  "Rory Gilmore",
  "Luke Danes",
  "Emily Gilmore",
  "Richard Gilmore",
  "Lane Kim",
  "Paris Geller",
  "Dean Forester",
  "Jess Mariano",
  "Logan Huntzberger",
];


// Prompt 1: Print Emily Gilmore to the console
console.log(gilmoreGirls[3]);


// Prompt 2: Add your own name to the end of the Gilmore Girls array:
gilmoreGirls.push("Florense Kaminskaya");


// Prompt 3: Write a `for` loop that prints our every character from Gilmore Girls:
for(i = 0; i < gilmoreGirls.length; i++){
  console.log(gilmoreGirls[i]);
}


// Prompt 4: Now use the spread operator (`...`) to print out each character from Gilmore Girls:
 console.log(...gilmoreGirls);


// Prompt 5: Use a method to remove the first element from the gilmoreGirls array
 console.log(gilmoreGirls.shift());
 //or you can do
 gilmoreGirls.shift();


// Prompt 6: Print the index of "Paris Geller"
// hint: look up .indexOf
 console.log(gilmoreGirls.indexOf("Paris Geller"));
 //or you can do
 gilmoreGirls.indexOf("Paris Geller");
 // result of index = 6


// Prompt 7: Join the array elements together and print them out in a single string
// hint: Look up .join
 gilmoreGirls.join();
 //or
 console.log(gilmoreGirls.join();

// Prompt 8: print a sub array containing just   "Emily Gilmore", "Richard Gilmore", and "Lane Kim"
// hint: look up .slice
 gilmoreGirls.slice(3, 6);
 //or
 console.log(gilmoreGirls.slice(3, 6));

// Use this array for the next 6 prompts
const people = [
  {
    name: "John Doe",
    age: 35,
    language: "English",
    country: "America",
  },
  {
    name: "Jane Smith",
    age: 28,
    language: "Spanish",
    country: "Spain",
  },
  {
    name: "Robert Johnson",
    age: 41,
    language: "French",
    country: "France",
  },
  {
    name: "Samantha Williams",
    age: 32,
    language: "German",
    country: "Germany",
  },
];

// Prompt 9: Remove the first object from the `people` array
people.shift();

// Prompt 10: Add an object representing yourself to the beginning of the `people` array
people.unshift({name: "Florense Kaminskaya" , age: "25", language: "English", country: "United States"});


// Prompt 11: Write a `for` loop that iterates through the `people` array printing out the following introduction for each person:
// "John Doe is 35 years old and speaks English because they're from America."
for(let i = 0; i < people.length; i++) {
  console.log(`${people[i].name} is ${people[i].age} years old and speaks ${people[i].language} because they're from ${people[i].country}`);

// Prompt 12: Use JavaScript to print out the oldest person in the above array
  //reduce method compares two arguments. 
  // function determines what happens to the two values 
  // the second sets the starting value.
  let findTheOldestAge = people.reduce((oldest, person) => {
    //this type of method is called(ternary).
    //3 steps
    //condition followed by a question mark(returns a value )
    // after and expression to execute if condition is truthy
    //and then expression to execute if condition is falsey
    //basically else if backup plan
    return (oldest.age || 0) > person.age ? oldest : person;
  }, {});
console.log(findTheOldestAge)



// Prompt 13: Use JavaScript to sum the ages of all the people in the `people` array
let sum = 0;
for(let i = 0; i < people.length; i++) {
  sum += people[i].age
}

// Prompt 14: Use .sort() to sort the `people` array by age
// hint: look up .sort and how to pass it a function

//re-arranges the whole array in order by ages
people.sort ((a, b) => {
return a.age - b.age
})












