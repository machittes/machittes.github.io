// ---------------------- Swipers ----------------------
new Swiper(".tr3ta-swiper", {
  loop: true,
  pagination: { el: ".tr3ta-swiper .swiper-pagination" },
});

new Swiper(".notix-swiper", {
  loop: true,
  pagination: { el: ".notix-swiper .swiper-pagination" },
});

// ---------------------- NOVA TIMELINE ----------------------

function buildTimeline(containerId, cardAreaId, data) {
  const container = document.getElementById(containerId);
  const cardArea = document.getElementById(cardAreaId);
  if (!container || !cardArea) return;

  // Render timeline items
  container.innerHTML = `
    <div class="timeline-container">
      ${data.map((item, i) => `
        <div class="timeline-item">
          <div class="timeline-date">${item.date}</div>
          <div class="timeline-dot"></div>
          <button class="timeline-label" data-index="${i}">
            ${item.title}
          </button>
        </div>
      `).join("")}
    </div>
  `;

  // Add click events
  container.querySelectorAll(".timeline-label").forEach(label => {
    label.addEventListener("click", () => {
      const index = label.dataset.index;
      showCard(index);
    });
  });

  function showCard(index) {
    const item = data[index];

    // Clear previous card
    cardArea.innerHTML = "";

    // Create card
    const card = document.createElement("div");
    card.className = "timeline-card-single";
    card.innerHTML = `
      <h4>${item.title}</h4>
      ${item.text}
    `;

    cardArea.appendChild(card);

    // Fade-in animation
    setTimeout(() => card.classList.add("show"), 10);
  }
}

// ---------------------- TR3TA DATA ----------------------

const tr3taTimeline = [
  {
    date: "2010",
    title: "Board Game Creation",
    text: `
      <p>Creation of the physical board game, including rules, movement mechanics, attack and defense systems. Development of the prototype and initial playtesting.</p>
    `
  },
  {
    date: "2011",
    title: "Premium Board Edition",
    text: `
      <p>Creation of a premium foldable board and two new game modes: Classic and Aggressive.</p>
    `
  },
  {
    date: "Dec/2024",
    title: "First App Prototype",
    text: `
      <p>First attempt to bring the game to mobile (Android). Implemented the virtual board identical to the physical version.</p>
    `
  },
  {
    date: "03/10/2025",
    title: "iOS Migration",
    text: `
      <p>Project resumed and fully migrated to iOS. Added visual markers and defined starting army positions.</p>
    `
  },
  {
    date: "20/10/2025",
    title: "Pieces & Movement",
    text: `
      <p>Completed round piece designs and implemented free movement using movementHelper.</p>
    `
  },
  {
    date: "08/11/2025",
    title: "Movement Polishing",
    text: `
      <p>Refined movement rules, added backward movement and path blockers. Added animations.</p>
    `
  },
  {
    date: "15–17/11/2025",
    title: "Pre-Game Flow",
    text: `
      <p>Splash, home screen, match setup, anti-collusion rule, random turn order.</p>
    `
  },
  {
    date: "Next Steps",
    title: "Combat System",
    text: `
      <p>Beginning of Stage 4: attack, defense, and match balance.</p>
    `
  }
];

// ---------------------- NOTIX DATA ----------------------

const notixTimeline = [
  {
    date: "18/09/2025",
    title: "Core Concept & First Implementation",
    text: `
      <p>Creation of the core concept and start of implementation.</p>
      <ul>
        <li>Home screen</li>
        <li>New Alarm screen</li>
        <li>Scheduling + pre-alert</li>
        <li>Basic firing tests</li>
      </ul>
    `
  },
  {
    date: "24/09/2025",
    title: "Recurrence, Snooze & Status",
    text: `
      <ul>
        <li>Notes system</li>
        <li>Daily + weekly recurrence</li>
        <li>Snooze 5/15 min</li>
        <li>Status Foundations</li>
      </ul>
    `
  },
  {
    date: "30/09/2025",
    title: "Simple & Advanced Mode",
    text: `
      <p>Quick reminders + Advanced Mode for long setups.</p>
    `
  },
  {
    date: "14–15/10/2025",
    title: "Random Mode",
    text: `
      <p>Randomized reminders with minimum interval logic.</p>
    `
  },
  {
    date: "03/11/2025",
    title: "Status System",
    text: `
      <p>Reminder statuses implemented. Editing locked when in-progress.</p>
    `
  },
  {
    date: "11/11/2025",
    title: "History & Statistics",
    text: `
      <p>Added full history system and statistics.</p>
    `
  }
];

// ---------------------- INITIALIZATION ----------------------

document.addEventListener("DOMContentLoaded", () => {
  buildTimeline("tr3ta-timeline", "tr3ta-timeline-card-area", tr3taTimeline);
  buildTimeline("notix-timeline", "notix-timeline-card-area", notixTimeline);
});
