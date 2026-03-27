function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data received"), 2000);
  });
}

async function getData() {
  const result = await fetchData();// await pauses the execution of an async function until a promise is resolved or rejected
  console.log(result);
}

getData();