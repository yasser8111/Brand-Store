
// in header ===========================================

let lastScrollTop = 0; // لحفظ موقع التمرير السابق
const header = document.querySelector("header"); // استهداف الهيدر
const logo = document.querySelector(".logo"); // استهداف الشعار

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // إذا كان التمرير لأعلى
  if (scrollTop < lastScrollTop) {
    if (scrollTop === 0) {
      header.classList.add("near-top"); 
      header.classList.remove("hide");
      logo.style.opacity = 1; 
    } else {
      logo.style.opacity = 0;
      header.classList.remove("near-top");
      header.classList.add("hide"); 
    }
  } else {
    header.classList.remove("near-top");
    header.classList.add("hide");
    logo.style.opacity = 0;
  }

  // حفظ موقع التمرير الحالي لتحديد الاتجاه في المرة التالية
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

const searchInput = document.querySelector(".search-input");
const searchContainer = document.querySelector(".search-container");

searchInput.addEventListener("focus", () => {
  searchContainer.classList.add("focused"); // إضافة الكلاس عند التركيز
});

searchInput.addEventListener("blur", () => {
  searchContainer.classList.remove("focused"); // إزالة الكلاس عند الخروج
});

window.addEventListener("load", () => {
  header.classList.add("near-top"); // إظهار الهيدر عند تحميل الصفحة
});

// استهداف جميع الروابط
const navLinks = document.querySelectorAll(".nav-links a");

// تعيين الزر النشط عند تحميل الصفحة بناءً على الموقع الحالي
const currentPath = window.location.pathname; // الحصول على مسار الصفحة الحالية
navLinks.forEach(link => {
  if (link.href.includes(currentPath)) {
    link.classList.add("active"); // إضافة الفئة النشطة للرابط المطابق
  } else {
    link.classList.remove("active"); // إزالة الفئة النشطة من الروابط الأخرى
  }
});

// تحديث الزر النشط عند النقر
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
    }, 50); // المدة تتوافق مع الـ transition في CSS
  });
});

