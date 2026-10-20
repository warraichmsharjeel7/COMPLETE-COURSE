




import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "./firebase.js";

// Signup variables
// let signupEmail = document.getElementById("signupEmail")
// let signupPassword = document.getElementById("signupPassword")
// let signupBtn = document.getElementById("signupBtn")

// Login Varibales
let loginEmail = document.getElementById("loginEmail")
let loginPassword = document.getElementById("loginPassword")
let loginBtn = document.getElementById("loginBtn")


// Signup Function
// signupBtn.addEventListener("click", function () {
//     console.log(signupEmail.value);
//     console.log(signupPassword.value);

//     createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             console.log("Submitted");
//             console.log("user-->", user);

//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             // console.log(errorCode);
//             // console.log(errorMessage);

//             // console.log(error);

//             if (errorCode == "auth/email-already-in-use") {
//                 alert("Ye Email Phely sy istimaal shuda hai")
//             }

//         });
// })

// Login Function

// loginBtn.addEventListener("click", () => {
//     console.log(loginEmail.value);
//     console.log(loginPassword.value);

//     signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
//         .then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;
//             Swal.fire({
//                 title: "Login Successfully",
//                 text: "Welcome to our Application",
//                 icon: "success",
//             });

//             setTimeout(()=>{
//                 window.location.href = "home.html"
//             },3000)

//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorCode);

//             if(errorCode == "auth/invalid-credential"){   
//                 Swal.fire({
//                     icon: "error",
//                     title: "Oops...",
//                     text: "Email or Password is incorrect",
//                     footer: "<a href=\"#\">Why do I have this issue?</a>"
//                 });
//             }

//         });
// })


let logoutBtn = document.getElementById("logoutBtn")

logoutBtn.addEventListener("click", () => {
    console.log("running");
    signOut(auth).then(() => {
        Swal.fire({
            title: "Sign-out successful.",
            text: "Get Out Our Application",
            icon: "success",
        });

        setTimeout(() => {
            window.location.href = "index.html"
        }, 3000)

    }).catch((error) => {
        console.log(error);

    });
})
