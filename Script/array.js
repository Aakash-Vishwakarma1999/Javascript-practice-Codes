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






// 4️⃣ Searching in Arrays (10 Questions)

// Find the index of a specific value.
let arr=[1,2,3,2,4,5,3,1,5,6,7,8,2];
const index = arr.indexOf(2);
console.log(index);


// Find the last occurrence of a value.
let arr=[1,2,3,2,4,5,3,1,5,6,7,8,2];
const index = arr.lastIndexOf(2);
console.log(index);


// Check if an array includes a value.
let arr=[1,2,3,2,4,5,3,1,5,6,7,8,2];
const includes = arr.includes(3);
console.log(includes);


// Find the first element greater than 10.
let arr=[1,2,3,2,4,11,13,12,10,5,3,1,5,6,7,8,2];
const greater = arr.find(e=>{
    return e>10
})
console.log(greater);


// Find the index of first even number.
let arr=[1,2,3,2,4,11,13,12,10,5,3,1,5,6,7,8,2];
let index = arr.findIndex((e)=>{
    return e%2 === 0
})
console.log(index);


// Find the first string longer than 5 characters.
let arr = ["apple", "banana", "cherry", "mango", "grape"];
let str = arr.find(e=>{
    return e.length>5
})
console.log(str);


// Find if any number is negative.
let arr=[1,2,3,2,4,-11,13,12,10,5,3,1,5,6,-7,8,2];
let neg = arr.some(e=>{ //checks if any match exists
    return e<0;
})
console.log(neg);


// Check if all numbers are positive.
let arr=[1,2,3,2,4,-11,13,12,10,5,3,1,5,6,-7,8,2];
let pos = arr.every(e=> e>0);// check if every elem is >0
console.log(pos);


// Find the position of "apple" in an array.
let arr = [ "banana", "cherry","apple", "mango", "grape","apple"];
let position = arr.indexOf("apple");
console.log(position);


// Find the first number divisible by 5.
let arr=[1,2,3,2,4,-11,13,12,10,5,3,1,5,6,-7,8,2];
let div = arr.find(e=> e%5 == 0);
console.log(div);




// 5️⃣ Array Modification (splice, slice) (10 Questions)

// Extract the first 3 elements using slice.
let arr=[1,2,3,2,4,-11,13,12,10,5,3,1,5,6,-7,8,2];
let elem = arr.slice(0,3);// start at 0 end before 3
console.log(elem);


// Extract the last 2 elements.
let arr=[1,2,3,2,4,-11,13,12,10,5,3,1,5,6,-7,8,2];
console.log(arr.slice(arr.length-2,arr.length));


// Remove 2 elements starting from index 3.
let arr=[1,2,3,2,4,-11,13,12,10,5,3,1,5,6,-7,8,2];
arr.splice(3,2);//splice affects the original array 
console.log(arr);


// Insert "orange" at index 2.
let arr = [ "banana", "cherry","apple", "mango", "grape","apple"];
arr.splice(2,0,"Orange")
console.log(arr);


// Replace 2 elements starting at index 1.
let arr = ["banana", "cherry", "apple", "mango", "grape", "apple"];

arr.splice(1, 2, "orange", "kiwi"); // replace 2 elements
console.log(arr);

// Copy an array using slice().
let arr = ["banana", "cherry", "apple", "mango", "grape", "apple"];
console.log(arr.slice(0,arr.length));


// Remove the middle element.
let arr = ["banana", "cherry", "apple", "mango", "grape", "apple"];
let mid = Math.floor(arr.length)/2
arr.splice(mid,1)
console.log(arr);

// Insert multiple elements in the middle.
let arr = ["banana", "cherry", "apple", "mango", "grape", "apple"];
let mid= Math.floor(arr.length)/2
arr.splice(mid,0,"middle1","middle2")
console.log(arr);


// Create a subarray from index 2 to 5.
let arr = ["banana", "cherry", "apple", "mango", "grape", "apple"];
let subarray = arr.slice(2,5);
console.log(subarray);


// Remove an element without changing the original array.
let arr = ["banana", "cherry", "apple", "mango", "grape", "apple"];
let indexToRemove =2;

let newArr= [...arr.slice(0,indexToRemove),...arr.slice(indexToRemove+1)]
console.log(newArr);



// 6️⃣ Advanced Array Problems (10 Questions)

// Remove duplicate values from an array.
let arr = [1,2,3,2,4,-11,13,12,10,5,3,1,5,6,-7,8,2];

let unique = [...new Set(arr)];
console.log(unique);

let arr = [1,2,3,2,4,-11,13,12,10,5,3,1,5,6,-7,8,2];
let filtered = arr.filter((elem,index)=>{
     return arr.indexOf(elem)== index
})
console.log(filtered);



// Flatten a nested array.
let arr = [1, 2, [3, 4], 5, [6, 7, 8]];

let flatArr = arr.flat();
console.log(flatArr);


// Find the second largest number.
let arr = [1,2,3,2,4,-11,13,12,10,5,3,1,5,6,-7,8,2];
let unique =[...new Set(arr)];
unique.sort((a,b)=> b-a)

let secondLargest =unique[1]
console.log(secondLargest);


// Group numbers into even and odd arrays.
let arr = [1,2,3,2,4,13,12,10,5,3,1,5,6,8,2];
const even = arr.filter(e=>{
    return e%2==0
})
const off = arr.filter(e=>{
    return e%2!==0
})
console.log(even);
console.log(off);


// Count occurrences of each element.
let arr = [1,2,3,2,4,13,12,10,5,3,1,5,6,8,2];

let count = arr.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(count);


// Find the intersection of two arrays.
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
let intersection = arr1.filter(e=> arr2.includes(e))
console.log(intersection);


// Merge two arrays without duplicates.
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];

let arr3=[...arr1, ...arr2]
console.log([... new Set(arr3)]);


// Rotate an array left by 1 position.
let arr = [1, 2, 3, 4, 5];
let first = arr.shift();
arr.push(first);
console.log(arr);


// Rotate an array right by 1 position.
let arr = [1, 2, 3, 4, 5];
let last = arr.pop(); //removes last element
arr.unshift(last);
console.log(arr);


// Shuffle elements of an array randomly.
let arr = [1, 2, 3, 4, 5];

for (let i = arr.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  
  // swap
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

console.log(arr);











