// ------ JS CHAPTER 73 and 75 ------ //

var obj = {
  name: "hello",
  age: 12,
  otherDetail: {},
};

function Student(a, b, c, d) {
  ((this.name = a), (this.fname = b), (this.age = c), (this.class = d));
  this.otherDetail = function (city) {
    console.log(
      "Student Name and age is -> " +
        this.name +
        " " +
        this.age +
        " From " +
        city,
    );
  };
}

var std1 = new Student("Clerk", "Smith", 23, "14th");
// console.log(std1);
// console.log(std1.class);
// std1.otherDetail("Paris") ;
// console.log("email" in std1);

// var date = new Date()
// date.getDay()

// days[date.getDay()]

// for(var student in std1){
//     console.log(std1[student]);
// }

var mobiles = {
  apple: {
    iphone18: {
      price: 9_00_000,
      storage: "3TB",
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
