// arr.indexOf() method: this method is case sensitive

let arr = ["One", "Two", "One", "Three", "Four", "One", "Five"];
console.log(arr.indexOf("One", 0)); //0
let arr = ["One", "Two", "One", "Three", "Four", "One", "Five"];
console.log(arr.indexOf("One", 3)); //5
let arr = ["One", "Two", "One", "Three", "Four", "One", "Five"];
console.log(arr.indexOf("One", 2)); // 2
let arr = ["One", "Two", "One", "Three", "Four", "One", "Five"];
console.log(arr.indexOf("One")); // 2


// arr.lastIndexOf() method : Search direction → RIGHT → LEFT and returns index of the first match 
let arr = ["One", "Two", "One", "Three", "Four", "One", "Five"];
console.log(arr.lastIndexOf("One")); // 5
let arr = ["One", "Two", "One", "Three", "Four", "One", "Five"];
console.log(arr.lastIndexOf("One", 3)); // 2
let arr = ["One", "Two", "One", "Three", "Four", "One", "Five"];
console.log(arr.lastIndexOf("One", 4)); // 2


//arr.includes() ==> returns true/false values
let arr = ["One", "Two", "One", "Three", "Four", "One", "Five"];
console.log(arr.includes("One", 3)); // true ==> starts searching from 3rd index no
let arr = ["One", "Two", "One", "Three", "Four", "One", "Five"];
console.log(arr.includes("Two", 3)); // false ==> as Two does not come after index 3 


// map()
const emails = ['a@company.com', 'b@gmail.com'];
const domains = emails.map(e => e.split('@')[1])
console.log(domains);


//1️⃣ Array Basics (10 Questions)

// Create an array with numbers 1–5 and print it.
let arr = [1, 2, 3, 4, 5];
console.log(arr);

// Print the first and last element of an array.
let arr = [1, 2, 3, 4, 5];
console.log(arr[0]);
console.log(arr[arr.length - 1]);

// Find the length of an array.
let arr = [1, 2, 3, 4, 5];
console.log(arr.length);


// Add an element at the end of an array.
let arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr);


// Add an element at the beginning of an array.
let arr = [1, 2, 3, 4, 5];
arr.unshift(6);
console.log(arr);

// Remove the last element from an array.
let arr = [1, 2, 3, 4, 5];
arr.pop(5);
console.log(arr);

// Remove the first element from an array.
let arr = [1, 2, 3, 4, 5];
arr.shift(1);
console.log(arr);

// Replace the 3rd element of an array with another value.
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.splice(3, 1, "this is thereplaced one");
console.log(arr);

// Check whether a value exists in an array.
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.includes(4));

// Convert an array to a string separated by commas.
const arr = ["apple", "banana", "mango"];
const result = arr.join(",");
console.log(result);


// 2️⃣ Looping Through Arrays (10 Questions)

// Print all elements of an array using for.
const arr = ["apple", "banana", "mango"];
for (let element of arr) {
    console.log(element);

}

// Print all elements using forEach.
const arr = ["apple", "banana", "mango"];
arr.forEach(elem => {
    console.log(elem);

})

// Print only even numbers from an array.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach(elem => {
    if (elem % 2 == 0) {
        console.log(elem);

    }
})

// Print only odd numbers from an array.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let elem of arr) {
    if (elem % 2 !== 0) {
        console.log(elem);

    }
}

// Print elements in reverse order.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);

}

// Count how many numbers are greater than 10.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 12, 14, 13];
const count = arr.filter(elem => {
    return elem > 10
})
console.log(count);
console.log(count.length);


// Find the sum of all elements.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 12, 14, 13];
const sum = arr.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue
})
console.log(sum);


// Find the average of numbers.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 12, 14, 13];
const sum = arr.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue
})
const avg = sum / arr.length
console.log(avg);


// Print elements at even indexes.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 12, 14, 13];
arr.forEach((elem, index) => {
    if (index % 2 == 0) {
        console.log(elem);

    }

})


// Find the largest number using a loop.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 12, 14, 13];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
}
console.log(max);




// 3️⃣ Array Methods (map, filter, reduce) (10 Questions)

// Use map() to double all numbers.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 12, 14, 13];
let doubelArr = arr.map(elem => {
    return elem * 2
})
console.log(doubelArr);


// Use map() to convert names to uppercase.
const nameArr = ["aakash", "sam", "rakesh"];
const uppercase = nameArr.map(elem => {
    return elem.toUpperCase()
})
console.log(uppercase);


// Use filter() to get numbers greater than 10.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 12, 14, 13];
const numbers = arr.filter(e => {
    return e > 10;
})
console.log(numbers);



// Use filter() to remove negative numbers.
const arr = [-1, -2, -3, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 12, 14, 13];
const positive = arr.filter(e => {
    return e >= 0;
})
console.log(positive);



// Use reduce() to find the sum of numbers.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 12, 14, 13];
const sum = arr.reduce((accumulator, element) => {
    return accumulator + element
})
console.log(sum);

// Use reduce() to find the maximum number.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 12, 14, 13];
const max = arr.reduce((accumulator, element) => {

    if (element > accumulator) {
        return element
    }
    return accumulator
}, arr[0])
console.log(max);



// Use map() to extract domains from emails.

const emails = ["john.doe@gmail.com","alice.smith@yahoo.com", "bob.johnson@company.com","emma.wilson@gmail.com"];
const extraxtedDomains= emails.map(elem =>{
    return elem.split('@')[1]
})
console.log(extraxtedDomains);


// Use filter() to get strings longer than 5 characters.
const fruits = [ "apple","banana","mango","orange","grapes","pineapple","kiwi"];
const filterFruits = fruits.filter(elem=>{
   return elem.length >5
})
console.log(filterFruits);


// Convert an array of numbers into squares using map.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 12, 14, 13];
let square = arr.map(elem=>{
    return elem*elem;
})
console.log(square);



// Count how many numbers are even using reduce.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 12, 14, 13];
const count = arr.reduce((accumulator, current)=>{
   if(current%2 ===0){
    return accumulator+1
   }
   return accumulator
},0)
console.log(count);









