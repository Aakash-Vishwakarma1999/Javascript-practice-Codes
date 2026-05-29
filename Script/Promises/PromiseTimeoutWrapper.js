// Promise Timeout Wrapper
// Create:
// promiseWithTimeout(promise, timeout)
// If Promise takes too long:
// reject with "Timeout"

function promiseWithTimeout(promise, timeout){
    
    return new Promise((resolve,rej)=>{
        
        setTimeout(()=>{
            rej("Timeout")
        },timeout)
        
        promise
        .then(resp=>{
            resolve(resp)
        }).catch(err=>{
            rej(err)
        })
    })
}

const task = new Promise(resolve=>{
    setTimeout(() => {
        resolve("Task Completed");
    }, 3000);
})

promiseWithTimeout(task,4000)
.then((resp) => {
    console.log(resp);
})
.catch((err) => {
    console.log(err);
});
