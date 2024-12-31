import cartApi from "../api/cart_api.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})

const handleQty = (id, opr) => {
    if (opr == "+") {
        cartApi.addQty(id);
    } else {
        cartApi.removeQty(id);
    }
    window.location.reload();
};

let totalPrice = 0;
let totalqty = 0;
const mapper = (data) => {
    data.map(({ _id, qty, product }) => {
        const { title, price, img } = product;
        totalPrice += price * qty;
        totalqty += qty;

        let titleTag = document.createElement("h3");
        titleTag.innerHTML = `Title : ${title}`;

        let priceTag = document.createElement("h5");
        priceTag.innerHTML = ` Price : ${price}`;

        let qtytag = document.createElement("h5");
        qtytag.innerHTML = `Qty : ${qty}`

        let total = document.createElement("h5");
        total.innerHTML = `Total : ${price * qty}`

        let imgTag = document.createElement("img");
        imgTag.src = `https://final-backend-4-jpnu.onrender.com/${img}`;

        let btn1 = document.createElement("button");
        btn1.innerHTML = "-";
        btn1.addEventListener("click", () => handleQty(_id, "-"));

        let btn2 = document.createElement("button");
        btn2.innerHTML = qty;

        let btn3 = document.createElement("button");
        btn3.innerHTML = "+";
        btn3.addEventListener("click", () => handleQty(_id, "+"));

        let btnDiv = document.createElement("div");
        btnDiv.append(btn1, btn2, btn3);

        let div = document.createElement("div");
        div.append(imgTag, titleTag, priceTag, qtytag, total, btnDiv);
        document.getElementById("productList").append(div);
    });

    let amount = document.createElement("h2");
    amount.innerHTML = `Total Price : ${totalPrice}`;

    let qty = document.createElement("h2");
    qty.innerHTML = `Total Qty : ${totalqty}`;

    let btn = document.createElement("button");
    btn.innerHTML = "Pay";
    btn.addEventListener("click", () => payment(totalPrice));

    let div = document.createElement("div");
    div.append(amount,qty, btn);
    document.getElementById("productList").append(div);
    console.log("total", totalPrice);
};

const getCartData = async () => {
    let data = await cartApi.getByUserId();
    mapper(data);
    console.log("data", data);
};

getCartData();