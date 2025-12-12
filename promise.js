// PROMISE PRACTICE LOGICS

// 1) Basic Resolve
const p1 = new Promise(resolve => resolve("Success"));
p1.then(res => console.log(res));
// output: Success

// 2) Basic Reject
const p2 = new Promise((_, reject) => reject("Error Occurred"));
p2.catch(err => console.log(err));
// output: Error Occurred

// 3) Delay using setTimeout
const wait = new Promise(resolve => {
  setTimeout(() => resolve("Done after 1 second"), 1000);
});
wait.then(console.log);
// output: Done after 1 second

// 4) Reject after delay
const p4 = new Promise((_, reject) => {
  setTimeout(() => reject("Error after 2 seconds"), 2000);
});
p4.catch(err => console.log(err));
// output: Error after 2 seconds

// 5) If/Else Promise Example
function checkNumber(num) {
  return new Promise((resolve, reject) => {
    num > 0 ? resolve("Positive Number") : reject("Negative Number");
  });
}
checkNumber(5)
  .then(res => console.log(res))
  .catch(err => console.log(err));
// output: Positive Number

// 6) Chaining Promises
function double(num) {
  return new Promise(resolve => resolve(num * 2));
}
double(5)
  .then(res => {
    console.log(res); // 10
    return res * 2;
  })
  .then(final => console.log(final));
// output:
// 10
// 20

// 7) Chaining Error Example
function doubleString(x) {
  return new Promise((resolve, reject) => {
    if (typeof x === "number") resolve(x * 2);
    else reject("Not a number");
  });
}
doubleString("hello")
  .then(res => console.log(res))
  .catch(err => console.log("Error:", err));
// output: Error: Not a number

// 8) Promise.all - Multiply numbers
const multiplyAll = Promise.all([
  Promise.resolve(2),
  Promise.resolve(3),
  Promise.resolve(4)
]);
multiplyAll.then(res => console.log("Product:", res.reduce((a,b)=>a*b,1)));
// output: Product: 24


// 9) Promise.race
const fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 500));
const slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 1500));

Promise.race([fast, slow])
  .then(res => console.log(res));
// output: Fast

// 10) Promise.any
const a = Promise.reject("Fail 1");
const b = new Promise(resolve => setTimeout(() => resolve("Success"), 700));

Promise.any([a, b])
  .then(res => console.log(res));
// output: Success

// 11) Promise.allSettled - Students Exam Status
const exam1 = Promise.resolve("Student A Passed");
const exam2 = Promise.reject("Student B Absent");
const exam3 = Promise.resolve("Student C Passed");
Promise.allSettled([exam1, exam2, exam3])
  .then(results => console.log(results));

/*
output:
[
  { status: "fulfilled", value: "Student A Passed" },
  { status: "rejected", reason: "Student B Absent" },
  { status: "fulfilled", value: "Student C Passed" }
]
*/

// 12) Converting Callback to Promise
function getData(cb) {
  setTimeout(() => cb("Callback Result"), 1000);
}
function getDataPromise() {
  return new Promise(resolve => {
    getData((result) => resolve(result));
  });
}
getDataPromise().then(res => console.log(res));
// output: Callback Result

// 13) API Simulation
function fetchUser() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id: 1, name: "Alex" }), 1200);
  });
}
fetchUser().then(user => console.log(user));
// output: { id: 1, name: "Alex" }

// 14) Login Example
function login(username, password) {
  return new Promise((resolve, reject) => {
    if (username === "admin" && password === "123") {
      resolve("Login Successful");
    } else {
      reject("Invalid Credentials");
    }
  });
}
login("admin", "123")
  .then(res => console.log(res))
  .catch(err => console.log(err));
// output: Login Successful

// 15) Loop with Promise using map()
const ids = [1, 2, 3];
function getUser(id) {
  return Promise.resolve(`User ${id}`);
}
Promise.all(ids.map(id => getUser(id)))
  .then(res => console.log(res));
// output: ["User 1", "User 2", "User 3"]

// 16) Retry Logic - Coin Flip
function coinFlip() {
  return new Promise((resolve, reject) => {
    Math.random() > 0.5 ? resolve("Heads") : reject("Tails");
  });
}
coinFlip()
  .then(res => console.log(res))
  .catch(err => console.log(err));
// output: Heads OR Tails (random)

// 17) Promise inside setTimeout
function getWeather() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Cloudy Weather"), 1500);
  });
}
getWeather().then(msg => console.log(msg));
// output: Cloudy Weather

// 18) Math Operation Example
function square(num) {
  return new Promise(resolve => resolve(num * num));
}
square(6).then(res => console.log(res));
// output: 36

// 19) Type Checking with Promise
function isString(value) {
  return new Promise((resolve, reject) => {
    typeof value === "string"
      ? resolve("String Found")
      : reject("Not a String");
  });
}
isString(123)
  .then(res => console.log(res))
  .catch(err => console.log(err));
// output: Not a String

// 20) Step-by-step Process (Chain)
function step1() {
  return Promise.resolve("Step 1 Completed");
}
function step2() {
  return Promise.resolve("Step 2 Completed");
}
function step3() {
  return Promise.resolve("Step 3 Completed");
}

step1()
  .then(res => {
    console.log(res);
    return step2();
  })
  .then(res => {
    console.log(res);
    return step3();
  })
  .then(res => console.log(res));

/*
output:
Step 1 Completed
Step 2 Completed
Step 3 Completed
*/
