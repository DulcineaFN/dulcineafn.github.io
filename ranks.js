// Shared helpers built on top of RANK_TIERS from config.js

function flattenSubtiers() {
  const flat = [];
  for (const tier of RANK_TIERS) {
    for (const sub of tier.subtiers) {
      flat.push({
        name: sub.name,
        elo: sub.elo,
        tier: tier.tier,
        color: tier.color,
        open: !!sub.open,
      });
    }
  }
  return flat;
}

// Returns { current, next } sub-tier objects for a given elo.
// `next` is null if elo is in the open-ended Diamante segment.
function getSubtierBracket(elo) {
  const flat = flattenSubtiers();
  let current = flat[0];
  let next = null;
  for (let i = 0; i < flat.length; i++) {
    if (elo >= flat[i].elo) {
      current = flat[i];
      next = flat[i + 1] || null;
    }
  }
  return { current, next };
}

// Single source of truth for the progress sentence — used by both
// the zoomed view and the big-picture view so they can never say
// two different things about the same elo again.
function buildStatusMessage(elo) {
  const { current, next } = getSubtierBracket(elo);
  const above = elo - current.elo;
  if (next) {
    const need = next.elo - elo;
    return `Llevas <strong>${above}</strong> elo dentro de <strong>${current.name}</strong> — te faltan <strong>${need}</strong> para llegar a <strong>${next.name}</strong>.`;
  }
  return `Llevas <strong>${above}</strong> elo dentro de <strong>${current.name}</strong>. No hay techo desde aquí — solo la clasificación.`;
}

function getTierColor(tierName) {
  const t = RANK_TIERS.find((t) => t.tier === tierName);
  return t ? t.color : "#888888";
}

function formatRankLabel(elo) {
  const { current } = getSubtierBracket(elo);
  return current.name;
}
