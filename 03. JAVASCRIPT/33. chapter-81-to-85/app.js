// ------ JS CHAPTER 81 to 85 ------ //


function checkForLastName() {
  // if (document.getElementById("lastNameField").value.length === 0) {
  //   alert("Please enter your last name");
  //   document.getElementById("lastNameField").focus();
  //   return false;
  // }

  var cnic = document.getElementById("cnic")
  if(cnic.value === "^[0-9]{5}-[0-9]{7}-[0-9]{1}$"){
      console.log("its working");
      
  } else {
    console.log("please enter correct cnic number");
    
  }
}