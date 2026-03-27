// 3. Convert Promise → async/await

// 👉 Convert this into async/await:

// fetchData().then(data => console.log(data));

// Promise function
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received from API");
        }, 1000);
    });
}

// Async/Await usage
async function main() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

main();