document.addEventListener("DOMContentLoaded", async () => {
  const form = document.querySelector("#search-form");
  const grid = document.querySelector("#results");
  const count = document.querySelector("#result-count");
  const renderRow = (event) =>
    `<article class="dispatch-row"><span class="dispatch-ref">#${event.id}</span><div class="dispatch-info"><h3>${escapeText(event.title)}</h3><p class="meta">${escapeText(event.date)} · ${escapeText(event.location)} · ${escapeText(event.category)}</p></div><span class="status">${escapeText(event.status)}</span><a class="button secondary" href="event.html?id=${event.id}">Open</a></article>`;
  const load = async () => {
    showState(grid, "Loading dispatch list…");
    const params = new URLSearchParams(new FormData(form));
    try {
      const events = await api(`/api/events/search?${params}`);
      count.textContent = `${events.length} incidents found`;
      grid.innerHTML = events.length
        ? events.map(renderRow).join("")
        : `<div class="state" role="status"><img class="state-illustration" src="/assets/empty-state.svg" alt="" width="160" height="120"><p>No incidents match your filters. Try another keyword or category.</p></div>`;
    } catch {
      grid.innerHTML =
        '<div class="dispatch-empty" role="alert">Dispatch unavailable. <button class="button" id="retry" type="button">Retry</button></div>';
      document.querySelector("#retry").onclick = load;
    }
  };
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    load();
  });
  form.addEventListener("reset", () => window.setTimeout(load, 0));
  const incoming = new URLSearchParams(location.search);
  ["keyword", "date", "location", "category"].forEach((name) => {
    const control = form.elements[name];
    if (control && incoming.get(name)) control.value = incoming.get(name);
  });
  load();
});
