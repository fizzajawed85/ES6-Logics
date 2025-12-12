// OBJECTS PRACTICE LOGICS

// 1) Basic Object
const obj1 = { name: "Ali", age: 25 };
console.log(obj1);
// output: { name: "Ali", age: 25 }

// 2) Access property
const obj2 = { name: "Sara", city: "Karachi" };
console.log(obj2.name);
console.log(obj2["city"]);
// output: Sara Karachi

// 3) Add property
const obj3 = { name: "Umer" };
obj3.age = 30;
console.log(obj3);
// output: { name: "Umer", age: 30 }

// 4) Delete property
const obj4 = { name: "Ali", age: 25 };
delete obj4.age;
console.log(obj4);
// output: { name: "Ali" }

// 5) Object.keys() → get all keys
const obj5 = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj5));
// output: ["a", "b", "c"]

// 6) Object.values() → get all values
const obj6 = { a: 10, b: 20, c: 30 };
console.log(Object.values(obj6));
// output: [10, 20, 30]

// 7) Object.entries() → get key-value pairs
const obj7 = { x: 1, y: 2 };
console.log(Object.entries(obj7));
// output: [["x",1],["y",2]]

// 8) Loop through object using for…in
const obj8 = { name: "Ali", age: 25 };
for (let key in obj8) {
  console.log(key, obj8[key]);
}
// output:
// name Ali
// age 25

// 9) Object.assign() → copy object
const obj9 = { a: 1 };
const copy9 = Object.assign({}, obj9);
copy9.a = 100;
console.log(obj9, copy9);
// output: {a:1} {a:100}

// 10) Spread operator → copy object
const obj10 = { x: 5, y: 10 };
const copy10 = { ...obj10 };
copy10.y = 50;
console.log(obj10, copy10);
// output: {x:5,y:10} {x:5,y:50}

// 11) Nested object access
const obj11 = { name: "Sara", address: { city: "Karachi", zip: 12345 } };
console.log(obj11.address.city);
// output: Karachi

// 12) Nested object modify
const obj12 = { user: { name: "Ali", age: 25 } };
obj12.user.age = 30;
console.log(obj12);
// output: { user: { name: "Ali", age: 30 } }

// 13) Object.keys + forEach
const obj13 = { a: 1, b: 2, c: 3 };
Object.keys(obj13).forEach(key => {
  console.log(key, obj13[key]);
});
// output:
// a 1
// b 2
// c 3

// 14) Object.values + map
const obj14 = { a: 2, b: 4, c: 6 };
const doubled = Object.values(obj14).map(n => n * 2);
console.log(doubled);
// output: [4, 8, 12]

// 15) Object.entries + map → format strings
const obj15 = { name: "Ali", age: 25 };
const formatted = Object.entries(obj15).map(([key, value]) => `${key}: ${value}`);
console.log(formatted);
// output: ["name: Ali", "age: 25"]

// 16) Function inside object
const obj16 = {
  name: "Sara",
  greet() { return `Hello ${this.name}`; }
};
console.log(obj16.greet());
// output: Hello Sara

// 17) Object destructuring
const obj17 = { a: 10, b: 20 };
const { a, b } = obj17;
console.log(a, b);
// output: 10 20

// 18) Object destructuring with default
const obj18 = { name: "Ali" };
const { name, age = 30 } = obj18;
console.log(name, age);
// output: Ali 30

// 19) Nested destructuring
const obj19 = { user: { name: "Sara", age: 25 } };
const { user: { name: uName, age: uAge } } = obj19;
console.log(uName, uAge);
// output: Sara 25

// 20) Merge objects
const obj20a = { a: 1, b: 2 };
const obj20b = { b: 10, c: 3 };
const merged20 = { ...obj20a, ...obj20b };
console.log(merged20);
// output: { a:1, b:10, c:3 }

// 21) Nested object + loop through properties
const user1 = {
  name: "Ali",
  age: 25,
  address: { city: "Karachi", zip: 12345 }
};
for (let key in user1) {
  if (typeof user1[key] === "object") {
    for (let subKey in user1[key]) {
      console.log(`${subKey}: ${user21[key][subKey]}`);
    }
  } else {
    console.log(`${key}: ${user1[key]}`);
  }
}
// output:
// name: Ali
// age: 25
// city: Karachi
// zip: 12345

// 22) Object with array + map
const user22 = {
  name: "Sara",
  scores: [80, 90, 100]
};
const doubledScores = user22.scores.map(s => s * 2);
console.log(doubledScores);
// output: [160, 180, 200]

// 23) Object with function returning computed property
const user23 = {
  firstName: "Ali",
  lastName: "Khan",
  get fullName() { return `${this.firstName} ${this.lastName}`; }
};
console.log(user23.fullName);
// output: Ali Khan

// 24) Object with filter inside array
const user24 = {
  name: "Umer",
  marks: [30, 50, 80, 90]
};
const passed = user24.marks.filter(m => m >= 50);
console.log(passed);
// output: [50, 80, 90]

// 25) Reduce inside object to sum values
const sales2 = {
  products: [
    { name: "Shirt", price: 500 },
    { name: "Shoes", price: 1200 },
    { name: "Cap", price: 200 }
  ]
};
const totalSales = sales2.products.reduce((sum, p) => sum + p.price, 0);
console.log(totalSales);
// output: 1900

// 26) Object with computed property names
const propName = "age";
const user2 = {
  name: "Sara",
  [propName]: 25
};
console.log(user2);
// output: { name: "Sara", age: 25 }

// 27) Nested array inside object + forEach
const user3 = {
  name: "Ali",
  hobbies: ["cricket", "coding", "reading"]
};
user3.hobbies.forEach((hobby, i) => console.log(`${i+1}. ${hobby}`));
// output:
// 1. cricket
// 2. coding
// 3. reading

// 28) Object with map inside array of objects
const products = {
  items: [
    { name: "Book", price: 200 },
    { name: "Pen", price: 50 }
  ]
};
const productNames = products.items.map(p => p.name);
console.log(productNames);
// output: ["Book", "Pen"]

// 29) Object with nested objects + Object.entries + loop
const company = {
  name: "TechCorp",
  employees: {
    dev: 5,
    hr: 2,
    sales: 3
  }
};
for (let [dept, count] of Object.entries(company.employees)) {
  console.log(`${dept}: ${count}`);
}
// output:
// dev: 5
// hr: 2
// sales: 3

// 30) Object with array of objects + filter + map
const users4 = {
  members: [
    { name: "Ali", active: true },
    { name: "Sara", active: false },
    { name: "Umer", active: true }
  ]
};
const activeMembers = users4.members
  .filter(m => m.active)
  .map(m => m.name);
console.log(activeMembers);
// output: ["Ali", "Umer"]
