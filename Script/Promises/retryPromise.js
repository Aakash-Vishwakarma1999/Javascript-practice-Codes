// Retry Failed Promise
// Create a function that:
// retries an async task 3 times before failing


function asyncTask(){
    return new Promise((res,rej)=>{
        const number = Math.random() > 0.5;
        setTimeout(()=>{
            if(number){
            res("Task Success")
        }else{
            rej("Task Failed")
        }
        },1000)
    })
}

function retryTask(retries){
    return asyncTask()
    .then(resp=>{
        return resp;
    }).catch(err=>{
        if(retries > 0){
            console.log("Retry left:", retries)
            return retryTask(retries -1)
        }
        throw err
    })
}

retryTask(3)
.then(resp=>{
    console.log(resp)
}).catch(err=>{
    console.log(err)
})
