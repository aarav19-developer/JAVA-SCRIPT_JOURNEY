// LOOPS:
// Loops are used to execute a piece of code again and again.

// FOR loop:
for( let i = 1; i <= 5; i++){
    console.log("Dear Zindagi");                                       
}

// TASK:
// Calculte the sum of first n numbers.
sum = 0;
for(let i = 1; i <=5; i++){
    sum = sum + i;
}
console.log("sum = ", sum);

for(let i = 1; i <= 5; i++ ){
    console.log(i)
}

// NOTE: in the above loop if we try to print "i" after the loop, then it will show error bca the [ let ] variable is block scope variable.
//       so if we have to print "i" after the loop ended we have to use [ var ] variable instead of [let].

// INFINITE Loop:- A loop that never ends( means that stopping condition can never be false).
/* 
for(let i = 1; i >=0; i ++){
    console.log(i)
}
*/

// WHILE loop:-
// while(condition){
//  do some work
// }
let i = 1;

while(i<=5){
    
    console.log("Dear Zindagi");
    i ++;
}

// Do- While Loop:- in this loop, the condition will apply at the last.

// do {
//  do some work
// } while(condition)

let j = 20;
do{
    console.log("DEAR ZINDAGI")
    j ++
} while(j <= 10);

// TASK:
// Print number from 1 to 5.
let a = 1;
do {
    console.log(a);
    a ++;
}while(a <= 5);

// For OF Loop:- used to apply loop on string and array.
// for(let val of strVar){
//      do some work
// }
let str = " dear zindagi"
for(let i of str){ // iterator -> character
    console.log(i);
}
 let abc = " world"
let size = 0;
for( let i of abc){
    // console.log(i)
    size ++
}
console.log(size)

// For in Loop:- always return keys.
let student = {
    name : " Dear",
    age : 22,
    cgpa : 9.9,
    ispass: true
};
for(let i in student){
    console.log(i)
    console.log(i, student[i])
} 

// TASK: 
// Print all the even numbers from 0 to 100.
for(let i = 0;i<= 100;i++){

    if(i % 2 === 0){
        console.log(i);   
    }
}

// TASK:
// Create a game where you start with any random game number.
// Ask the user to keep guessing the game number until the user enters correct value.

// let s = prompt("Can you guess the correct number: ");
// if(s == 22){
//     console.log("You won, you guess the correct number")
// }
// else{
//     console.log("oops!, You lose")
// }

// OR

//  let gameNum = 1322;
//  let userNum = prompt("Guess the game number: ");

// while(userNum != gameNum){
//     userNum= prompt("you lose, guess again")
// }
// console.log("congrats, you won")

// STRING:- String is a sequence of characters used to represent text.

let s = "DEAR -- 418";

// Properties of String:
// 1. String length ( s.length) 
// 2. String indices ( s.[2])
console.log(s[8]) 

// NOTE:- 
// Template Literals = string formed by using backticks.

// WHY WE ARE CREATING A STRING USING BACKTICK WHEN WE HAVE BOTH SINGLE AND DOUBLE QUOTE?
let obj = {
    item : "pen",
    price : 22
};
console.log("The cost of", obj.item, " is", obj.price, 'rupees.')
// In the above line we have to use again and again double quotes and commas.
let output = `The cost of the ${obj.item} is ${obj.price} rupees`;
console.log(output) 

// NOTE:- The escape character ( \n -- new line, \t -- for tab space, etc) are counted as single or one time during the counting of string length.

// STIRNG METHODS:
// 1. str.toUpperCase()
let s1 = " dear zindagi"
console.log(s1.toUpperCase())

// 2. str.toLowerCase()
let s2 = "DEAR ZINDAGI"
console.log(s2.toLowerCase())

// 3.str.trim() ----- this remove whitespaces(space) from starting and ending.
let s3 = "       dear    zindagi       "
console.log(s3.trim())

// 4. str.slice(start{index position},end{index position}) --- returns part of string.
// 5. str.concat(str1) ---- joins str1 with str ( NOTE: also can use +)
// 6. str.replace( searchVal, new Val)
let x = "abcxsd"
console.log(x.replace("xs","as"))

// 7. str. charAt(idx)
let s22= "Dear";
console.log(s22.charAt(3))

// TASK:
// Prompt the user to enter their full name. Generate a username for them based on the input.
// Start username with @, followed by their full name and ending with the fulname length.
// example: username = "Dear zindagi", username should be "@dear zindagi 0806"

let user_name = prompt("Enter your full name: ")
console.log(`The ID of ${user_name} is @${user_name}${user_name.length}`)

while(user_name != "Dear_zindagi"){
    user_name= prompt("Enter your full name: ")
}
console.log(`congrats`)



