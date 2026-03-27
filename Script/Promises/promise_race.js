// 10. Promise.race()

// 👉 Create 2 promises:

// One resolves in 1 sec
// One resolves in 3 sec

// 👉 Use Promise.race() to get the faster one.a

function prom1(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("promise1")
        }, 3000);
    })
}
function prom2(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("promise2")
        }, 2000);
    })
}
Promise.race([prom1(),prom2()]).then(response=>{
    console.log(response);
    
})