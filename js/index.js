

import navbar from "../components/navbar.js";


document.getElementById("navbar").innerHTML=navbar()
// console.log(navbar());

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})



let { isVerified } = Cookies.get();
console.log(isVerified);

if (isVerified.toString() == "false") {
  document.getElementById(
    "alert"
  ).innerHTML = `<div class="alert alert-warning" role="alert">
      verify your email address 
      </div>`;
}