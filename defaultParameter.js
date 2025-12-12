// DEFAULT PARAMETER PRACTICE LOGICS

// 1) Default name
const greet = (name = "Guest") => `Hello, ${name}`;
console.log(greet());
//output : Hello, Guest

// 2) Default age
const showAge = (age = 18) => age;
console.log(showAge());
//output : 18

// 3) Multiply with default value
const multiply = (a, b = 1) => a * b;
console.log(multiply(5));
//output : 5

// 4) Add with default second number
const add = (a = 10, b = 20) => a + b;
console.log(add());
//output : 30

// 5) Power with default exponent
const power = (base, exp = 2) => Math.pow(base, exp);
console.log(power(4));
//output : 16

// 6) Default array parameter
const sumArray = (arr = [1, 2, 3]) => arr.reduce((a, b) => a + b, 0);
console.log(sumArray());
//output : 6

// 7) Greet with default message
const customGreet = (greeting = "Hello", name = "Welcome!") => `${greeting} - ${name}`;
console.log(customGreet("Fizza"));
//output : Fizza - Welcome!

// 7) Default object parameter
const userInfo = (user = { name: "Unknown", age: 0 }) => user.name;
console.log(userInfo());
//output : Unknown

// 8) Default function parameter
const calc = (num, func = x => x * 2) => func(num);
console.log(calc(5));
//output : 10

// 9) Default boolean
const check = (flag = true) => flag;
console.log(check());
//output : true

// 10) Default string
const say = (word = "Hello") => word;
console.log(say());
//output : Hello

// 1) Power function with default exponent
const powerEx = (base, exp = 2) => base ** exp;
console.log(powerEx(5));
//output : 25

// 12) Default username + role
const profile = (name = "Guest", role = "Viewer") => `${name}: ${role}`;
console.log(profile());
//output : Guest: Viewer

// 13) Login message with default attempts
const login = (email, attempts = 3) => `${email} has ${attempts} attempts left`;
console.log(login("test@mail.com"));
//output : test@mail.com has 3 attempts left

// 14) Discount calculator
const discount = (price, off = 10) => price - (price * off / 100);
console.log(discount(100));
//output : 90

// 15) Default limit for slicing
const getItems = (arr, limit = 2) => arr.slice(0, limit);
console.log(getItems([10, 20, 30, 40]));
//output : [ 10, 20 ]

// 16) Default separator for join
const joinWords = (arr, sep = "-") => arr.join(sep);
console.log(joinWords(["a", "b", "c"]));
//output : a-b-c

// 17) Default start/end for substring
const cut = (str, start = 0, end = 3) => str.substring(start, end);
console.log(cut("JavaScript"));
//output : Jav

// 18) Default value in rest + default
const show = (first = "No data", ...rest) => ({ first, rest });
console.log(show());
//output : { first: 'No data', rest: [] }

// 19) Default greeting object
const greetUser = ({ name = "User", age = 0 } = {}) =>
  `Name: ${name}, Age: ${age}`;
console.log(greetUser());
//output : Name: User, Age: 0

// API simulator with default status
const api = (data = {}, status = 200) =>
  `Status: ${status}, Data: ${JSON.stringify(data)}`;
console.log(api({ id: 1, name: "Ali" }));
//output : Status: 200, Data: {"id":1,"name":"Ali"}
