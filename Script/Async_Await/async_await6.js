// 7. Parallel Execution (IMPORTANT)

// 👉 Run:

// fetchUsers()
// fetchPosts()
// fetchComments()

// 👉 Run them in parallel using await

function getUser() {
    return new Promise((res) => {
        setTimeout(() => {
            console.log("User fetched");
            res("User Data");
        }, 2000);
    });
}

function getPosts() {
    return new Promise((res) => {
        setTimeout(() => {
            console.log("Posts fetched");
            res("Posts Data");
        }, 1000);
    });
}

function getComments() {
    return new Promise((res) => {
        setTimeout(() => {
            console.log("Comments fetched");
            res("Comments Data");
        }, 3000);
    });
}

async function process() {
    const p1 = getUser();
    const p2 = getPosts();
    const p3 = getComments();

    const results = await Promise.all([p1, p2, p3]);

    console.log(results);
}

process();