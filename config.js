// ============================================================
// EDIT ME. This is the only file you should need to touch to
// update elo cutoffs, colors, or the squad roster.
// ============================================================

// Each tier has a color and a list of sub-tiers with their
// starting elo. Diamante has no sub-tiers and is marked `open: true`
// since it has no upper elo ceiling — nothing beats it, so its bar
// segment just extends off the end (see OPEN_TOP_WIDTH below).
// Below 720 elo you're "Estaño 0", not Estaño I — it's included as a
// normal sub-tier starting at 0.
const RANK_TIERS = [
  {
    tier: "Estaño",
    color: "#355536",
    subtiers: [
      { name: "Estaño 0", elo: 0 },
      { name: "Estaño I", elo: 720 },
      { name: "Estaño II", elo: 758 },
      { name: "Estaño III", elo: 796 },
      { name: "Estaño IV", elo: 834 },
      { name: "Estaño V", elo: 872 },
    ],
  },
  {
    tier: "Bronce",
    color: "#684c26",
    subtiers: [
      { name: "Bronce I", elo: 910 },
      { name: "Bronce II", elo: 954 },
      { name: "Bronce III", elo: 998 },
      { name: "Bronce IV", elo: 1042 },
      { name: "Bronce V", elo: 1086 },
    ],
  },
  {
    tier: "Plata",
    color: "#c5c5c5",
    subtiers: [
      { name: "Plata I", elo: 1130 },
      { name: "Plata II", elo: 1182 },
      { name: "Plata III", elo: 1234 },
      { name: "Plata IV", elo: 1286 },
      { name: "Plata V", elo: 1338 },
    ],
  },
  {
    tier: "Oro",
    color: "#f0c754",
    subtiers: [
      { name: "Oro I", elo: 1390 },
      { name: "Oro II", elo: 1448 },
      { name: "Oro III", elo: 1506 },
      { name: "Oro IV", elo: 1564 },
      { name: "Oro V", elo: 1622 },
    ],
  },
  {
    tier: "Platino",
    color: "#59a7d9",
    subtiers: [
      { name: "Platino I", elo: 1680 },
      { name: "Platino II", elo: 1744 },
      { name: "Platino III", elo: 1808 },
      { name: "Platino IV", elo: 1872 },
      { name: "Platino V", elo: 1936 },
    ],
  },
  {
    tier: "Diamante",
    color: "#3e249a",
    subtiers: [{ name: "Diamante", elo: 2000, open: true }],
  },
];

// Visual-only: how much extra bar space (in elo-equivalent units)
// to draw for Diamante's open-ended top segment, since it has no
// real ceiling to scale against. Bump this up if it looks cramped.
const OPEN_TOP_WIDTH = 400;

// Estaño 0 exists as a technicality (see "Estaño 0" above) but
// nobody's actual rank journey starts there — Estaño I (720) is the
// real baseline for the big-picture ladder and the squad
// leaderboard. The zoomed view still recognizes Estaño 0 on its own.
const DISPLAY_BASELINE = 720;

// ------------------------------------------------------------
// Squad roster (page 2) now lives in roster.json, next to this
// file — it's just an array of { displayName, brawlhalla_id }.
// rangosdelggppi.html fetches live elo for each ID straight from the
// Brawlhalla API, so nothing player-related belongs in here
// anymore.
// ------------------------------------------------------------
