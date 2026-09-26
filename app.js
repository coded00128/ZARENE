/* ZARÉN ELIXIR — frontend-only store logic.
   Single config location for brand; cart/wishlist in localStorage. */

const BRAND = {
  name: "ZARÉN ELIXIR",
  phone: "08127680362",
  whatsapp: "https://wa.me/2348127680362",
  locations: "Osogbo • Ilorin",
};

const WA_NUMBER = "2348127680362"; // 08127680362 in international format — single definition at top.

const PRODUCTS = (window.PRODUCTS && window.PRODUCTS.length ? window.PRODUCTS : []);
const VISIBLE = PRODUCTS.filter((p) => !p.hidden);

const SIGNATURE_IDS = ["wa-khamrah-waha", "wa-khamra", "wa-mosuf100", "wa-clubenuit"];

function setupFeaturedCarousel() {
  const track = document.getElementById("featuredProductsTrack");
  const prev = document.getElementById("featuredPrev");
  const next = document.getElementById("featuredNext");
  if (!track || !prev || !next) return;

  const scrollAmount = () => Math.max(track.clientWidth * 0.75, 260);

  const scrollByDir = (dir) => track.scrollBy({ left: dir * scrollAmount(), behavior: "smooth" });
  prev.addEventListener("click", () => scrollByDir(-1));
  next.addEventListener("click", () => scrollByDir(1));

  let isDown = false;
  let didDrag = false;
  let startX = 0;
  let startScrollLeft = 0;

  // Suppress the click that follows a real drag (desktop mouse fix).
  track.addEventListener("click", (event) => {
    if (didDrag) {
      event.preventDefault();
      event.stopPropagation();
      didDrag = false;
    }
  }, true);

  const onPointerDown = (event) => {
    // Mouse-only drag: touch/pen use native horizontal swipe (custom
    // pointer-capture dragging would hijack vertical page scroll on mobile).
    if (event.pointerType !== "mouse") return;
    if (event.button !== 0) return;
    // Don't hijack clicks on interactive children until we know it's a drag.
    isDown = true;
    didDrag = false;
    startX = event.clientX;
    startScrollLeft = track.scrollLeft;
  };

  const onPointerMove = (event) => {
    if (!isDown) return;
    const delta = event.clientX - startX;
    if (!didDrag && Math.abs(delta) > 6) {
      didDrag = true;
      track.classList.add("dragging");
      try { track.setPointerCapture(event.pointerId); } catch { /* noop */ }
    }
    if (didDrag) {
      track.scrollLeft = startScrollLeft - delta;
    }
  };

  const stopDrag = (event) => {
    if (!isDown) return;
    isDown = false;
    track.classList.remove("dragging");
    try { if (event && event.pointerId !== undefined) track.releasePointerCapture(event.pointerId); } catch { /* noop */ }
    // Keep didDrag=true briefly so the follow-up click is swallowed.
    if (didDrag) setTimeout(() => { didDrag = false; }, 50);
  };

  track.addEventListener("pointerdown", onPointerDown);
  track.addEventListener("pointermove", onPointerMove);
  track.addEventListener("pointerup", stopDrag);
  track.addEventListener("pointercancel", stopDrag);
}

/* ---------- helpers ---------- */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const naira = (n) => "₦" + n.toLocaleString("en-NG");
const load = (k, f) => { try { return JSON.parse(localStorage.getItem(k)) ?? f; } catch { return f; } };
const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));

let cart = load("zaren_cart", {});       // {id: qty}
let wishlist = load("zaren_wish", []);   // [id]
const byId = (id) => PRODUCTS.find((p) => p.id === id);
const priceLabel = (p) => p.manualPrice || (p.price ? naira(p.price) : "Ask for price");

/* normalize entries from products.js — guarded so an empty catalogue never crashes */
if (PRODUCTS.length) {
  for (const p of PRODUCTS) {
    p.tags = p.tags || [];
    p.gallery = p.gallery && p.gallery.length ? p.gallery : [p.img];
    p.notes = p.notes || p.type || p.cat || "Fragrance";
    p.searchText = [...new Set([...(p.searchText || []), p.name, p.brand, p.type, p.size, p.cat, ...p.tags]
      .filter(Boolean).map((s) => String(s).toLowerCase()))];
  }
}

/* ---------- toast ---------- */
let toastT;
function toast(msg) {
  const t = $("#toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.remove("show"), 2600);
}

/* ---------- product cards ---------- */
function stars(r) {
  return `★★★★★ <span>${r.toFixed(1)}</span>`;
}
function cardHTML(p, showType = false) {
  const wished = wishlist.includes(p.id) ? "active" : "";
  const priceValue = priceLabel(p);
  return `
  <article class="product reveal visible" data-id="${p.id}">
    <div class="product-media">
      <img src="${p.img}" alt="${p.name} — ${p.type}" loading="lazy" draggable="false" />
      ${p.badge ? `<span class="badge ${p.badge === "Sale" ? "sale" : ""}">${p.badge}</span>` : ""}
      <button class="wish ${wished}" data-wish="${p.id}" aria-label="Add ${p.name} to wishlist">♥</button>
      <button class="quick" data-quick="${p.id}">Quick view</button>
    </div>
    <div class="product-body">
      <p class="product-type">${showType ? p.type : p.notes}</p>
      <h3>${p.name}</h3>
      ${showType ? `<div class="stars">Featured item</div>` : `<p class="product-desc">${p.desc}</p>`}
      <div class="price-row"><span class="price">${priceValue}</span></div>
      <button class="add" data-add="${p.id}">Add to Cart</button>
    </div>
  </article>`;
}

function renderSignature() {
  const grid = $("#signatureGrid");
  if (!grid) return;
  if (!VISIBLE.length) {
    grid.innerHTML = `<div class="empty"><p>Catalogue loading — please check back shortly.</p></div>`;
    return;
  }
  const ids = SIGNATURE_IDS.map((id) => byId(id)).filter((p) => p && !p.hidden);
  const picks = (ids.length ? ids : VISIBLE.slice(0, 4));
  grid.innerHTML = picks.map((target) => cardHTML(target)).join("");
}

function renderFeatured() {
  const track = $("#featuredProductsTrack");
  if (!track) return;
  if (!VISIBLE.length) {
    track.innerHTML = `<div class="empty"><p>Catalogue loading — please check back shortly.</p></div>`;
    return;
  }
  const featured = VISIBLE.slice(0, 12);
  track.innerHTML = featured.map((p) => cardHTML(p, false)).join("");
}

let bestFilter = "all";
let bestShown = 24;
const BEST_STEP = 24;

function renderBest(filter, append = false) {
  if (typeof filter === "string" && filter) {
    if (filter !== bestFilter) { bestFilter = filter; bestShown = 24; }
    else { bestFilter = filter; }
  }
  void append;
  const grid = $("#bestGrid");
  if (!grid) return;
  if (!VISIBLE.length) {
    grid.innerHTML = `<div class="empty"><p>Catalogue loading — please check back shortly.</p></div>`;
    return;
  }
  const list = VISIBLE.filter((p) => bestFilter === "all" || p.cat === bestFilter);
  const finalList = list.length ? list : VISIBLE;
  if (bestShown > finalList.length) bestShown = finalList.length;
  if (bestShown < BEST_STEP && finalList.length >= BEST_STEP) bestShown = Math.min(BEST_STEP, finalList.length);
  const shown = finalList.slice(0, bestShown);
  const count = `<p class="showing-count" style="color:var(--muted);font-size:.9rem;text-align:center;margin-top:14px">Showing ${shown.length} of ${finalList.length}</p>`;
  let controls = "";
  if (bestShown < finalList.length) {
    const remaining = finalList.length - bestShown;
    controls = `<div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:18px">` +
      `<button class="btn btn-gold" id="bestMoreBtn">Show more (${remaining} remaining)</button>` +
      `<button class="btn btn-ghost" id="bestAllBtn">View all ${finalList.length}</button>` +
      `</div>`;
  } else if (finalList.length > BEST_STEP) {
    controls = `<div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:18px">` +
      `<button class="btn btn-ghost" id="bestLessBtn">Show less</button>` +
      `</div>`;
  }
  grid.innerHTML = shown.map((p) => cardHTML(p, true)).join("") + count + controls;
  const moreBtn = document.getElementById("bestMoreBtn");
  if (moreBtn) moreBtn.onclick = () => {
    bestShown = Math.min(bestShown + BEST_STEP, finalList.length);
    renderBest();
    try { grid.scrollIntoView({ behavior: "smooth", block: "nearest" }); } catch {}
  };
  const allBtn = document.getElementById("bestAllBtn");
  if (allBtn) allBtn.onclick = () => {
    bestShown = finalList.length;
    renderBest();
  };
  const lessBtn = document.getElementById("bestLessBtn");
  if (lessBtn) lessBtn.onclick = () => {
    bestShown = BEST_STEP;
    renderBest();
    try {
      const bs = document.querySelector("#bestsellers");
      if (bs) bs.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch {}
  };
}

/* ---------- cart ---------- */
function cartQty() { return Object.values(cart).reduce((a, b) => a + b, 0); }
function cartSum() { return Object.entries(cart).reduce((s, [id, q]) => s + ((byId(id) || {}).price || 0) * q, 0); } // null/undefined price counts as 0

function bump(el) { if (!el) return; el.classList.add("pop"); setTimeout(() => el.classList.remove("pop"), 250); }

function renderCart() {
  const box = $("#cartItems");
  if (!box) return;
  const ids = Object.keys(cart);
  const cartCount = $("#cartCount");
  const drawerCount = $("#cartDrawerCount");
  const totalEl = $("#cartTotal");
  if (cartCount) cartCount.textContent = cartQty();
  if (drawerCount) drawerCount.textContent = `(${cartQty()})`;
  if (totalEl) totalEl.textContent = naira(cartSum());
  if (!ids.length) {
    box.innerHTML = `<div class="empty"><p style="font-family:var(--serif);font-size:1.4rem;color:var(--navy-900)">Your bag is empty.</p><p>Your signature scent is waiting.</p></div>`;
    return;
  }
  box.innerHTML = ids.map((id) => {
    const p = byId(id); const q = cart[id];
    return `<div class="cart-item">
      <img src="${p.img}" alt="${p.name}" />
      <div><h4>${p.name}</h4><small>${p.type} · ${priceLabel(p)}</small>
        <div class="qty">
          <button data-dec="${id}" aria-label="Decrease">−</button><span>${q}</span><button data-inc="${id}" aria-label="Increase">+</button>
        </div>
      </div>
      <button class="remove" data-remove="${id}">Remove</button>
    </div>`;
  }).join("");
}

function renderWish() {
  const box = $("#wishItems");
  if (!box) return;
  const wc = $("#wishlistCount");
  const wdc = $("#wishDrawerCount");
  if (wc) wc.textContent = wishlist.length;
  if (wdc) wdc.textContent = `(${wishlist.length})`;
  if (!wishlist.length) {
    box.innerHTML = `<div class="empty"><p style="font-family:var(--serif);font-size:1.4rem;color:var(--navy-900)">No favourites yet.</p><p>Tap the ♥ on any scent to save it here.</p></div>`;
    return;
  }
  box.innerHTML = wishlist.map((id) => {
    const p = byId(id);
    return `<div class="wish-item">
      <img src="${p.img}" alt="${p.name}" />
      <div><h4>${p.name}</h4><small>${priceLabel(p)}</small></div>
      <button class="remove" data-add="${id}">Move to bag</button>
    </div>`;
  }).join("");
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  save("zaren_cart", cart);
  renderCart();
  bump($("#cartCount"));
  toast(`${byId(id).name} added to your bag`);
}
function toggleWish(id) {
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter((x) => x !== id);
    toast(`${byId(id).name} removed from wishlist`);
  } else {
    wishlist.push(id);
    bump($("#wishlistCount"));
    toast(`${byId(id).name} saved to wishlist`);
  }
  save("zaren_wish", wishlist);
  renderWish();
  $$(`[data-wish="${id}"]`).forEach((b) => b.classList.toggle("active", wishlist.includes(id)));
}

/* ---------- drawers / overlays ---------- */
function openDrawer(which) {
  closeAll();
  const d = $(which);
  if (d) d.classList.add("open");
  const scrim = $("#scrim");
  if (scrim) scrim.classList.add("show");
  document.body.style.overflow = "hidden";
}
function closeAll() {
  ["#cartDrawer", "#wishDrawer", "#mobileMenu"].forEach((s) => { const el = $(s); if (el) el.classList.remove("open"); });
  const so = $("#searchOverlay");
  if (so) so.classList.remove("open");
  const qm = $("#quickModal");
  if (qm) qm.classList.remove("open");
  const scrim = $("#scrim");
  if (scrim) scrim.classList.remove("show");
  document.body.style.overflow = "";
}

/* ---------- quick view ---------- */
function openQuick(id) {
  const p = byId(id);
  if (!p) return;
  closeAll();
  const modalPrice = priceLabel(p);
  const gallery = p.gallery && p.gallery.length ? p.gallery : [p.img];
  $("#quickCard").innerHTML = `
    <button class="close-x" id="quickClose" style="position:absolute;top:12px;right:12px;z-index:2" aria-label="Close">✕</button>
    <div class="quick-gallery">
      <img id="quickHeroImg" src="${gallery[0]}" alt="${p.name}" />
      ${gallery.length > 1 ? `<div class="thumb-row">${gallery.map((g, i) =>
        `<img class="thumb ${i === 0 ? "active" : ""}" data-thumb="${g}" src="${g}" alt="${p.name} view ${i + 1}" loading="lazy" />`).join("")}</div>` : ""}
    </div>
    <div class="modal-info">
      <p class="eyebrow">${p.brand || p.type || "ZARÉN ELIXIR"}</p>
      <h3>${p.name}</h3>
      ${p.priceNote ? `<p class="price-note">${p.priceNote}</p>` : ""}
      <p style="margin-top:10px;color:var(--muted)">${p.desc || ""}</p>
      <div class="notes">
        <div><strong>Product — </strong>${p.name}</div>
        ${p.size ? `<div><strong>Size — </strong>${p.size}</div>` : ""}
        <div><strong>Category — </strong>${p.cat || "Fragrance"}</div>
        <div><strong>Brand — </strong>${p.brand || "—"}</div>
      </div>
      <p class="price">${modalPrice}</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <button class="btn btn-gold" data-add="${p.id}">Add to Bag</button>
        <button class="btn btn-ghost" data-wish="${p.id}">♥ Save</button>
      </div>
    </div>`;
  $$("#quickCard .thumb").forEach((t) => t.addEventListener("click", () => {
    $("#quickHeroImg").src = t.dataset.thumb;
    $$("#quickCard .thumb").forEach((x) => x.classList.remove("active"));
    t.classList.add("active");
  }));
  $("#quickModal").classList.add("open");
  $("#scrim").classList.add("show");
  document.body.style.overflow = "hidden";
  $("#quickClose").onclick = closeAll;
}

/* ---------- search ---------- */
function runSearch(q) {
  const box = $("#searchResults");
  if (!box) return;
  q = q.trim().toLowerCase();
  if (!q) { box.innerHTML = ""; return; }
  if (!VISIBLE.length) { box.innerHTML = `<p style="color:var(--muted);font-size:.9rem">Catalogue loading — please try again shortly.</p>`; return; }
  const hits = VISIBLE.filter((p) => {
    const haystack = [p.name, p.type, p.notes, p.desc, ...(p.searchText || [])].join(" ").toLowerCase();
    return haystack.includes(q);
  }).slice(0, 6);
  box.innerHTML = hits.length
    ? hits.map((p) => `<a href="#shop" data-hit="${p.id}"><span><strong>${p.name}</strong> · ${p.type}</span><span>${p.manualPrice || (p.price ? naira(p.price) : "View")}</span></a>`).join("")
    : `<p style="color:var(--muted);font-size:.9rem">No matches for “${q}”. Try a brand or product name.</p>`;
}

/* ---------- events ---------- */
document.addEventListener("click", (e) => {
  const add = e.target.closest("[data-add]");
  if (add) {
    const id = add.dataset.add;
    if (wishlist.includes(id) && add.classList.contains("remove")) {
      wishlist = wishlist.filter((x) => x !== id);
      save("zaren_wish", wishlist); renderWish();
      $$(`[data-wish="${id}"]`).forEach((b) => b.classList.remove("active"));
    }
    addToCart(id);
    return;
  }
  const w = e.target.closest("[data-wish]");
  if (w) { toggleWish(w.dataset.wish); return; }
  const qv = e.target.closest("[data-quick]");
  if (qv) { openQuick(qv.dataset.quick); return; }
  const hit = e.target.closest("[data-hit]");
  if (hit) { e.preventDefault(); closeAll(); openQuick(hit.dataset.hit); return; }
  const inc = e.target.closest("[data-inc]");
  if (inc) { cart[inc.dataset.inc]++; save("zaren_cart", cart); renderCart(); return; }
  const dec = e.target.closest("[data-dec]");
  if (dec) {
    const id = dec.dataset.dec;
    cart[id]--; if (cart[id] <= 0) delete cart[id];
    save("zaren_cart", cart); renderCart(); return;
  }
  const rem = e.target.closest("[data-remove]");
  if (rem) { delete cart[rem.dataset.remove]; save("zaren_cart", cart); renderCart(); return; }
  const gf = e.target.closest("[data-goto-filter]");
  if (gf) {
    const f = gf.dataset.gotoFilter;
    $$("#filterPills button").forEach((b) => b.classList.toggle("active", b.dataset.filter === f));
    bestFilter = f; bestShown = BEST_STEP;
    renderBest(bestFilter);
    const bs = document.querySelector("#bestsellers");
    if (bs) bs.scrollIntoView({ behavior: "smooth" });
  }
});

const cartBtn = $("#cartBtn");
if (cartBtn) cartBtn.onclick = () => openDrawer("#cartDrawer");
const wishlistBtn = $("#wishlistBtn");
if (wishlistBtn) wishlistBtn.onclick = () => openDrawer("#wishDrawer");
const cartClose = $("#cartClose");
if (cartClose) cartClose.onclick = closeAll;
const wishClose = $("#wishClose");
if (wishClose) wishClose.onclick = closeAll;
const continueBtn = $("#continueBtn");
if (continueBtn) continueBtn.onclick = closeAll;
const wishShopBtn = $("#wishShopBtn");
if (wishShopBtn) wishShopBtn.onclick = () => { closeAll(); const s = document.querySelector("#shop"); if (s) s.scrollIntoView({ behavior: "smooth" }); };
const scrim = $("#scrim");
if (scrim) scrim.onclick = closeAll;
async function downloadProductImage(url, filename) {
  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) return;
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = filename;
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
  } catch (error) {
    console.warn("Image download failed:", error);
  }
}

async function fetchImageFile(url, filename) {
  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) return null;
    const blob = await response.blob();
    return new File([blob], filename, { type: blob.type || "image/jpeg" });
  } catch (error) {
    console.warn("Image share fetch failed:", error);
    return null;
  }
}

function getCheckoutText(ids) {
  const lines = ids.map((id) => {
    const p = byId(id) || {};
    const productName = p.name || id;
    const productPrice = p.manualPrice || (p.price ? naira(p.price) : "Price on request");
    const qty = cart[id] || 1;
    return `• ${productName} x${qty} — ${productPrice}`;
  });

  return `Hello ${BRAND.name}! I want to order:\n\n${lines.join("\n")}\n\nSubtotal: ${naira(cartSum())}\n\nI have attached the images above. Please confirm availability and delivery. Thank you!`;
}

const checkoutBtn = $("#checkoutBtn");
if (checkoutBtn) checkoutBtn.onclick = async () => {
  const ids = Object.keys(cart);
  if (!ids.length) {
    toast("Your bag is empty — add a scent first");
    return;
  }

  // wa.me text URLs CANNOT pre-attach images — build text URL now, open later per flow.
  const text = getCheckoutText(ids);
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

  // Best-possible: fetch up to first 10 cart product images (p.img only, skip gallery extras to stay under share limits).
  const files = [];
  for (const id of ids.slice(0, 10)) {
    const p = byId(id);
    if (!p || !p.img) continue;
    try {
      const safeName = `${(p.name || id).replace(/[^a-z0-9]+/gi, "-")}.jpg`;
      const absoluteUrl = new URL(p.img, window.location.href).href;
      const file = await fetchImageFile(absoluteUrl, safeName);
      if (file) files.push(file);
    } catch {
      continue;
    }
  }

  // Web Share API with files (mobile): share images + text, then open wa.me url as text backup.
  if (files.length && navigator.canShare && navigator.canShare({ files })) {
    try {
      await navigator.share({ files, title: "Zarén Elixir order", text });
      window.open(url, "_blank", "noopener");
      toast("Images shared — order text opening in WhatsApp…");
      return;
    } catch (error) {
      if (error && error.name === "AbortError") {
        window.open(url, "_blank", "noopener");
        toast("Share cancelled — WhatsApp opened, attach images manually if needed");
        return;
      }
      console.warn("Web Share failed, falling back to download:", error);
    }
  }

  // Fallback (desktop): open WhatsApp synchronously FIRST (popup-safe), then download images for manual attach via + paperclip button.
  const win = window.open(url, "_blank", "noopener");

  toast("WhatsApp opened — downloading images, attach them with the + paperclip button…");
  for (const id of ids) {
    const p = byId(id);
    if (p && p.img) {
      const filename = `${(p.name || id).replace(/\s+/g, " ").trim()}.jpg`;
      await downloadProductImage(new URL(p.img, window.location.href).href, filename);
    }
  }

  if (!win) {
    toast("Popup blocked — please allow popups to order via WhatsApp");
    window.location.href = url;
  }
};

const menuBtn = $("#menuBtn");
if (menuBtn) menuBtn.onclick = () => { closeAll(); const m = $("#mobileMenu"); if (m) m.classList.add("open"); const s = $("#scrim"); if (s) s.classList.add("show"); document.body.style.overflow = "hidden"; };
const menuClose = $("#menuClose");
if (menuClose) menuClose.onclick = closeAll;
$$("#mobileMenu a").forEach((a) => a.addEventListener("click", closeAll));

const searchBtn = $("#searchBtn");
if (searchBtn) searchBtn.onclick = () => { closeAll(); const o = $("#searchOverlay"); if (o) o.classList.add("open"); const s = $("#scrim"); if (s) s.classList.add("show"); document.body.style.overflow = "hidden"; const inp = $("#searchInput"); if (inp) setTimeout(() => inp.focus(), 60); };
const searchClose = $("#searchClose");
if (searchClose) searchClose.onclick = closeAll;
const searchInput = $("#searchInput");
if (searchInput) searchInput.addEventListener("input", (e) => runSearch(e.target.value));
$$(".search-tags button").forEach((b) => { if (b) b.onclick = () => {
  const si = $("#searchInput");
  if (!si) return;
  if (b.id === "viewAllSearchBtn") {
    si.value = "";
    runSearch("");
    return;
  }
  si.value = b.textContent;
  runSearch(b.textContent);
}; });
const quickModal = $("#quickModal");
if (quickModal) quickModal.addEventListener("click", (e) => { if (e.target.id === "quickModal") closeAll(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeAll(); });

const filterPills = $("#filterPills");
if (filterPills) filterPills.addEventListener("click", (e) => {
  const b = e.target.closest("button"); if (!b) return;
  $$("#filterPills button").forEach((x) => x.classList.remove("active"));
  b.classList.add("active");
  bestFilter = b.dataset.filter; bestShown = BEST_STEP;
  renderBest(bestFilter);
});

$$(".cat-card").forEach((c) => c.addEventListener("click", (e) => {
  e.preventDefault();
  const map = { Perfumes: "all", "Perfume Oils": "all", "Body Mists": "all", Unisex: "Unisex", Women: "Women", Men: "Men", Kids: "Kids", Skincare: "Skincare" };
  const f = map[c.dataset.cat] || "all";
  $$("#filterPills button").forEach((b) => b.classList.toggle("active", b.dataset.filter === f));
  bestFilter = f; bestShown = BEST_STEP;
  renderBest(bestFilter);
  const bs = document.querySelector("#bestsellers");
  if (bs) bs.scrollIntoView({ behavior: "smooth" });
}));

const newsletterForm = $("#newsletterForm");
if (newsletterForm) newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const v = $("#newsletterEmail").value.trim();
  const msg = $("#newsletterMsg");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
    msg.textContent = "Please enter a valid email address.";
    msg.className = "form-msg err";
    return;
  }
  const list = load("zaren_newsletter", []);
  list.push({ email: v, at: new Date().toISOString() });
  save("zaren_newsletter", list);
  msg.textContent = "Welcome to the inner circle — your first scent letter is on its way.";
  msg.className = "form-msg ok";
  $("#newsletterEmail").value = "";
  toast("Subscribed — stay in the scent ✦");
});

/* ---------- WhatsApp contact form with live preview ---------- */
/* WA_NUMBER is defined once at the top near BRAND. */

function buildWaText() {
  const name = ((($("#waName") || {}).value) || "").trim() || "—";
  const contact = ((($("#waContact") || {}).value) || "").trim() || "—";
  const topic = (($("#waTopic") || {}).value) || "General";
  const message = ((($("#waMessage") || {}).value) || "").trim() || "—";
  return (
    `Hello ${BRAND.name}!` +
    `\n\nName: ${name}` +
    `\nContact: ${contact}` +
    `\nInterested in: ${topic}` +
    `\n\nMessage:\n${message}`
  );
}

function refreshWaPreview() {
  const box = $("#waPreview");
  if (box) box.textContent = buildWaText();
}

["waName", "waContact", "waMessage"].forEach((id) => {
  const el = document.getElementById(id);
  if (el) el.addEventListener("input", refreshWaPreview);
});
if ($("#waTopic")) $("#waTopic").addEventListener("change", refreshWaPreview);

if ($("#waForm")) {
  $("#waForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = $("#waMsg");
    const name = $("#waName").value.trim();
    const message = $("#waMessage").value.trim();
    if (!name || !message) {
      msg.textContent = "Please add your name and a message so we can help you properly.";
      msg.className = "form-msg err";
      return;
    }
    msg.textContent = "";
    msg.className = "form-msg";
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(buildWaText())}`;
    toast("Opening WhatsApp with your message…");
    window.open(url, "_blank", "noopener");
  });

  const waCopy = $("#waCopy");
  if (waCopy) waCopy.addEventListener("click", async () => {
    const text = buildWaText();
    try {
      await navigator.clipboard.writeText(text);
      toast("Message copied — paste it anywhere to send");
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
      toast("Message copied — paste it anywhere to send");
    }
  });
}

/* nav shadow + active link */
window.addEventListener("scroll", () => {
  const nav = $("#navbar");
  if (nav) nav.classList.toggle("scrolled", window.scrollY > 10);
}, { passive: true });

/* reveal on scroll */
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } });
}, { threshold: 0.12 });

/* brand injection (single config location) */
$$("[data-brand-name]").forEach((el) => (el.textContent = BRAND.name));
$$("[data-brand]").forEach((el) => {
  if (el.tagName === "A" && el.classList.contains("brand")) el.innerHTML = `${BRAND.name.split(" ")[0]} <span>${BRAND.name.split(" ").slice(1).join(" ")}</span>`;
});

/* init — each guarded so a missing section never crashes the page */
if ($("#signatureGrid")) renderSignature();
if ($("#featuredProductsTrack")) { renderFeatured(); setupFeaturedCarousel(); }
if ($("#bestGrid")) renderBest();
renderCart();
renderWish();
refreshWaPreview();
$$(".reveal").forEach((el) => io.observe(el));

const viewAllBtn = $("#viewAllProductsBtn");
if (viewAllBtn) viewAllBtn.addEventListener("click", () => {
    $$("#filterPills button").forEach((b) => b.classList.toggle("active", b.dataset.filter === "all"));
    bestFilter = "all"; bestShown = BEST_STEP;
    renderBest(bestFilter);
    const bs = document.querySelector("#bestsellers");
    if (bs) bs.scrollIntoView({ behavior: "smooth", block: "start" });
  });
