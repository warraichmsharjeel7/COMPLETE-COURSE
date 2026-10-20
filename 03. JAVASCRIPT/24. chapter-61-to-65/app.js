// ------ JS CHAPTER 61 TO 65 ------ //

 var div2 = document.getElementById("div2")
//  console.log(div2.childNodes[1]);
//  console.log(div2.childNodes[1]);
 var firstChildStyles = div2.firstChild
 var lastChildStyles = div2.lastChild
 var centerChildStyles = div2.childNodes[1]
 firstChildStyles.style.backgroundColor = "red"
 lastChildStyles.style.color = "green"
 centerChildStyles.style.border = "2px solid yellow"
 div2.parentNode.style.backgroundColor = "pink"
 div2.parentNode.style.padding = "20px"

 
//  var liElements = document.getElementsByTagName("li");
//  console.log(liElements.length);
 
 var target = document.getElementById("new")
//  console.log(target.hasAttribute("class"));
//  console.log(target.getAttribute("class"));
 console.log(target.setAttribute("class" ,"abc special hello world"));
 

//  hasAttribute -> check true/false
//  getAttribute -> 
//  setAttribute