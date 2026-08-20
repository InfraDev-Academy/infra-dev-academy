const navigationToggle = document.querySelector(".nav-toggle");
const primaryNavigation = document.querySelector("#primary-navigation");
const navigationLinks = primaryNavigation?.querySelectorAll("a") ?? [];
const currentYear = document.querySelector("[data-current-year]");
const learningTrigger = document.querySelector("[data-learning-trigger]");
const learningStatus = document.querySelector("[data-learning-status]");


/**
 * Synchronizes the mobile-navigation state with accessible attributes.
 * @param {boolean} isOpen
 */
function setNavigationState(isOpen) {
  if (!navigationToggle || !primaryNavigation) {
    return;
  }

  navigationToggle.setAttribute("aria-expanded", String(isOpen));
  primaryNavigation.dataset.open = String(isOpen);
}

navigationToggle?.addEventListener("click", () => {
  const isOpen = navigationToggle.getAttribute("aria-expanded") === "true";
  setNavigationState(!isOpen);
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => setNavigationState(false));
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 896) {
    setNavigationState(false);
  }
});

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

learningTrigger?.addEventListener("click", () => {
  if(!learningStatus){
    return;
  }

  const isActive = learningTrigger.getAttribute("aria-pressed") === "true";

  const nextState = !isActive;

  learningTrigger.setAttribute(
    "aria-pressed",
    String(nextState)
  );

  learningTrigger.textContent = nextState
  ? "Reset learning" : "Start learning";

  learningStatus.textContent = nextState
  ? "First interactive feature activated!" : "Ready for the next engineering step";

});