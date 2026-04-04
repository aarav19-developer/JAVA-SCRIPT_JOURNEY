// CALLBACKS, PROMISES & ASYNC AWAIT:-


// SYNC IN JAVASCRIPT:
                // Synchronous means the code runs in a particular sequence of instructions given in the program. 
                // Each instruction waits for the previous instruction to complete its execution.
                 console.log("Dear")
                 console.log("Zindagi")
// ASYNC IN JAVASCRIPT:
                // Due to synchronous programming, sometimes important instructions get blocked due to some previous instructions, which causes a delay in the UI.
                // Asynchronous code execution allows to execute next instructions immediately and does not block the flow.
             
//                 function hello(){
//                     console.log("hello")
//                 }
//                 setTimeout(hello,2000)

//                 // OR
                
//                 setTimeout(()=>{
//                     console.log("hello dear zindagi")
//                 },2000)


// console.log("One")
// console.log("Two")
// console.log("Three")

// setTimeout(()=>{
//     console.log("hello dear zindagi")
// },4000);

// console.log("Four")
// console.log("Five")

// // CALLBACK:
//            //  A callback is a function passed as an argument to another function.        

// function sum(a,b){
//     console.log(a+b)
// }
// function calculator(a,b,sumCallback) {
//     sumCallback(a,b);
    
// }
// calculator(1,3,sum)

// // CALLBACK HELL { PYRAMID OF DOOM}:
//                             // Nested callback stacked below one another forming a pyramid struture.
//                             // This style of programming becomes difficult to understand and manage.
// // NESTING:

// let age = 19;
// if (age>= 18){
//     if(age>=60){
//         console.log("Senior")
//     }else{
//     console.log("Adult")
//     }
//   }else{
//     console.log("Teen")
// }

// // NESTING LOOP:

// for(let i = 0; i<5; i++){
//     for(let j = 0; j <5; j++){
//         console.log(j)
//     }
// }

// setTimeout(()=>{
//     console.log("A")
//     setTimeout(()=>{
//         console.log("S")
//     },4000)
// },2000)

// function getData(dataId){
//     console.log("Data:",dataId)
// }
// getData("SAARAV");


// function getData(dataId){
//     setTimeout(() => {
//         console.log("Data: ",dataId)
        
//     }, 2000)
// };

// function getData1(){
//     setTimeout(()=>{
//         console.log("DATA 1")     
//     },2000);
//     setTimeout(()=>{
//         console.log("DATA 2")
//     },3000);
//     setTimeout(() => {
//         console.log("DATA 3")
//     }, 4000);
// }


// // Callback Hell:
// function getData3(dataId1, getNextData){
//     setTimeout(() => {
//         console.log("Data",dataId1);
//         if (getNextData){
//          getNextData();
//         }
//     }, 2000);
// }
// getData3(1, () =>{
//     getData3(2,()=>{
//         getData3(3,()=>{
//             getData3(4)
//         })
//     })
// })

// PROMISES: 
          // Promise is for "eventual" completion of task. It is an object in JavaScript.
          // It is a solution to callback hell.

          // let promise = new Promise((resolve,reject) => {    ----> Function with 2 handler.
          //  ...
          // })

          // NOTE: Resolve and reject are callbacks provided in Javascript.

          // A javascript Pormise object can be :
                                         // Pending: The result is undefined
                                         // Resolved: The result is a value(fulfilled).
                                         // Rejected: The result is ana error object.

let promise = new Promise((resolve,reject) =>{
    console.log("I am a promise")
    // resolve("Dear zindagi")
    reject("Error")
})