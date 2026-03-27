// 13. Sequential vs Parallel Execution

// 👉 Run 3 async tasks:

// First sequentially
// Then in parallel using Promise.all()

// 👉 Compare time

function promise1() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("promise1");
        }, 2000)

    })
}
function promise2() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("promise2");
        }, 2000)

    })
}
function promise3() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("promise3");
        }, 2000)

    })
}

//sequentially
// promise1().then(response => {
//     console.log(response);
//     return promise2();
// }).then(resp => {
//     console.log(resp);
//     return promise3();
// }).then(resp => {
//     console.log(resp);

// })

//parallel
Promise.all([promise1(),promise2(),promise3()]).then(response=>{
    console.log(response);
    
}) 