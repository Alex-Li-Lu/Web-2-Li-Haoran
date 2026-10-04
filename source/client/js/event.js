document.addEventListener("DOMContentLoaded", async () => {
  const id = new URLSearchParams(location.search).get("id");
  const root = document.querySelector("#event-detail");
  const label = "C";
  if (!id) return showState(root, "Event ID is missing.");
  try {
    const event = await api(`/api/events/${encodeURIComponent(id)}`);
    const image = (name, alt) =>
      `<img src="/assets/${encodeURIComponent(name)}" alt="${escapeText(alt)}" loading="lazy" data-fallback="[${label} · IMAGE UNAVAILABLE]" onerror="this.replaceWith(Object.assign(document.createElement('span'), { textContent: this.dataset.fallback }))">`;
    const gallery = (event.gallery || [event.image])
      .filter(Boolean)
      .map((name) => `<figure class="briefing-shot">${image(name, event.title)}</figure>`)
      .join("");
    const suspended = event.status === 'suspended';
    const register = suspended
      ? '<span class="button" aria-disabled="true">Register interest</span>'
      : `<a class="button" href="registration-placeholder.html?id=${event.id}">Register interest</a>`;
    const suspendedNote = suspended
      ? '<p class="notice">Registration is closed — this incident is currently suspended.</p>'
      : '';
    root.innerHTML = `<header class="briefing-head"><span class="status">${escapeText(event.status)}</span><h1>${escapeText(event.title)}</h1></header><div class="briefing-strip"><div class="briefing-fact"><span>Date</span><strong>${escapeText(event.date)}</strong></div><div class="briefing-fact"><span>Location</span><strong>${escapeText(event.location)}</strong></div><div class="briefing-fact"><span>Category</span><strong>${escapeText(event.category)}</strong></div><div class="briefing-fact"><span>Access</span><strong>Community supported</strong></div><div class="briefing-fact"><span>Ticket price</span><strong>${escapeText(event.price)}</strong></div></div><figure class="briefing-media">${image(event.image, event.title)}</figure><div class="briefing-copy"><p class="detail-copy">${escapeText(event.description)}</p><h2 class="eyebrow">Charitable purpose</h2><p class="detail-copy">${escapeText(event.purpose)}</p>${register}${suspendedNote}</div><div class="briefing-gallery">${gallery}</div>`;
  } catch {
    showState(root, "Event not found. Return to search and choose another event.");
  }
});
