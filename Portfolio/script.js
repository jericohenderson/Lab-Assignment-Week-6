const toggleBtn = document.getElementById("theme-toggle");
const STORAGE_KEY = "theme-preference";

function getPreferredTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEY);
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const isDark = theme === "dark";
  toggleBtn.textContent = isDark
    ? "Switch to Light Mode"
    : "Switch to Dark Mode";
  toggleBtn.setAttribute("aria-pressed", String(isDark));
}

let currentTheme = getPreferredTheme();
applyTheme(currentTheme);

toggleBtn.addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  localStorage.setItem(STORAGE_KEY, currentTheme);
  applyTheme(currentTheme);
});
