// Show and hide the header ============================================================================================================

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > lastScrollY) {
    // التمرير لأسفل - إخفاء الهيدر
    header.classList.add("hidden");
  } else {
    // التمرير لأعلى - إظهار الهيدر
    header.classList.remove("hidden");
  }

  lastScrollY = window.scrollY; // تحديث موقع التمرير الحالي
});

// Page switching animation ============================================================================================================

const navLinks = document.querySelectorAll(".nav-links a"); // تحديد الروابط مرة واحدة فقط

navLinks.forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // منع الانتقال الفوري

    // إزالة الحالة النشطة من جميع الروابط
    navLinks.forEach(nav => {
      nav.classList.remove("active");
    });

    // إضافة الحالة النشطة للرابط المحدد
    link.classList.add("active");

    // الانتظار قليلاً ثم الانتقال إلى الصفحة
    setTimeout(() => {
      window.location.href = link.href;
    }, 160); // المدة تتوافق مع الـ transition في CSS
  });
});

// Search functionality ============================================================================================================

const searchInput = document.querySelector(".search-input");
const searchContainer = document.querySelector(".search-container");

searchInput.addEventListener("focus", () => {
  searchContainer.classList.add("focused"); // إضافة الكلاس عند التركيز
});

searchInput.addEventListener("blur", () => {
  searchContainer.classList.remove("focused"); // إزالة الكلاس عند الخروج
});

window.addEventListener("load", () => {
  const header = document.querySelector("header"); // تعريف الهيدر هنا
  header.classList.add("near-top"); // إظهار الهيدر عند تحميل الصفحة
});

// تعيين الزر النشط عند تحميل الصفحة بناءً على الموقع الحالي
const currentPath = window.location.pathname; // الحصول على مسار الصفحة الحالية
navLinks.forEach(link => {
  if (link.href.includes(currentPath)) {
    link.classList.add("active"); // إضافة الفئة النشطة للرابط المطابق
  } else {
    link.classList.remove("active"); // إزالة الفئة النشطة من الروابط الأخرى
  }
});
