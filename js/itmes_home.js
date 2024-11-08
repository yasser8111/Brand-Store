if (typeof all_product_json === 'undefined') {
    var all_product_json = []; // استخدام var لتجنب التكرار
}

// تحميل بيانات المنتجات من ملف JSON
fetch('/js/itmes.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        all_product_json = data;
        displayProducts(data, 'swiper_itmes_sale'); // عرض المنتجات عند تحميل الصفحة
    })
    .catch(error => console.error('خطأ في تحميل المنتج:', error));

// وظيفة لعرض المنتجات
function displayProducts(products, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // تنظيف المحتوى السابق

    products.forEach(product => {
        const percent_dise = product.old_price ? Math.round(((product.old_price - product.price) / product.old_price) * 100) : null;

        const productDiv = document.createElement('div');
        if(product.old_price){
        productDiv.className = "product swiper-slide";
        productDiv.onclick = () => showProductDetails(product.id);
            productDiv.innerHTML = `
                <div class="icons">
                    <span><i onclick="addtocart(${product.id}, this)" class="fa-solid fa-cart-arrow-down"></i></span>
                    <span><i class="fa-solid fa-heart"></i></span>
                    <span><i class="fa-solid fa-share"></i></span>
                </div>
                <div class="img_product">
                    <img src="${product.img}" alt="">
                    <img class="img_hover" src="${product.img_hover}" alt="">
                    ${percent_dise !== null ? `<span class="sale_present">%${percent_dise}</span>` : ''}
                </div>
                <h3 class="name_product"><a href="./details.html">${product.name}</a></h3>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <div class="price">
                    <p><span>${product.currency} ${product.price}</span></p>
                    ${product.old_price ? `<p class="old_price">${product.currency} ${product.old_price}</p>` : ''}
                </div>
            `;
        }
        container.appendChild(productDiv);
    });

    // تهيئة Swiper بعد إضافة المنتجات
    initializeSwiper(containerId);
}

// وظيفة البحث عن المنتجات
function searchProducts() {
    const query = document.getElementById('searchBox').value.toLowerCase();
    const searchResultsSlide = document.querySelector('.slide.Search_results');

    if (query.length > 0) {
        // تصفية المنتجات بناءً على ما إذا كان الاسم يحتوي على الاستعلام
        const filteredProducts = all_product_json.filter(product => {
            return product.name.toLowerCase().includes(query);
        });

        displayProducts(filteredProducts, 'Search_results'); // عرض المنتجات المتوافقة مع البحث

        if (filteredProducts.length > 0) {
            searchResultsSlide.style.display = 'block'; // إظهار سلايد نتائج البحث
            initializeSwiper('Search_results'); // تهيئة Swiper لنتائج البحث
        } else {
            searchResultsSlide.style.display = 'none'; // إخفاء سلايد نتائج البحث إذا لم توجد نتائج
        }
    } else {
        searchResultsSlide.style.display = 'none'; // إخفاء سلايد نتائج البحث إذا لم يكن هناك استعلام
    }
}

// وظيفة لتشغيل Swiper
function initializeSwiper(containerId) {
    // أولاً تحقق من وجود العنصر كـ id
    let swiperContainer = document.getElementById(containerId);

    // إذا لم يتم العثور عليه كـ id، حاول العثور عليه كـ class
    if (!swiperContainer) {
        swiperContainer = document.querySelector(`.${containerId}`);
    }

    // إذا لم يتم العثور عليه كـ id أو class، اطبع رسالة خطأ
    if (!swiperContainer) {
        console.error(`Element with id or class '${containerId}' not found.`);
        return;
    }

    // تهيئة Swiper إذا تم العثور على العنصر
    new Swiper(swiperContainer, {
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true,
        },
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
            delay: 10000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
    });
}

// دالة لحساب مسافة Levenshtein (غير مستخدمة حالياً)
function levenshteinDistance(a, b) {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
            }
        }
    }
    return matrix[b.length][a.length];
}

// دالة لإظهار تفاصيل المنتج
function showProductDetails(productId) {
    const product = all_product_json.find(p => p.id === productId);
    if (!product) {
        console.error('Product not found');
        return;
    }
    sessionStorage.setItem('productDetails', JSON.stringify(product));
    window.location.href = 'details.html';
}
