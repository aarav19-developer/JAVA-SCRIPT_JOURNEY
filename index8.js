// // EVENT IN JAVASCRIPT:-
//                     // The change in the state of an object is known as an event.
//                     // events are fired to notify code of "interesting changes" that may affect code execution.

//                     // Ex: 
//                           // Mouse events (lick, double click, etc)
//                           // Keywords events (keypress, keyup, keydown)
//                           // Form events (submit etc)
//                           // print event & many more.

// // EVENT Handling In JavaScript:
//                               // node.event =() => {
//                                 // handle here
//                                 // }

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn1 was clicked!");
//     let a = 21;
//     a++;
//     console.log(a)
// };
// btn1.onclick =() =>{
//      console.log("Handler1")
// }


// let div = document.querySelector("div");
// div.onmouseover = () =>{
//     console.log("you are inside a div!")
// }


// // EVENT OBJECT: 
//              // It is a special object that has details about the event.
//              // All event handlers have access to the Event Object's properties and methods.

//              // node.event = (e) => {

//                  // handle here

//                 // }

// btn1 = document.querySelector("#btn1")
// btn1.onclick= (e) =>{
//     console.log(e)
//     console.log(e.type)
//     console.log(e.target)
//     console.log(e.clientX,e.clientY)
// }; 


// // EVENT LISTENERS:
//                     // node.addEventListener (event, callback)

//                     // node.removeEventListener (event, callback)

//                     // NOTE: The callback reference should be same to remove.

btn1.addEventListener("click", () =>{
    console.log("btn1 was clicked")
});

btn1.addEventListener("click", () =>{
    console.log("btn1 was clicked - handler 2")
});

const handler3 = () =>{
    console.log("btn1 was clicked - handler 3")
};

btn1.addEventListener("click", () =>{
    console.log("btn1 was clicked - handler 4")
});

// To remove a function we need to trigger the same function,
//  for that we need to store the first one in a variable 
// and then pass that variable and all trigger it to remove the same function. 

btn1.removeEventListener("click", (handler3))

// TASK:-
// Create a toggle button that chages the screen to dark-mode when clicked & light-mode when clicked again.

let theme = document.querySelector("#theme");
let current_theme = "light";

theme.addEventListener("click", ()=>{
    if (current_theme === "light"){
        current_theme = "dark";
        document.querySelector("body").style.backgroundColor = "black"
    } else{
        current_theme = "light"
        document.querySelector("body").style.backgroundColor = "white"
    }
    console.log(current_theme)
});

