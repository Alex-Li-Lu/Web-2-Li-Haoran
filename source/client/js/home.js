document.addEventListener("DOMContentLoaded", async () => {
  const grid = document.querySelector("#featured-events");
  const renderIncident = (event) => {
    const fallback = `[C · ${escapeText(event.category).toUpperCase()} INCIDENT]`;
    const media = event.image
      ? `<img src="/assets/${encodeURIComponent(event.image)}" alt="${escapeText(event.title)}" loading="lazy" data-fallback="${fallback}" onerror="this.replaceWith(Object.assign(document.createElement('span'), { textContent: this.dataset.fallback }))">`
      : fallback;
    return `<article class="incident-row"><div class="incident-thumb">${media}</div><div class="incident-info"><span class="status">${escapeText(event.category)}</span><span class="status">${escapeText(event.status)}</span><h3>${escapeText(event.title)}</h3><p class="meta">${escapeText(event.date)} · ${escapeText(event.location)}</p></div><a class="button secondary" href="event.html?id=${event.id}">Open</a></article>`;
  };
  try {
    const events = await api("/api/events/featured");
    grid.innerHTML = events.map(renderIncident).join("");
  } catch {
    showState(grid, "Incidents could not load. Please try again.");
  }
});
