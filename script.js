document.addEventListener("DOMContentLoaded", function () {

  // Inisialisasi AOS hanya sekali
  AOS.init({
    duration: 800,
    once: true
  });

  // Tombol Scroll ke Atas
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

});
