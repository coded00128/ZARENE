/* ZARÉN ELIXIR — frontend-only store logic.
   Single config location for brand; cart/wishlist in localStorage. */

const BRAND = {
  name: "ZARÉN ELIXIR",
  phone: "08127680362",
  whatsapp: "https://wa.me/2348127680362",
  locations: "Osogbo • Ilorin",
};

const PRODUCTS = [
  {
    id: "velvet-rose", name: "Velvet Rose", type: "Eau de Parfum · Women",
    cat: "Women", notes: "Soft rose · vanilla · warm musk",
    desc: "A sophisticated floral fragrance with soft rose, vanilla and warm musk notes.",
    price: 38500, old: 45000, rating: 4.9, reviews: 412, badge: "Bestseller",
    img: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "oud-elan", name: "Oud Élan", type: "Extrait de Parfum · Unisex",
    cat: "Unisex", notes: "Smoked oud · amber · subtle spices",
    desc: "A rich and luxurious scent combining oud, amber and subtle spices.",
    price: 55000, old: null, rating: 5.0, reviews: 268, badge: "New",
    img: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "vanilla-muse", name: "Vanilla Muse", type: "Eau de Parfum · Women",
    cat: "Women", notes: "Creamy vanilla · delicate florals",
    desc: "A smooth, sweet fragrance with creamy vanilla and delicate floral notes.",
    price: 32000, old: null, rating: 4.8, reviews: 531, badge: null,
    img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "midnight-bloom", name: "Midnight Bloom", type: "Eau de Parfum · Women",
    cat: "Women", notes: "Dark florals · musk · warm amber",
    desc: "An elegant evening fragrance with dark florals, musk and warm amber.",
    price: 47000, old: 52000, rating: 4.9, reviews: 197, badge: "Sale",
    img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "amber-noir", name: "Amber Noir", type: "Perfume Oil · Men",
    cat: "Men", notes: "Amber · leather · black pepper",
    desc: "A bold, long-lasting oil with smoky amber and a leather finish.",
    price: 52000, old: null, rating: 4.9, reviews: 184, badge: null,
    img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "fleur-de-lys", name: "Fleur de Lys", type: "Body Mist · Women",
    cat: "Women", notes: "Lily · peony · white musk",
    desc: "A fresh daily mist — light florals that layer beautifully.",
    price: 18500, old: 22000, rating: 4.7, reviews: 623, badge: "Sale",
    img: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "santal-whisper", name: "Santal Whisper", type: "Eau de Parfum · Unisex",
    cat: "Unisex", notes: "Sandalwood · iris · cardamom",
    desc: "Creamy sandalwood softened with iris — quiet, confident luxury.",
    price: 42000, old: null, rating: 4.8, reviews: 149, badge: null,
    img: "https://images.unsplash.com/photo-1590736969955-71cc94901144?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "citrus-royale", name: "Citrus Royale", type: "Eau de Parfum · Men",
    cat: "Men", notes: "Bergamot · neroli · vetiver",
    desc: "A crisp, tailored citrus built for long Nigerian days.",
    price: 28500, old: null, rating: 4.7, reviews: 342, badge: null,
    img: "https://images.unsplash.com/photo-1619994403073-2ceb844b8e63?q=80&w=700&auto=format&fit=crop",
  },
];

const SIGNATURE_IDS = ["velvet-rose", "oud-elan", "vanilla-muse", "midnight-bloom"];

/* ---------- helpers ---------- */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const naira = (n) => "₦" + n.toLocaleString("en-NG");
const load = (k, f) => { try { return JSON.parse(localStorage.getItem(k)) ?? f; } catch { return f; } };
const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));

let cart = load("zaren_cart", {});       // {id: qty}
let wishlist = load("zaren_wish", []);   // [id]
const byId = (id) => PRODUCTS.find((p) => p.id === id);

/* ---------- toast ---------- */
let toastT;
function toast(msg) {
  const t = $("#toast");
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
  return `
  <article class="product reveal visible" data-id="${p.id}">
    <div class="product-media">
      <img src="${p.img}" alt="${p.name} — ${p.type}" loading="lazy" />
      ${p.badge ? `<span class="badge ${p.badge === "Sale" ? "sale" : ""}">${p.badge}</span>` : ""}
      <button class="wish ${wished}" data-wish="${p.id}" aria-label="Add ${p.name} to wishlist">♥</button>
      <button class="quick" data-quick="${p.id}">Quick view</button>
    </div>
    <div class="product-body">
      <p class="product-type">${showType ? p.type : p.notes}</p>
      <h3>${p.name}</h3>
      ${showType
        ? `<div class="stars">${stars(p.rating)} <span>(${p.reviews})</span></div>`
        : `<p class="product-desc">${p.desc}</p>`}
      <div class="price-row">
        <span class="price">${naira(p.price)}</span>
        ${p.old ? `<span class="price-old">${naira(p.old)}</span>` : ""}
      </div>
      <button class="add" data-add="${p.id}">Add to Cart</button>
    </div>
  </article>`;
}

function renderSignature() {
  $("#signatureGrid").innerHTML = SIGNATURE_IDS.map((id) => cardHTML(byId(id))).join("");
}
function renderBest(filter = "all") {
  const list = PRODUCTS.filter((p) => filter === "all" || p.cat === filter);
  $("#bestGrid").innerHTML = list.map((p) => cardHTML(p, true)).join("");
}

/* ---------- cart ---------- */
function cartQty() { return Object.values(cart).reduce((a, b) => a + b, 0); }
function cartSum() { return Object.entries(cart).reduce((s, [id, q]) => s + byId(id).price * q, 0); }

function bump(el) { el.classList.add("pop"); setTimeout(() => el.classList.remove("pop"), 250); }

function renderCart() {
  const box = $("#cartItems");
  const ids = Object.keys(cart);
  $("#cartCount").textContent = cartQty();
  $("#cartDrawerCount").textContent = `(${cartQty()})`;
  $("#cartTotal").textContent = naira(cartSum());
  if (!ids.length) {
    box.innerHTML = `<div class="empty"><p style="font-family:var(--serif);font-size:1.4rem;color:var(--navy-900)">Your bag is empty.</p><p>Your signature scent is waiting.</p></div>`;
    return;
  }
  box.innerHTML = ids.map((id) => {
    const p = byId(id); const q = cart[id];
    return `<div class="cart-item">
      <img src="${p.img}" alt="${p.name}" />
      <div><h4>${p.name}</h4><small>${p.type} · ${naira(p.price)}</small>
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
  $("#wishlistCount").textContent = wishlist.length;
  $("#wishDrawerCount").textContent = `(${wishlist.length})`;
  if (!wishlist.length) {
    box.innerHTML = `<div class="empty"><p style="font-family:var(--serif);font-size:1.4rem;color:var(--navy-900)">No favourites yet.</p><p>Tap the ♥ on any scent to save it here.</p></div>`;
    return;
  }
  box.innerHTML = wishlist.map((id) => {
    const p = byId(id);
    return `<div class="wish-item">
      <img src="${p.img}" alt="${p.name}" />
      <div><h4>${p.name}</h4><small>${naira(p.price)}</small></div>
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
  $(which).classList.add("open");
  $("#scrim").classList.add("show");
  document.body.style.overflow = "hidden";
}
function closeAll() {
  ["#cartDrawer", "#wishDrawer", "#mobileMenu"].forEach((s) => $(s).classList.remove("open"));
  $("#searchOverlay").classList.remove("open");
  $("#quickModal").classList.remove("open");
  $("#scrim").classList.remove("show");
  document.body.style.overflow = "";
}

/* ---------- quick view ---------- */
function openQuick(id) {
  const p = byId(id);
  $("#quickCard").innerHTML = `
    <button class="close-x" id="quickClose" style="position:absolute;top:12px;right:12px;z-index:2" aria-label="Close">✕</button>
    <img src="${p.img}" alt="${p.name}" />
    <div class="modal-info">
      <p class="eyebrow">${p.type}</p>
      <h3>${p.name}</h3>
      <div class="stars">${stars(p.rating)} <span>· ${p.reviews} reviews</span></div>
      <p style="margin-top:10px;color:var(--muted)">${p.desc}</p>
      <div class="notes">
        <div><strong>Top notes — </strong>${p.notes}</div>
        <div><strong>Wear — </strong>10–12 hours · projects beautifully</div>
        <div><strong>Size — </strong>50ml EDP / 12ml oil available</div>
      </div>
      <p class="price">${naira(p.price)} ${p.old ? `<span class="price-old">${naira(p.old)}</span>` : ""}</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <button class="btn btn-gold" data-add="${p.id}">Add to Bag</button>
        <button class="btn btn-ghost" data-wish="${p.id}">♥ Save</button>
      </div>
    </div>`;
  $("#quickModal").classList.add("open");
  $("#quickClose").onclick = () => $("#quickModal").classList.remove("open");
}

/* ---------- search ---------- */
function runSearch(q) {
  const box = $("#searchResults");
  q = q.trim().toLowerCase();
  if (!q) { box.innerHTML = ""; return; }
  const hits = PRODUCTS.filter((p) =>
    (p.name + " " + p.type + " " + p.notes + " " + p.desc).toLowerCase().includes(q)).slice(0, 6);
  box.innerHTML = hits.length
    ? hits.map((p) => `<a href="#shop" data-hit="${p.id}"><span><strong>${p.name}</strong> · ${p.type}</span><span>${naira(p.price)}</span></a>`).join("")
    : `<p style="color:var(--muted);font-size:.9rem">No matches for “${q}”. Try ‘oud’, ‘rose’ or ‘vanilla’.</p>`;
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
  if (hit) { closeAll(); openQuick(hit.dataset.hit); return; }
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
    renderBest(f);
    document.querySelector("#bestsellers").scrollIntoView({ behavior: "smooth" });
  }
});

$("#cartBtn").onclick = () => openDrawer("#cartDrawer");
$("#wishlistBtn").onclick = () => openDrawer("#wishDrawer");
$("#cartClose").onclick = closeAll;
$("#wishClose").onclick = closeAll;
$("#continueBtn").onclick = closeAll;
$("#wishShopBtn").onclick = () => { closeAll(); document.querySelector("#shop").scrollIntoView({ behavior: "smooth" }); };
$("#scrim").onclick = closeAll;
$("#checkoutBtn").onclick = () => {
  const ids = Object.keys(cart);
  if (!ids.length) {
    toast("Your bag is empty — add a scent first");
    return;
  }
  const lines = ids.map((id) => {
    const p = byId(id);
    return `• ${p.name} (${p.type}) x${cart[id]} — ${naira(p.price * cart[id])}`;
  });
  const text =
    `Hello ${BRAND.name}! I would like to place an order:` +
    `\n\n${lines.join("\n")}` +
    `\n\nSubtotal: ${naira(cartSum())}` +
    `\n\nPlease confirm delivery details. Thank you!`;
  toast("Opening WhatsApp with your order…");
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
};

$("#menuBtn").onclick = () => { closeAll(); $("#mobileMenu").classList.add("open"); $("#scrim").classList.add("show"); };
$("#menuClose").onclick = closeAll;
$$("#mobileMenu a").forEach((a) => a.addEventListener("click", closeAll));

$("#searchBtn").onclick = () => { closeAll(); $("#searchOverlay").classList.add("open"); setTimeout(() => $("#searchInput").focus(), 60); };
$("#searchClose").onclick = closeAll;
$("#searchInput").addEventListener("input", (e) => runSearch(e.target.value));
$$(".search-tags button").forEach((b) => b.onclick = () => { $("#searchInput").value = b.textContent; runSearch(b.textContent); });
$("#quickModal").addEventListener("click", (e) => { if (e.target.id === "quickModal") closeAll(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeAll(); });

$("#filterPills").addEventListener("click", (e) => {
  const b = e.target.closest("button"); if (!b) return;
  $$("#filterPills button").forEach((x) => x.classList.remove("active"));
  b.classList.add("active");
  renderBest(b.dataset.filter);
});

$$(".cat-card").forEach((c) => c.addEventListener("click", () => {
  const map = { Perfumes: "all", "Perfume Oils": "all", "Body Mists": "all", Unisex: "Unisex", Women: "Women", Men: "Men" };
  const f = map[c.dataset.cat] || "all";
  $$("#filterPills button").forEach((b) => b.classList.toggle("active", b.dataset.filter === f));
  renderBest(f);
}));

$("#newsletterForm").addEventListener("submit", (e) => {
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
const WA_NUMBER = "2348127680362"; // 08127680362 in international format

function buildWaText() {
  const name = ($("#waName").value || "").trim() || "—";
  const contact = ($("#waContact").value || "").trim() || "—";
  const topic = $("#waTopic").value;
  const message = ($("#waMessage").value || "").trim() || "—";
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

  $("#waCopy").addEventListener("click", async () => {
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
  $("#navbar").classList.toggle("scrolled", window.scrollY > 10);
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

/* init */
renderSignature();
renderBest();
renderCart();
renderWish();
refreshWaPreview();
$$(".reveal").forEach((el) => io.observe(el));
