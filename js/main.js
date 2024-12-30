// header ========================================================================

const burgerMenu = document.querySelector(".burger-menu");
const menuList = document.querySelector(".burger-menu ul");

// عند الضغط على الزر، قم بالتبديل بين الفتح والإغلاق
burgerMenu.addEventListener("click", (event) => {
  event.stopPropagation(); // منع تأثير النقر على العنصر نفسه
  menuList.classList.toggle("active"); // التبديل بين الحالة النشطة وغير النشطة
});

// إغلاق القائمة عند النقر خارجها
window.addEventListener("click", (event) => {
  if (!burgerMenu.contains(event.target) && !menuList.contains(event.target)) {
    menuList.classList.remove("active");
    setTimeout(() => {
      menuList.style.display = "none";
    });
  }
});

// Scroll Header Effect
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 0);
});

// end header ========================================================================
