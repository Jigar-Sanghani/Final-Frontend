// import userApi from "../api/user_api.js";
import navbar from "../components/navbar.js";
import getValue from "../components/getvalue.js";
import userApi from "../api/user_api.js";

document.getElementById("navbar").innerHTML = navbar()  

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})

const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
        username: getValue("#username"),
        email: getValue("#email"),
        number: getValue("#number"),
        password: getValue("#password"),
    };
    if (!user.username || !user.email || !user.password || !user.number) {
        alert("Please Enter All Required Fields !!");
        return;
    }
    userApi.signup(user);
};

document.getElementById("userDetails").addEventListener("submit", handleSubmit);