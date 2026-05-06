// Intersection Observer لظهور العناصر عند التمرير
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => io.observe(el));

// وظيفة البحث (لصفحة index)
const searchInput = document.getElementById('search-input');
if (searchInput) {
  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      window.location.href = 'pages/lessons.html';
    }
  });
}