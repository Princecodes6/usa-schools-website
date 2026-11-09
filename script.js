
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  navigation.classList.toggle("open");
});

// Close menu after selecting a page
navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
  });
});

// Automatically update copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();
