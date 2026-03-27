// 8. Convert Callback to Promise

// 👉 Convert this into Promise-based code:

// function getData(callback) {
//   setTimeout(() => {
//     callback("Data received");
//   }, 1000);
// }
// getData(function callback(parameter){
//     console.log(parameter);

// })



function getData() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Data reveived")
        }, 1000);
    })
}
function callback(data){
    console.log(data);
    
}

getData().then(response=>{
     callback(response)
})

