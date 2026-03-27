// Simple Callback Execution
// Write a function greet(name, callback) that prints the name and then calls the callback function.




////   way1
function greet(name, callback){
    console.log(name);
    callback();
}

function cbFunction(){
     console.log("callback function called");
};
greet("Aakash",  cbFunction); // passing the function cbFunction
   
    

//// way2
function greet(name, callback){
    console.log(name);
    callback();
  
}

greet("Aakash", function cbFunction(){
    console.log("callback function called");
    
})
