// ------ JS CHAPTER 71 and 72 ------ //

 
//  var car = {
//     name: "Supra",
//     model: 2020,
//     tyre: 4,
//     color: ["white", "black", "gray"],
//     price: 8_00_00_000 ,
//     isAuto: true
// }

// var std1 = {
//     name: "farooq",
//     fatherName: "Ahmed",
//     age: 15,
//     phone: 90834045734,
//     address: "street 123",
//     cnic: 3476538476532484,
//     dob: "06-may-2011",
//     email: "farooq@gmail.com",
//     gender: "male",
//     class: "9th",
//     cardDetails: function(){
//         return "Student Name: " + this.name + "\n" + 
//         "Father Name: " + this.fatherName + "\n" + 
//         "Class Name: " + this.class + "\n" + 
//         "Age: " + this.age    
//     }
// }

// var stdIdCard = std1.cardDetails()
// console.log(stdIdCard);

// var std2 = {
//     name: "Jhon",
//     fatherName: "Elia",
//     age: 51,
//     phone: 90834045734,
//     address: "street 123",
//     cnic: 3476538476532484,
//     dob: "06-may-2011",
//     email: "farooq@gmail.com",
//     gender: "male",
//     class: "KG-1",
//     cardDetails: function(){
//         return "Student Name: " + this.name + "\n" + 
//         "Father Name: " + this.fatherName + "\n" + 
//         "Class Name: " + this.class + "\n" + 
//         "Age: " + this.age    
//     }
// }

// var stdIdCard = std2.cardDetails()
// console.log(stdIdCard);

 
function Student (a, b , c , d){
    this.name = a,
    this.fname = b,
    this.age = c,
    this.class = d 
}

var std1 = new Student("Clerk", "Smith", 23, "14th")
var std2 = new Student("Jhon", "Elia", 25, "16th")
var std3 = new Student("Tina", "Cheema", 26, "16th")
console.log(std1);
console.log(std2);
console.log(std3);
