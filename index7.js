// DOM MANIPULATION:

//Attribute: 
// -----> 
let div = document.querySelector("div");
console.log(div)

let id = div.getAttribute("id");
console.log(id)

let name = div.getAttribute("name");
console.log(name)


// -------->
let para = document.querySelector("p");
console.log(para.setAttribute("paragraph","newclass"))

// Style: 
let div1 = document.querySelector("div1")
div.style.backgroundColor = "yellow"

// Insert Elements:
                  // node.append(el) : adds at the end of node (inside).
                  // node.prepend(el) : adds at the start of node (inside).
                  // node.before(el) : adds before the node (outside).
                  // node.after(el) : adds after the node (outside).


                  // let el = document.createElement("tag name of which item we will want")

let newbtn = document.createElement("button");
newbtn.innerText ="press me"
console.log(newbtn);

let div3 = document.querySelector("div");
div.append(newbtn)
div.prepend(newbtn)
div.before(newbtn)
div.after(newbtn)

let p = document.querySelector("p")
p.append(newbtn)

let newHeading = document.createElement("h1");
newHeading.innerHTML="<i> Hello, DEAR ZINDAGI </i>"

document.querySelector("body").prepend(newHeading)

// Delete Element:
                 // node.remove(): removes the node.

let para1 = document.querySelector("p");
para1.remove();
newHeading.remove()

// TASK:
// Create a new button element. Give it a text "click me",
//  background color of red & text color of white.

    // Insert the button as the first element inside the body tag. 

let btn = document.createElement("button");
btn.innerText = "click me";
btn.style.backgroundColor= "red"
btn.style.color = "white"

document.querySelector("body").prepend(btn)

// Create a <p> tag in html, give it a class & some styling.
// Now create a new class in CSS and try to append this class to the <p> element.

// Did you notice, how you overwrite the class name when you add a new one?
// Solve this problem using classList.

let para2 = document.querySelector("p");

