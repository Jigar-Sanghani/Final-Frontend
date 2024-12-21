

// let decodedToken;

import { getToken } from "../utils/coockie.js";
console.log(getToken());

let decodedToken = undefined;
// console.log(getToken());

if (getToken()) {
    try {
        decodedToken = jwt_decode(getToken());
    } catch (e) {
        console.log("Token decoding failed", e);
    }
}


const logOut = () => {
    console.log("Decoded token");

    Cookies.remove("token");
    window.location.href = "/html/login.html";
};


const navbar = () => {

    let tag = ``;
    if (decodedToken) {
        tag = `<a class="nav-link" aria-current="page" id=logout style="cursor: pointer"   >Log-Out</a>`;
    } else {
        tag = `<a class="nav-link" aria-current="page" href="/html/login.html" style="cursor: pointer">
          Log-In
        </a>`;
    }

    return `

<nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/index.html"><img
                    src="data:image/png;base64,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"
                    alt="" height="40px" width="40px"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/html/cart.html">Cart</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/html/products.html">Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/html/profile.html">Profile</a>
                    </li>
                    <li class="nav-item">
                    ${tag}
                    </li>
            <li class="nav-item">
              <a class="nav-link" style="cursor: pointer" aria-current="page" ${decodedToken ? `href =/html/user_profile.html ` : ` href=/html/signup.html`
        }>${decodedToken ? decodedToken.username : "Sign-Up"}</a>
            </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>

    `

}

export default navbar

document.addEventListener("DOMContentLoaded", () => {
    let logoutBtn = document.getElementById("logout");
    console.log(logoutBtn);

    if (logoutBtn) {
        logoutBtn.addEventListener("click", logOut);
    }
});