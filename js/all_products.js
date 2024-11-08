// فتح وإغلاق نافذة الفلترة
var filter = document.querySelector(".filter");

function open_close_filter() {
    filter.classList.toggle("active");
}

let all_product_json = [];

// تحميل بيانات المنتجات من ملف JSON
fetch('js/itmes.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('خطأ في تحميل الملف');
        }
        return response.json();
    })
    .then(data => {
        all_product_json = data; // تخزين البيانات المحملة في المتغير
        const products_dev = document.getElementById('products_dev');
        products_dev.innerHTML = ''; // تنظيف المحتوى السابق

        data.forEach(product => {
            const old_price_p = product.old_price ? `<p class="old_price">${product.currency} ${product.old_price}</p>` : "";
            const percent_dise_p = product.old_price ? `<span class="sale_present">%${Math.round(((product.old_price - product.price) / product.old_price) * 100)}</span>` : "";
            
            products_dev.innerHTML += `
                <div class="product swiper-slide" onclick="showProductDetails(${product.id})">
                    <div class="icons">
                        <span><i onclick="addtocart(${product.id}, this)" class="fa-solid fa-cart-arrow-down"></i></span>
                        <span><i class="fa-solid fa-heart"></i></span>
                        <span><i class="fa-solid fa-share"></i></span>
                    </div>
                    <div class="img_product">
                        <img src="${product.img}" alt="">
                        <img class="img_hover" src="${product.img_hover}" alt="">
                        ${percent_dise_p}
                    </div>
                    <h3 class="name_product"><a href="javascript:void(0)">${product.name}</a></h3>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="price">
                        <p><span>${product.currency} ${product.price}</span></p>
                        ${old_price_p}
                    </div>
                </div>
            `;
        });
    })
    .catch(error => console.error('خطأ في تحميل المنتجات:', error));

// دالة لعرض تفاصيل المنتج عند النقر عليه
function showProductDetails(id) {
    const product = all_product_json.find(p => p.id === id);
    if (!product) {
        console.error('لم يتم العثور على المنتج');
        return;
    }
    sessionStorage.setItem('productDetails', JSON.stringify(product));
    window.location.href = 'details.html';
}
