// Footer year
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

// Show the sticky mobile button after the hero scrolls out of view
const bar = document.getElementById("bar");
const hero = document.getElementById("hero");
if (bar && hero && "IntersectionObserver" in window) {
  new IntersectionObserver(([e]) => bar.classList.toggle("show", !e.isIntersecting)).observe(hero);
}
