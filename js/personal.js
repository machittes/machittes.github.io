// ----- Collapse logic -----
document.querySelectorAll(".collapsible").forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});


// ----- Swipers -----
new Swiper(".treta-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
});

new Swiper(".notix-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
});


// ----- Timeline (placeholder, pronto para sua lógica C + A) -----
function loadTimeline() {
  const container = document.getElementById("personal-timeline-container");

  // exemplo inicial:
  container.innerHTML = `
    <div class="timeline-item"><strong>2024</strong> — Placeholder...</div>
    <div class="timeline-item"><strong>2025</strong> — Placeholder...</div>
  `;
}

loadTimeline();

