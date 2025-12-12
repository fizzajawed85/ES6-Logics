// DEEP COPY & SHALLOW COPY PRACTICE LOGICS

// 1) Shallow copy of array using slice()
const arr1 = [1,2,3];
const arr2 = arr1.slice();
arr2.push(4);
console.log(arr1, arr2);
// output: [1,2,3] [1,2,3,4]

// 2) Shallow copy using spread operator
const arr3 = [10,20,30];
const arr4 = [...arr3];
arr4[0] = 100;
console.log(arr3, arr4);
// output: [10,20,30] [100,20,30]

// 3) Shallow copy of object using Object.assign
const obj1 = {a: 1, b: 2};
const obj2 = Object.assign({}, obj1);
obj2.a = 100;
console.log(obj1, obj2);
// output: {a:1,b:2} {a:100,b:2}

// 4) Shallow copy using spread for object
const obj3 = {x: 5, y: 10};
const obj4 = {...obj3};
obj4.y = 50;
console.log(obj3, obj4);
// output: {x:5,y:10} {x:5,y:50}

// 5) Shallow copy & nested object
const obj5 = {a: 1, b: {c: 2}};
const obj6 = {...obj5};
obj6.b.c = 20;
console.log(obj5, obj6);
// output: {a:1,b:{c:20}} {a:1,b:{c:20}}
// Note: nested object is shared (shallow copy)

// 6) Deep copy using JSON
const obj7 = {name: "Ali", address: {city: "Karachi"}};
const obj8 = JSON.parse(JSON.stringify(obj7));
obj8.address.city = "Lahore";
console.log(obj7, obj8);
// output: {name:"Ali", address:{city:"Karachi"}} {name:"Ali", address:{city:"Lahore"}}

// 7) Deep copy of array of objects
const users = [{name:"A"}, {name:"B"}];
const usersCopy = JSON.parse(JSON.stringify(users));
usersCopy[0].name = "Z";
console.log(users, usersCopy);
// output: [{name:"A"}, {name:"B"}] [{name:"Z"}, {name:"B"}]

// 8) Shallow copy array of objects
const users2 = [{id:1}, {id:2}];
const usersCopy2 = [...users2];
usersCopy2[0].id = 10;
console.log(users2, usersCopy2);
// output: [{id:10},{id:2}] [{id:10},{id:2}]
// Note: nested objects are still same (shallow)

// 9) Deep copy using structuredClone (modern JS)
const obj9 = {a:1, b:{c:2}};
const obj10 = structuredClone(obj9);
obj10.b.c = 20;
console.log(obj9, obj10);
// output: {a:1,b:{c:2}} {a:1,b:{c:20}}

// 10) Shallow copy causing nested change
const item1 = {
  name: "Book",
  details: { pages: 200 }
};
const item2 = { ...item1 }; // shallow copy
item2.details.pages = 500;
console.log(item1, item2);
// output:
// {name:"Book", details:{pages:500}}
// {name:"Book", details:{pages:500}}
// Explanation: Nested object same reference → shallow copy

// 11) Deep copy using JSON for object inside array
const items1 = [
  { id: 1, price: 100 },
  { id: 2, price: 200 }
];
const items2 = JSON.parse(JSON.stringify(items1)); // deep copy
items2[1].price = 999;
console.log(items1, items2);
// output:
// [{id:1, price:100}, {id:2, price:200}]
// [{id:1, price:100}, {id:2, price:999}]


// 12) Shallow copy of object with function
const obj11 = {a:1, fn:()=>10};
const obj12 = {...obj11};
console.log(obj12.fn()); // call function
// output: 10

// 13) Deep copy of object with nested array
const obj13 = {arr:[1,2,3]};
const obj14 = JSON.parse(JSON.stringify(obj13));
obj14.arr.push(4);
console.log(obj13.arr, obj14.arr);
// output: [1,2,3] [1,2,3,4]

// 14) Shallow copy using Object.assign with nested object
const productA = {
  title: "Phone",
  specs: { ram: "8GB", storage: "128GB" }
};
const productB = Object.assign({}, productA); // shallow copy
productB.specs.ram = "16GB";
console.log(productA, productB);
// output:
// {title:"Phone", specs:{ram:"16GB", storage:"128GB"}}
// {title:"Phone", specs:{ram:"16GB", storage:"128GB"}}
// Explanation: specs object shared → shallow copy


// 15) Shallow copy using slice for nested arrays
const arrNested3 = [[1,2],[3,4]];
const arrCopy3 = arrNested3.slice();
arrCopy3[0][0] = 100;
console.log(arrNested3, arrCopy3);
// output: [[100,2],[3,4]] [[100,2],[3,4]]

// 16) Deep copy nested arrays using map
const arrNested4 = [[1,2],[3,4]];
const arrDeepCopy2 = arrNested4.map(inner => [...inner]);
arrDeepCopy2[0][0] = 50;
console.log(arrNested4, arrDeepCopy2);
// output: [[1,2],[3,4]] [[50,2],[3,4]]

// 17) Deep copy object with multiple nested levels
const obj17 = {a:1, b:{c:{d:5}}};
const obj18 = JSON.parse(JSON.stringify(obj17));
obj18.b.c.d = 50;
console.log(obj17, obj18);
// output: {a:1,b:{c:{d:5}}} {a:1,b:{c:{d:50}}}

// 18) Shallow copy using spread with nested array
const data1 = { nums: [5, 10, 15] };
const data2 = { ...data1 };  // shallow copy
data2.nums[0] = 999;
console.log(data1, data2);
// output:
// { nums: [999, 10, 15] }
// { nums: [999, 10, 15] }
// Explanation: Nested array same reference → shallow copy

// 19) Deep copy using JSON for array of objects
const students1 = [
  { name: "Ali", marks: 80 },
  { name: "Sara", marks: 90 }
];
const students2 = JSON.parse(JSON.stringify(students1));
students2[0].marks = 100;
console.log(students1, students2);
// output:
// [{name:"Ali", marks:80}, {name:"Sara", marks:90}]
// [{name:"Ali", marks:100}, {name:"Sara", marks:90}]

// 20) Deep copy using structuredClone
const product1 = {
  name: "Laptop",
  prices: [50000, 52000],
  details: { brand: "Dell" }
};
const product2 = structuredClone(product1);
product2.prices[0] = 99999;
product2.details.brand = "HP";
console.log(product1, product2);
// output:
// { name:"Laptop", prices:[50000,52000], details:{brand:"Dell"} }
// { name:"Laptop", prices:[99999,52000], details:{brand:"HP"} }
