// Youtube Video Link for Generators:   https://youtu.be/IJ6EgdiI_wU?si=tSUD2AvXEM-Byvfy


// 1️⃣ Basic Generator
// Write a generator function that yields three numbers:
// 1
// 2
// 3
// Example usage:
// const gen = numbers();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

function* numbers() {
    yield 1; // function * numbers() returns a generator object which has the next() function
    yield 2; // yield returns next()
    yield 3;
}

const genobj = numbers();
console.log(genobj.next().value);
console.log(genobj.next().value);
console.log(genobj.next().value);




// 2️⃣ Infinite Number Generator
// Create a generator that generates numbers forever starting from 1.
// Example:
// const gen = counter();
// gen.next().value → 1
// gen.next().value → 2
// gen.next().value → 3

function* counter() {
    let i = 1;

    while (true) {
        yield i;
        i++;
    }
}
const genObj = counter();
console.log(genObj.next().value);
console.log(genObj.next().value);
console.log(genObj.next().value);
console.log(genObj.next().value);
console.log(genObj.next().value);




// 3️⃣ Custom Range Generator
// Create a generator:
// range(start, end)
// Example:
// for (let num of range(3,7)) {
//    console.log(num);
// }
// Output:
// 3
// 4
// 5
// 6
// 7

function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i
    }

}
for (let num of range(3, 7)) {
    console.log(num);
}




// 4️⃣ Even Number Generator
// Create a generator that yields only even numbers up to a given limit.
// Example:
// for (let num of evenNumbers(10)) {
//    console.log(num);
// }
// Output:
// 2
// 4
// 6
// 8
// 10

function* evenNumbers(Uptonumber) {

    for (let i = 1; i <= Uptonumber; i++) {
        if ((i % 2) == 0) {
            yield i
        } else {

        }
    }
}

for (let num of evenNumbers(10)) {
    console.log(num);

}


// 5️⃣ Fibonacci Generator
// Create a generator that produces Fibonacci numbers.
// Example:
// const gen = fibonacci();
// gen.next().value → 0
// gen.next().value → 1
// gen.next().value → 1
// gen.next().value → 2
// gen.next().value → 3
// gen.next().value → 5

function* fibonacci(limit) {

    let a = 0;
    let b = 1;

    for(let i = 0; i < limit; i++){
        yield a;

        let next = a + b;
        a = b;
        b = next;
    }
}

for(let num of fibonacci(6)){
    console.log(num);
}


// 6️⃣ Word Generator from Sentence
// Create a generator that yields one word at a time from a sentence.
// Example:
// const gen = words("I love JavaScript");
// gen.next().value → "I"
// gen.next().value → "love"
// gen.next().value → "JavaScript"

function* words(sentence){
    let arr= sentence.split(" "); // stores the sentence in array form [ 'I', 'love', 'Javascript' ]
    console.log(arr);
    
    for(let word of arr){
        yield word;
    }
}
const gen = words("I love Javascript")
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


// 7️⃣ Resettable Counter
// Create a generator that counts numbers but resets when a value is passed.
// Example:
// const gen = counter();
// gen.next().value → 1
// gen.next().value → 2
// gen.next(10).value → 10
// gen.next().value → 11

function* counter() {
    let i = 1;

    while (true) {
        const reset = yield i;

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
console.log(gen.next(10).value);  // 10
console.log(gen.next().value);    // 11



