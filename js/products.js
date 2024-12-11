
const filterButton = document.querySelector('.filter-button');
const filterMenu = document.querySelector('.filter-menu');
const overlay = document.querySelector('.overlay');
const colorOptions = document.querySelectorAll('.color-option');
const filterItems = document.querySelectorAll('.filter-item');

// فتح وإغلاق القائمة مع أنيميشن
filterButton.addEventListener('click', () => {
  if (filterMenu.classList.contains('active')) {
    filterMenu.classList.add('hide');
    setTimeout(() => {
      filterMenu.classList.remove('active', 'hide');
      overlay.classList.remove('active');
    }, 400);
  } else {
    filterMenu.classList.add('active');
    overlay.classList.add('active');
  }
});

overlay.addEventListener('click', () => {
  filterMenu.classList.add('hide');
  setTimeout(() => {
    filterMenu.classList.remove('active', 'hide');
    overlay.classList.remove('active');
  }, 400);
});

// تغيير لون الزر عند اختيار لون مع مؤشر
colorOptions.forEach(option => {
  option.addEventListener('click', (e) => {
    const alreadySelected = option.classList.contains('selected');
    colorOptions.forEach(opt => opt.classList.remove('selected'));
    if (!alreadySelected) {
      e.target.classList.add('selected');
      const color = e.target.getAttribute('data-color');
      filterButton.style.backgroundColor = color;
    } else {
      filterButton.style.backgroundColor = '#007bff'; // اللون الافتراضي
    }
  });
});

// تحديث زر الفلتر ليعرض أيقونة النوع المختار
filterItems.forEach(item => {
  item.addEventListener('click', () => {
    const alreadySelected = item.classList.contains('selected');
    filterItems.forEach(it => it.classList.remove('selected'));
    if (!alreadySelected) {
      item.classList.add('selected');
      const iconClass = item.getAttribute('data-icon');
      filterButton.innerHTML = `<i class="${iconClass}"></i> ${item.querySelector('span').textContent}`;
    } else {
      filterButton.innerHTML = `<i class="fa-solid fa-filter"></i> فلتر`;
    }
  });
});