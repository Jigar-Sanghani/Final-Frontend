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
        email: getValue("#email"),
        password: getValue("#password"),
    };
    if (!user.email || !user.password) {
        alert("Please Enter All Required Fields !!");
        return;
    }
    userApi.logout(user)
};

document.getElementById("userDetails").addEventListener("submit", handleSubmit);