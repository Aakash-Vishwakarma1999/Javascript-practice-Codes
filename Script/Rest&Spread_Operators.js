// 1️⃣ Sum All Numbers
// Write a function sum() that can accept any number of arguments and return their total.
// eg
// sum(1,2,3) → 6
// sum(10,20,30,40) → 100

function sum(...nums){ //rest operator
    const arr= nums;
    let sumofall =0;
    
    for(let i=0; i< arr.length; i++){
        const arrval = arr[i];
         sumofall = sumofall+arrval; 
    }
    console.log(sumofall);
    
}
sum(1,2,3,4)

//2️⃣ Combine Two Arrays
//Given two arrays:
//const arr1 = [1,2,3];
//const arr2 = [4,5,6];

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 =[...arr1, ...arr2]; // spread operator or array destructuring
console.log(arr3);

//3️⃣ Copy an Array
// given: const numbers = [10,20,30];
// Create a new copy of this array without using .slice() or loops.

const numbers = [10,20,30];
const copy = [...numbers] // spread operator
console.log(copy);


//4️⃣ Largest Number
//Write a function findMax() that returns the largest number from an array.
//Example
//const nums = [5,10,15,2];
//Output
//15
//Hint: you may use Math.max()

const nums = [5,10,15,2];
console.log(Math.max(...nums));



//5️⃣ First Two Values
//Given an array:
//const arr = [10,20,30,40,50];
//Store:
//a = 10
//b = 20
//remaining = [30,40,50]

const arr = [10,20,30,40,50]; // array destructuring, spread operator
const [a,b,...rest] = arr;
console.log(a);
console.log(b);
console.log(rest);



// 6️⃣ Add Values to Existing Array
// Given:
// const array = [3,4,5];
// Create a new array:
// [1,2,3,4,5,6]

const array = [3,4,5];
const arraytoadd =[1,2];
const arraytoadd2=[6];
const newarray=[...arraytoadd,...array,...arraytoadd2];
console.log(newarray);

//alternate solution
const array5 = [3,4,5];
const newarray1 = [1,2,...array5,6];
console.log(newarray1);



//7️⃣ Merge Objects
// Given two objects:
// const obj1 = {name:"Aakash"};
// const obj2 = {age:25};
// Create:
// {name:"Aakash", age:25}

const obj1 = {name:"Aakash"}; // spread operator or object destructuring
const obj2 = {age:25};

const objMerge ={...obj1, ...obj2}
console.log(objMerge);



// 8️⃣ Function with Fixed + Flexible Arguments
// Create a function:
// calculateTotal(price, tax, discount1, discount2, discount3...)
// The function should:
// total = price + tax - all discounts
// Example
// calculateTotal(100,10,5,3)
// → 102

function calculateTotal(price, tax, ...discounts){
    let totalDiscount = 0;
    for(let i = 0; i < discounts.length; i++){
        totalDiscount += discounts[i];
    }
    const total = price + tax - totalDiscount;
    console.log(total);
}
calculateTotal(100,10,5,3);



// 9️⃣ Pass Array as Individual Arguments
// Given:
// const nums2 = [1,2,3];
// Call a function display(a,b,c) so that the output is:
// 1 2 3

const nums2 = [1,2,3];

function display(a,...rest){
console.log(a,...rest); // here we are destructuring thr array ...rest
console.log(rest); // this will give an array output


}
display(...nums2)

//alternate way
const nums3 = [1,2,3];
function display(a,b,c){
console.log(a,b,c);
}
display(...nums3)



// //🔟 Clone and Extend Object
// Given:
// const user = {
//   name: "Aakash",
//   age: 25
// }
// Create a new object that adds:
// city: "Pune"
// Final object:
// {name:"Aakash", age:25, city:"Pune"}


const user = {
  name: "Aakash",
  age: 25
}
const newObj = {...user,city:"Pune"}

console.log(newObj);











