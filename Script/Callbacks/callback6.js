// Chained Callbacks (Mini Pyramid)
// Write 3 functions:
// step1(callback)
// step2(callback)
// step3(callback)

// Each should use setTimeout and pass data to the next → chain them using callbacks

//step1
function step1(callback){
    console.log("Step1 completed");
    setTimeout(()=>{
        callback("Data from step1")
    },1000)
    
}

function step2(data,callback){
    console.log("step2 received: "+data);
    setTimeout(()=>{
        callback("Data from step2")
    },1000)
    
}

function step3(data,callback){
    console.log("step3 completed: "+data);
    setTimeout(()=>{
        callback("All steps done")
        
    },1000)
}

step1(function(result1){
    step2(result1,function(result2){
        step3(result2,function(finalresult){
            console.log(finalresult);
            
        })
    })
})
