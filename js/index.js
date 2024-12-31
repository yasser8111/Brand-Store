// category card background Color ============================================================================================================

// دالة لحساب سطوع اللون
function getBrightness(hex) {
  const rgb = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  const r = parseInt(rgb[1], 16);
  const g = parseInt(rgb[2], 16);
  const b = parseInt(rgb[3], 16);
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

// الانتظار حتى تحميل الصفحة والصور
window.onload = function () {
  const categoryImages = document.querySelectorAll(".category-image");
  const categoryNames = document.querySelectorAll(".category-name");

  categoryImages.forEach((image, index) => {
    const vibrant = new Vibrant(image);
    const swatches = vibrant.swatches();

    if (swatches) {
      // استخراج الألوان السائدة إذا كانت موجودة
      const vibrantColor = swatches.Vibrant ? swatches.Vibrant.getHex() : null; // اللون السائد
      const mutedColor = swatches.Muted ? swatches.Muted.getHex() : null; // اللون الثانوي

      // التحقق إذا كانت الألوان صحيحة
      const color = vibrantColor || "#000000"; // اللون السائد الافتراضي
      const secondaryColor = mutedColor || "#888888"; // اللون الثانوي الافتراضي

      // العثور على أقرب بطاقة للعنصر
      const categoryCard = image.closest(".category-card");

      // حساب سطوع اللون السائد
      const brightness = getBrightness(color);

      // تحديد لون النص بناءً على سطوع اللون
      const textColor = brightness > 256 ? "#000000" : "#ffffff"; // إذا كان اللون فاتحًا يجعل النص أسود، والعكس

      // استخدام gradient مع الشفافية
      categoryCard.style.backgroundImage = `linear-gradient(to bottom right, ${color} 0%, ${secondaryColor} 50%, rgba(255, 255, 255, 0.5) 100%)`;
      categoryCard.style.backgroundColor = `rgba(${parseInt(
        color.substring(1, 3),
        16
      )}, ${parseInt(color.substring(3, 5), 16)}, ${parseInt(
        color.substring(5, 7),
        16
      )}, 0.6)`; // إضافة الشفافية

      // تغيير لون النص بناءً على سطوع اللون
      categoryNames[index].style.color = textColor;
    }
  });
};

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

        // عند الضغط على المنتج، حفظ التفاصيل في localStorage والانتقال لصفحة التفاصيل
        productCard.addEventListener("click", () => {
          localStorage.setItem("selectedProduct", JSON.stringify(product));
          window.location.href = "./html/product-details.html"; // اسم صفحة تفاصيل المنتج
        });
      });
    })
    .catch((error) => console.error("خطأ في جلب المنتجات:", error));
});

// feature ===============================================================================

function toggleFlip(element) {
  const inner = element.querySelector(".feature-box-inner");
  inner.classList.toggle("clicked");
}
