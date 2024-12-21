import cartApi from "../api/cart_api.js";
import productApi from "../api/product_api.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})

const handleAddToCart = (id) => {
    console.log(id);

    let data = {
        product: id,
    };
    cartApi.addToCart(data);
};



const mapper = (data) => {
    data.map(({ _id, title, price, img, description }) => {
        console.log(img);

        let div = document.createElement("div");
        let titleTag = document.createElement("h3");
        titleTag.innerHTML = `Title : ${title}`;
        let priceTag = document.createElement("h5");
        priceTag.innerHTML = `Price : ${price}`;
        let descriptionTag = document.createElement("p");
        descriptionTag.innerHTML = `Description : ${description}`;
        let imgTag = document.createElement("img");
        imgTag.src = `http://localhost:8090/${img}`;
        let btn = document.createElement("button");
        btn.innerHTML = "Buy";
        btn.addEventListener("click", () => handleAddToCart(_id));
        div.append(imgTag, titleTag, priceTag,descriptionTag, btn );
        document.getElementById("productList").append(div);
    });
};

const getProducts = async () => {
    let data = await productApi.get();
    mapper(data);
};
getProducts();