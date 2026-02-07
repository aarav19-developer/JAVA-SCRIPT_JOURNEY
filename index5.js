// FUNCTION IN JAVA-SCRIPT:-
                          // Block of code that performs a specific task, can be invoked whenever needed.


function myFunction(){
    console.log("dear_Zindagi");
    console.log("hello world!");
}
myFunction();
myFunction();

function myfunc(msg){
    // parameter -> input
    console.log(msg);
}
myfunc("Dear zindagi") // argument

// TASK:
// Create a function which is used to add 2 number.
function sum(a,b){
    add = (a + b)
    console.log(add)
}
sum(13,22)

// OR

function sum(x, y){
    s = x+y;
    console.log("before return");
    return s;
    
}

let val = sum(3,4);
console.log(val)

// NOTE: Function parameters are like local variable of function. 
        // They are block scope. 

// Sum Function:
function sum(a, b){
    return a+b;
}

// Multiplication Function:
function mul(a, b){
    return a*b
}

// ARROW Fuction:
// const functionName = (parameter 1 , parameter 2,...) => {
    // do some work
// }

const arrowsum = (a, b) => {
    console.log(a +b);
}

const arrowmul = (a, b) => {
    console.log(a*b)
}

// TASK 2:
// Create a function using the "function" keyword that takes a string as an argument
//  & returns the number of vowels in the string.

function countVowels(str){
    // "DEARZINDAGI", count = 5
    let count = 0;
    for(const char of str){
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        )
        {
            count++;
        }
    }
    return count;
}

// Create an arrow function to perform the same task.

const countVow = (str) => {
        let count = 0;
    for(const char of str){
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        )
        {
            count++;
        }
    }
    return count;

}

// ForEach loop in Arrays:
                         // It is a method with is bind up with object.
                         // arr.forEach(callBackFunction)
                         // CallbackFunction: here, it is a function to execute for each element in the array.
                         // A callback is a function passed as an agrument to another function.

let arr = [ 1,2,3,4,5];

arr.forEach(function printVal(val,idx,arr){ // value at each index.
    console.log(val,idx,arr);
})

// NOTE: forEach only use for array not for string.

// ForEach is a HIGHER ORDER FUNCTION/METHOD.

// HIGHER ORDER FUNCTION/METHOD :- 
                              // are those function who use another function as a parameter
                              // or use to return the another function.

// TASK: 
// For a given array of numbers, print the square of each value using the forEach loop.

let arr1 = [1,2,3,4,5]

arr1.forEach((square) => {
    console.log(square*square)
})

// METHODS OF ARRAY:-

// MAP METHOD:- creates a new array with the results of some opeartion. The value its callback return are used to form new array.
let nums = [ 23,45,22]

// nums.map((value) =>{
//     console.log(value)
    
// })

let newArr = nums.map((value) =>{
    return value;
    
})
console.log(newArr)

// FILTER METHOD:- creates a new array of elements that give true for a condition/filter.
let arr2 = [1,2,3,4,5,66,78,9,22]

let evenarr = arr2.filter((value1) => {
    return value1 % 2 === 0;
})
console.log(evenarr)

// REDUCE METHOD:- Performs some operations and reduces the array to a single value. It returns that single value.
let arr3 = [1,2,3,4,5,66,78,9,22]

const output = arr3.reduce((previous,current)=> {
    // return result + current  ---- used to find sum
    return previous > current ? previous : current; // used to print maximum number.
});
console.log(output)


// TASK: 
// We are given array of marks of students. Filter out of the marks of students that scored 90+.
// [ 87, 22, 34, 98, 87, 88]

let array = [ 87, 22, 34, 98, 87, 88, 99, 97];

result = array.filter((marks)=> {
    return marks >= 90;
})
console.log(result)

// Take a number n as input from user. Create an array of numbers from 1 to n.
user = prompt("Enter a number: ")

let array1 = [];

for(let i=1; i<=user; i++){
    array1[i-1] = i; 
}
console.log(array1)

// Used a reduce method to calculate the sum of all numbers.

 let answer = array1.reduce((prev, curr) => {
    return prev + curr;
});
console.log(answer)

// Used the reduce method to find the product of all the numbers in the array.

let product= array1.reduce((prev1,curr1)=>{
    return prev1*curr1;
})
console.log(product)