
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

