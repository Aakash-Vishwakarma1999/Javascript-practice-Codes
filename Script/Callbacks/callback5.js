// Filter Using Callback
// Create a function:
// myFilter(array, callback)
// Return a new array based on condition inside callback

function myFilter(array, callback){
    let result =[];

    for(let i=0; i<array.length; i++){
        if(callback(array[i])){
            result.push(array[i])
        }
    }
    return result;    
}


let numbers=[1,2,3,4,5,6];

function even(num){
    return num%2 ==0;
}

let filteredNumbers = myFilter(numbers,even);
console.log(filteredNumbers);




