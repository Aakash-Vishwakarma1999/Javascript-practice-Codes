// 7. Error Handling in Chain

// 👉 Modify previous code so:

// If any step fails → catch error properly

// 6. Promise Chaining (Important)

// 👉 Create:
// getUser() → returns user
// getOrders(userId) → returns orders
// getOrderDetails(orderId) → returns details

function getUser(){
    return new Promise((res,rej)=>{
        console.log("initiating username and userId");
        let success = true; // added this here to check for success or failure
        if(success){
            res({userName:"Aakash",userId:1181106})
        }else{
            rej ("Failed to fetc user")
        }
        
    })
}

function getOrders(userId){
    return new Promise((res,rej)=>{
        console.log("the user id received is: "+userId.userId+ "and the userName is: "+userId.userName);
        console.log("initiating orderId for the above user");
        let success = false; // added this here to check for success or failure
        if(success){
            res({orderId: 101})
        }else{
            rej ("Failed in order id")
        }
        
    })
}

function getOrderDetails(orderId){
    return new Promise((res,rej)=>{

        res("Order id is "+ (orderId.orderId))
    })
}

getUser().then(response=>{
     return getOrders(response)
}).then(response=>{
    return getOrderDetails(response)
}).then(response=>{
    console.log((response));
    
}).catch(err=>{
    console.log(err);
    
})