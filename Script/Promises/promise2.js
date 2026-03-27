// 2. Resolve or Reject Based on Condition

// 👉 Create a function checkNumber(num):

// Resolve if number > 10 → "Valid"
// Reject if number ≤ 10 → "Invalid"

function checkNumber(num) {
    return new Promise((resolve, rej) => {
        if (num > 10) {
            resolve("Valid")
        } else
            rej("Invalid")

    })
}

//consuming the promise
checkNumber(11).then(response => {
    console.log(response);

}).catch(err => {
    console.log(err);

})