// ASYNC/AWAIT PRACTICE LOGICS

// 1) Basic Async Function
async function greet() {
  return "Hello, World!";
}
greet().then(res => console.log(res));
// output: Hello, World!

// 2) Await with Promise
async function getNumber() {
  const num = await Promise.resolve(10);
  console.log(num);
}
getNumber();
// output: 10

// 3) Async Function with Error Handling
async function checkNumber(num) {
  try {
    if(num > 0) {
      return "Positive";
    } else {
      throw "Not Positive";
    }
  } catch(err) {
    return err;
  }
}
checkNumber(5).then(res => console.log(res));
// output: Positive
checkNumber(-3).then(res => console.log(res));
// output: Not Positive

// 4) Await inside another function
function promiseNumber() {
  return Promise.resolve(25);
}
async function getValue() {
  const value = await promiseNumber();
  console.log(value);
}
getValue();
// output: 25

// 5) Async function returning multiple values
async function getArray() {
  return [1, 2, 3];
}
getArray().then(res => console.log(res));
// output: [1, 2, 3]

// 6) Await with setTimeout simulation
function delay(ms) {
  return new Promise(resolve => setTimeout(() => resolve("Done!"), ms));
}
async function wait() {
  const result = await delay(1000);
  console.log(result);
}
wait();
// output: Done!

// 7) Using try/catch with async
async function fetchData(success=true) {
  try {
    if(success) {
      const data = await Promise.resolve("Data Loaded");
      console.log(data);
    } else {
      throw "Failed to Load";
    }
  } catch(err) {
    console.log(err);
  }
}
fetchData(true);
// output: Data Loaded
fetchData(false);
// output: Failed to Load

// 8) Sequential Async Calls
function addTwo(num) {
  return Promise.resolve(num + 2);
}
async function calculate() {
  const first = await addTwo(5);
  const second = await addTwo(first);
  console.log(second);
}
calculate();
// output: 9

// 9) Async returning object
async function getUser() {
  return { name: "Ali", age: 20 };
}
getUser().then(res => console.log(res));
// output: { name: "Ali", age: 20 }

// 10) Async with multiple awaits
function multiplyBy2(num) {
  return Promise.resolve(num * 2);
}
async function processNumber() {
  const step1 = await multiplyBy2(5);
  const step2 = await multiplyBy2(step1);
  console.log(step2);
}
processNumber();
// output: 20

// 11) Async with Array of Promises
async function getNumbers() {
  const nums = await Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
  ]);
  console.log(nums);
}
getNumbers();
// output: [1, 2, 3]

// 12) Async with Promise.reject
async function testError() {
  try {
    const result = await Promise.reject("Something went wrong!");
    console.log(result);
  } catch(err) {
    console.log(err);
  }
}
testError();
// output: Something went wrong!

// 13) Async with conditional await
async function checkValue(num) {
  const result = await (num > 10 ? Promise.resolve("Greater") : Promise.resolve("Smaller"));
  console.log(result);
}
checkValue(5);
// output: Smaller
checkValue(15);
// output: Greater

// 14) Async function calling another async
async function step1() { return 5; }
async function step2(x) { return x * 2; }
async function mainSteps() {
  const a = await step1();
  const b = await step2(a);
  console.log(b);
}
mainSteps();
// output: 10

// 15) Async with delay inside loop
function delayLog(num) {
  return new Promise(resolve => setTimeout(() => resolve(num), 500));
}
async function loopLogs() {
  for(let i=1; i<=3; i++) {
    const res = await delayLog(i);
    console.log(res);
  }
}
loopLogs();
// output: 1, 2, 3 (each after 0.5s)

// 16) Async with try/catch and multiple awaits
function fetchName() { return Promise.resolve("Ali"); }
function fetchAge() { return Promise.resolve(25); }
async function getProfile() {
  try {
    const name = await fetchName();
    const age = await fetchAge();
    console.log(`Name: ${name}, Age: ${age}`);
  } catch(err) {
    console.log(err);
  }
}
getProfile();
// output: Name: Ali, Age: 25

// 17) Async function with Math calculation
async function calcSquare(num) {
  const square = await Promise.resolve(num * num);
  console.log(square);
}
calcSquare(6);
// output: 36

// 18) Async with Promise.race
async function raceTest() {
  const result = await Promise.race([
    new Promise(resolve => setTimeout(() => resolve("Fast"), 500)),
    new Promise(resolve => setTimeout(() => resolve("Slow"), 1000))
  ]);
  console.log(result);
}
raceTest();
// output: Fast

// 19) Async with fetch simulation
async function fakeFetch(url) {
  const data = await new Promise(resolve => setTimeout(() => resolve({url: url, status: 200}), 700));
  console.log(data);
}
fakeFetch("api/data");
// output: { url: "api/data", status: 200 }

// 20) Async with sequential object updates
async function updateProfile() {
  let profile = {name: "Ali", age: 20};
  profile.name = await Promise.resolve("Ahmed");
  profile.age = await Promise.resolve(25);
  console.log(profile);
}
updateProfile();
// output: { name: "Ahmed", age: 25 }
