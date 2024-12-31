// filter ==================================================

// تحديث السعر عند تغيير الشريط
document.getElementById("price").addEventListener("input", function () {
  document.getElementById("priceValue").textContent = this.value;
});

// إظهار وإخفاء الفلتر عند الضغط على الزر
document.getElementById("filterToggle").addEventListener("click", function () {
  const filter = document.getElementById("filter");
  filter.classList.toggle("open"); // إضافة أو إزالة الفئة "open" لفتح أو إغلاق الفلتر
});

// add products ============================================================================================================

document.addEventListener("DOMContentLoaded", () => {
  // جلب البيانات من الملف JSON
  fetch("../data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((products) => {
      const productContainer = document.querySelector(".product-container");

      if (!productContainer) {
        console.error("لم يتم العثور على عنصر .product-container");
        return;
      }

      // عرض جميع المنتجات بدون تصفية
      products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        // بناء المنتج كعنصر HTML
        productCard.innerHTML = `
          <img src="${product.images[0]}" alt="${product.name}" />
          <div class="product-info">
            <div class="product-name">${product.name}</div>
            <div class="product-description">
              ${product.description}
            </div>
            <div class="price-container">
              <span class="old-price">${product.old_price}</span>
              <span class="price">${product.price}</span>
            </div>
            <div class="product-actions">
              <button class="add-to-cart">
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
              <button class="buy-now">Buy Now</button>
            </div>
          </div>
        `;

        // إضافة المنتج إلى DOM
        productContainer.appendChild(productCard);

        // عند الضغط على المنتج، حفظ التفاصيل في localStorage
        productCard.addEventListener("click", () => {
          localStorage.setItem("selectedProduct", JSON.stringify(product));
        });
      });
    })
    .catch((error) => console.error("خطأ في جلب المنتجات:", error));
});
