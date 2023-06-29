
//get all headings h1 and h2

let headings = document.querySelectorAll('.heading')
console.log(headings)


// getting aside element to place all headings into
let TOContents = document.querySelector('aside')
 console.log(TOContents)

//making a main header for table of contents
let headline = document.createElement("h2");
 headline.innerHTML = "Table of contents";
 TOContents.appendChild(headline);

// creates a numbered list and a list of headings for the table of
// contents and puts them in the aside element(inside the blue box)
let tableList = document.createElement('ol')
for(let i = 0; i <headings.length; i++) {
let newTableList = document.createElement('li');
newTableList.innerHTML = headings[i].innerHTML;
tableList.appendChild(newTableList)
TOContents.appendChild(tableList)
}
