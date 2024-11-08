document.addEventListener('DOMContentLoaded', () => {
    const product = JSON.parse(sessionStorage.getItem('productDetails'));
    if (!product) {
        console.error('تفاصيل المنتج غير متوفرة');
        return;
    }

    document.getElementById('bigimg').src = product.img;
    document.getElementById('product_name').innerText = product.name;
    document.getElementById('product_price').innerText = product.currency + product.price;
    document.getElementById('product_old_price').innerText = product.old_price ? product.currency + product.old_price : '';
    document.getElementById('product_old_price').parentElement.style.display = product.old_price ? 'block' : 'none';
    document.getElementById('product_availability').innerText = product.availability;
    document.getElementById('product_description').innerText = product.description;

    const smImgsContainer = document.getElementById('sm_imgs');
    smImgsContainer.innerHTML = `
        <img src="${product.img}" alt="Small Image" onclick="chang_item_imge('${product.img}')">
        <img src="${product.img_hover}" alt="Hover Image" onclick="chang_item_imge('${product.img_hover}')">
    `;

    const starsContainer = document.getElementById('product_stars');
    starsContainer.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        starsContainer.innerHTML += i < product.stars ? '<i class="fa-solid fa-star"></i>' : '<i class="fa-regular fa-star"></i>';
    }

    document.getElementById('add_to_cart_btn').addEventListener('click', () => addtocart(product.id));
});

function chang_item_imge(src) {
    document.getElementById('bigimg').src = src;
}
