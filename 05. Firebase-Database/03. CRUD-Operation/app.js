import { addDoc, collection, database, deleteDoc, doc, getDoc, getDocs, query, setDoc, updateDoc } from "./firebase.js";

let submitBtn = document.getElementById("submitBtn")
let updateBtn = document.getElementById("updateBtn")

// create post
submitBtn.addEventListener("click", async function () {

    // Add a new document in collection "cities"
    await setDoc(doc(database, "posts", "post-2"), {
        title: "Bahira 2",
        description: "Welcome to Bahria 2",
        campus: "DHA phase 3"
    });

    console.log("Data Added");
})

// async/await


// Add a new document with a generated id.
// const docRef = await addDoc(collection(database, "users"), {
//   email: "findme@gmail.com",
//   password: "qwerty",
//   firstname: "find",
//   lastname: "me",
// });
// console.log("Document written with ID: ", docRef.id);


// edit post:
updateBtn.addEventListener("click", async function () {

    const userPost = doc(database, "posts", "post-1");

    // Set the "capital" field of the city 'DC'
    await updateDoc(userPost, {
        title: "bahria",
        description: "Welcome to bahria",
        campus: "DHA"
    });

    console.log("post updated");

})


// GET SINGLE POST
// const docRef = doc(database, "posts", "post-3");
// const getSinglePost = await getDoc(docRef);

// if (getSinglePost.exists()) {
//   console.log("Document data:", getSinglePost.data());
// } else {
//   // docSnap.data() will be undefined in this case
//   console.log("No Post Available");
// }


// get ALL POSTS
// const getAllPosts = query(collection(database, "posts"));

// const querySnapshot = await getDocs(getAllPosts);

// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// })


let deleteBtn = document.getElementById("deleteBtn")

deleteBtn.addEventListener("click", async function(){
    await deleteDoc(doc(database, "posts", "post-2"));
    console.log("delete post");
    
})
