
import { getToken } from "../utils/coockie.js";
import { getBaseUrl } from "./config/api_config.js";

const baseUrl = getBaseUrl();
const productApi = {
  get: async () => {
    try {
      let product = await fetch(`${baseUrl}/products`);
      let res = await product.json();
      return res;
    } catch (error) {
      console.log(error);
    }
  },
   post : async (data) => {
    try {
        let formData = new FormData();
        // Append data to the FormData object
        formData.append("title", data.title);
        formData.append("price", data.price);
        formData.append("description", data.description);
        formData.append("img", data.img); // Ensure this is a File object

        const product = await fetch(`${baseUrl}/products/create`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${getToken()}`,
                // No need to set "Content-Type", as the browser will set it automatically for multipart/form-data
            },
            body: formData,
        });

        // Check if the response status is OK
        if (!product.ok) {
            throw new Error(`Error: ${product.statusText}`);
        }

        let res = await product.json();
        return res;
    } catch (error) {
        console.error("Request failed:", error);
        throw error; // Re-throw error to handle it outside the function
    }
},

  
  getById: async (id) => {
    try {
      let product = await fetch(`${baseUrl}/products/${id}`);
      let res = await product.json();
      return res;
    } catch (error) {
      console.log(error);
    }
  },

  patch: async (id, data) => {
    try {
      let product = await fetch(`${baseUrl}/products/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(data),
      });
      let res = await product.json();
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (id) => {
    try {
      let product = await fetch(`${baseUrl}/products/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      let res = await product.json();
      return res;
    } catch (error) {
      console.log(error);
    }
  },
};

export default productApi;
