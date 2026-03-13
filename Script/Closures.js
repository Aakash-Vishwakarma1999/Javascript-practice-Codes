// 1️⃣ Simple Counter
// Create a function createCounter() that returns another function.
// Every time the returned function is called, it should increment and return the counter.
// Example
// const counter = createCounter();
// counter() → 1
// counter() → 2
// counter() → 3

function createCounter() {
    let count = 0;
    return function anotherFunction() {
        count++;
        return count;

    }
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());


//2️⃣ Add with Closure
// Create a function:
// add(x)
// that returns another function which adds x to the new value.
// Example
// const add5 = add(5);
// add5(10) → 15
// add5(3) → 8

function add(value) {

    return function anotherFunction(newValue) {

        return value + newValue;
    }
}

const add5 = add(5);
console.log(add5(10));
console.log(add5(3));


// 3️⃣ Private Variable
// Create a function createBankAccount().
// Requirements:
// initial balance = 1000
// return an object with two functions
// deposit(amount)
// getBalance()
// Example
// const acc = createBankAccount();
// acc.deposit(500)
// acc.getBalance() → 1500
// The balance variable should not be accessible directly.


function createBankAccount() {
    let initial_balance = 1000;
    let balance = initial_balance;

    function deposit(amount) {
        balance = balance + amount;
    }

    function getBalance() {
        return balance

    }
    return {
        deposit,
        getBalance
    }
}
const acc = createBankAccount();
acc.deposit(500)
console.log(acc.getBalance());


//4️⃣ Remember Last Value
// Create a function remember().
// It should remember the last value passed.
// Example
// const fn = remember();
// fn(10) → 10
// fn(20) → 20
// fn() → 20

function remember() {
    let valueToRemember = 0
    return function x(value) {
        if (value !== undefined) {
            valueToRemember = value;
        }

        return valueToRemember
    }
}

const fn = remember();
console.log(fn(10));
console.log(fn(20));
console.log(fn());


//5️⃣ Multiplier Generator
// Create a function:
// createMultiplier(n)
// It should return a function that multiplies numbers by n.
// Example
// const double = createMultiplier(2);
// double(5) → 10
// double(7) → 14

function createMultiplier(n) {

    return function anotherFunction(number) {
        return n * number
    }
}
const double = createMultiplier(2);
console.log(double(5));
console.log(double(7));


// 6️⃣ Function Call Counter
// Create a function trackCalls().
// Each time the returned function is called, it should show how many times it has been executed.
// Example
// const track = trackCalls();
// track() → "Called 1 time"
// track() → "Called 2 times"
// track() → "Called 3 times"

function trackCalls() {
    let value = 0;

    return function second() {
        value++;
        return `Called ${value} times`

    }

}
const track = trackCalls();
console.log(track());
console.log(track());
console.log(track());



// 7️⃣ Loop + Closure Problem
// Fix this code so it prints:
// 1
// 2
// 3
// Instead of:
// 4
// 4
// 4
// Code:
// for (var i = 1; i <= 3; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 1000);
// }

for (var i = 1; i <= 3; i++) {

    (function something(i) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
    })(i);

}


// 8️⃣ Create a Memoization Function
// Create a function memoizeAdd() that remembers previously calculated results.
// Example
// memoAdd(2,3) → 5
// memoAdd(2,3) → "From Cache: 5"

function memoizeAdd() {
    let cache = {};

    return function (value1, value2) {
        const key = `${value1},${value2}`;

        if (cache[key] !== undefined) {
            return `From cache ${cache[key]}`
        }

        const result = value1 + value2;
        cache[key] = result;// here during the first call  the cache object is initialized cache = {"2,3": 5}

        return result;
    }
}
const memoAdd = memoizeAdd();

console.log(memoAdd(2, 3));
console.log(memoAdd(2, 3));



///9️⃣ Closure with Message
// Create a function:
// createGreeting(name)
// that returns a function which prints:
// Example
// const greetAakash = createGreeting("Aakash");
// greetAakash() → "Hello Aakash"

function createGreeting(name) {
    return function () {
        return `"Hello ${name}"`
    }
}

const greetAakash = createGreeting("Aakash");
console.log(greetAakash());



//🔟 Delayed Message
// Create a function delayedMessage(msg, time) that uses a closure so that the message prints after the delay.
// Example
// delayedMessage("Hello",2000)
// Output after 2 sec:
// Hello

function delayedMessage(msg, time) {

    setTimeout(() => {
        console.log(msg);
    }, time)

}
delayedMessage("Hello", 2000)












