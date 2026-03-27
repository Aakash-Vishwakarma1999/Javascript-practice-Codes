// 6. Sequential Execution

// 👉 Create:

// getUser()
// getOrders(userId)
// getOrderDetails(orderId)

// 👉 Use async/await to run them step by step (dependent)
function getUser() {
    return new Promise((res, rej) => {
        console.log("initiating username and userId");
        res({ userName: "Aakash", userId: 1181106 })
    })
}

function getOrders(userId) {
    return new Promise((res, rej) => {
        console.log("the user id received is: " + userId.userId + "and the userName is: " + userId.userName);
        console.log("initiating orderId for the above user");
        res({ orderId: 101 })
    })
}

function getOrderDetails(orderId) {
    return new Promise((res, rej) => {

        res("Order id is " + (orderId.orderId))
    })
}


async function runAll() {

    try {
        const p1 = await getUser();
        const p2 = await getOrders(p1)
        const p3 = await getOrderDetails(p2);
        console.log(p3);
    } catch (error) {
        console.log(error);

    }

}

runAll();

