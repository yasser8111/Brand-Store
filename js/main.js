// التحكم في القائمة الجانبية ============================================================================================================

document.addEventListener("DOMContentLoaded", function () {
  const toggleMenuButton = document.getElementById("toggle-menu-btn");
  const sideMenu = document.getElementById("side-menu");

  toggleMenuButton.addEventListener("click", function () {
    sideMenu.classList.toggle("menu-visible");
  });
});

// تنقل الصفحات مع تأثير الانتقال ============================================================================================================

const navigationLinks = document.querySelectorAll(".main-nav a");

navigationLinks.forEach((navLink) => {
  navLink.addEventListener("click", (event) => {
    event.preventDefault();

    navigationLinks.forEach((link) => link.classList.remove("active-link"));

    navLink.classList.add("active-link");

    setTimeout(() => {
      window.location.href = navLink.href;
    }, 160);
  });
});

// ==================

document.addEventListener("DOMContentLoaded", function () {
  // الحصول على جميع الروابط داخل القائمة الجانبية
  const navigationLinks = document.querySelectorAll("#side-menu a");

  // الحصول على مسار الصفحة الحالية
  const currentPagePath = window.location.pathname;

  // التحقق من كل رابط وإضافة أو إزالة صنف "active-link" بناءً على الصفحة الحالية
  navigationLinks.forEach((navLink) => {
    // إذا كان href الخاص بالرابط يتضمن مسار الصفحة الحالية
    if (navLink.href.includes(currentPagePath)) {
      navLink.classList.add("active-link"); // إضافة الصنف "active-link" للرابط النشط
    } else {
      navLink.classList.remove("active-link"); // إزالة الصنف "active-link" من الروابط الأخرى
    }

    // إضافة حدث "click" للرابط
    navLink.addEventListener("click", (event) => {
      event.preventDefault(); // منع التنقل الفوري

      // إزالة الكلاس "active-link" من جميع الروابط
      navigationLinks.forEach((link) => link.classList.remove("active-link"));

      // إضافة الكلاس "active-link" للرابط الحالي
      navLink.classList.add("active-link");

      // انتظار التأثير أو الانتقال قبل التنقل إلى الصفحة المطلوبة
      setTimeout(() => {
        window.location.href = navLink.href; // التنقل إلى الرابط
      }, 160); // يمكن ضبط التأخير هنا
    });
  });
});

// تعيين الرابط النشط عند تحميل الصفحة بناءً على الموقع الحالي ============================================================================================================

const currentPagePath = window.location.pathname;

navigationLinks.forEach((navLink) => {
  if (navLink.href.includes(currentPagePath)) {
    navLink.classList.add("active-link");
  } else {
    navLink.classList.remove("active-link");
  }
});

// =================

document.addEventListener("DOMContentLoaded", function () {
  // الحصول على جميع الروابط داخل القائمة الجانبية
  const navigationLinks = document.querySelectorAll("#side-menu a");

  // الحصول على مسار الصفحة الحالية
  const currentPagePath = window.location.pathname;

  // التحقق من كل رابط وإضافة أو إزالة صنف "active-link"
  navigationLinks.forEach((navLink) => {
    // إذا كان href الخاص بالرابط يتضمن مسار الصفحة الحالية
    if (navLink.href.includes(currentPagePath)) {
      navLink.classList.add("active-link"); // إضافة الصنف "active-link"
    } else {
      navLink.classList.remove("active-link"); // إزالة الصنف "active-link" من الروابط الأخرى
    }
  });
});
