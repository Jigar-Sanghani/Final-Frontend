import { getToken } from "../utils/coockie.js";
import { getBaseUrl } from "./config/api_config.js";

const baseUrl = getBaseUrl();
const userApi = {

    get: async () => {
        try {
            let user = await fetch(`${baseUrl}/user`);
            let res = await user.json();
            return res;
        } catch (error) {
            console.log(error);
        }
    },

    signup: async (user) => {
        try {
            let req = await fetch(`${baseUrl}/user/signup`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(user),
            });
            let res = await req.json();
            console.log(res);

            Cookies.set("token", res.token, { expires: 1 / 7 });

            Cookies.set("isVerified", res.isVerified);
            console.log(res.token);
            // window.location.href = "/index.html";
        } catch (error) {
            console.log("Failed to sign up", error);
        }
    },
    login: async (user) => {
        try {
            let req = await fetch(`${baseUrl}/user/login`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(user),
            });
            let res = await req.json();
            if (res.isActive) {
                Cookies.set("token", res.token, { expires: 1 / 7 });
                Cookies.set("isVerified", res.isVerified);
                window.location.href = "/index.html";
            } else {
                alert("Not Activated ||");
            }
        } catch (error) {
            console.log("Failed to sign up", error);
        }
    },
    delete: async (id) => {
        await fetch(`${baseUrl}/user/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
    },
    verifyadmin: async (id) => {
        try {
            let req = await fetch(`${baseUrl}/user/verifyadmin/${id}`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
            });
            let res = await req.json();
            console.log(res);
        } catch (error) {
            console.log(error.message);
        }
    },
};

export default userApi;
