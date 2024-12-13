document.addEventListener("DOMContentLoaded", () => {
  const decreaseButtons = document.querySelectorAll(".decrease");
  const increaseButtons = document.querySelectorAll(".increase");
  const removeButtons = document.querySelectorAll(".remove-btn");

  // تعديل الكمية
  decreaseButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      const quantitySpan = e.target.nextElementSibling;
      let quantity = parseInt(quantitySpan.textContent);
      if (quantity > 1) {
        quantitySpan.textContent = quantity - 1;
      }
    });
  });

  increaseButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      const quantitySpan = e.target.previousElementSibling;
      let quantity = parseInt(quantitySpan.textContent);
      quantitySpan.textContent = quantity + 1;
    });
  });

  // إزالة العنصر
  removeButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      const cartItem = e.target.closest(".cart-item");
      cartItem.remove();
    });
  });
});
