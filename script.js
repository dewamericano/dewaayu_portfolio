document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Class 'show' inilah yang kini didefinisikan di CSS
        entry.target.classList.add("show");
        // Hentikan pengamatan setelah animasi berjalan (opsional, tapi disarankan)
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.2 }); // threshold: 0.2 berarti 20% elemen harus terlihat

  elements.forEach(el => observer.observe(el));
});