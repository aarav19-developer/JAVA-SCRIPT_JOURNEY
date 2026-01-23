// OPERATORS IN JAVASCRIPT:-

// Arithmetic Operation:
let a = 24
let b = 23
console.log(a+b)
console.log(a*b)
console.log(a%b)
console.log(a**b)
console.log(a/b)

// Unary operator:
// a) increment:
let x = 3;
x++;
console.log(x)

// b) decrement:
let y = 15;
y--;
console.log(y)

// Assignment operator:
let w = 5;
let n = 2;
w %= 4;
w += 4;
w -= 3;
w **=3;
w /= 2;
console.log(w)

// Comparison operator:
// 1. Equal to [==] { ckeck the value only }
// 2. Equal to & type [===] {ckeck the quantity & value}
// 3. Not equal to [!=]
// 4. Not equal to & type [!==]

let s = 5 ;
let v = "5";
console.log(s==v)
console.log(s!=v)
console.log(s===v)

// Logical Operator:
// 1. Logical And {&&}: atleast on of the condition is false return false.
let d = 6;
let f = 4;

let cond1 = d>f;
let cond2 = d===f;
console.log(cond1 && cond2)
// 2. Logical Or {||}: atleast one of th =e condition is ture it will return true.
console.log(cond1 || cond2) 
// 3. Logical Not {!}: rever the condition.
console.log(!d>f)

// Ternary Operators:
// condition > true output : false ouput
let age1 = 25;
let result = age1>=18 ? console.log("adult"): console.log("not adult")


// CONDITIONAL STATEMENT:-
// To implement some condition in the code.
let age = 22
if (age>=18){console.log("you can vote")}
else{
    console.log("you can not vote")
}

let mode = "dark"
let color;
if (mode ==="dark"){
    color = "black";
}
if(mode === "light"){
    color = "white";
}
console.log(color)


let mod = "yellow"
let colour;
if (mod == "dark"){
    console.log("black")
}
else if(mod =="blue"){
    console.log("blue")
}
else if(mod == "pink"){
    console.log("pink")
}
else{
    console.log("white")
}

// TASK:
// Check if the number is even or odd.
let a1 = 22
if(a1%2==0){
    console.log("number is even")
}
else{
    console.log("number is odd")
}

// Get user to input a number using prompt("Enter a number: "). Check if the number is a multiple of 5 or not.
// let num = prompt("Enter a number: ")
// if (num % 5 == 0){
//     console.log("The number is the multiple of 5")
// } 
// else(console.log("The number is not the multiple of 5"))

// Write a code which can give grades to students according to thier scores:
// 1. 80-100,A 
// 2. 70-89,B 
// 3. 60-69,C 
// 4. 50-59,D 
// 5. 0-49,F

let marks = prompt("Enter your marks: ");

if (marks>=80 && marks<=100 ){
    console.log("GRADE -A ")
}
if (marks>=70 && marks<+89 ){
    console.log("GRADE -B ")
}
if (marks>=60 && marks<+79 ){
    console.log("GRADE -C ")
}
if (marks>=50 && marks<+69 ){
    console.log("GRADE -D ")
}
if(marks>=0 && marks<=49)
{
    console.log("GRADE -F ")
}
