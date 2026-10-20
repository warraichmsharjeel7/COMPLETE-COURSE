// import  username from "./main.js"
import { username, sum } from "./main.js"


console.log(username);
let res = sum(39, 98)
console.log(res);


// ====== ADVANCE JAVASCRIPT PART 02 ====== //

// ---- Exponentiation Operator ---- //

// let num = 2 ** 4
// let num = 4 ** 5
// 2 x 2 x 2 x 2 = 16
// 4 x 4 x 4 x 4 x 4 = 1024

// console.log(num);

// ---- Default parameters ---- //

// function greet(a = "Guest"){
//     console.log(`Welcome, ${a}`);
// }

// greet("Farhan")
// greet()
// greet("Ali")


// ---- rest parameters ---- //

// function marks(...num){
//     // console.log(`Your marks is ${num}`);
//     console.log(num);
// }

// marks(10, 20, 40 , 50)


// ---- Spread Operator ---- //


// let studentInfo = {
//     name: "Fawad",
//     age: 24
// }

// let studentAcademicInfo = {
//     result: "A",
//     percentage: "70%"
// }


// let completeStudentData = {
//     ...studentInfo,
//     ...studentAcademicInfo
// }

// console.log(completeStudentData);


// let car = {
//     name: "Civic",
//     price: 5_00_000
// }

// let carOtherDetail = {
//     ...car,
//     model: "2029",
//     doors: 2
// }

// console.log(carOtherDetail);


// let num1 = [1, 2, 3, 4]
// // let num2 = [...num1, 5, 6, 7, 8]
// let num2 = [5, 6, 7, 8]

// let num3 = [...num1, ...num2, 9, 10, 11]

// console.log(num3);


// console.log(username);
