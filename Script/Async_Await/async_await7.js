// 8. Await Inside Loop (Common Mistake)

// 👉 Given an array of IDs:

// [1, 2, 3, 4]

// 👉 Fetch data for each:

// First using for loop (sequential)
// Then optimize using Promise.all()

function fetchData(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fetched data for ID:", id);
            resolve("Data " + id);
        }, 1000);
    });
}

const ids = [1, 2, 3, 4];

// sequential execution
// async function sequential() {
//     console.time("Sequential");

//     for (let i = 0; i < ids.length; i++) {
//         const data = await fetchData(ids[i]);
//         console.log(data);
//     }

//     console.timeEnd("Sequential");
// }

// sequential();


//parallel execution
async function parallel() {
    console.time("Parallel");

    const promises = ids.map(id => fetchData(id)); // start all at once

    const results = await Promise.all(promises);

    console.log(results);

    console.timeEnd("Parallel");
}

parallel();
