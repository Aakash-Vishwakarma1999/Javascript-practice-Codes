// Callback After Delay
// Create a function delayedMessage(message, delay, callback)
// Print the message after delay ms
// Then execute the callback

function delayedMessage(message, delay, callback){
    setTimeout(()=>{
        console.log(message);
        callback();
    },delay);
    
}  


delayedMessage("setTimeOut executed", 2000, function cbFn(){
    console.log("callback function executed");
    
})
