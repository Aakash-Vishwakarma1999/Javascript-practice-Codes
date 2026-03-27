// 2. Using await

// 👉 Create a Promise that resolves after 2 seconds.
// 👉 Use await to get its result inside an async function.

function delay(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("promise resolved after delay of 2 sec")
        }, 2000);
    })
}

async function displayDelay(){
    const result = await delay();//await waits till the promise is resolved or rejected and stores the value of resolve / reject whichever applicable
    console.log(result);
    
}

displayDelay()
