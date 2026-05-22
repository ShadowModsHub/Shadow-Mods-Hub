// ============================================================
//  Shadow Mods Hub — script.js
//  HOW TO ADD A MOD:
//  1. Copy one object inside the MODS array below
//  2. Fill in title, image, description, downloadUrl, etc.
//  3. Save the file — cards appear automatically on reload
// ============================================================

const MODS = [
  // ── ANIME MODS ──────────────────────────────────────────
  {
    title: "Naruto & Sasuke Skin Pack",
    game: "GTA SA",
    category: "Anime",
    tag: "🔥 Hot",
    image: "https://placehold.co/400x220/1a0030/ff003c?text=Naruto+Skin+Pack&font=orbitron",
    description:
      "Replace CJ with Naruto or Sasuke — complete with custom textures, headband, and kunai weapon model. 2 skins included.",
    downloadUrl: "https://www.gtainside.com/",
    downloads: "22.4K",
    rating: 5.0,
    version: "v2.1",
    size: "18 MB",
  },
  {
    title: "Dragon Ball Z Goku Pack",
    game: "GTA SA",
    category: "Anime",
    tag: "⭐ Top Rated",
    image: "https://www.gtainside.com/downloads/picr/2026-05/thb_1778609670_preview.jpg",
    description:"Fight powerfully like GTA 5. This mod is from Silk Team's source material.Full transformations, Full skills, full power, ally Ai, enemy AI.Please see installation and control instructions in the mod file after you download it.",
    downloadUrl: "https://fileservice.gtainside.com/downloads/ftpm/1779376908_DBALL Z.rar",
    downloads: "19.1K",
    rating: 4.9,
    version: "v1.4",
    size: "	53.438 MB",
  },
  {
    title: "Demon Slayer Tanjiro Skin",
    game: "GTA SA",
    category: "Anime",
    tag: "🆕 New",
    image: "https://placehold.co/400x220/0a001a/ff0080?text=Tanjiro+Skin&font=orbitron",
    description:
      "High-quality Tanjiro Kamado skin with Nichirin sword weapon replacement and Water Breathing visual effect overlay.",
    downloadUrl: "https://www.gtainside.com/",
    downloads: "11.7K",
    rating: 4.8,
    version: "v1.0",
    size: "15 MB",
  },
  // ── CAR MODS ─────────────────────────────────────────────
  {
    title: "JDM Neon Street Pack",
    game: "Vice City",
    category: "Cars",
    tag: "⚡ Popular",
    image: "https://placehold.co/400x220/001020/00d4ff?text=JDM+Pack&font=orbitron",
    description:
      "12 authentic JDM cars — Supra, RX-7, Evo IX — with neon underglow, custom handling lines and engine sound replacements.",
    downloadUrl: "https://www.gtainside.com/",
    downloads: "14.8K",
    rating: 4.8,
    version: "v3.0",
    size: "42 MB",
  },
  {
    title: "Cyberpunk Bike Collection",
    game: "GTA SA",
    category: "Cars",
    tag: "🎨 Visual",
    image: "https://placehold.co/400x220/001a10/00ff88?text=Cyber+Bikes&font=orbitron",
    description:
      "5 futuristic motorcycles inspired by Cyberpunk 2077 — light trails, LED chassis glow and custom wheel textures.",
    downloadUrl: "https://www.gtainside.com/",
    downloads: "8.3K",
    rating: 4.7,
    version: "v1.2",
    size: "31 MB",
  },
  // ── GRAPHICS MODS ────────────────────────────────────────
  {
    title: "CyberpunkCity ENB Shader",
    game: "GTA SA",
    category: "Graphics",
    tag: "🏆 Best",
    image: "https://placehold.co/400x220/000a1a/00d4ff?text=ENB+Shader&font=orbitron",
    description:
      "Transforms Los Santos into a rain-soaked neon cyberpunk city. Includes bloom, volumetric fog, rain reflections and chromatic aberration.",
    downloadUrl: "https://www.gtainside.com/",
    downloads: "28.5K",
    rating: 5.0,
    version: "v4.1",
    size: "90 MB",
  },
  {
    title: "Neon Vice Night ENB",
    game: "Vice City",
    category: "Graphics",
    tag: "🌃 Night",
    image: "https://placehold.co/400x220/1a000a/ff003c?text=Vice+ENB&font=orbitron",
    description:
      "Deep neon nights for Vice City. Recolors ambient lighting, adds lens flare to street lamps and intensifies sunset/sunrise colours.",
    downloadUrl: "https://www.gtainside.com/",
    downloads: "16.2K",
    rating: 4.9,
    version: "v2.3",
    size: "55 MB",
  },
  // ── WEAPON MODS ──────────────────────────────────────────
  {
    title: "Katana & Kunai Pack",
    game: "GTA SA",
    category: "Weapons",
    tag: "⚔️ Anime",
    image: "https://placehold.co/400x220/100010/ff00ff?text=Katana+Pack&font=orbitron",
    description:
      "Replaces melee weapons with anime-style katanas and kunai. Includes glowing blade textures and custom slash sound effects.",
    downloadUrl: "https://www.gtainside.com/",
    downloads: "9.5K",
    rating: 4.7,
    version: "v1.1",
    size: "12 MB",
  },
  // ── MAP MODS ─────────────────────────────────────────────
  {
    title: "Tokyo Downtown Map Add-on",
    game: "GTA SA",
    category: "Maps",
    tag: "🗺️ Map",
    image: "https://placehold.co/400x220/001510/00ffcc?text=Tokyo+Map&font=orbitron",
    description:
      "Adds a detailed Tokyo district to San Andreas — explore neon-lit streets, convenience stores, arcades and a functioning train station.",
    downloadUrl: "https://www.gtainside.com/",
    downloads: "7.1K",
    rating: 4.6,
    version: "v0.9",
    size: "68 MB",
  },
];

// ============================================================
//  RENDER ENGINE — no need to edit below unless customising
// ============================================================

/**
 * Renders star icons based on a numeric rating (0–5, supports .5)
 */
function renderStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars += '<span class="star full">★</span>';
    else if (rating >= i - 0.5) stars += '<span class="star half">★</span>';
    else stars += '<span class="star empty">☆</span>';
  }
  return `<span class="stars">${stars}</span>`;
}

/**
 * Builds one mod card HTML string from a mod object
 */
function buildCard(mod) {
  const categoryColors = {
    Anime:    { border: "#ff00ff", glow: "rgba(255,0,255,0.18)", badge: "#ff00ff" },
    Cars:     { border: "#00d4ff", glow: "rgba(0,212,255,0.18)",  badge: "#00d4ff" },
    Graphics: { border: "#9b00ff", glow: "rgba(155,0,255,0.18)", badge: "#9b00ff" },
    Weapons:  { border: "#ff003c", glow: "rgba(255,0,60,0.18)",  badge: "#ff003c" },
    Maps:     { border: "#00ff88", glow: "rgba(0,255,136,0.18)", badge: "#00ff88" },
    Scripts:  { border: "#ffcc00", glow: "rgba(255,204,0,0.18)", badge: "#ffcc00" },
    Skins:    { border: "#ff0080", glow: "rgba(255,0,128,0.18)", badge: "#ff0080" },
  };
  const col = categoryColors[mod.category] || categoryColors["Anime"];

  return `
  <div class="mod-card smh-card reveal"
       data-category="${mod.category}"
       data-game="${mod.game}"
       style="--card-border:${col.border};--card-glow:${col.glow}">

    <!-- Thumbnail -->
    <div class="mod-thumb">
      <img src="${mod.image}"
           alt="${mod.title}"
           loading="lazy"
           onerror="this.src='https://placehold.co/400x220/0a0a18/9b00ff?text=No+Image&font=orbitron'"/>
      <span class="mod-thumb-overlay">${mod.tag || mod.category}</span>
      <span class="mod-version">${mod.version || "v1.0"}</span>
    </div>

    <!-- Body -->
    <div class="mod-card-body">
      <div class="mod-top-row">
        <span class="mod-game-tag">${mod.game}</span>
        <span class="mod-cat-badge" style="border-color:${col.badge};color:${col.badge}">${mod.category}</span>
      </div>

      <h3 class="mod-title">${mod.title}</h3>
      <p class="mod-desc">${mod.description}</p>

      <div class="mod-rating-row">
        ${renderStars(mod.rating)}
        <span class="mod-rating-num">${mod.rating.toFixed(1)}</span>
      </div>

      <div class="mod-footer">
        <div class="mod-meta">
          <span title="Downloads">⬇ ${mod.downloads}</span>
          <span title="File size">💾 ${mod.size || "?"}</span>
        </div>
        <a href="${mod.downloadUrl}"
           target="_blank"
           rel="noopener noreferrer"
           class="btn-download"
           aria-label="Download ${mod.title}">
          <span>⬇</span><span>Download</span>
        </a>
      </div>
    </div>
  </div>`;
}

/**
 * Injects all mod cards into #modsGrid
 * Accepts an optional filtered array; defaults to full MODS list
 */
function renderMods(list) {
  const grid = document.getElementById("modsGrid");
  if (!grid) return;

  const source = list || MODS;

  if (source.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">🔍</div>
        <p>No mods found matching your filter.</p>
        <button class="btn-ghost" onclick="renderMods()">Show All Mods</button>
      </div>`;
    return;
  }

  grid.innerHTML = source.map(buildCard).join("");

  // Trigger reveal animation on newly-inserted cards
  requestAnimationFrame(() => {
    grid.querySelectorAll(".reveal").forEach((el, i) => {
      setTimeout(() => el.classList.add("in-view"), i * 60);
    });
  });
}

// ── Filter helpers ──────────────────────────────────────────

/** Filter by category name */
function filterByCategory(category) {
  const filtered = MODS.filter(m => m.category === category);
  renderMods(filtered);
}

/** Filter by game ("GTA SA" | "Vice City") */
function filterByGame(game) {
  const filtered = MODS.filter(m => m.game === game);
  renderMods(filtered);
}

/** Live search filter (title + description) */
function filterBySearch(query) {
  const q = query.toLowerCase().trim();
  if (!q) { renderMods(); return; }
  const filtered = MODS.filter(
    m =>
      m.title.toLowerCase().includes(q) ||
      m.description.toLowerCase().includes(q) ||
      m.category.toLowerCase().includes(q) ||
      m.game.toLowerCase().includes(q)
  );
  renderMods(filtered);
}

// ── Wire up search inputs ───────────────────────────────────
function attachSearchListeners() {
  const ids = ["main-search", "nav-search-input"];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("input", () => filterBySearch(el.value));
    el.addEventListener("keydown", e => {
      if (e.key === "Enter") filterBySearch(el.value);
    });
  });
}

// ── Category card clicks ────────────────────────────────────
function attachCategoryListeners() {
  document.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => {
      const cat = card.querySelector(".cat-name")?.textContent?.split("&")[0].trim();
      if (!cat) return;
      // Map display names → data category keys
      const map = {
        "Skins": "Skins", "Cars": "Cars", "Graphics": "Graphics",
        "Weapons": "Weapons", "Maps": "Maps", "Scripts": "Scripts",
        "Anime Packs": "Anime", "Missions": "Missions",
        "Skins ": "Skins",
      };
      const key = Object.entries(map).find(([k]) => cat.includes(k));
      if (key) {
        filterByCategory(key[1]);
        document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// ── Init ────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderMods();
  attachSearchListeners();
  attachCategoryListeners();
});
