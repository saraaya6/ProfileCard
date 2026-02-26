// تحديد العناصر من الـ HTML
const themeToggle = document.getElementById('themeToggle');
const icon = themeToggle.querySelector('i');

// 1. تحميل حالة المظهر المحفوظة من ذاكرة المتصفح
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    icon.classList.replace('fa-moon', 'fa-sun');
}

// 2. دالة تبديل المظهر
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    
    // تحديث الأيقونة وحفظ الحالة
    if (document.body.classList.contains('dark-theme')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
}

// 3. إضافة مستمع الحدث عند الضغط على الزر
themeToggle.addEventListener('click', toggleTheme);

// دعم الوصول عبر لوحة المفاتيح
themeToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleTheme();
    }
});