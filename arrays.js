// ARRAYS PRACTICE LOGICS

// 1) Create Array
const arr1 = [1, 2, 3];
console.log(arr1);
// output: [1, 2, 3]

// 2) Access Elements
const arr2 = ["apple", "mango"];
console.log(arr2[1]);
// output: mango

// 3) Add item (push)
const arr3 = [10, 20];
arr3.push(30);
console.log(arr3);
// output: [10, 20, 30]

// 4) Remove last (pop)
const arr4 = [1, 2, 3];
arr4.pop();
console.log(arr4);
// output: [1, 2]

// 5) Add item at start (unshift)
const arr5 = [2, 3];
arr5.unshift(1);
console.log(arr5);
// output: [1, 2, 3]

// 6) Remove first (shift)
const arr6 = [1, 2, 3];
arr6.shift();
console.log(arr6);
// output: [2, 3]

// 7) Find Index (indexOf)
const arr7 = ["a", "b", "c"];
console.log(arr7.indexOf("b"));
// output: 1

// 8) Includes method
const arr8 = [10, 20, 30];
console.log(arr8.includes(20));
// output: true

// 9) Slice (copy part)
const arr9 = [1, 2, 3, 4];
const part = arr9.slice(1, 3);
console.log(part);
// output: [2, 3]

// 10) Splice (add/remove items)
const arr10 = [1, 2, 3];
arr10.splice(1, 1, 99);
console.log(arr10);
// output: [1, 99, 3]

// 11) Map (transform each item)
const arr11 = [1, 2, 3];
const doubled = arr11.map(n => n * 2);
console.log(doubled);
// output: [2, 4, 6]

// 12) Filter (remove unwanted items)
const arr12 = [10, 25, 40];
const big = arr12.filter(n => n > 20);
console.log(big);
// output: [25, 40]

// 13) Reduce (sum all)
const arr13 = [5, 5, 10];
const sum = arr13.reduce((total, n) => total + n, 0);
console.log(sum);
// output: 20

// 14) Find (first match)
const arr14 = [4, 8, 16];
const found = arr14.find(n => n > 5);
console.log(found);
// output: 8

// 15) Some (at least one true)
const arr15 = [1, 3, 5];
console.log(arr15.some(n => n > 4));
// output: true

// 16) Every (all must be true)
const arr16 = [2, 4, 6];
console.log(arr16.every(n => n % 2 === 0));
// output: true

// 17) Sort numbers
const arr17 = [30, 5, 20];
arr17.sort((a, b) => a - b);
console.log(arr17);
// output: [5, 20, 30]

// 18) Reverse array
const arr18 = [1, 2, 3];
arr18.reverse();
console.log(arr18);
// output: [3, 2, 1]

// 19) Join (convert to string)
const arr19 = ["Ali", "Sara"];
console.log(arr19.join(" - "));
// output: Ali - Sara

// 20) Flat (flatten nested array)
const arr20 = [1, [2, 3], [4]];
const flatArr = arr20.flat();
console.log(flatArr);
// output: [1, 2, 3, 4]

// 21) Filter + Map → Active Users ke Names
const users = [
  { name: "Ali", active: true },
  { name: "Sara", active: false },
  { name: "Umer", active: true }
];
const activeNames = users
  .filter(user => user.active)
  .map(user => user.name);
console.log(activeNames);
// output: ["Ali", "Umer"]

// 22) Reduce → Total Price of Cart
const cart = [
  { item: "Shirt", price: 1200 },
  { item: "Shoes", price: 2500 },
  { item: "Cap", price: 400 }
];
const total = cart.reduce((sum, product) => sum + product.price, 0);
console.log(total);
// output: 4100

// 23) Find → First Failed Student
const marks = [
  { name: "Ali", score: 85 },
  { name: "Ahmed", score: 30 },
  { name: "Zara", score: 60 }
];
const failed = marks.find(s => s.score < 40);
console.log(failed);
// output: { name: "Ahmed", score: 30 }

// 24) Flat → Multi-Dimensional Array Flatten
const arr = [1, [2, 3], [4, [5]]];
const flatsArr = arr.flat(2);
console.log(flatsArr);
// output: [1, 2, 3, 4, 5]

// 25) Reverse a String using Array Methods
const str = "hello";
// string → array → reverse → join
const reversed = str.split("").reverse().join("");
console.log(reversed);
// output: olleh

// 26) Count Occurrences of Each Word
const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count = words.reduce((acc, w) => {
  acc[w] = (acc[w] || 0) + 1;
  return acc;
}, {});
console.log(count);
// output: { apple: 3, banana: 2, orange: 1 }

// 27) Sort objects by age descending
const people = [
  { name: "Ali", age: 25 },
  { name: "Sara", age: 30 },
  { name: "Zara", age: 22 }
];
people.sort((a,b) => b.age - a.age);
console.log(people);
// output: [{name:"Sara",age:30},{name:"Ali",age:25},{name:"Zara",age:22}]

// 28) Concat arrays
const arrA29 = [1,2];
const arrB29 = [3,4];
const arr29 = arrA29.concat(arrB29);
console.log(arr29);
// output: [1,2,3,4]

// 29) Filter + Reduce → Total price of items > 100
const items30 = [
  { name:"Shirt", price:80 },
  { name:"Shoes", price:120 },
  { name:"Cap", price:50 },
  { name:"Bag", price:150 }
];
const total30 = items30.filter(i => i.price > 100).reduce((sum, i) => sum + i.price, 0);
console.log(total30);
// output: 270

// 30) Get unique values from array
const colors = ["red", "blue", "red", "green", "blue", "yellow"];
const uniqueColors = colors.filter((color, index, arr) => arr.indexOf(color) === index);
console.log(uniqueColors);
// output: ["red", "blue", "green", "yellow"]
