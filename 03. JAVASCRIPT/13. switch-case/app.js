// Javascript Switch Case Statement:

// var day = "tue";
// var month = "dec"

// if (day == "fri" || month == "dec") {
//   console.log("It's friday");
// } else if (day == "sun") {
//   console.log("Today is sunday");
// } else if (day == "sat") {
//   console.log("Today is Saturday");
// } else {
//   console.log("another day");
// }

// switch (day) {
//   case "sun":
//     console.log("Today is Sunday");
//     break;
//   case "sat":
//     console.log("Today is Saturday");
//     break;
//   case "fri":
//     console.log("Today is Friday");
//     break;
//   default:
//     console.log("another day");
// }

// for(var i = 0; i < 5; i++){
//     console.log(i);
// }

// var i = 10;
// while (i < 5){
//     console.log(i);
//     i++
// }

// var i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i >= 3);

// var a = "hello"

/* var a = "hello"
var b = "hello" */

function timer() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var result = hours + " : " + minutes + " : " + seconds + " AM ";
  // console.log(result);
  document.getElementById("clock").innerHTML = result;
}

// timer()

setInterval(timer, 1000); // funtion, 1000
