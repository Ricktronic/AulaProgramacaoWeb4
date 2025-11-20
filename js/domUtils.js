
export function toggleMenu() {
  const menu = document.querySelector("#main-nav");
  const toggleBtn = document.querySelector("#menu-toggle");
  if (!menu || !toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    const expanded = toggleBtn.getAttribute("aria-expanded") === "true";
    toggleBtn.setAttribute("aria-expanded", !expanded);
    menu.classList.toggle("open");
  });
}
