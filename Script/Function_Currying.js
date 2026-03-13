// 1️⃣ Basic Currying
// Convert this function into a curried version.
// function add(a, b) {
//   return a + b;
// }
// Expected usage:
// add(2)(3) → 5

function add(a) {
    return function (b) {
        return a + b
    }
}
const sum = add(2)(3)
console.log(sum);



// 2️⃣ Three Parameter Currying
// Convert this function into a curried function.
// function multiply(a, b, c) {
//   return a * b * c;
// }
// Expected usage:
// multiply(2)(3)(4) → 24

function multiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c
        }
    }
}

const mul = multiply(2)(3)(4);
console.log(mul);



// 3️⃣ Greeting Generator
// Create a function:
// greet(greeting)(name)
// Example
// greet("Hello")("Aakash") → "Hello Aakash"
// greet("Good Morning")("John") → "Good Morning John"

function greet(greeting) {
    return function (name) {
        return greeting + " " + name
    }
}
const answer = greet("Hello")("Aakash");
const answer1 = greet("Good Morning")("John")
console.log(answer);
console.log(answer1);



// 4️⃣ Tax Calculator
// Create a curried function:
// calculateTax(rate)(amount)
// Example
// const tax10 = calculateTax(0.10)
// tax10(1000) → 100
// tax10(500) → 50

function calculateTax(rate) {
    return function (amount) {
        return rate * amount
    }
}

const tax10 = calculateTax(0.10)
console.log(tax10(1000));
console.log(tax10(500));


// 5️⃣ Power Function
// Create a curried function:
// power(base)(exponent)
// Example
// power(2)(3) → 8
// power(5)(2) → 25

function power(base) {
    return function (exponent) {
        return base ** exponent;
    }
}
console.log(power(2)(3));
console.log(power(5)(2));



// 6️⃣ Discount Calculator
// Create a curried function:
// discount(percent)(price)
// Example
// const discount20 = discount(20)
// discount20(1000) → 800
// discount20(500) → 400

function discount(percent) {
    return function (price) {
        let disc = price * (percent / 100)
        return price - disc
    }
}
const discount20 = discount(20)
console.log(discount20(1000));
console.log(discount20(500));



//7️⃣ URL Builder
// Create a curried function:
// createURL(protocol)(domain)(path)
// Example
// createURL("https")("google.com")("search")
// Output
//https://google.com/search


function createURL(protocol) {
    return function (domain) {

        return function (path) {
            return `${protocol}://${domain}/${path}`
        }
    }
}
console.log(createURL("https")("google.com")("search"));




//8️⃣ Logger Function
// Create a curried function:
// logger(level)(message)
// Example
// const errorLogger = logger("ERROR")
// errorLogger("Server crashed")
// Output
// ERROR: Server crashed


function logger(level) {
    return function (message) {
        return level + ": " + message
    }
}

const errorLogger = logger("ERROR")
console.log(errorLogger("Server crashed"));




//9️⃣ Area Calculator
// Create a curried function:
// area(length)(width)
// Example
// area(10)(5) → 50

function area(length) {
    return function (width) {
        return length * width
    }
}

console.log(area(10)(5));




///🔟 Advanced Currying
// Create a curried function that works like:
// sum(1)(2)(3)(4)()
// Output
// 10
// The final empty () should return the total.

function sum(a) {

    let total = a;

    return function (b) {

        if (b === undefined) {
            return total;
        }

        total += b;
        return sum(total);
    }

}

console.log(sum(1)(2)(3)(4)());







