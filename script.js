// Scroll smoothly when clicking anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
  function openLink(url) {
    // Open the provided URL in a new tab
    window.open(url, "_blank");
  }
  