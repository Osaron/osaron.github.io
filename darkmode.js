function toggleDarkMode() {
  const body = document.body;
  const icon = document.querySelector(".toggle-mode .icon");

  body.classList.toggle("dark-mode");

  // Update icon
  if (body.classList.contains("dark-mode")) {
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
  }

  const isDark = body.classList.contains("dark-mode");
  localStorage.setItem("dark-mode", isDark);
}

document.addEventListener("DOMContentLoaded", function () {
  const isDark = localStorage.getItem("dark-mode") === "true";
  if (isDark) {
    document.body.classList.add("dark-mode");

    const icon = document.querySelector(".toggle-mode .icon");
    if (icon) {
      icon.classList.replace("fa-moon", "fa-sun");
    }
  }
});

// Enable toggle listener after header loads
function setupDarkModeToggle() {
  const icon = document.querySelector(".toggle-mode .icon");
  const toggleBtn = document.querySelector(".toggle-mode");

  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("dark-mode", isDark);

    if (icon) {
      icon.classList.toggle("fa-sun");
      icon.classList.toggle("fa-moon");
    }
  });
}

// Call this after header is injected
setupDarkModeToggle();