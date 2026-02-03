document.addEventListener("DOMContentLoaded", () => {
  /* ========== CERTIFICATE SCROLL ANIMATION ========== */
  const cards = document.querySelectorAll(".cert-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => observer.observe(card));

  /* ========== FLOATING SKILLS + FILTER ========== */
  const skills = document.querySelectorAll(".skill");
  const cloud = document.querySelector(".skills-cloud");
  const buttons = document.querySelectorAll(".filter-btn");

  // Random positions
  skills.forEach((skill) => {
    const x = Math.random() * (cloud.offsetWidth - 100);
    const y = Math.random() * (cloud.offsetHeight - 40);
    skill.style.left = x + "px";
    skill.style.top = y + "px";
  });

  // Filter buttons
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      skills.forEach((skill) => {
        if (filter === "all" || skill.classList.contains(filter)) {
          skill.style.display = "block";
        } else {
          skill.style.display = "none";
        }
      });
    });
  });
});
