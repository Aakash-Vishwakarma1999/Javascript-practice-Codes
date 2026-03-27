// 9. Promise.all()

// 👉 Run 3 promises in parallel:

// fetchUsers()
// fetchPosts()
// fetchComments()

// 👉 Print all results together.

function fetchUsers() {
    // console.log("userName is: Aakash");
    return new Promise((resolve, rej) => {
        resolve("Aakash")
    })

}
function fetchPosts() {
    return new Promise((resolve, rej) => {
        resolve("posts")
    })

}
function fetchComments() {
    return new Promise((resolve, rej) => {
        resolve("comments")
    })

}
// let p1= fetchUsers();
// let p2= fetchPosts();
// let p3= fetchComments();

// Promise.all([p1,p2,p3]).then(response=>{
//     console.log(response);
    
// })

Promise.all([fetchUsers(),fetchPosts(),fetchComments()]).then(response=>{
    console.log(response);
    
})