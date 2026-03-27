// 6. Promise Chaining (Important)

// 👉 Create:
// getUser() → returns user
// getOrders(userId) → returns orders
// getOrderDetails(orderId) → returns details

function getUser(){
    return new Promise((res,rej)=>{
        console.log("initiating username and userId");
        res({userName:"Aakash",userId:1181106})
    })
}

function getOrders(userId){
    return new Promise((res,rej)=>{
        console.log("the user id received is: "+userId.userId+ "and the userName is: "+userId.userName);
        console.log("initiating orderId for the above user");
        res({orderId: 101})
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