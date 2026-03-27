// 4. Simulate API Call

// 👉 Create a Promise that returns user data after 1 second:

// { id: 1, name: "John" }

function userData() {
    const pr = new Promise((res, rej) => {
        setTimeout(() => {
            res({ id: 1, name: "John" })
        }, 1000)
    })
    return pr
}

userData().then(response=>{
    console.log("userData is: "+JSON.stringify(response));
    
})

