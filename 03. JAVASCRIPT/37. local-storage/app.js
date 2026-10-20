// localStorage.setItem("username", "javed")
// localStorage.setItem("email", "javed@gmail.com")
// localStorage.setItem("password", "123456")
// localStorage.setItem("class", "grade 6")

// var res = localStorage.getItem("password")
// console.log(res);


// localStorage.removeItem("class")

// localStorage.clear()

var obj = {
  name: "Jhon"
}

// var heading = document.getElementById("heading")
// heading.innerHTML = obj

// JSON.stringify

// localStorage.setItem("username", obj.name)

localStorage.setItem("city", JSON.stringify(obj))

JSON.parse(localStorage.getItem("city"))