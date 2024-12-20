
import { getToken } from "../../utils/coockie.js";
import { getBaseUrl } from "../config/api_config.js";

const baseUrl = getBaseUrl();
const superAdminApi = {
    getAdmins: async () => {
        try {
            let req = await fetch(`${baseUrl}/user/all-admin`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
            });
            let res = await req.json();
            return res;
        } catch (error) {
            console.log(error);
        }
    },
};

export default superAdminApi;