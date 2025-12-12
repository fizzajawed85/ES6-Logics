// HIGHER-ORDER FUNCTIONS PRACTICE LOGICS

// 1) Basic HOF - Function as argument
function greet(name) {
  return "Hello " + name;
}
function callGreet(fn, name) {
  return fn(name);
}
console.log(callGreet(greet, "Ali"));
// output: Hello Ali

// 2) HOF returning function
function multiplyBy(num) {
  return function(x) {
    return x * num;
  };
}
const multiplyBy3 = multiplyBy(3);
console.log(multiplyBy3(5));
// output: 15

// 3) HOF with Array.map
const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);
console.log(squared);
// output: [1, 4, 9, 16]

// 4) HOF with Array.filter
const nums = [5, 10, 15, 20];
const even = nums.filter(num => num % 2 === 0);
console.log(even);
// output: [10, 20]

// 5) HOF with Array.reduce
const arr = [1, 2, 3, 4];
const sum = arr.reduce((a, b) => a + b, 0);
console.log(sum);
// output: 10

// 6) HOF for comparison
function compare(a, b, fn) {
  return fn(a, b);
}
console.log(compare(5, 10, (x, y) => x > y));
// output: false

// 7) HOF for greeting
function greetPerson(fn) {
  const name = "Ahmed";
  console.log(fn(name));
}
greetPerson(name => "Hi " + name + "!");
// output: Hi Ahmed!

// 8) HOF returning different function
function makePower(power) {
  return function(num) {
    return num ** power;
  };
}
const square = makePower(2);
console.log(square(5));
// output: 25

// 9) HOF with Array.forEach
const fruits = ["Apple", "Banana", "Mango"];
fruits.forEach(fruit => console.log("I like " + fruit));
/*
output:
I like Apple
I like Banana
I like Mango
*/

// 10) HOF with callback example
function userInput(callback) {
  const name = "Ali";
  console.log(callback(name));
}
userInput(name => "Welcome " + name);
// output: Welcome Ali

// 11) HOF with conditional callback
function checkNumber(num, fn1, fn2) {
  if(num % 2 === 0) {
    return fn1(num);
  } else {
    return fn2(num);
  }
}
console.log(checkNumber(4, n => n + 1, n => n - 1));
// output: 5
console.log(checkNumber(5, n => n + 1, n => n - 1));
// output: 4

// 12) HOF to multiply array
function multiplyArray(arr, fn) {
  return arr.map(fn);
}
console.log(multiplyArray([1,2,3], n => n*5));
// output: [5, 10, 15]

// 13) HOF for string manipulation
function modifyString(str, fn) {
  return fn(str);
}
console.log(modifyString("hello", s => s.toUpperCase()));
// output: HELLO

// 14) HOF for greetings
function greetUsers(greeting) {
  return function(name) {
    return greeting + ", " + name;
  };
}
const sayHi = greetUsers("Hi");
console.log(sayHi("Ahmed"));
// output: Hi, Ahmed

// 15) HOF for calculator
function calculator(a, b, operation) {
  return operation(a, b);
}
console.log(calculator(10, 5, (x,y)=>x+y));
// output: 15
console.log(calculator(10, 5, (x,y)=>x*y));
// output: 50

// 16) HOF with array filter and map
const numbers2 = [1,2,3,4,5,6];
const result = numbers2.filter(n => n%2===0).map(n => n*2);
console.log(result);
// output: [4, 8, 12]

// 17) HOF with nested functions
function outer(fn) {
  return function(x) {
    return fn(x*2);
  };
}
const inner = x => x + 3;
const combined = outer(inner);
console.log(combined(5));
// output: 13

// 18) HOF for logging
function logAction(action) {
  return function(msg) {
    console.log(`[${action}] ${msg}`);
  };
}
const infoLogger = logAction("HELLO!");
infoLogger("This is a test message");
// output: [HELLO!] This is a test message

// 19) HOF with array reduce for product
const nums3 = [2, 3, 4];
const product = nums3.reduce((acc, n) => acc * n, 1);
console.log(product);
// output: 24

// 20) HOF returning function with multiple steps
function stepFactory(step1, step2) {
  return function(num) {
    return step2(step1(num));
  };
}
const add2 = x => x+2;
const multiply3 = x => x*3;
const step = stepFactory(add2, multiply3);
console.log(step(5));
// output: 21  (5+2=7, 7*3=21)
