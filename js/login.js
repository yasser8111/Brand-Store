// تحديد العناصر
const loginForm = document.querySelector('.login-form');
const registerForm = document.querySelector('.register-form');
const switchFormLinks = document.querySelectorAll('.switch-form');

// التبديل بين النماذج عند الضغط على الرابط
switchFormLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    // إذا كانت فورمة التسجيل قد تم عرضها بالفعل، فإننا نعرض فورمة تسجيل الدخول
    if (loginForm.classList.contains('active')) {
      loginForm.classList.remove('active');
      registerForm.classList.add('active');
    } else {
      registerForm.classList.remove('active');
      loginForm.classList.add('active');
    }
  });
});
