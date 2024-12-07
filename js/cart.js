// تعريف قيمة الكوبون
const validCouponCode = "811"; // كود الكوبون الصحيح
const discountPercentage = 1000; // نسبة الخصم

// العناصر
const couponInput = document.getElementById("coupon-input");
const applyCouponBtn = document.getElementById("apply-coupon-btn");
const couponStatus = document.getElementById("coupon-status");
const discountElement = document.getElementById("discount");
const finalTotalElement = document.getElementById("final-total");

// الحسابات الأولية
let subTotal = 399.97; // الإجمالي الفرعي
let tax = 19.99; // الضريبة
let total = subTotal + tax; // الإجمالي النهائي

// تحديث المجموع النهائي قبل إضافة الخصم
finalTotalElement.textContent = `$${total.toFixed(2)}`;

// استماع لحدث الضغط على زر تطبيق الكوبون
applyCouponBtn.addEventListener("click", function () {
  const couponCode = couponInput.value.trim(); // الحصول على الكود المدخل

  // تحقق من الكود وتطبيق الخصم
  if (couponCode === validCouponCode) {
    // الكود صحيح
    // حساب الخصم
    let discount = (subTotal * discountPercentage) / 100;
    let newTotal = total - discount;

    // إذا كان المجموع الجديد أقل من أو يساوي صفرًا
    if (newTotal <= 0) {
      newTotal = 0; // تعيين المجموع إلى صفر
    }

    // تحديث واجهة المستخدم
    couponStatus.innerHTML = '<i class="fas fa-check-circle"></i>'; // أيقونة صح
    couponStatus.classList.remove("error");
    couponStatus.classList.add("success");
    discountElement.textContent = `$${discount.toFixed(2)}`; // عرض قيمة الخصم
    finalTotalElement.textContent = `$${newTotal.toFixed(2)}`; // تحديث المجموع النهائي بعد الخصم
  } else {
    // الكود غير صحيح
    couponStatus.innerHTML = '<i class="fas fa-times-circle"></i>'; // أيقونة إكس
    couponStatus.classList.remove("success");
    couponStatus.classList.add("error");
  }
});
