// ---------------------- Swipers ----------------------
new Swiper(".tr3ta-swiper", {
  loop: true,
  pagination: { el: ".tr3ta-swiper .swiper-pagination" },
});

new Swiper(".notix-swiper", {
  loop: true,
  pagination: { el: ".notix-swiper .swiper-pagination" },
});

// ---------------------- NOVA TIMELINE (CARD FIXO) ----------------------

function buildTimeline(containerId, cardAreaId, data) {
  const container = document.getElementById(containerId);
  const cardArea = document.getElementById(cardAreaId);
  if (!container || !cardArea) return null;

  container.innerHTML = `
    <div class="timeline-container">
      <div class="timeline-line"></div>
      ${data
        .map(
          (item, i) => `
        <div class="timeline-item">
          <div class="timeline-date">${item.date}</div>
          <div class="timeline-dot"></div>
          <button class="timeline-label" data-index="${i}">
            ${item.title}
          </button>
        </div>
      `
        )
        .join("")}
    </div>
  `;

  const timelineScroller = container.querySelector(".timeline-container");

  function showCard(index) {
    const item = data[index];
    if (!item) return;

    cardArea.innerHTML = "";

    const card = document.createElement("div");
    card.className = "timeline-card-single";
    card.innerHTML = `
      <h4>${item.title}</h4>
      ${item.text}
    `;

    cardArea.appendChild(card);

    requestAnimationFrame(() => {
      card.classList.add("show");
    });
  }

  container.querySelectorAll(".timeline-label").forEach((label) => {
    label.addEventListener("click", () => {
      const index = Number(label.dataset.index);
      showCard(index);
    });
  });

  function scrollToEnd() {
    if (!timelineScroller) return;
    const line = timelineScroller.querySelector(".timeline-line");
    if (line) line.style.width = timelineScroller.scrollWidth + "px";
    timelineScroller.scrollLeft = timelineScroller.scrollWidth;
  }

  const lastIndex = data.length - 1;
  showCard(lastIndex);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      scrollToEnd();
    });
  });

  return { scrollToEnd };
}

// ---------------------- TR3TA DATA ----------------------

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
      <p>Added splash screen, home screen with "New Game," and full pre-game setup flow.</p>
      <p>Match customization introduced (Classic or Aggressive mode).</p>
      <p>Anti-collusion rule implemented.</p>
      <p>Turn definition mechanic implemented — turn order is now randomized during pre-game.</p>
      <p>End of Stage 3.</p>
    `,
  },
  {
    date: "15–19/12/2025",
    title: "Board Adjacency System",
    text: `
      <p>
        Designed and implemented the complete board adjacency system.
        Built a manual adjacency table covering the entire board, created a dedicated
        <strong>AdjacencyHelper</strong>, and implemented a validation layer to guarantee
        structural integrity.
      </p>
      <ul>
        <li>No self-references</li>
        <li>Bidirectional adjacency consistency</li>
        <li>Only valid cell references allowed</li>
      </ul>
      <p>
        This system is now the single source of truth for movement and attack range calculations,
        enabling reliable attack and defense mechanics in future phases.
      </p>
    `,
  },
  {
    date: "Next Steps",
    title: "Attack & Defense Flow",
    text: `
      <p>
        Introduce the attack and defense flow by adding contextual in-game pop-ups after movement.
        The system will detect when a piece is in an attack position, prompt the player to decide
        whether to attack, highlight valid targets, and handle attack resolution based on game
        modes and dice rolls.
      </p>
    `,
  },
];

// ---------------------- NOTIX DATA ----------------------

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
        <li>Advanced Mode reminders now update subtitle to "Advanced."</li>
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
  {
    date: "10–11/12/2025",
    title: "Categories, History & UX Improvements",
    text: `
      <p>
        Introduced a category system to better organize reminders and sessions across the app.
        List View and History View now support collapsible sections, improving navigation and readability.
      </p>
      <p>
        The History View was refactored to allow filtering by category or displaying all events together,
        giving users more control over how past data is reviewed.
      </p>
      <p>
        Added confirmation dialogs before destructive actions, such as deleting all history entries,
        reducing the risk of accidental data loss.
      </p>
      <p>
        Finalized visual identity by applying the app icon and implementing splash screens.
      </p>
    `,
  },
  {
    date: "07/01/2026",
    title: "App Store Submission & Final Fixes",
    text: `
      <p>
        Final UI and interaction adjustments were completed, including fixing
        the alarm list dropdown behavior to ensure consistent and predictable
        user interaction.
      </p>
      <p>
        The app was officially <strong>submitted for App Store review</strong>,
        following Apple's best practices for privacy, metadata, screenshots,
        accessibility, and notification handling.
      </p>
    `,
  },
  {
    date: "Feb/2026",
    title: "Repositioning & Mindful Upgrade",
    text: `
      <p>
        After multiple attempts to launch on the App Store, the project was fully repositioned from a traditional productivity tool into an
        <strong>offline-first mindful timing system</strong>.
      </p>
      <ul>
        <li>Introduced a guided wizard for faster setup</li>
        <li>Added new sound options to support different moods and contexts</li>
        <li>Implemented full English and Portuguese (Brazil) localization</li>
        <li>Refined weekly timing behavior and overall reliability</li>
      </ul>
    `,
  },
  {
    date: "Mar 5, 2026",
    title: "Official Launch",
    text: `
      <p>
        NotixMe was officially launched on the App Store. This milestone marks the transition
        from a personal development project into a published product focused on mindful,
        offline-first reminders.
      </p>
      <p>
        At the same time, the Android version is now under construction and will expand the
        product to a broader audience in a future release.
      </p>
    `,
  },
  {
    date: "Apr 12, 2026",
    title: "Android Launch",
    text: `
      <p>
        NotixMe was officially released on Google Play, expanding the app to a broader audience
        and establishing its presence as a cross-platform product.
      </p>
      <p>
        The Android version delivers the same offline-first and privacy-focused experience,
        ensuring consistency across both iOS and Android platforms.
      </p>
      <p>
        At the same time, the iOS version received improvements focused on performance,
        notification reliability, and overall user experience refinement.
      </p>
    `,
  },
];

// ---------------------- INITIALIZATION ----------------------

document.addEventListener("DOMContentLoaded", () => {
  const tr3ta = buildTimeline("tr3ta-timeline", "tr3ta-timeline-card-area", tr3taTimeline);
  const notix = buildTimeline("notix-timeline", "notix-timeline-card-area", notixTimeline);

  const notixCollapse = document.getElementById("notixTimeline");
  if (notixCollapse) {
    notixCollapse.addEventListener("shown.bs.collapse", () => {
      notix?.scrollToEnd();
    });
  }

  const tr3taCollapse = document.getElementById("tr3taTimeline");
  if (tr3taCollapse) {
    tr3taCollapse.addEventListener("shown.bs.collapse", () => {
      tr3ta?.scrollToEnd();
    });
  }
});
