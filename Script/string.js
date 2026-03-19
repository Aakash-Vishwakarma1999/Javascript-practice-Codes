
// Index:  0 1 2 3 4 5 6 7 8 9 10 11 12 13
// Chars:  T h i s   i s   a     t  e  s  t
let str= "This is a test";
console.log(str.indexOf("is"));
console.log(str.lastIndexOf("is"));


// Index:  0 1 2 3 4 5 6 7 8 9 10 11 12 13
// Chars:  T h i s   i s   a     t  e  s  t
let str= "This is a test";
console.log(str.indexOf("is",5));
console.log(str.lastIndexOf("is",4));



//Index:  0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24
//Chars:  F i r s t   S e c o  n  d     T  h  i  r d     f  o  u  r  t   h
let str="First Second Third Fourth";
console.log(str.slice(10));
console.log(str.slice(-10)); //starts from left to right and counts once 10 finishes



let text = "JavaScript";

console.log(text.substr(0, 4));  // "Java"
console.log(text.substr(4, 6));  // "Script"


// 1️⃣ String Basics (10 Questions)

// Create a string and print it.
let str = "this is a string";
console.log(str);

// Find the length of a string.
let str = "this is a string";
console.log(str.length);

// Convert a string to uppercase.
let str = "this is a string";
console.log(str.toUpperCase());

// Convert a string to lowercase.
let str = "this is a string";
console.log(str.toLowerCase());

// Access the first and last character.
let str = "this is a string";
console.log(str.charAt(0));
console.log(str.charAt(str.length-1));

// Check if a string contains a specific word.
let str = "this is a string";
console.log(str.search("a"));

// Concatenate two strings.
let str1 = "this is a";
let str2 = " string";
console.log(str1+str2);
console.log(`${str1}${str2}`);

// Repeat a string 3 times.
console.log("Hi ".repeat(3));

// Trim extra spaces from a string.
let str1 = "this is a  ";
console.log(str1.trim());

// Replace a word in a string.
let str1 = "this is a";
console.log(str1.replace("this","replaced"));



// 2️⃣ String Searching Methods (10 Questions)

// Find the index of a word.
let str = "this is a string";
console.log(str.indexOf("is",3));

// Find the last occurrence of a word.
let str = "this is a string";
console.log(str.lastIndexOf("i"));

// Check if a string starts with a specific word.
let str = "this is a string";
console.log(str.startsWith("hi"));

// Check if a string ends with a specific word.
let str = "this is a string";
console.log(str.endsWith("string"));

// Check if a string includes a substring.
let str = "this is a string";
console.log(str.includes("is"));

// Count how many times a word appears.
let str = "this is a string which is a ";
let count = str.match(/is/g).length; //g → global flag (find all matches)
console.log(count);

// Find the position of first vowel.
let str = "this is a string which is a "; 
let index = str.search(/[aeiou]/);
console.log(index);


// Find the position of last vowel.
let str = "this is a string which is a ";

let vowels = "aeiou";
let index = -1;

for (let i = str.length - 1; i >= 0; i--) {
  if (vowels.includes(str[i])) {
    index = i;
    break;
  }
}

console.log(index);

// Check if a string contains numbers.
let str = "this is a string 123";
console.log(/\d/.test(str)); //\d → matches any digit (0–9)  test() → returns true if a match is found

// Find the first non-repeating character.




