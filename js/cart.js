document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.querySelector(".cart-items");
  const subtotalPriceElement = document.getElementById("subtotal-price");
  const discountAmountElement = document.getElementById("discount-amount");
  const totalPriceElement = document.getElementById("total-price");
  const couponCodeInput = document.getElementById("coupon-code");
  const applyCouponButton = document.getElementById("apply-coupon");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let subtotal = 0;
  let discount = 0;
  const validCoupon = { code: "811", discount: 0.1 }; // كوبون بقيمة 10% خصم

  // تحديث الملخص (الإجمالي)
  const updateCartSummary = () => {
    subtotal = cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    const total = subtotal - discount;

    subtotalPriceElement.textContent = subtotal.toFixed(2); // عرض subtotal
    discountAmountElement.textContent = discount.toFixed(2); // عرض الخصم
    totalPriceElement.textContent = total.toFixed(2); // عرض الإجمالي النهائي
  };

  // عرض المنتجات في السلة
  const renderCart = () => {
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `<p>السلة فارغة</p>`;
    } else {
      cart.forEach((product, index) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
        <button class="remove-button" data-index="${index}">إزالة</button>
        <div class="quantity-container">
          <button class="increase-quantity" data-index="${index}">+</button>
          <input type="number" class="quantity-input" value="${product.quantity}" min="1" readonly>
          <button class="decrease-quantity" data-index="${index}">-</button>
        </div>
          <div class="item-details">
          <div class="item-name">${product.name}</div>
          <div class="item-description">${product.description}</div>
          <div class="item-price">${product.price} ريال</div>
          </div>
          <img src="${product.images[0]}" alt="${product.name}">
        `;

        cartItemsContainer.appendChild(cartItem);
      });
    }

    updateCartSummary(); // تحديث الملخص بعد عرض السلة
  };

  // وظيفة لإضافة المنتج إلى السلة أو زيادة الكمية إذا كان موجودًا بالفعل
  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // إذا كان المنتج موجودًا بالفعل، نقوم بزيادة الكمية
      cart[existingProductIndex].quantity += product.quantity;
    } else {
      // إذا لم يكن المنتج موجودًا، أضفه إلى السلة
      cart.push(product);
    }

    // حفظ السلة في الـ localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  };

  // وظيفة لتحديث الكمية (زيادة أو تقليل)
  const updateQuantity = (index, change) => {
    let quantity = cart[index].quantity + change;
    if (quantity < 1) {
      quantity = 1; // لا يمكن أن تكون الكمية أقل من 1
    }
    cart[index].quantity = quantity;
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  };

  // التعامل مع الأحداث عند الضغط على الأزرار
  cartItemsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-button")) {
      const index = e.target.getAttribute("data-index");
      cart.splice(index, 1); // إزالة المنتج من السلة
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    } else if (e.target.classList.contains("increase-quantity")) {
      const index = e.target.getAttribute("data-index");
      updateQuantity(index, 1); // زيادة الكمية
    } else if (e.target.classList.contains("decrease-quantity")) {
      const index = e.target.getAttribute("data-index");
      updateQuantity(index, -1); // تقليل الكمية
    }
  });

  // تطبيق الكود الترويجي
  applyCouponButton.addEventListener("click", () => {
    const couponCode = couponCodeInput.value.trim();
    if (couponCode === validCoupon.code) {
      discount = subtotal * validCoupon.discount;
      renderCart();
    } else {
      alert("الكود الترويجي غير صحيح!");
    }
  });

  renderCart(); // عرض السلة عند تحميل الصفحة
});
