// التحكم في القائمة الجانبية ============================================================================================================

const MenuButton = document.getElementById("menu-btn");
const sideMenu = document.getElementById("side-menu");

function oac_menu() {
  sideMenu.classList.toggle("visible");
}

// تنقل الصفحات مع تأثير الانتقال ============================================================================================================

const navigationLinks = document.querySelectorAll(".main-nav a");

navigationLinks.forEach((navLink) => {
  navLink.addEventListener("click", (event) => {
    event.preventDefault();

    navigationLinks.forEach((link) => link.classList.remove("active"));

    navLink.classList.add("active");

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
      navLink.classList.add("active"); // إضافة الصنف "active-link" للرابط النشط
    } else {
      navLink.classList.remove("active"); // إزالة الصنف "active-link" من الروابط الأخرى
    }

    navLink.addEventListener("click", (event) => {
      event.preventDefault();

      navigationLinks.forEach((link) => link.classList.remove("active"));

      navLink.classList.add("active");

      setTimeout(() => {
        window.location.href = navLink.href;
      }, 160);
    });
  });
});

// تعيين الرابط النشط عند تحميل الصفحة بناءً على الموقع الحالي ============================================================================================================

const currentPagePath = window.location.pathname;

navigationLinks.forEach((navLink) => {
  if (navLink.href.includes(currentPagePath)) {
    navLink.classList.add("active");
  } else {
    navLink.classList.remove("active");
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
      navLink.classList.add("active"); // إضافة الصنف "active-link"
    } else {
      navLink.classList.remove("active"); // إزالة الصنف "active-link" من الروابط الأخرى
    }
  });
});
