



// fetch("https://dummyjson.com/products")

// let obj;

// setTimeout(() => {
//     obj = {
//         name: "yamal",
//         age: 23
//     }
// }, 3000);

// setTimeout(() => {
//     console.log(obj);
// }, 5000);


// function abc(callback) {
//     setTimeout(() => {
//         let obj = {
//             name: "yamal",
//             age: 23
//         }
//         callback(obj)
//     }, 4000);
// }


// // abc()

// function foo(a){
//     console.log(a);
// }

// abc(foo)

let products = document.getElementById("products")

fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => {
        data.products.forEach((val) => {
            console.log(val);
            products.innerHTML += `
            <div class="product">
                <img src=${val.images[0]} alt="image">
                <h3>${val.title}</h3>
                <h1>$${val.price}</h1>
                <p>${val.description}</p>
            </div>
            `
        })
    })      // success
    .catch(error => console.log(error))   // fail
