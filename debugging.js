function* counter() {
    let i = 1;

    while (true) {
        const reset = yield i; // first next() call stops at yield 1 , reset is not assigned 
        // --> 2nd next() call reset = undefined and the rest of the code i.e if part will run so i++ is 2 and then the 2nd yiled will run as yield 2 
        // --> 3nd next() call reset = undefined and the rest of the code i.e if part will run so i++ is 3 and then the 3rd yiled will run as yield3
        // --> 4th next() call reset = 10 and the rest of the code i.e if part will run so now i=10 and then the 4th yiled will run as yield 10

        if (reset !== undefined) {
            i = reset;
        } else {
            i++;
        }
    }
}
const gen = counter();

console.log(gen.next().value);    // 1
console.log(gen.next().value);    // 2
console.log(gen.next().value);    // 3
console.log(gen.next(10).value);  // 10
console.log(gen.next().value);    // 11