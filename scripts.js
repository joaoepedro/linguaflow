
/* ============================================================
MENU MOBILE (hamburger)
============================================================ */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () =>
    navLinks.classList.toggle("open"),
);
navLinks
    .querySelectorAll("a")
    .forEach((a) =>
        a.addEventListener("click", () => navLinks.classList.remove("open")),
    );

/* ============================================================
FAQ ACCORDION
============================================================ */
document.querySelectorAll(".faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
        const item = btn.parentElement;
        const wasActive = item.classList.contains("active");
        document
            .querySelectorAll(".faq-item")
            .forEach((i) => i.classList.remove("active"));
        if (!wasActive) item.classList.add("active");
    });
});

/* ============================================================
FADE-IN ON SCROLL (Intersection Observer)
============================================================ */
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 },
);

document
    .querySelectorAll(".fade-in")
    .forEach((el) => observer.observe(el));