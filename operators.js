// OPERATORS PRACTICE LOGICS

// 1) Assignment operator
let a1 = 10;
let b1 = a1;
console.log(b1);
// output: 10

// 2) Addition + Template Literal
const x2 = 5, y2 = 10;
console.log(`Sum is ${x2 + y2}`);
// output: Sum is 15

// 3) Subtraction
const x3 = 20, y3 = 7;
console.log(x3 - y3);
// output: 13

// 4) Multiplication
const x4 = 6, y4 = 4;
console.log(x4 * y4);
// output: 24

// 5) Division
const x5 = 20, y5 = 4;
console.log(x5 / y5);
// output: 5

// 6) Modulus
const x6 = 10, y6 = 3;
console.log(x6 % y6);
// output: 1

// 7) Increment
let x7 = 5;
x7++;
console.log(x7);
// output: 6

// 8) Decrement
let x8 = 10;
x8--;
console.log(x8);
// output: 9

// 9) Comparison (===)
const a9 = 10;
const b9 = "10";
console.log(a9 === b9);
// output: false

// 10) Comparison (!==)
const a10 = 5;
const b10 = 5;
console.log(a10 !== b10);
// output: false

// 11) Logical AND (&&) with function
function isAdult(age) {
  return age >= 18;
}
const age11 = 20;
console.log(age11 >= 18 && isAdult(age11));
// output: true

// 12) Logical OR (||) with default value
const user12 = { name: "Ali" };
const username12 = user12.name || "Guest";
console.log(username12);
// output: Ali

// 13) Ternary Operator
const marks13 = 45;
const result13 = marks13 >= 50 ? "Pass" : "Fail";
console.log(result13);
// output: Fail

// 14) Nullish Coalescing Operator (??)
const user14 = { name: null };
const name14 = user14.name ?? "Anonymous";
console.log(name14);
// output: Anonymous

// 16) String Concatenation using Template Literals + Operator
const first16 = "Ali", last16 = "Khan";
console.log(`${first16} ${last16}`);
// output: Ali Khan

// 17) Array + && Operator
const nums17 = [10, 20, 30];
const check17 = nums17.length && "Array is not empty";
console.log(check17);
// output: Array is not empty

// 18) Object + OR Operator
const config18 = { debug: false };
const debug18 = config18.debug || true;
console.log(debug18);
// output: true

// 19) Loop + Ternary inside array
const ages19 = [12, 18, 25, 15];
const status19 = ages19.map(a => a >= 18 ? "Adult" : "Minor");
console.log(status19);
// output: ["Minor", "Adult", "Adult", "Minor"]

// 20) Function + Object + Nullish + Loop
const users20 = [
  { name: "Ali", age: 25 },
  { name: "Sara", age: null },
  { name: "Umer" }
];
users20.forEach(u => {
  const age = u.age ?? "Unknown";
  console.log(`${u.name}: ${age}`);
});
// output:
// Ali: 25
// Sara: Unknown
// Umer: Unknown

// 21) Nested object + OR operator
const user21 = { name: "Ali", settings: { theme: null } };
const theme21 = user21.settings.theme || "light";
console.log(`Theme: ${theme21}`);
// output: Theme: light

// 22) Array inside object + AND operator
const user22 = { name: "Sara", hobbies: ["reading", "coding"] };
const hobby22 = user22.hobbies && user22.hobbies[0];
console.log(`First hobby: ${hobby22}`);
// output: First hobby: reading

// 23) Ternary operator with nested object
const user23 = { name: "Umer", age: 17 };
const status23 = user23.age >= 18 ? "Adult" : "Minor";
console.log(status23);
// output: Minor

// 24) Nullish coalescing with array
const nums24 = { values: [0, null, 5] };
const firstNum24 = nums24.values[1] ?? "No value";
console.log(firstNum24);
// output: No value

// 25) Map inside object + template literals
const user25 = {
  name: "Ali",
  scores: [40, 50, 60]
};
const scoreMsgs25 = user25.scores.map(s => `Score: ${s >= 50 ? "Pass" : "Fail"}`);
console.log(scoreMsgs25);
// output: ["Score: Fail", "Score: Pass", "Score: Pass"]

// 26) Filter + OR operator inside object
const products26 = {
  items: [
    { name: "Shirt", price: 100 },
    { name: "Shoes", price: 0 },
    { name: "Cap" }
  ]
};
const available26 = products26.items.filter(i => i.price || i.price === 0);
console.log(available26);
// output: [{name:"Shirt",price:100},{name:"Shoes",price:0}]

// 27) Reduce + computed property inside object
const sales27 = {
  orders: [
    { product: "Book", amount: 200 },
    { product: "Pen", amount: 50 }
  ]
};
const total27 = sales27.orders.reduce((acc, order) => acc + order.amount, 0);
console.log(`Total sales: ${total27}`);
// output: Total sales: 250

// 28) Nested array + AND + Ternary
const users28 = [
  { name: "Ali", scores: [30, 40, 50] },
  { name: "Sara", scores: [60, 70] }
];
users28.forEach(u => {
  const avg = u.scores && u.scores.reduce((a,b)=>a+b,0)/u.scores.length;
  console.log(`${u.name}: ${avg >= 50 ? "Passed" : "Failed"}`);
});
// output:
// Ali: Failed
// Sara: Passed

// 29) Computed property names + Nullish
const propName29 = "age";
const user29 = { name: "Umer", [propName29]: null };
const age29 = user29[propName29] ?? 18;
console.log(age29);
// output: 18

// 30) Object inside array + map + template literal + ternary
const students30 = [
  { name: "Ali", marks: 45 },
  { name: "Sara", marks: 75 },
  { name: "Umer", marks: 55 }
];
const result30 = students30.map(s => `${s.name}: ${s.marks >= 50 ? "Pass" : "Fail"}`);
console.log(result30);
// output: ["Ali: Fail", "Sara: Pass", "Umer: Pass"]
