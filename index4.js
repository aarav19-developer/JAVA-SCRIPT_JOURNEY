// ARRAYS: Collection of items.
let marks = [ 100,98,99,90]
console.log(marks)
console.log(length.marks)

// NOTE: array is the type of object in which the keys are replaced by index position.
        // Array is mutable.
        // Strings are immutable.

// Looping over an array:- 

// For loop:
// for(let idx = 0; idx < array.length; idx++){
// do your work
// }

let heroes =["ironman","shaktiman","hulk","spiderman"," antman","flash","thor"]
for(let i = 0; i< heroes.length; i++){
    console.log(heroes[i]);

}

let cities = ["delhi","meerut","pune","mumbai","jaipur","gaziabad","sahranpur","hyderabad","varanasi","banaras","haridwar"]
for(let i = 0; i < cities.length; i++){
    console.log(cities[i].toUpperCase())
}

// TASK:
// For a given array with marks of students -> [85,97,44,37,76,60].
// Find the aaverage marks of the entire class.

mark = [85,97,44,37,76,60]
let sum = 0;

for(let val of mark){
    sum +=val;
}
let avg = sum/mark.length;
console.log(avg)

// TASK: 
// For a given array with prices of 5 items -> [250,645,300,900,50]
// All items have an offer of 10% OFF on them. Change the array to storte final price after applying offer.

items = [250,645,300,900,50]
// item0 = items[0] - (10 * items[0]/ 100)
// item1 = items[1] - (10 * items[1]/ 100)
// item2 = items[2] - (10 * items[2]/ 100)
// item3 = items[3] - (10 * items[3]/ 100)
// item4 = items[4] - (10 * items[4]/ 100)

// new_items = [item0,item1,item2,item3,item4]
// console.log(new_items)

// OR

for(let i = 0; i < items.length; i++){
    let offer = (items[i] * 10)/100;
    items[i] -= offer;
}
console.log(items)

// ARRAY METHODS:- 

// Push() : add to end
// Pop() : delete from end and return 
// toString() : converts array into string
// concat() : joins multiple array & returns result
// unshift() : add to start
// shift() : detele from start & return
// slice() : returns a piece of the array.
            // slice( start index, end index)
// splice() : chnage original array( add, remove, replace)
             // splice( start index, number of deleted items , new item wich you want to add).


// TASK: 
// Create an array to store companies -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix".
// a. Remove the first company from an array.
// b. remove uber & add Ola in its place.
// c. Add Amazon at the end.

companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
//a. 
companies.shift()
console.log(companies)
// b. 
companies.splice(1,1,"Ola")
console.log(companies)
// c.
companies.push("Amazon")
console.log(companies)