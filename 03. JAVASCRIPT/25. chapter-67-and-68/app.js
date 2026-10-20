// ------ JS CHAPTER 67 and 68 ------ //

//  var parent = document.getElementById("parent")
//  var para = document.createElement("p")
//  var image = document.createElement("img")
//   para.setAttribute("id", "para")
//   image.setAttribute("class", "logo")
//   console.log(para);
//   console.log(image);

var parent = document.getElementById("parent");
var para = document.createElement("p");
var para1 = document.createElement("p");
var text = document.createTextNode("Hello, world!");
var text1 = document.createTextNode("Buy One, Get One ");
para.setAttribute("id", "para");
para.appendChild(text);
para1.appendChild(text1)
parent.appendChild(para);
parent.appendChild(para1);
 var removeValue = parent.childNodes[2]
parent.removeChild(removeValue)
// console.log(text);

