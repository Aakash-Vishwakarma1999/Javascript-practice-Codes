// 11. Retry Promise (Important)

// 👉 Create a function:

// retryPromise(fn, retries)
// Retry a failed promise n times before rejecting


// Retry function
// Retry function
function retryPromise(fn, retries) {
    return new Promise((resolve, reject) => {
        function attempt() {
            fn()
                .then(resolve) // success → resolve immediately ////.then(resolve) is a shortcut to==> fn().then((result) => {resolve(result);})
                .catch((err) => {
                    if (retries > 0) {
                        console.log("Retrying... attempts left:", retries);
                        retries--;
                        attempt(); // retry
                    } else {
                        reject(err); // no retries left
                    }
                });
        }

        attempt(); // start first attempt
    });
}

// 🔥 Test function (fails first 2 times, succeeds on 3rd)
let attemptCount = 0;

function unstableTask() {
    return new Promise((resolve, reject) => {
        attemptCount++;
        console.log("Attempt:", attemptCount);

        if (attemptCount < 3) {
            reject("Failed ❌");
        } else {
            resolve("Success ✅");
        }
    });
}

// 🚀 Usage
retryPromise(unstableTask, 3)
    .then((result) => {
        console.log("Final Result:", result);
    })
    .catch((error) => {
        console.log("Final Error:", error);
    });
     
