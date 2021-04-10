// DOM Document Object Model

/* 
A representation of a window.document object that comprises everything that we see in the browser (and things we don't such as <head> tag)

   -DOM Node interface has subclasses of 
       -document
       -element
       -DocumentFragment
*/ 


//creates an HTML element
let h1 = document.createElement("h1");
h1.style.color= "yellow" //references style sheet and its color property to assign it a value
h1.style.fontFamily= "sans-serif"
h1.innerText= "Welcome to Document Object Model"; //inner text is a property that injects text

//you've created an element but it hasn't been appended to the document

document.body.appendChild(h1)

//document.getElementById()
let h3 = document.getElementById("id-method");
h3.innerText = ".getElementById"

let p = document.getElementById("get-id");
p.innerText = "Method used to grab 1st element with a specified id"
//need to assign the doc.getElementsXYZ to a VARIABLE

let myList = document.getElementsByClassName("our-list") //class or id names need to have "" and be STRINGS 
console.log(myList) // console logs the list as an ARRAY
myList[1].style.color = "blue" //can add color like this; so the bracket is similar to calling values in an array, using 0 would change all items in the UL to that style (see the array that is console logged)

let qSelect = document.querySelector("#q-select");
qSelect.innerText = "Query Selector grabs the first matching selector"

let selectAll = document.querySelectorAll("h3")
console.log(selectAll)

// .addEventListener ("event", callback_function)

let myBtn = document.querySelector(".submit-btn");

myBtn.addEventListener("click", () => {console.log("Button has been hit")});




