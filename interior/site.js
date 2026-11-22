"use strict";
(() => {
  const script = document.currentScript;
  if (!script) return;
  const source = new URL(script.src);
  const root = new URL("../", source);
  const asset = path => new URL(path, root).href;

  // Refresh the image URL on the complete menu page so visitors receive the
  // updated Lungo background instead of an earlier browser-cached copy.
  document.querySelectorAll('img[alt="Лунго"]').forEach(photo => {
    photo.src = asset("assets/drinks/lungo-zadu-20261119.webp?v=20261122-lungo-background");
  });

  // The bar page is a separate view of the same menu. Keep Lungo's photo
  // visible there as well as on the complete menu page.
  const lungoCard = [...document.querySelectorAll(".bar-page .menu-item")]
    .find(card => card.querySelector("h3")?.textContent.trim() === "Лунго");
  const lungoPlaceholder = lungoCard?.querySelector(".item-photo.menu-photo-placeholder");
  if (lungoPlaceholder) {
    const photo = document.createElement("img");
    photo.src = asset("assets/drinks/lungo-zadu-20261119.webp?v=20261122-lungo-background");
    photo.alt = "Лунго";
    photo.width = 1024;
    photo.height = 1024;
    photo.loading = "eager";
    photo.decoding = "async";
    const photoBox = document.createElement("div");
    photoBox.className = "item-photo original-dish-photo";
    photoBox.append(photo);
    lungoPlaceholder.replaceWith(photoBox);
  }

  fetch(new URL("menu/menu-data.json", source), {cache: "no-cache"})
    .then(response => response.ok ? response.json() : null)
    .then(data => {
      if (!data) return;
      // Set location.phone to the real number; null stays invisible.
      const phone = typeof data.location?.phone === "string" ? data.location.phone.trim() : "";
      if (phone && /^[+\d\s()-]+$/.test(phone) && phone.replace(/\D/g, "").length >= 7) {
        document.querySelectorAll("[data-site-phone]").forEach(link => {
          link.textContent = phone;
          link.href = "tel:" + phone.replace(/[^+\d]/g, "");
          link.hidden = false;
        });
      }
      if (data.branding?.logo) {
        document.querySelectorAll("[data-brand-logo]").forEach(logo => { logo.src = asset(data.branding.logo); });
      }
      const photo = document.querySelector("[data-interior-photo]");
      const placeholder = document.querySelector("[data-interior-placeholder]");
      if (photo && data.interior?.photo) {
        photo.addEventListener("load", () => {
          photo.hidden = false;
          if (placeholder) placeholder.hidden = true;
        }, {once: true});
        photo.src = asset(data.interior.photo);
        photo.alt = data.interior.photo_alt || "Интерьер кофейни ZÁDU";
      }
    })
    .catch(() => { /* Rendered pages and navigation still work without this fetch. */ });
})();
