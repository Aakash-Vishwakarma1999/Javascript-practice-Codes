// 2) Write an IIFE that prints "Hello JavaScript" immediately when the script runs.

(function () {
    console.log("Hello JavaScript");

})();

(() => {
    console.log("Hello JavaScript");
})();

// 3) Create an IIFE that accepts two numbers and prints their sum
(function (a, b) {
    console.log(a + b);

})(1, 2);


((a, b) => {
    console.log(a + b);

})(1, 2);

// 4) Without using IIFE this code causes a global variable leak.

//Rewrite it using IIFE to avoid polluting the global scope.
// var counter = 0;

// counter++;
// console.log(counter);

(() => {
    // var counter = 0; // here var becomes function scoped instead of global window object but better to use let
    let counter = 0; // better since it is block scoped
    counter++;
    console.log(counter);


})();


// 5️⃣ Private Variable Using IIFE. Create an IIFE that keeps a variable private.
//  Requirements variable count starts at 0 
// return a function that increments count 
// each call increases count
// eg usage 
// increment()
// increment()
// increment()

// Output:
// 1
// 2
// 3

const counter = (function () {
    let count = 0;

    return function () {
        count++;
        return count;
    }
})();

console.log(counter());
console.log(counter());
console.log(counter());

// 6️⃣ Loop Problem (Classic Interview Question)

//Fix the problem using IIFE.
// for (var i = 1; i <= 3; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 1000);
// }
// Current output -- 4 4 4
// Expected output -- 1 2 3

for (var i = 1; i <= 3; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 5000);
    })(i)
}


// 7️⃣ Module Pattern using IIFE

// Create an IIFE module with:

// private variable balance = 1000

// method deposit(amount)

// method getBalance()

// Example

// deposit(500)
// getBalance()

// Output → 1500
const bankAccount = (function () {

    let balance = 1000;

    function deposit(amount) {
        balance += amount;
    }

    function getBalance() {
        return balance
    }

    return {
        deposit,
        getBalance
    };
})()

bankAccount.deposit(500); //in order to access the functions we need to return it so that bankAccount variable could access them
console.log(bankAccount.getBalance());


// 9️⃣ Nested IIFE
// Write two nested IIFEs where
// outer function prints "Outer"
// inner function prints "Inner"

(function () {
    console.log('Outer');
    (function () {
        console.log("Inner");

    })()

})()




