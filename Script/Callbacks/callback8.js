// Async Task Simulator
// Simulate:
// Fetch user
// Fetch posts of user
// Fetch comments of post

// All using callbacks → chain them

// Fetch user
function user(callback) {
    setTimeout(() => {
        console.log("Fetching user...");
        callback("Aakash");
    }, 1000);
}

// Fetch posts of user
function posts(name, callback) {
    setTimeout(() => {
        console.log(`User name is: ${name}`);
        console.log("Fetching posts...");
        callback("Post 1");
    }, 1000);
}

// Fetch comments of post
function comments(post, callback) {
    setTimeout(() => {
        console.log(`Post is: ${post}`);
        console.log("Fetching comments...");
        callback("Comments loaded");
    }, 1000);
}

// Chaining callbacks (Async flow)
user(function (username) {
    posts(username, function (postOfUser) {
        comments(postOfUser, function (finalComments) {
            console.log(finalComments);
        });
    });
});