// REST PARAMETER PRACTICE LOGICS

// 1) Sum of all numbers
const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
console.log(sum(2, 3, 5));
//output : 10

// 2) Multiply all numbers
const multiply = (...nums) => nums.reduce((a, b) => a * b, 1);
console.log(multiply(2, 3, 4));
//output : 24

// 3) Count arguments passed
const countArgs = (...args) => args.length;
console.log(countArgs(1, "hi", true));
//output : 3

// 4) Return all arguments as an array
const toArray = (...values) => values;
console.log(toArray("a", "b", "c"));
//output : [ 'a', 'b', 'c' ]

// 5) Find max number
const maxNum = (...nums) => Math.max(...nums);
console.log(maxNum(5, 9, 1, 12));
//output : 12

// 6) Combine first 2 arguments + rest
const combine = (a, b, ...rest) => ({ a, b, rest });
console.log(combine(10, 20, 30, 40, 50));
//output : { a: 10, b: 20, rest: [ 30, 40, 50 ] }

// 7) Concatenate all strings
const concat = (...strs) => strs.join(" ");
console.log(concat("Hello", "World", "JS"));
//output : Hello World JS

// 8) Count even numbers
const countEven = (...nums) => nums.filter(n => n % 2 === 0).length;
console.log(countEven(1, 2, 4, 7, 10));
//output : 3

// 9) Find average
const average = (...nums) =>
  nums.reduce((a, b) => a + b) / nums.length;
console.log(average(10, 20, 30));
//output : 20

// 10) Merge multiple arrays
const mergeArrays = (...arrays) => arrays.flat();
console.log(mergeArrays([1,2], [3,4], [5]));
//output : [ 1, 2, 3, 4, 5 ]

// 11) Pass unlimited students & count
const totalStudents = (...names) => names.length;
console.log(totalStudents("Ali", "Sara", "Zain", "Ayan"));
//output : 4

// 12) Get last argument passed
const lastArg = (...args) => args[args.length - 1];
console.log(lastArg(5, 10, 15, 20));
//output : 20

// 13) Check if all numbers are positive
const allPositive = (...nums) => nums.every(n => n > 0);
console.log(allPositive(3, 5, 8, -1));
//output : false

// 14) Convert rest params into object keys
const createObj = (...keys) =>
  keys.reduce((obj, key, i) => ({ ...obj, [i]: key }), {});

console.log(createObj("a", "b", "c"));
//output : { '0': 'a', '1': 'b', '2': 'c' }

// 15) Find duplicate values
const duplicates = (...nums) =>
  nums.filter((num, i) => nums.indexOf(num) !== i);
console.log(duplicates(1,2,3,2,4,3,5));
//output : [ 2, 3 ]

// 16) Remove duplicates
const removeDuplicates = (...nums) => [...new Set(nums)];
console.log(removeDuplicates(1,2,2,3,3,4));
//output : [ 1, 2, 3, 4 ]

// 17) Return only numbers
const onlyNumbers = (...args) => args.filter(a => typeof a === "number");
console.log(onlyNumbers(1, "hi", 4, true, 9));
//output : [ 1, 4, 9 ]

// 18) Return arguments greater than 10
const greaterTen = (...nums) => nums.filter(n => n > 10);
console.log(greaterTen(5, 12, 8, 20, 3, 30));
//output : [ 12, 20, 30 ]

// 19) Dynamic greeting for unlimited names
const greet = (...names) => names.map(n => `Hello, ${n}!`);
console.log(greet("Ali", "Javed", "Sara" , "Ayan", "Zain"));
//output : [ 'Hello, Ali!', 'Hello, Javed!', 'Hello, Sara!', 'Hello, Ayan!', 'Hello, Zain!' ]

// 20) Apply function to all numbers
const applyFunc = (func, ...nums) => nums.map(n => func(n));
console.log(applyFunc(n => n * 2, 2, 4, 6));
//output : [ 4, 8, 12 ]