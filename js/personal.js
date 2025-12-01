// ---------------------- Swipers ----------------------
new Swiper(".tr3ta-swiper", {
  loop: true,
  pagination: { el: ".tr3ta-swiper .swiper-pagination" },
});

new Swiper(".notix-swiper", {
  loop: true,
  pagination: { el: ".notix-swiper .swiper-pagination" },
});

// ---------------------- Timeline Component ----------------------

function createTimeline(containerId, timelineItems) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="timeline-container">
      ${timelineItems
        .map(
          (item) => `
        <div class="timeline-item">
          <div class="timeline-date">${item.date}</div>
          <div class="timeline-dot"></div>
          <button type="button" class="timeline-label">${item.title}</button>
          <div class="timeline-card">
            <div class="timeline-card-title">${item.title}</div>
            <div class="timeline-card-text">
              ${item.text}
            </div>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `;

  initTimelineCardBehavior(container);
}

function initTimelineCardBehavior(root) {
  const items = root.querySelectorAll(".timeline-item");
  const cards = root.querySelectorAll(".timeline-card");

  function closeAll() {
    cards.forEach((card) => card.classList.remove("active"));
  }

  items.forEach((item) => {
    const dot = item.querySelector(".timeline-dot");
    const label = item.querySelector(".timeline-label");
    const card = item.querySelector(".timeline-card");
    if (!card) return;

    const toggle = (event) => {
      event.stopPropagation();
      const isActive = card.classList.contains("active");
      closeAll();
      if (!isActive) {
        card.classList.add("active");
      }
    };

    if (dot) dot.addEventListener("click", toggle);
    if (label) label.addEventListener("click", toggle);
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".timeline-item")) {
      closeAll();
    }
  });
}

// ---------------------- TR3TA Timeline ----------------------

const tr3taTimeline = [
  {
    date: "2010",
    title: "Board Game Creation",
    text: `
      <p>Creation of the physical board game, including rules, movement mechanics, attack and defense systems. Development of the prototype and initial playtesting with real players.</p>
    `,
  },
  {
    date: "2011",
    title: "Premium Board Edition",
    text: `
      <p>Creation of a premium, foldable board with updated artwork and improved player feedback. Introduction of two different game modes (Classic and Aggressive), based on desired match duration.</p>
    `,
  },
  {
    date: "Dec/2024",
    title: "First App Prototype",
    text: `
      <p>First attempt to bring the game to mobile, initially for Android. Development of a virtual board identical to the physical version and early implementation of position markers.</p>
    `,
  },
  {
    date: "03/10/2025",
    title: "iOS Migration",
    text: `
      <p>Project resumed and fully migrated to iOS.</p>
      <p>Added visual markers and kept cell names visible for accessibility.</p>
      <p>Defined fixed starting positions for all armies: blue at the base, green on the left, and yellow on the right.</p>
      <p>Began creation of digital pieces.</p>
    `,
  },
  {
    date: "20/10/2025",
    title: "Pieces & Movement",
    text: `
      <p>Completed design of all pieces, now updated to a round format.</p>
      <p>End of Stage 1 (Board & Pieces). Beginning of Stage 2 (Movement).</p>
      <p>Pieces can now be selected and moved freely using the <strong>movementHelper</strong>.</p>
      <p>Turn order system implemented (initially fixed: Blue → Green → Yellow).</p>
    `,
  },
  {
    date: "08/11/2025",
    title: "Movement Polishing",
    text: `
      <p>Refinement of the <strong>movementHelper</strong>: pieces can now move forward and backward with visual indicators showing valid movement paths while respecting blocked cells.</p>
      <p>Added animated movement and countdown timer.</p>
      <p>End of Stage 2 (Movement).</p>
    `,
  },
  {
    date: "15–17/11/2025",
    title: "Pre-Game Flow",
    text: `
      <p>Beginning of Stage 3 (Pre-Game).</p>
      <p>Added splash screen, home screen with “New Game,” and full pre-game setup flow.</p>
      <p>Match customization introduced (Classic or Aggressive mode).</p>
      <p>Anti-collusion rule implemented.</p>
      <p>Turn definition mechanic implemented — turn order is now randomized during pre-game.</p>
      <p>End of Stage 3.</p>
    `,
  },
  {
    date: "Next Steps",
    title: "Combat System",
    text: `
      <p>Beginning of Stage 4 (Attack & Defense). Development will focus on combat resolution, army interactions, and overall match balance.</p>
    `,
  },
];

// ---------------------- NOTIX Timeline ----------------------

const notixTimeline = [
  {
    date: "18/09/2025",
    title: "Core Concept & First Implementation",
    text: `
      <p>Creation of the core concept and start of implementation.</p>
      <ul>
        <li>Home screen (alarm list)</li>
        <li>New Alarm screen with NotificationService configured</li>
        <li>Reminder scheduling + pre-alert</li>
        <li>Basic firing tests</li>
      </ul>
    `,
  },
  {
    date: "24/09/2025",
    title: "Recurrence, Snooze & Status Foundations",
    text: `
      <ul>
        <li>Notes added to reminders (persist + visible in notification)</li>
        <li>Daily scheduling + pre-alert</li>
        <li>Weekly recurrence (days of week)</li>
        <li>Snooze actions (5 and 15 minutes)</li>
        <li>Persistence with UserDefaults</li>
        <li>Edit / Delete / Enable–Disable</li>
        <li>Auto-reschedule on launch</li>
        <li>Basic firing tests</li>
      </ul>
    `,
  },
  {
    date: "30/09/2025",
    title: "Simple Mode & Advanced Mode",
    text: `
      <p>Implemented quick reminders without additional settings, and created an Advanced Mode for extended customization.</p>
      <p>Attempted alert customization — results were inconsistent and feature was paused.</p>
    `,
  },
  {
    date: "14–15/10/2025",
    title: "Random Mode",
    text: `
      <p>Implemented Random Mode and tested repetition behavior.</p>
      <p>Fixed issue where reminder details were not correctly displayed after opening.</p>
    `,
  },
  {
    date: "03/11/2025",
    title: "Status System",
    text: `
      <p>Status added to each reminder: <strong>Scheduled</strong>, <strong>In Progress</strong>, <strong>Completed</strong>.</p>
      <p>Reminders can now only be edited when in <strong>Scheduled</strong> status.</p>
      <p>Alarm list now grouped by status.</p>

      <p><strong>Fix list:</strong></p>
      <ul>
        <li>Advanced Mode reminders now update subtitle to “Advanced.”</li>
      </ul>
    `,
  },
  {
    date: "11/11/2025",
    title: "History & Statistics",
    text: `
      <p>Implemented alarm history and statistics. Pending correction system adjustments.</p>
    `,
  },
];

// ---------------------- Initialize ----------------------

document.addEventListener("DOMContentLoaded", () => {
  createTimeline("tr3ta-timeline", tr3taTimeline);
  createTimeline("notix-timeline", notixTimeline);
});
