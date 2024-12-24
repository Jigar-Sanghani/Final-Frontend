
import userApi from "../api/user_api.js";
import navbar from "../components/navbar.js";
import getUserData from "../utils/coockie.js";


document.getElementById("navbar").innerHTML = navbar()

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})

const handlelogout = () => {
    Cookies.remove("token");
    alert("Log-Out Successfully ||")
    window.location.href = "/";
};


let data = getUserData()

let logotag = document.createElement("i")
logotag.className = "fa-solid fa-user";
let usernametag = document.createElement("h4");
usernametag.innerHTML = `Username : ${data.username}`;
let emailtag = document.createElement("h5");
emailtag.innerHTML = `Email : ${data.email}`;
let numbertag = document.createElement("h6");
numbertag.innerHTML = `Number : ${data.number}`;
let roletag = document.createElement("h6");
roletag.innerHTML = `Role : ${data.role}`;
let activetag = document.createElement("p");
activetag.innerHTML = `isActive : ${data.isActive}`;
let verifytag = document.createElement("p");
verifytag.innerHTML = `isVerified : ${data.isVerified}`;
let logouttag = document.createElement("i")
logouttag.className = "fa-solid fa-trash";
logouttag.addEventListener("click", () => handlelogout());
let div = document.createElement("div");
div.append(logotag, usernametag, emailtag, numbertag, roletag, activetag, verifytag, logouttag);
document.getElementById("user_profile").append(div);
