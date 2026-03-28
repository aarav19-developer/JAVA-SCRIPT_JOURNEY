// CLASSES AND OBJECTS:-

// Prototypes in JAVASCRIPT:
// A java script is an entity having state and behaviour (properties and method).
// JS objects have a special property called prototype.
// We can set protostype using __proto__

// NOTE: If object and prototype have same method, object's method will be used.

const student = {
    full_name: "AARAV_19",
    marks: 99.9,
    printMarks: function() {
        console.log("marks = ", this.marks)  // here this.marks means student marks.
    }
}

const employee = {
    calcTax1() {
        console.log("Tax rate is 10% ");
    },
    // calcTax2: function () {
    //     console.log("Tax rate is 20% ")
    // }                                        This method is also applicable.

}

// const dearS = {
//     salary: 100000,
// };

// dearS.__proto__ = employee;

const dearS = {
    salary: 100000,
    calcTax() {
        console.log("Tax rate is 20% ")
    },
};

dearS.__proto__ = employee;



// CLASSES IN JAVASCRIPT:
//                        Class is a program code template for creating objects.
//                        Those objects will have some state (varibales) & some behaviour (functions) inside it.

// class Myclass{
//     constructor() {...}
//     myMethod() {...} 

// }

// let myobj = new Myclass();


class Bmw_car {
    start() {
        console.log("Start")
    }

    stop() {
        console.log("Stop")
    }

    setBrand(brand) {
        this.brandName = brand;  // here both brand are different the last one is function's argument. and other one is object property which is made by the class.
    }
}

let RollsRoyce = new Bmw_car();  // new keyword find the constructor.
let g_wagon = new Bmw_car();
let volvo = new Bmw_car();
volvo.setBrand("BMW");


// CONSTRUCTOR METHOD:  constructor general work to initialize the object.
//                     automatically invoked by new constructor.
//                     initializes object.

// class Myclass{
//      constructor() {...}
//     myMethod(){...}
// }

class hero{
    constructor(title) {
        console.log("Creating new object")
        this.title = title
    }
    start(){
        console.log("start")
    }
    stop() {
        console.log("stop")
    }

}

let S22 = new hero("A");  //constructor
console.log(S22)
let S = new hero();      //constructor
console.log(S)


// INHERITANCE IN JAVASCRIPT:
//                              Passing down properties and method from parent class to child class.

class parent{
    hello() {
        console.log("hello")
    }
}
 class child extends parent{
    
 }
let obj = new child();

class person{
    constructor() {
        this.species = "homo sapiens"
    }
    eat(){
        console.log("eat")
    }
    sleep(){
        console.log("sleep")
    }
    work(){
        console.log("DO nothing")
    }
}

class Engineer extends person{
    work(){
        console.log("build something, solve probelm")
    }
}

class Doctor extends person{
    work(){
        console.log("Treat patients")
    }
}

let A19 = new Engineer();

// NOTE: If child and parent have same method, child's method will be used. [Method Overriding].


// SUPER KEYWORD:
//                The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

// super(args) // class parent's constructor

// super.parentMethod(args)

class person1{
    constructor() {
        console.log("Enter parent constructor")
        this.species = "homo sapiens"
    }
    eat(){
        console.log("eat")
    }
    sleep(){
        console.log("sleep")
    }
}

class Engineer1 extends person{
    constructor(branch){
        console.log("Enter child constructor")
        super();  // to invoke parent class constructor
        this.branch = branch
        console.log("Exit child constructor")
    }
    work(){
        super.eat();
        console.log("build something, solve probelm")
    }
}

let Eng = new Engineer1("Computer Science Engineer");



// PRACTICE PROBLEM:
// You are creating a website for your college. Create a class User with 2 properties, name and email. 
// It also has a method called viewData() that allows user to view website data.


// let Data = "dear zindagi"
// class User{
//     constructor(name,email){
//         this.name = name;
//         this.email = email;

//     }

//     viewData() {
//         console.log("Data = ", Data)
//     }  
// }

// let student1 = new User("AARAV","aaravharit418@gmail.com")
// let student2 = new User("SAARAV","aaravharit19@gmail.com")


// Create a new class called ADMIN which inherit from User. Add a new method called editData to ADMIN that allows it to edit website data.


let Data = "dear zindagi"
class User{
    constructor(name,email){
        this.name = name;
        this.email = email;

    }

    viewData() {
        console.log("Data = ", Data)
    }  
}

class Admin extends User{
    constructor(name,email){
        super(name,email)
    }
    editData() {
        DATA = "Some new value"
    }
}

let student1 = new User("AARAV","aaravharit418@gmail.com")
let student2 = new User("SAARAV","aaravharit19@gmail.com")

let admin1 = new Admin();


// ERROR HANDLING:

// try-catch

// try{
// normal code
// }catch(err){ // err is an object
//   ...handling error
// }

let a = 5;
let b = 10;
console.log("a=" , a)
console.log("b=" , b)
console.log(a+b)
console.log(a+b)
try{
    console.log(a+c)  // error
}catch(err){
    console.log(err)
}
console.log(a+b)
console.log(a+b)
