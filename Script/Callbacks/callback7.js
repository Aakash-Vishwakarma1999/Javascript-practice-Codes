// Error-First Callback Pattern
// Create a function:
// divide(a, b, callback)
// If b === 0, return error
// Else return result
// (Follow Node.js style → callback(error, result))


// function divide(a, b, callback) {
//     let result=0;
//     let error = "";
//     if(a !==0 || b!==0){
//         result = a/b;
//     }
//     else{
//         error ="a or b cannot be 0"
//     }
//     callback(error,result);

// }


// divide(0,2,function(error,result){
//     if(result){
//         console.log(result);
        
//     }else{
//         console.log(error);
        
//     }
// })


function divide(a, b, callback) {
    if (b === 0) {
        return callback("Cannot divide by zero", null);// if b is 0 then the code returs from here and stops
    }

    let result = a / b;
    callback(null, result);
}

// Usage
divide(2, 0, function(error, result) {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Result:", result);
    }
});