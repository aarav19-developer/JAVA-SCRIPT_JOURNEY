// DOCUMENT OBJECT MODEL (DOM):-

console.log(window)

// WINDOW OBJECT: -
                 // The window object represents an open window in a browser. It is browser's object (not JavaScript's) & is automatically created by browser.
                 // It is an global object with lots of properties and method.

// What is DOM ? 
// When a web page is loaded, the browser takes he HTML code and builds a tree-like structure in memory, 
// that structure is called a document object model(DOM) of the page.

// NOTE: To apply methods on object we have to use (.dir).
console.dir(document)

console.dir(document.body.childNodes[1]) 

// DOM MANIPULATION: -
 
// Selecting with id:
let change = document.getElementById("head")
console.dir(change)

// Selecting with classname: 
let head = document.getElementsByClassName("heading")
console.log(head)
console.dir(head)

// Selecting with tagname:
let tag = document.getElementsByTagName("p");
console.dir(tag)

// Query Selector: 
               // document.querySelector("myID" / myClass / tag")
                       // returns first element.

               // document.querySelectorAll("myID" / myClass / tag")
                       // returns a NodeList

// PROPERTIES:
              // tagName: returns tag for element nodes.
              let firstEl = document.querySelector("#head");
              console.dir(firstEl)

              // innerText: returns the text content of the element and all its children.
                let div1 = document.querySelector("div1");
                console.dir(div1)

              // innerHTML: returns the plain text or HTML contents in the element.

              // textContent: returns textual content even for hidden elements.


// TASK: 
// Create a H2 heading element with text - "Hello Javascript".
// append "from AARAV - HARIT" to this text using JS.

let txt = document.querySelector("h4")
console.dir(txt)
txt.append("from AARAV-HARIT")
console.dir(txt)

// Create 3 divs with common class name - "box". 
// Access them & add some unique text to each of them.

let divs = document.querySelectorAll(".box");
// box[0].innerText = " new one";
// box[1].innerText = " new two";
// box[2].innerText = " new three";

// OR

let idx = 1
for(div of divs){
    div.innerText = `new unique messsage value ${idx}`;
    idx++;
}




