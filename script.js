// Scroll to Top Button
window.onscroll = function () {
  const btn = document.getElementById("scrollToTopBtn");
  btn.style.display = window.scrollY > 300 ? "block" : "none";
};

document.getElementById("scrollToTopBtn").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Dark Mode Toggle
const darkToggle = document.getElementById("darkModeToggle");
darkToggle.onclick = function () {
  document.body.classList.toggle("dark");

  // Toggle icon
  if (document.body.classList.contains("dark")) {
    darkToggle.textContent = "☀️";
  } else {
    darkToggle.textContent = "🌙";
  }
};
