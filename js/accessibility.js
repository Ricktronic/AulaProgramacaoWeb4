export function initAccessibility() {
  const darkBtn = document.querySelector("#toggle-dark");
  const contrastBtn = document.querySelector("#toggle-contrast");

  if (darkBtn) {
    darkBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      darkBtn.setAttribute("aria-pressed", document.body.classList.contains("dark-theme"));
      localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
    });
  }

  if (contrastBtn) {
    contrastBtn.addEventListener("click", () => {
      document.body.classList.toggle("high-contrast");
      contrastBtn.setAttribute("aria-pressed", document.body.classList.contains("high-contrast"));
    });
  }

  
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }
}
