// ------ JS CHAPTER 74 and 75 ------ //

// var std1 = {
//   name: "jhon",
//   fname: "Elia",
//   age: 21,
//   details: function(){
//     return this.name + this.fname
//   }
// };
// var std2 = {
//   name: "jhon",
//   fname: "Elia",
//   age: 21,
//   details: function(){
//     return this.name + this.fname
//   }
// };

// function Student(name, fname, age) {
//   this.name = name
//   this.fname = fname
//   this.age = age

// }

// Student.prototype.stdDetails = function () {
//   this.name + this.fname
// }

// var std1 = new Student("Hamza", "Ahmed", 21)
// var std2 = new Student("ali", "Ahmed", 24)
// console.log(std1);
// console.log(std2);



// var days = ["mon", "fri"]
// console.log(days);

// console.log(std1);


var mobiles = {
  apple: {
    iphone18: {
      price: 9_00_000,
      storage: "3TB",
      name: "iphone18",
      image: "abc.png"
    },
    iphone17: {
      price: 8_00_000,
      storage: "2TB",
    },
    iphone16: {
      price: 7_00_000,
      storage: "1TB",
    },
  },
  samsung: {
    S29: {
      price: 90_000,
      storage: "120GB",
    },
    S28: {
      price: 80_000,
      storage: "100GB",
    },
    S27: {
      price: 70_000,
      storage: "90GB",
    },
  },
  nokia: {
    N3310: {
      price: 5000,
      storage: "500mb",
    },
    N105: {
      price: 3000,
      storage: "200mb",
    },
    N999: {
      price: 2000,
      storage: "95mb",
    },
  },
};

for (var mobCompany in mobiles) {
  for (var mob in mobiles[mobCompany]) {
    console.log(mobiles[mobCompany][mob]);
  }
}
