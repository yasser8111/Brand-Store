
// header ========================================================================

// تحديد المتغيرات
const burgerMenu = document.querySelector(".burger-menu");
const menuList = document.querySelector(".burger-menu ul");

// عند الضغط على الزر، قم بالتبديل بين الفتح والإغلاق
burgerMenu.addEventListener("click", (event) => {
  event.stopPropagation(); // منع تأثير النقر على العنصر نفسه
  const isActive = menuList.classList.contains("active");

  if (isActive) {
    menuList.classList.remove("active");
    setTimeout(() => {
      menuList.style.display = "none"; // إخفاء العنصر بعد انتهاء الأنميشن
    }, 300); // نفس مدة الأنميشن (0.3 ثانية)
  } else {
    menuList.style.display = "block"; // عرض العنصر قبل بدء الأنميشن
    setTimeout(() => {
      menuList.classList.add("active");
    }, 10); // تأخير بسيط لضمان تطبيق الأنميشن
  }
});

// إغلاق القائمة عند النقر خارجها
window.addEventListener("click", (event) => {
  if (!burgerMenu.contains(event.target) && !menuList.contains(event.target)) {
    menuList.classList.remove("active");
    setTimeout(() => {
      menuList.style.display = "none";
    }, 300);
  }
});

// Scroll Header Effect
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 0);
});

// end header ========================================================================
