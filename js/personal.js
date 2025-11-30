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
            <p>${item.text}</p>
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

  // Fecha todos ao clicar fora
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".timeline-item")) {
      closeAll();
    }
  });
}

// ---------------------- Dados das Timelines ----------------------

// TR3TA – versão completa com seus textos originais
const tr3taTimeline = [
  {
    date: "2010",
    title: "Board game creation",
    text:
      "Criação do jogo em formato tabuleiro, desenvolvimento de regras, mecânicas de movimentação, ataque e defesa. Desenvolvimento de protótipo e testes com jogadores reais.",
  },
  {
    date: "2011",
    title: "Premium board",
    text:
      "Criação de tabuleiro premium, dobrável, com artes e agora com feedbacks positivos. Criação de modos diferenciados (clássico e agressivo), baseados na duração da partida.",
  },
  {
    date: "Dec/2024",
    title: "First app prototype",
    text:
      "Primeira tentativa de desenvolvimento em aplicativo, ainda em Android. Desenvolvimento de tabuleiro virtual exatamente como o real, e início da criação de marcadores.",
  },
  {
    date: "03/10/2025",
    title: "iOS migration",
    text:
      "Retomada do projeto, agora totalmente migrado para iOS. Criação de marcadores e nomes das casas ainda visíveis para acessibilidade. Definição dos exércitos sempre posicionados no mesmo lugar (azul base, verde à esquerda e amarelo à direita). Início da criação dos peões.",
  },
  {
    date: "20/10/2025",
    title: "Pieces & movement",
    text:
      "Finalização da criação das peças, agora modificadas para o formato redondo. Fim da Etapa 1 (criação de tabuleiro e peças) e início da Etapa 2 (movimentação). Agora é possível selecionar a peça e mover para onde desejar (movementHelper). Controle de turno criado (inicialmente fixo em azul → verde → amarelo).",
  },
  {
    date: "08/11/2025",
    title: "Movement polishing",
    text:
      "Refino do movementHelper, agora é possível ir e voltar no tabuleiro, com marcações visuais de onde é possível se movimentar (respeitando as outras peças). Adicionada animação de movimento e contador regressivo. Fim da Etapa 2 (movimentação).",
  },
  {
    date: "15–17/11/2025",
    title: "Pre-game flow",
    text:
      "Início da Etapa 3 (pré-jogo). Adicionadas splash screen, tela inicial com botão “New Game” e tela de pré-jogo. Agora é possível customizar a partida, escolhendo entre modo clássico ou agressivo. Regra anti-complô criada e adicionada. Mecânica de definição de turno e informação passada ao tabuleiro, tornando o início do jogo dinâmico, definido na sorte na tela de pré-jogo. Fim da Etapa 3.",
  },
  {
    date: "Next steps",
    title: "Combat system",
    text:
      "Início da Etapa 4 (mecânica de ataque e defesa), definindo regras de combate, resolução de conflitos entre exércitos e balanceamento geral da partida.",
  },
];

// NotixMe – timeline placeholder completa
const notixTimeline = [
  {
    date: "2024",
    title: "Core reminder engine",
    text:
      "Base scheduling logic implemented, allowing creation, edition and cancellation of reminders using local notifications.",
  },
  {
    date: "2025",
    title: "Snooze & statuses",
    text:
      "Snooze actions (5–15 minutes) connected to notification actions. Status flow created (Scheduled → In Progress → Completed) with automatic and manual updates.",
  },
  {
    date: "Next steps",
    title: "Profiles & random mode",
    text:
      "Upcoming work focused on Profiles/Context mode, full recurrence engine and random reminders with minimum interval logic to support long-term habit building.",
  },
];

// ---------------------- Inicialização ----------------------

document.addEventListener("DOMContentLoaded", () => {
  createTimeline("tr3ta-timeline", tr3taTimeline);
  createTimeline("notix-timeline", notixTimeline);
});
