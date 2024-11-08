// opne & close cart

var cart = document.querySelector('.cart')

function open_cart() {
    cart.classList.add("active")
}

function close_cart() {
    cart.classList.remove("active")
}

// opne & close menu 

var menu = document.getElementById('menu');

function open_menu() {
    menu.classList.add("active");
}

function close_menu() {
    menu.classList.remove("active");
}

/* add items in cart */

var all_product_json = [
];

var itmes_in_cart = document.querySelector(".itmes_in_cart");
let product_cart = [];

function addtocart(id, btn) {
    if (all_product_json && all_product_json[id]) {
        product_cart.push(all_product_json[id]);
        btn.classList.add("active");
        getcartitmes();
    } else {
        console.error("Product not found or all_product_json is undefined");
    }
}

var price_cart_head = document.querySelector('.price_cart_head');
var price_cart_total = document.querySelector('.price_cart_total');
var count_item = document.querySelector('.count_item');
var cont_itme_cart = document.querySelector('.cont_itme_cart');

function getcartitmes() {
    let total_price = 0;
    let items_c = "";
    for (let i = 0; i < product_cart.length; i++) {
        items_c += `
            <div class="itme_cart">
                <img src="${product_cart[i].img}" alt="">
                <div class="content">
                    <h4>${product_cart[i].name}</h4>
                    <p class="price_cart">${product_cart[i].currency}${product_cart[i].price}</p>
                </div>
                <button onclick="remove_from_cart(${i})" class="delete_itme"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
        total_price += product_cart[i].price;
    }
    itmes_in_cart.innerHTML = items_c;
    count_item.innerHTML = product_cart.length;
    cont_itme_cart.innerHTML = `( ${product_cart.length} المنتجات في العربه )`;
    price_cart_total.innerHTML = "$" + total_price;
    price_cart_head.innerHTML = "$" + total_price;
}

function remove_from_cart(index) {
    product_cart.splice(index, 1);
    getcartitmes();
    let addtocartButtouns = document.querySelectorAll(".fa-cart-arrow-down");
    for (let i = 0; i < addtocartButtouns.length; i++) {
        addtocartButtouns[i].classList.remove("active");
        product_cart.forEach(product => {
            if (product.id == i) {
                addtocartButtouns[i].classList.add("active");
            }
        });
    }
}