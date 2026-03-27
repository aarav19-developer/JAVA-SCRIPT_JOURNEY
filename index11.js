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

let RollsRoyce = new Bmw_car();
let g_wagon = new Bmw_car();
let volvo = new Bmw_car();
volvo.setBrand("BMW");


// CONSTRUCTOR METHOD:
//                     automatically invoked by new constructor.
//                     initializes object.

// class Myclass{
//      constructor() {...}
//     myMethod(){...}
// }

// PAUSE...