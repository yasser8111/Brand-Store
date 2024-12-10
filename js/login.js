document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.querySelector('.login-form');
  const registerForm = document.querySelector('.register-form');
  const switchToRegister = document.querySelector('.switch-form'); // رابط التبديل إلى إنشاء حساب
  const switchToLogin = document.querySelector('.switch-form'); // رابط التبديل إلى تسجيل الدخول

  // التبديل إلى نموذج إنشاء حساب
  switchToRegister.addEventListener('click', function(e) {
    e.preventDefault();
    loginForm.classList.remove('active');
    loginForm.classList.add('flip');
    setTimeout(() => {
      loginForm.classList.remove('flip');
      registerForm.classList.add('active');
    }, 300); // تأخير بسيط للسماح لتأثير التبديل بالتنفيذ
  });

  // التبديل إلى نموذج تسجيل الدخول
  switchToLogin.addEventListener('click', function(e) {
    e.preventDefault();
    registerForm.classList.remove('active');
    registerForm.classList.add('flip');
    setTimeout(() => {
      registerForm.classList.remove('flip');
      loginForm.classList.add('active');
    }, 300);
  });
});
