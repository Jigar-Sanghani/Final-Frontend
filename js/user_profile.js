
import userApi from "../api/user_api.js";
import navbar from "../components/navbar.js";


document.getElementById("navbar").innerHTML = navbar()

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})

const handlelogout = (id) => {
    console.log(id);
    Cookies.remove("token");
    userApi.delete(id)
    alert("Log-Out Successfully ||")
};


const mapper = (data) => {
    data.map(({ _id, username, email, role, number, isActive, isVerified }) => {

        let logotag = document.createElement("i")
        logotag.className = "fa-solid fa-user";
        let usernametag = document.createElement("h4");
        usernametag.innerHTML = `Username : ${username}`;
        let emailtag = document.createElement("h5");
        emailtag.innerHTML = `Email : ${email}`;
        let numbertag = document.createElement("h6");
        numbertag.innerHTML = `Number : ${number}`;
        let roletag = document.createElement("h6");
        roletag.innerHTML = `Role : ${role}`;
        let activetag = document.createElement("p");
        activetag.innerHTML = `isActive : ${isActive}`;
        let verifytag = document.createElement("p");
        verifytag.innerHTML = `isVerified : ${isVerified}`;
        let logouttag = document.createElement("i")
        logouttag.className = "fa-solid fa-trash";
        logouttag.addEventListener("click", () => handlelogout(_id));
        let div = document.createElement("div");
        div.append(logotag, usernametag, emailtag, numbertag, roletag, activetag, verifytag, logouttag);
        document.getElementById("user_profile").append(div);
    });
};

const getProducts = async () => {
    let data = await userApi.get();
    mapper(data);
};
getProducts();