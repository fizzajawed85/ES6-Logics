// ARROW FUNCTION PRACTICE LOGICS

// 1) Add two numbers
const add = (a, b) => a + b;
console.log(add(2,6));
//output : 12

// 2) Square of a number
const square = x => x * x;
console.log((square(6)));
//output : 36

// 3) Check even or odd
const isEven = num => num % 2 === 0;
console.log(isEven(7));
//output : false

// 4) Return first letter of a string
const firstLetter = str => str.chartAt(0);
console.log(("Hello!"));
//output : H

// 5) Find max of two numbers
const max = (a, b) => a > b ? a : b;
console.log(max(10, 20));
//output : 20

// 6) Convert string to uppercase
const toUpper = str => str.toUpperCase();
console.log(toUpper("hello"));
//output : HELLO

// 7) Sum of array
const sumArray = arr => arr.reduce((a, b) => a + b, 0);
console.log(sumArray([1, 2, 3, 4]));
//output : 10

// 8) Count vowels
const countVowels = str => str.match(/[aeiou]/gi)?.length || 0;
console.log(countVowels("Education"));
//output : 5

// 9) Reverse a string
const reverse = str => str.split("").reverse().join("");
console.log(reverse("apple"));
//output : elppa

// 10) Filter even numbers from array
const filterEven = arr => arr.filter(n => n % 2 === 0);
console.log(filterEven([1, 2, 3, 4, 5, 6]));
//output : [ 2, 4, 6 ]

// 11) Find largest number in array
const largest = arr => Math.max(...arr);
console.log(largest([10, 50, 20, 90]));
//output : 90

// 12) Count words in a sentence
const countWords = str => str.split(" ").length;
console.log(countWords("I Learn JavaScript"));
//output : 3

// 13) Find factorial
const factorial = n => n === 0 ? 1 : n * factorial(n - 1);
console.log(factorial(5));
//output : 120

// 14) Convert array to object with index values
const arrayToObj = arr =>
  arr.reduce((obj, val, i) => ({ ...obj, [i]: val }), {});

console.log(arrayToObj(["a", "b", "c"]));
//output : { '0': 'a', '1': 'b', '2': 'c' }

// 15) Remove duplicates
const removeDuplicates = arr => [...new Set(arr)];
console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));
//output : [ 1, 2, 3, 4 ]

// 16) Sort numbers
const sorts = arr => arr.sort((a, b) => a - b);
console.log(sorts([4, 2, 9, 1]));
//output : [ 1, 2, 4, 9 ]

// 17) Return all names starting with "A"
const startsWithA = arr => arr.filter(name => name.startsWith("A"));
console.log(startsWithA(["Ali", "Zain", "Ayan", "Hassan"]));
//output : [ 'Ali', 'Ayan' ]

// 18) Create dynamic greeting
const greet = name => `Hello, ${name}! Welcome.`;
console.log(greet("Fizza"));
//output : Hello, Fizza! Welcome.

// 19) Calculate power
const power = (base, exp) => Math.pow(base, exp);
console.log(power(2, 3));
//output : 8

// 20) Find average of array
const average = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(average([10, 20, 30, 40]));
//output : 25

