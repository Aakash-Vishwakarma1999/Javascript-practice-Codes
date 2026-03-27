// Math Operation with Callback
// Create a function calculate(a, b, operationCallback)
// operationCallback decides what to do (add, subtract, multiply, etc.)

function calculate(a,b,operationCallback){
    return operationCallback(a,b);  //calculate function is returning a function and the function is further returning a value
}

function add(x,y){
    return x+y;
}
function subtract(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}

const addResult = calculate(2,3,add);
console.log(addResult);

console.log(calculate(5,4,subtract));
console.log(calculate(5,4,multiply));

