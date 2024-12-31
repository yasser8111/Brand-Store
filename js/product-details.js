
// product details ============================================================================================================

document.addEventListener("DOMContentLoaded", () => {
  const productDetails = JSON.parse(localStorage.getItem("selectedProduct"));

  if (productDetails) {
    // الصور الكبيرة والصغيرة
    const mainSwiper = document.querySelector(".main-swiper .swiper-wrapper");
    const thumbnailSwiper = document.querySelector(".thumbnail-swiper .swiper-wrapper");

    productDetails.images.forEach((image) => {
      mainSwiper.innerHTML += `
        <div class="swiper-slide">
          <img src="${image}" alt="${productDetails.name}">
        </div>
      `;
      thumbnailSwiper.innerHTML += `
        <div class="swiper-slide">
          <img src="${image}" alt="Thumbnail ${productDetails.name}">
        </div>
      `;
    });

    // تفاصيل المنتج
    document.querySelector(".product-title").textContent = productDetails.name;
    document.querySelector(".product-description").textContent = productDetails.description;

    // المواصفات
    const specsContainer = document.querySelector(".product-specs");
    specsContainer.innerHTML = productDetails.specifications
      .map((spec) => `<li><strong>${spec.name}:</strong> ${spec.value}</li>`)
      .join("");

    // الألوان
    const colorsContainer = document.querySelector(".colors");
    productDetails.colors.forEach((color) => {
      colorsContainer.innerHTML += `<div class="color-option" style="background-color: ${color}"></div>`;
    });

    // السعر
    document.querySelector(".price p").textContent = `${productDetails.price}$`;
    document.querySelector(".old-price").textContent = `${productDetails.old_price}$`;
  }
});

// add products ============================================================================================================

document.addEventListener("DOMContentLoaded", () => {
  // تحديد عدد المنتجات التي سيتم عرضها أولاً
  const productsPerPage = 3;
  let currentIndex = 0;

  fetch("../data.json")
    .then((response) => response.json())
    .then((products) => {
      const productsGrid = document.querySelector(".products-grid");

      // دالة لعرض مجموعة من المنتجات
      const displayProducts = (startIndex, endIndex) => {
        for (let i = startIndex; i < endIndex; i++) {
          if (i >= products.length) break; // إذا وصلنا إلى نهاية المنتجات

          const product = products[i];
          const productCard = document.createElement("div");
          productCard.classList.add("product-card");
          productCard.setAttribute("data-index", i);

          productCard.innerHTML = `
            <a href="../html/product-details.html" class="product-link">
              <img src="${product.images[0]}" alt="${product.name}" />
            </a>
            <h3 class="product-name">${product.name}</h3>
            <p class="description">${product.description}</p>
            <div class="price">
              <p>${product.price}$</p>
              <p class="old-price">${product.old_price}$</p>
            </div>
          `;

          // إضافة المنتج إلى الـ DOM
          productsGrid.appendChild(productCard);

          // عند الضغط على المنتج، حفظ التفاصيل في localStorage
          productCard.addEventListener("click", () => {
            localStorage.setItem("selectedProduct", JSON.stringify(product));
          });
        }
      };

      // عرض أول مجموعة من المنتجات
      displayProducts(currentIndex, currentIndex + productsPerPage);

      // التعامل مع الضغط على زر "المزيد"
      const loadMoreBtn = document.getElementById("loadMoreBtn");
      loadMoreBtn.addEventListener("click", () => {
        currentIndex += productsPerPage; // زيادة الفهرس لعرض مجموعة جديدة من المنتجات
        displayProducts(currentIndex, currentIndex + productsPerPage); // عرض مجموعة جديدة

        // إخفاء الزر إذا لم يتبق المزيد من المنتجات
        if (currentIndex >= products.length) {
          loadMoreBtn.style.display = "none";
        }
      });
    })
    .catch((error) => console.error("خطأ في جلب المنتجات:", error));
});
