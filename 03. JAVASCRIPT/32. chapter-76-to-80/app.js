// ------ JS CHAPTER 76 to 80 ------ //


// window.location.href
// 'https://www.google.com/'
// window.location.hostname
// 'www.google.com'
// window.location.pathname
// '/'


function goToFacebook() {
  // console.log(window.location.href);
  // window.location.href = "https://www.facebook.com"
  // window.location.href = "https://en.wikipedia.org/wiki/Pakistan#Culture"
  window.location.assign("https://www.facebook.com")
  // window.location.replace("https://www.facebook.com")
}

function reload() {
  window.location.reload()
}
function back() {
  history.back()
}
function next() {
  history.forward()
}

function newWindow() {
  // var screen = window.open()
  // var content = `<h1>Log in or sign up </h1>`
  // screen.document.write(content)
  window.open("home.html", "abc", "width=420, height=500, left=500,top=500")
}

