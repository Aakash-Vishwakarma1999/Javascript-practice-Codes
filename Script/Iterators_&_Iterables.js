// concept example
// imp :---------------- Array, string, maps and set are already iterables
obj = {
    start: 10,
    end: 15
}

obj[Symbol.iterator] = function () {
    const itr = {
        next() {
            if (obj.start <= obj.end) {
                return { value: obj.start++, done: false }
            } else {
                return { done: true }
            }
        }
    }
    return itr;
}

for (let i of obj) {
    console.log(i);

}



// Quick Practice (Only If You Want)
// 1️⃣ Manual Iterator
// Given:
// const arr = [10,20,30];
// Write code that manually iterates using next() and prints:
// 10
// 20
// 30
//(no for...of loop)

const arr = [10, 20, 30];
let itr = arr[Symbol.iterator]();
console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);




//2️⃣ Custom Iterable Object
// Create an object:
// const range = {
//   start: 1,
//   end: 5
// }
// Make it iterable so that this works:
// for (let num of range) {
//   console.log(num);
// }
// Output:
// 1
// 2
// 3
// 4
// 5

const range = {
    start: 1,
    end: 5
}

range[Symbol.iterator] = function () {
    return {
        next() {
            if (range.start <= range.end) {
                return { value: range.start++, done: false }
            } else {
                return { done: true }
            }
        }
    }
}

for (let num of range) {
    console.log(num);
}


// 3️⃣ Check if Something is Iterable
// Write code to check if the following are iterable:
// const arr = [1,2,3];
// const str = "hello";
// const obj = {a:1};
// Print:
// arr → iterable
// str → iterable
// obj → not iterable

const arr = [1, 2, 3];
const str = "hello";
const obj = { a: 1 };

function checkIterable(value, name) {
    if (value[Symbol.iterator]) { //An object is iterable if: value[Symbol.iterator] !== undefined
        console.log(name + " => iterable")
    } else {
        console.log(name + " → not iterable");
    }
}

checkIterable(arr, "arr");
checkIterable(str, "str");
checkIterable(obj, "obj");



//4️⃣ Iterator Without Loop
// Using an iterator, print elements of:
// const str = "JS";
// Expected output:
// J
// S

const str = "JS";
const itr = str[Symbol.iterator]();
console.log(itr.next().value);
console.log(itr.next().value);










