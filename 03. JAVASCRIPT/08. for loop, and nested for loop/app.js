// Chapter: 18 : For Loop 


// console.log("hello 1");
// console.log("hello 2");
// console.log("hell0 3");
// console.log("hell0 4");
// console.log("hell0 5");

// iniliazation,condition,increment
// for(var i = 0; i <= 10; i++){
//     console.log(i);
// }

// for(var i = 0; i <= 10; i++){
//     if(i == 5){
//         break;
//     }
//     console.log(i);
// }

// Chapter: 19 : For Loop, Flags, Booleans, array length, and loopus interruptus 

// var userCity = prompt("Enter your city name?")
// var cities = ['khi','lhr','isl','mul']
// var found = "no"

// for(var i = 0; i < cities.length; i++){
//     if(userCity == cities[i]){
//         found = "yes"
//         break;
//     }
// }

// if(found == "yes") {
//     console.log("Welcome to your city");
// } else {
//     console.log("this city is not available");
// }


// Chapter: 20 : Nested For Loop 

for(var i = 1; i < 5; i++){
    for(var j = 2; j < 5; j++){
        console.log(i, j);
    }
}


var mixedArray = [["abc","xyz",[true,false]],[1,2]]
console.log(mixedArray[0][2][1]);