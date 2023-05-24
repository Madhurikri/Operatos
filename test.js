//  Arithmetic Operators 
let a = 10;
let b = 5;
console.log(a + b); // Addition: 15
console.log(a - b); // Subtraction: 5
console.log(a * b); // Multiplication: 50
console.log(a / b); // Division: 2
console.log(a % b); // Modulo: 0

// Comparision Operators

let x = 10;
let y = 5;
console.log(a > b); // Greater than: true
console.log(a < b); // Less than: false
console.log(a >= b); // Greater than or equal to: true
console.log(a <= b); // Less than or equal to: false
console.log(a == b); // Equal to: false
console.log(a !== b); // Not equal to: true

// logical operators and if,else statements
let age = 25;
let hasDriverLicense = true;
let hasCar = false;

if (age >= 18 && hasDriverLicense || hasCar) {
  console.log("You can drive!"); // Output: "You can drive!"
} else {
  console.log("You cannot drive.");
}

if(!age>=18){
   console.log(false)
}
// for loops

// Printing 1-10 numbers
for(i=0;i<=10;i++){
    console.log(i)
}
// printing numbers from 10-0
for(i=10;i>=0;i--){
    console.log(i)
}
// printing even numbers
for(i=0;i<=10;i++){
    console.log((i%2)==0))
}
// printing odd numbers
for(i=0;i<=10;i++){
    console.log((i%2)==1))
}
// printing 3 table
for(i=0;i<=10;i++){
    let result=`${3*i}`
    console.log(` 3*${i}=${result}`)
}
// Date:24-5-2023

// While Loop
var i=1;
while(i<10){
    console.log(i);
    i++;
}
// Arrays Concept
let arr=[1,2,3,4,5];
for(i=0;i<arr.length;i++){
    console.log(arr[i])
}
for(i=arr.length-1;i>=0;i--){
    console.log(i)
}
for(i=arr.length-1;i>=0;i--){
   if(arr[i]%2===0){
    console.log(i)
   }
}
for(i=0;i<=arr.length;i++){
    if(arr[i]%2===0){
     console.log(i)
    }
 }
// Fibonacci Sequence
let limit = 10;
let preVal = 0;
let curVal = 1;
while (limit > 0) {
  console.log(curVal);

  let next = preVal + curVal;
  preVal = curVal;
  curVal = next;

  limit--;
}
// Creating an Array:
const fruits = ['apple', 'banana', 'orange'];
// Accessing Elements:
console.log(fruits[0]); 
console.log(fruits[2]); 
// Iterating over an Array:
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}












