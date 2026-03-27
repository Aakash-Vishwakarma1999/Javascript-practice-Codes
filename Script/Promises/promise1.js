// 1. Create a Basic Promise

// 👉 Write a function that returns a Promise which resolves with "Hello World" after 2 seconds.

function printmessage(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello World")
        },2000)
    })
}

//consuming the promise
printmessage().then(response=>{
    console.log(response);
    
}).catch(error=>{
    console.log(error);
    
}).finally(()=>{
    
})