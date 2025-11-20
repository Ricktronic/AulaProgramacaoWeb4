import { initRouter } from "./router.js";
import { initFormValidation } from "./formValidation.js";
import { initAccessibility } from "./accessibility.js";

document.addEventListener("DOMContentLoaded", () => {
  initRouter();
  initFormValidation();
  initAccessibility();
});
