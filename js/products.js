
// filter ==================================================

const filterButton = document.querySelector(".filter-button");
const filterMenu = document.querySelector(".filter-menu");
const overlay = document.querySelector(".overlay");
const colorOptions = document.querySelectorAll(".color-option");
const filterItems = document.querySelectorAll(".filter-item");

const toggleMenu = (open) => {
  if (open) {
    filterMenu.classList.add("active");
    overlay.classList.add("active");
  } else {
    filterMenu.classList.add("hide");
    overlay.classList.add("hide");
    setTimeout(() => {
      overlay.classList.remove("active", "hide");
      filterMenu.classList.remove("active", "hide");
    }, 300); // نفس مدة الـ transition في CSS
  }
};


// فتح وإغلاق القائمة
filterButton.addEventListener("click", () => {
  const isOpen = filterMenu.classList.contains("active");
  toggleMenu(!isOpen);
});

overlay.addEventListener("click", () => {
  toggleMenu(false);
});

// اختيار لون مع مؤشر
colorOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    const alreadySelected = option.classList.contains("selected");
    colorOptions.forEach((opt) => opt.classList.remove("selected"));
    filterButton.style.backgroundColor = alreadySelected
      ? "#909090" // اللون الافتراضي
      : option.getAttribute("data-color");
    if (!alreadySelected) option.classList.add("selected");
  });
});

// تحديث زر الفلتر ليعرض أيقونة النوع المختار
filterItems.forEach((item) => {
  item.addEventListener("click", () => {
    const alreadySelected = item.classList.contains("selected");
    filterItems.forEach((it) => it.classList.remove("selected"));
    filterButton.innerHTML = alreadySelected
      ? `<i class="fa-solid fa-filter"></i> فلتر`
      : `<i class="${item.getAttribute("data-icon")}"></i> ${item.querySelector("span").textContent}`;
    if (!alreadySelected) item.classList.add("selected");
  });
});

// page-numbers ==================================================



// add products ============================================================================================================

document.addEventListener("DOMContentLoaded", () => {
  // تحديد عدد المنتجات التي سيتم عرضها أولاً
  const productsPerPage = 6;
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