// 5. Chaining Basics
// 👉 Create two functions:
// getUser()
// getPosts(userId)
// Chain them using .then().

function getUser() {
    return new Promise((res, rej) => {
        console.log("passing userId");
        res({ userId: 1 })

    })
}

function getPosts(userId) {
    return new Promise((res, rej) => {
        console.log("passing Name")
        res({ userId: userId, userName: "Aakash" })
    })
}

getUser().then(res => {
    return getPosts(res.userId) // to return a promise is important in chaining
}).then(res => {
    console.log("userId is: " + res.userId, "userName is: " + res.userName);

}).catch(error => {
    console.log(error);

})
