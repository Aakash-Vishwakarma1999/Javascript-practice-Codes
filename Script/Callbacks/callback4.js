// Custom forEach using Callback
// Implement your own version of forEach:
// myForEach(array, callback)
// It should call the callback for every element


function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

myForEach([1,2,3,4], function(element, index, arr) {
    console.log(element);
});