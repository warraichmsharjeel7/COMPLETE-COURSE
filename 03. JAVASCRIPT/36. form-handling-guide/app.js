// console.log("helo");


function submit() {
  // var dropdown = document.getElementById("dropdown")
  // console.log(dropdown.value);
  // var gender = document.getElementsByName("gender")
  // console.log(gender);

  // for (var i = 0; i < gender.length; i++) {
  //   if (gender[i].checked) {
  //     console.log(gender[i].value);
  //   }
  // }

  var fileInput = document.getElementById("file")
  var profileImage = document.getElementById("image")
  // console.log(fileInput.files[0]);

  var file = fileInput.files[0]
  var res = URL.createObjectURL(file)
  profileImage.src = res

}
