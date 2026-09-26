/* ============================================================
   ZARÉN ELIXIR — PRODUCT DATABASE
   Built from: WhatsApp chat export (Sakinah, 2026-09-26) + manually
   saved image filenames + visual identification of every image.
   106 images → grouped into products. Prices in Naira (₦).

   price: null  → no price tag found (card shows "Ask for price")
   priceConfidence:
     "high"   → price tag matched directly to this product in the chat
                (named tag like "Khamrah waha 7k", corrected price, or
                a price sticker readable in the photo itself)
     "medium" → price matched by position/order in the chat with two
                independent confirmations (HUG ₦3000 sticker = chat
                position 2, gift-set ₦4500 sticker = chat position 11)
     "low"    → best-effort match, PLEASE VERIFY before trusting
   flagged: true → needs your attention (no price / uncertain match)
   ============================================================ */

window.PRODUCTS = [

  /* ============ NAMED PRODUCTS (previously on the site) ============ */
  { id: "24k", name: "24K", brand: "Golden Collection", cat: "Unisex", size: "Eau de Parfum", type: "Eau de Parfum",
    price: 3500, priceConfidence: "medium", priceNote: "Chat tag ₦3,500 (two 24K shots back-to-back)",
    img: "assets/images/24k.jpg.jpg", gallery: ["assets/images/24k.jpg.jpg", "assets/images/IMG-20260926-WA0002.jpg"],
    desc: "Striking gold-toned EDP from the 24K line — a bold evening scent with a luxurious golden box.", flagged: false,
    tags: ["24k", "gold", "edp", "unisex"] },

  { id: "alldayfresh", name: "All Day Fresh (Karis Roll-On)", brand: "Karis", cat: "Unisex", size: "Roll-on",
    type: "Perfume Oil", price: 2000, priceConfidence: "high", priceNote: "Owner confirmed ₦2,000 (sticker in photo shows ₦1,800, now updated)",
    img: "assets/images/alldayfresh.jpg.jpg", gallery: ["assets/images/alldayfresh.jpg.jpg", "assets/images/IMG-20260926-WA0001.jpg"],
    desc: "Karis All Day Fresh roll-on — the everyday pocket perfume oil that lasts from morning to night.", flagged: false,
    tags: ["karis", "all day fresh", "roll on", "oil"] },

  { id: "aventos", name: "Aventos Gold", brand: "Aventos", cat: "Men", size: "Body Spray / EDP", type: "Fragrance",
    price: 4500, priceConfidence: "medium", priceNote: "Chat tag ₦4,500 next to Aventos Gold shot",
    img: "assets/images/aventos.jpg.jpg", gallery: ["assets/images/aventos.jpg.jpg", "assets/images/IMG-20260926-WA0008.jpg"],
    desc: "Aventos Gold & Rihan duo shot — fresh, spicy and long-lasting. Great daily driver for men.", flagged: false,
    tags: ["aventos", "gold", "rihan", "men"] },

  { id: "candycrush", name: "Candy Crush (Rose Magic)", brand: "FM", cat: "Women", size: "Body Mist / EDP", type: "Body Mist",
    price: 2500, priceConfidence: "high", priceNote: "Owner confirmed ₦2,500 (sticker in photo shows ₦2,000, now updated)",
    img: "assets/images/candycrush.jpg.jpg", gallery: ["assets/images/candycrush.jpg.jpg", "assets/images/IMG-20260926-WA0003.jpg"],
    desc: "Sweet, playful and unmistakable — the famous Candy Crush scent in the pink Rose Magic box.", flagged: false,
    tags: ["candy crush", "rose magic", "sweet", "women", "mist"] },

  { id: "challenge", name: "Challenge", brand: "Body Spray Line", cat: "Men", size: "Body Spray", type: "Body Spray",
    price: 4000, priceConfidence: "medium", priceNote: "Chat tag ₦4,000 beside Challenge spray shot",
    img: "assets/images/challenge.jpg.jpg", gallery: ["assets/images/challenge.jpg.jpg", "assets/images/IMG-20260926-WA0004.jpg"],
    desc: "Bold deodorant body sprays built to be noticed — sporty freshness with an aromatic edge.", flagged: false,
    tags: ["challenge", "body spray", "men", "sport"] },

  { id: "dove", name: "Dove-Style Roll-On", brand: "Dove line", cat: "Women", size: "Roll-on", type: "Perfume Oil",
    price: 2500, priceConfidence: "medium", priceNote: "Chat tag ₦2,500 beside the Dove-style duo shot",
    img: "assets/images/dove.jpg.jpg", gallery: ["assets/images/dove.jpg.jpg", "assets/images/IMG-20260926-WA0006.jpg"],
    desc: "Soft, clean and caring — a gentle roll-on inspired by the classic Dove freshness.", flagged: false,
    tags: ["dove", "roll on", "women", "clean"] },

  { id: "fruitcherry", name: "Fruit Cherry", brand: "Fruit Line", cat: "Women", size: "Roll-on", type: "Perfume Oil",
    price: 1200, priceConfidence: "high", priceNote: "Existing site price ₦1,200",
    img: "assets/images/fruitcherry.jpg.jpg", gallery: ["assets/images/fruitcherry.jpg.jpg", "assets/images/IMG-20260926-WA0005.jpg"],
    desc: "Juicy cherry and red fruits in a tiny roll-on — sweet, fun and pocket-friendly.", flagged: false,
    tags: ["fruit cherry", "cherry", "roll on", "sweet"] },

  { id: "genie", name: "Genie", brand: "Genie Oils", cat: "Unisex", size: "Roll-on", type: "Perfume Oil",
    price: 1000, priceConfidence: "medium", priceNote: "Chat tag ₦1,000 beside the Genie oils shot",
    img: "assets/images/genie.jpg.jpg", gallery: ["assets/images/genie.jpg.jpg", "assets/images/IMG-20260926-WA0007.jpg"],
    desc: "Concentrated genie-bottle perfume oils — one dab goes a long way.", flagged: false,
    tags: ["genie", "oil", "roll on"] },

  { id: "imperioway", name: "Imperio Way", brand: "Imperio", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: 2500, priceConfidence: "medium", priceNote: "Chat tag ₦2,500 (early block)",
    img: "assets/images/imperioway.jpg.jpg", gallery: ["assets/images/imperioway.jpg.jpg"],
    desc: "Imperio Way pair — pink-capped freshness with a smooth woody drydown.", flagged: false,
    tags: ["imperio", "way", "edp"] },

  { id: "kaly", name: "Kaly Mini Collection", brand: "Kaly", cat: "Unisex", size: "Minis (set)", type: "Miniature Set",
    price: 3000, priceConfidence: "medium", priceNote: "Chat tag ₦3,000 (early block)",
    img: "assets/images/kaly.jpg.jpg", gallery: ["assets/images/kaly.jpg.jpg"],
    desc: "Six Kaly mini perfumes in one shot — floral, musky and oudy options for every mood.", flagged: false,
    tags: ["kaly", "mini", "set", "collection"] },

  { id: "karis", name: "Karis All Day Fresh Sprays", brand: "Karis", cat: "Unisex", size: "Body Spray 200ml", type: "Body Spray",
    price: 3700, priceConfidence: "high", priceNote: "₦3,700 stickers visible on spray cans in photo (roll-on stays ₦2,000)",
    img: "assets/images/karis.jpg.jpg", gallery: ["assets/images/karis.jpg.jpg", "assets/images/IMG-20260926-WA0001.jpg"],
    desc: "The famous Karis All Day Fresh deodorant sprays — 48h protection in four colour variants.", flagged: false,
    tags: ["karis", "all day fresh", "spray", "48h"] },

  { id: "mask", name: "Face Mask Trio (Eye Tanke / Milk / Sadoun)", brand: "Skincare", cat: "Skincare", size: "Sheet masks", type: "Skincare",
    price: 400, priceConfidence: "high", priceNote: "₦400 per one — owner confirmed",
    img: "assets/images/mask.jpg.jpg", gallery: ["assets/images/mask.jpg.jpg"],
    desc: "Skincare trio: green eye patches, milk sheet mask and pink lip/nose strips. ₦400 per one.", flagged: false,
    tags: ["mask", "skincare", "sheet"] },

  { id: "mosuf", name: "Mosuf 25ml", brand: "Mosuf", cat: "Unisex", size: "25ml", type: "Eau de Parfum",
    price: 3000, priceConfidence: "high", priceNote: "Named chat tag: “Mosuf 25ml 3000”",
    img: "assets/images/mosuf.jpg.jpg", gallery: ["assets/images/mosuf.jpg.jpg"],
    desc: "The Mosuf trio in pastel bottles — sweet powdery warmth in a handy 25ml size.", flagged: false,
    tags: ["mosuf", "25ml", "edp"] },

  { id: "mosufwardI", name: "Mosuf Ward I", brand: "Mosuf", cat: "Unisex", size: "EDP", type: "Eau de Parfum",
    price: 3500, priceConfidence: "medium", priceNote: "Chat tag ₦3,500 (Mosuf block)",
    img: "assets/images/mosufwardI.jpg.jpg", gallery: ["assets/images/mosufwardI.jpg.jpg"],
    desc: "Mosuf Ward I — beige, blush and violet boxes; soft musky rose character.", flagged: false,
    tags: ["mosuf", "ward", "edp"] },

  { id: "mousufward1", name: "Mousuf Wardas", brand: "Mousuf", cat: "Unisex", size: "EDP", type: "Eau de Parfum",
    price: 3500, priceConfidence: "medium", priceNote: "Chat tag ₦3,500 (Mosuf block)",
    img: "assets/images/mousufward1.jpg.jpg", gallery: ["assets/images/mousufward1.jpg.jpg"],
    desc: "Mousuf Wardas rose-pink sprays — romantic, powdery and long lasting.", flagged: false,
    tags: ["mousuf", "wardas", "rose"] },

  { id: "natador", name: "Natador", brand: "Natador", cat: "Unisex", size: "Roll-on + refill", type: "Perfume Oil",
    price: 2500, priceConfidence: "medium", priceNote: "Chat tag ₦2,500 (early block)",
    img: "assets/images/natador.jpg.jpg", gallery: ["assets/images/natador.jpg.jpg"],
    desc: "Natador maroon roll-on with its refill tube — classic concentrated oil.", flagged: false,
    tags: ["natador", "roll on", "oil"] },

  { id: "nivea", name: "Nivea Roll-On Family", brand: "Nivea", cat: "Unisex", size: "Roll-on 50ml", type: "Deodorant",
    price: 3000, priceConfidence: "medium", priceNote: "Chat tag ₦3,000 (early block)",
    img: "assets/images/nivea.jpg.jpg", gallery: ["assets/images/nivea.jpg.jpg", "assets/images/IMG-20260926-WA0000.jpg"],
    desc: "Nivea Beauty, Black & White and Deep Impact roll-ons — everyday freshness you can trust.", flagged: false,
    tags: ["nivea", "roll on", "deodorant"] },

  { id: "pinklove", name: "Pink Love", brand: "Aster", cat: "Women", size: "EDP", type: "Eau de Parfum",
    price: 3500, priceConfidence: "medium", priceNote: "Chat tag ₦3,500 (Pink Love block)",
    img: "assets/images/pinklove.jpg.jpg", gallery: ["assets/images/pinklove.jpg.jpg"],
    desc: "Pink Love stack — a flirty floral-frugal favourite in glossy pink boxes.", flagged: false,
    tags: ["pink love", "floral", "women"] },

  { id: "storm", name: "Storm Elixir Deodorants", brand: "Storm", cat: "Unisex", size: "Body Spray 200ml", type: "Body Spray",
    price: 6000, priceConfidence: "low", priceNote: "Best-fit chat tag ₦6,000 — VERIFY",
    img: "assets/images/storm.jpg.jpg", gallery: ["assets/images/storm.jpg.jpg"],
    desc: "Storm Elixir & MAX deodorant sprays — green, purple, white and maroon variants.", flagged: true,
    tags: ["storm", "elixir", "deodorant"] },

  { id: "stormkids", name: "Storm Kids", brand: "Storm", cat: "Kids", size: "Body Spray", type: "Body Spray",
    price: 2500, priceConfidence: "high", priceNote: "₦2,500 sticker visible on blue Shark bottle in photo",
    img: "assets/images/stormkids.jpg.jpg", gallery: ["assets/images/stormkids.jpg.jpg"],
    desc: "Gentle Storm Kids deodorants — Dora-blue and pink caps, made for little ones.", flagged: false,
    tags: ["storm kids", "kids", "deodorant"] },

  { id: "super", name: "Super Fruit Roll-Ons", brand: "Fruit line", cat: "Women", size: "Roll-on", type: "Perfume Oil",
    price: 1500, priceConfidence: "high", priceNote: "₦1,500 sticker visible on rightmost bottle in photo",
    img: "assets/images/super.jpg.jpg", gallery: ["assets/images/super.jpg.jpg"],
    desc: "Ball-topped fruit roll-ons in pink and violet — juicy everyday oils.", flagged: false,
    tags: ["super", "fruit", "roll on"] },

  { id: "touch", name: "Touch Minis", brand: "Touch", cat: "Unisex", size: "Minis (set)", type: "Miniature Set",
    price: 1300, priceConfidence: "high", priceNote: "₦1,300 stickers visible on pink + blue boxes in photo",
    img: "assets/images/touch.jpg.jpg", gallery: ["assets/images/touch.jpg.jpg"],
    desc: "Touch mini boxes — black, pink and blue pocket perfumes with white caps.", flagged: false,
    tags: ["touch", "mini", "set"] },

  { id: "vannila", name: "Vannila Oil Lineup", brand: "Oil bar", cat: "Unisex", size: "Roll-on 10ml", type: "Perfume Oil",
    price: 500, priceConfidence: "high", priceNote: "₦500 stickers visible on oil bottles in photo",
    img: "assets/images/vannila.jpg.jpg", gallery: ["assets/images/vannila.jpg.jpg"],
    desc: "A full lineup of vanilla and fruity oils with colourful branded sleeves.", flagged: false,
    tags: ["vanilla", "oil", "lineup"] },

  { id: "vintageradio", name: "Vintage Radio (Oud Pafum)", brand: "Oud line", cat: "Unisex", size: "EDP", type: "Eau de Parfum",
    price: 3500, priceConfidence: "high", priceNote: "₦3,500 sticker visible on middle box in photo",
    img: "assets/images/vintageradio.jpg.jpg", gallery: ["assets/images/vintageradio.jpg.jpg"],
    desc: "Three maroon “Oud Pafum” boxes — the vintage-radio inspired oud trio.", flagged: false,
    tags: ["vintage radio", "oud", "pafum"] },

  /* ============ WHATSAPP CATALOGUE (26 Sept drop) ============ */

  { id: "wa-nivea-shot", name: "Nivea Roll-On Shelf Shot", brand: "Nivea", cat: "Unisex", size: "Roll-on", type: "Deodorant",
    price: 2200, priceConfidence: "high", priceNote: "₦2,200 sticker visible on Fresh Energy bottle in photo",
    img: "assets/images/IMG-20260926-WA0000.jpg", gallery: ["assets/images/IMG-20260926-WA0000.jpg"],
    desc: "In-store photo of the Nivea roll-on shelf — Beauty, Black & White, Deep Impact.", flagged: false,
    tags: ["nivea", "shelf"] },

  { id: "wa-hug", name: "HUG", brand: "HUG", cat: "Unisex", size: "Body Spray", type: "Body Spray",
    price: 3000, priceConfidence: "high", priceNote: "Chat tag #3000 + ₦3000 sticker visible on the can",
    img: "assets/images/IMG-20260926-WA0001.jpg", gallery: ["assets/images/IMG-20260926-WA0001.jpg"],
    desc: "HUG black body spray — musky evening freshness with its own ₦3000 price sticker.", flagged: false,
    tags: ["hug", "body spray", "black"] },

  { id: "wa-fogg", name: "FOGG", brand: "FOGG", cat: "Men", size: "Body Spray", type: "Body Spray",
    price: 2000, priceConfidence: "medium", priceNote: "Chat tag ₦2,000 (confirmed block)",
    img: "assets/images/IMG-20260926-WA0002.jpg", gallery: ["assets/images/IMG-20260926-WA0002.jpg"],
    desc: "FOGG body spray — the famous long-lasting Nigerian staple for men.", flagged: false,
    tags: ["fogg", "body spray", "men"] },

  { id: "wa-cosmo", name: "Cosmo Roll-Ons", brand: "Cosmo", cat: "Women", size: "Roll-on", type: "Perfume Oil",
    price: 4000, priceConfidence: "medium", priceNote: "Chat tag ₦4,000 (confirmed block)",
    img: "assets/images/IMG-20260926-WA0003.jpg", gallery: ["assets/images/IMG-20260926-WA0003.jpg"],
    desc: "Cosmo branded roll-on oils — sweet and musky pocket perfumes.", flagged: false,
    tags: ["cosmo", "roll on"] },

  { id: "wa-oud-duo", name: "Oud Duo Boxes", brand: "Oud line", cat: "Unisex", size: "EDP", type: "Eau de Parfum",
    price: 2500, priceConfidence: "medium", priceNote: "Chat tag ₦2,500 (confirmed block)",
    img: "assets/images/IMG-20260926-WA0004.jpg", gallery: ["assets/images/IMG-20260926-WA0004.jpg"],
    desc: "Twin dark-and-gold oud EDP boxes — classic Arabian richness.", flagged: false,
    tags: ["oud", "duo", "edp"] },

  { id: "wa-gelato-oudcrush", name: "Gelato / Oud Crush", brand: "Gelato", cat: "Unisex", size: "EDP", type: "Eau de Parfum",
    price: 1000, priceConfidence: "low", priceNote: "Chat tag ₦1,000 — VERIFY",
    img: "assets/images/IMG-20260926-WA0005.jpg", gallery: ["assets/images/IMG-20260926-WA0005.jpg"],
    desc: "Gelato-style and Oud Crush bottles — dessert sweetness next to deep oud.", flagged: true,
    tags: ["gelato", "oud crush"] },

  { id: "wa-wavepop", name: "Wave Pop", brand: "Wave", cat: "Unisex", size: "Body Spray", type: "Body Spray",
    price: 2500, priceConfidence: "medium", priceNote: "Chat tag ₦2,500 (confirmed block)",
    img: "assets/images/IMG-20260926-WA0006.jpg", gallery: ["assets/images/IMG-20260926-WA0006.jpg"],
    desc: "Wave Pop sprays — aquatic, playful and made for hot afternoons.", flagged: false,
    tags: ["wave pop", "body spray"] },

  { id: "wa-monogotas", name: "Monogotas Vanilla", brand: "Monogotas", cat: "Women", size: "EDP", type: "Eau de Parfum",
    price: 4500, priceConfidence: "medium", priceNote: "Chat tag ₦4,500 (confirmed block)",
    img: "assets/images/IMG-20260926-WA0007.jpg", gallery: ["assets/images/IMG-20260926-WA0007.jpg"],
    desc: "Monogotas Vanilla — creamy gourmand vanilla in a slim elegant bottle.", flagged: false,
    tags: ["monogotas", "vanilla", "gourmand"] },

  { id: "wa-unsure-8", name: "Catalogue Shot 8", brand: "ZARÉN archive", cat: "Unisex", size: "", type: "Fragrance",
    price: 3000, priceConfidence: "low", priceNote: "Chat tag ₦3,000 — product identity uncertain, VERIFY",
    img: "assets/images/IMG-20260926-WA0008.jpg", gallery: ["assets/images/IMG-20260926-WA0008.jpg"],
    desc: "Product photo from the 26 Sept catalogue drop (shot 8).", flagged: true,
    tags: ["archive", "shot 8"] },

  { id: "wa-unsure-9", name: "Mosuf 25ml (alt shot)", brand: "Mosuf", cat: "Unisex", size: "25ml", type: "Eau de Parfum",
    price: 3000, priceConfidence: "high", priceNote: "Named chat tag “Mosuf 25ml 3000”",
    img: "assets/images/IMG-20260926-WA0009.jpg", gallery: ["assets/images/IMG-20260926-WA0009.jpg"],
    desc: "Alternate shot of the Mosuf 25ml — same juice as the named Mosuf product.", flagged: false,
    tags: ["mosuf", "25ml"] },

  { id: "wa-giftminis", name: "Gift-Set Minis (Tous-style)", brand: "Gift line", cat: "Women", size: "Mini trio", type: "Miniature Set",
    price: 4500, priceConfidence: "high", priceNote: "₦4,500 stickers visible on the boxes + chat tag ₦4,500",
    img: "assets/images/IMG-20260926-WA0010.jpg", gallery: ["assets/images/IMG-20260926-WA0010.jpg"],
    desc: "Three gift-box minis with ₦4,500 stickers — Rose Magic, blush & violet editions.", flagged: false,
    tags: ["gift set", "minis", "tous"] },

  { id: "wa-lineup1", name: "Designer Spray Lineup", brand: "Mixed", cat: "Unisex", size: "Mixed", type: "Lineup",
    price: 3500, priceConfidence: "low", priceNote: "Chat tag ₦3,500 — VERIFY",
    img: "assets/images/IMG-20260926-WA0011.jpg", gallery: ["assets/images/IMG-20260926-WA0011.jpg"],
    desc: "Shelf lineup: 9UF, Ada, Aventos, El AUXI, B fina, SOKA Noir, &Whisper sprays.", flagged: true,
    tags: ["lineup", "9uf", "whisper", "soka"] },

  { id: "wa-araman-gold", name: "Al Araman Amber Oud — Golden Edition", brand: "Al Araman", cat: "Unisex", size: "50ml", type: "Eau de Parfum",
    price: 35500, priceConfidence: "high", priceNote: "Named chat tag “35500 100ml angham” (golden edition)",
    img: "assets/images/IMG-20260926-WA0012.jpg", gallery: ["assets/images/IMG-20260926-WA0012.jpg"],
    desc: "Al Araman Araman Amber Oud — Golden Edition box; amber-oud showpiece. (Chat said 100ml; box reads 50ml — confirm size.)", flagged: false,
    tags: ["al araman", "amber oud", "golden", "angham"] },

  { id: "wa-dora", name: "Dora Perfume 50ml", brand: "Dora", cat: "Kids", size: "EDP 50ml", type: "Eau de Parfum",
    price: 8000, priceConfidence: "low", priceNote: "Chat tag ₦8,000 — VERIFY (kids range)",
    img: "assets/images/IMG-20260926-WA0014.jpg", gallery: ["assets/images/IMG-20260926-WA0014.jpg"],
    desc: "Dora the Explorer EDP 50ml — fruity kids' fragrance in blister pack.", flagged: true,
    tags: ["dora", "kids", "50ml"] },

  { id: "wa-9pm-fiba", name: "9pm FIBA", brand: "Fragrance World", cat: "Men", size: "EDP 100ml", type: "Eau de Parfum",
    price: 8000, priceConfidence: "medium", priceNote: "Chat tag ₦8,000 (9pm block)",
    img: "assets/images/IMG-20260926-WA0015.jpg", gallery: ["assets/images/IMG-20260926-WA0015.jpg"],
    desc: "9pm by FIBA — the sweet ambery night scent in its black presentation box.", flagged: false,
    tags: ["9pm", "fiba", "men"] },

  { id: "wa-9pm-nightout", name: "9pm Night Out", brand: "FIBA", cat: "Men", size: "EDP 100ml", type: "Eau de Parfum",
    price: 8000, priceConfidence: "medium", priceNote: "Chat tag “8k 9pm rebel” (9pm block)",
    img: "assets/images/IMG-20260926-WA0016.jpg", gallery: ["assets/images/IMG-20260926-WA0016.jpg", "assets/images/IMG-20260926-WA0035.jpg"],
    desc: "9pm Night Out EDP — the party scent. Second wrapped shot added to gallery.", flagged: false,
    tags: ["9pm", "night out", "rebel", "men"] },

  { id: "wa-happygirl", name: "Happy Girl", brand: "Kids line", cat: "Kids", size: "EDP", type: "Eau de Parfum",
    price: 9000, priceConfidence: "low", priceNote: "Chat tag ₦9,000 — VERIFY (kids range)",
    img: "assets/images/IMG-20260926-WA0017.jpg", gallery: ["assets/images/IMG-20260926-WA0017.jpg"],
    desc: "Happy Girl pink-ball perfume set for children — sweet and playful.", flagged: true,
    tags: ["happy girl", "kids"] },

  { id: "wa-fancyrose", name: "Fancy Rose", brand: "Fancy", cat: "Women", size: "EDP 100ml", type: "Eau de Parfum",
    price: 3500, priceConfidence: "low", priceNote: "Chat tag ₦3,500 — VERIFY",
    img: "assets/images/IMG-20260926-WA0018.jpg", gallery: ["assets/images/IMG-20260926-WA0018.jpg"],
    desc: "Fancy Rose — a soft rosy EDP in the pink-and-white box.", flagged: true,
    tags: ["fancy rose", "rose", "women"] },

  { id: "wa-mensmart", name: "MEN Smart", brand: "Smart Collection", cat: "Men", size: "EDP 100ml", type: "Eau de Parfum",
    price: 3300, priceConfidence: "high", priceNote: "₦3300 sticker visible on the box",
    img: "assets/images/IMG-20260926-WA0019.jpg", gallery: ["assets/images/IMG-20260926-WA0019.jpg"],
    desc: "Smart Collection MEN — “Eau de Parfum natural spray” with its ₦3300 sticker.", flagged: false,
    tags: ["men smart", "smart collection"] },

  { id: "wa-candylisse", name: "Candy Lisse", brand: "Lisse", cat: "Women", size: "EDP", type: "Eau de Parfum",
    price: 3500, priceConfidence: "low", priceNote: "Chat tag ₦3,500 — VERIFY",
    img: "assets/images/IMG-20260926-WA0020.jpg", gallery: ["assets/images/IMG-20260926-WA0020.jpg"],
    desc: "Candy Lisse — pink cellophane-wrapped sweet fragrance.", flagged: true,
    tags: ["candy lisse", "sweet"] },

  { id: "wa-araman-rouge", name: "Al Dirgham Limited Edition", brand: "Ard al Zaafaran", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: null, priceConfidence: null, priceNote: "Photo shows Al Dirgham (not Al Araman) — no price sticker visible, ask Sakinah",
    img: "assets/images/IMG-20260926-WA0021.jpg", gallery: ["assets/images/IMG-20260926-WA0021.jpg"],
    desc: "Al Dirgham by Ard al Zaafaran — black-gold Limited Edition 100ml box.", flagged: true,
    tags: ["al dirgham", "ard al zaafaran", "limited edition"] },

  { id: "wa-zandas", name: "Zandas Elemental", brand: "Zandas", cat: "Men", size: "EDP", type: "Eau de Parfum",
    price: 7700, priceConfidence: "low", priceNote: "Chat tag ₦7,700 — VERIFY",
    img: "assets/images/IMG-20260926-WA0022.jpg", gallery: ["assets/images/IMG-20260926-WA0022.jpg"],
    desc: "Zandas ELEM ENTAL “Extraordinary” — fresh woody masculine in a white-gold box.", flagged: true,
    tags: ["zandas", "elemental"] },

  { id: "wa-hummervip", name: "Hummer VIP", brand: "Hummer", cat: "Men", size: "EDT 100ml", type: "Eau de Toilette",
    price: 7500, priceConfidence: "low", priceNote: "Chat tag ₦7,500 — VERIFY",
    img: "assets/images/IMG-20260926-WA0023.jpg", gallery: ["assets/images/IMG-20260926-WA0023.jpg"],
    desc: "Hummer VIP for men — fresh aquatic-woody with the free roll-on inside promo.", flagged: true,
    tags: ["hummer", "vip", "men"] },

  { id: "wa-touareg", name: "Oud Touareg Gold (pouch)", brand: "Oud line", cat: "Unisex", size: "Elixir pouch", type: "Perfume Oil",
    price: 7500, priceConfidence: "low", priceNote: "Chat tag ₦7,500 — VERIFY",
    img: "assets/images/IMG-20260926-WA0024.jpg", gallery: ["assets/images/IMG-20260926-WA0024.jpg"],
    desc: "Oud Touareg Gold fabric pouch — concentrated oud oil gift pack.", flagged: true,
    tags: ["touareg", "oud", "pouch", "gold"] },

  { id: "wa-gkmen", name: "GK Men", brand: "GK", cat: "Men", size: "EDP 50ml", type: "Eau de Parfum",
    price: 7000, priceConfidence: "low", priceNote: "Chat tag ₦7,000 — VERIFY",
    img: "assets/images/IMG-20260926-WA0025.jpg", gallery: ["assets/images/IMG-20260926-WA0025.jpg"],
    desc: "GK Men for Men EDP 50ml — clean grey-and-gold masculine.", flagged: true,
    tags: ["gk men", "men"] },

  { id: "wa-9pm-nightout2", name: "9pm Night Out (wrapped)", brand: "AFNAN", cat: "Men", size: "EDP 100ml", type: "Eau de Parfum",
    price: 4300, priceConfidence: "low", priceNote: "Chat tag ₦4,300 — VERIFY",
    img: "assets/images/IMG-20260926-WA0026.jpg", gallery: ["assets/images/IMG-20260926-WA0026.jpg"],
    desc: "Factory-sealed 9pm Night Out by Afnan — cellophane wrapped.", flagged: true,
    tags: ["9pm", "afnan", "wrapped"] },

  { id: "wa-premium26", name: "Premium Pick 26", brand: "ZARÉN archive", cat: "Unisex", size: "", type: "Fragrance",
    price: 25500, priceConfidence: "low", priceNote: "Chat tag ₦25,500 — VERIFY",
    img: "assets/images/IMG-20260926-WA0027.jpg", gallery: ["assets/images/IMG-20260926-WA0027.jpg"],
    desc: "Premium product photo from the catalogue drop (shot 27).", flagged: true,
    tags: ["premium", "shot 27"] },

  { id: "wa-premium27", name: "Premium Pick 27", brand: "ZARÉN archive", cat: "Unisex", size: "", type: "Fragrance",
    price: 60000, priceConfidence: "low", priceNote: "Chat tag ₦60k — VERIFY",
    img: "assets/images/IMG-20260926-WA0028.jpg", gallery: ["assets/images/IMG-20260926-WA0028.jpg"],
    desc: "Premium product photo from the catalogue drop (shot 28).", flagged: true,
    tags: ["premium", "shot 28"] },

  { id: "wa-premium28", name: "Premium Pick 28", brand: "ZARÉN archive", cat: "Unisex", size: "", type: "Fragrance",
    price: 25500, priceConfidence: "low", priceNote: "Chat tag ₦25,500 — VERIFY",
    img: "assets/images/IMG-20260926-WA0029.jpg", gallery: ["assets/images/IMG-20260926-WA0029.jpg"],
    desc: "Premium product photo from the catalogue drop (shot 29).", flagged: true,
    tags: ["premium", "shot 29"] },

  { id: "wa-premium29", name: "Premium Pick 29", brand: "ZARÉN archive", cat: "Unisex", size: "", type: "Fragrance",
    price: 25500, priceConfidence: "low", priceNote: "Chat tag ₦25,500 — VERIFY",
    img: "assets/images/IMG-20260926-WA0030.jpg", gallery: ["assets/images/IMG-20260926-WA0030.jpg"],
    desc: "Premium product photo from the catalogue drop (shot 30).", flagged: true,
    tags: ["premium", "shot 30"] },

  { id: "wa-premium30", name: "Premium Pick 30", brand: "ZARÉN archive", cat: "Unisex", size: "", type: "Fragrance",
    price: 7000, priceConfidence: "low", priceNote: "Chat tag ₦7k — VERIFY",
    img: "assets/images/IMG-20260926-WA0031.jpg", gallery: ["assets/images/IMG-20260926-WA0031.jpg"],
    desc: "Premium product photo from the catalogue drop (shot 31).", flagged: true,
    tags: ["premium", "shot 31"] },

  { id: "wa-mosuf100", name: "Mosuf 100ml", brand: "Mosuf", cat: "Unisex", size: "100ml", type: "Eau de Parfum",
    price: 18000, priceConfidence: "high", priceNote: "Named chat tag “Mosuf 100ml 18k”",
    img: "assets/images/IMG-20260926-WA0032.jpg", gallery: ["assets/images/IMG-20260926-WA0032.jpg"],
    desc: "Mosuf in the big 100ml size — the same beloved scent, more of it.", flagged: false,
    tags: ["mosuf", "100ml"] },

  { id: "wa-premium32", name: "Premium Pick 32", brand: "ZARÉN archive", cat: "Unisex", size: "", type: "Fragrance",
    price: 8500, priceConfidence: "low", priceNote: "Chat tag ₦8,500 — VERIFY",
    img: "assets/images/IMG-20260926-WA0033.jpg", gallery: ["assets/images/IMG-20260926-WA0033.jpg"],
    desc: "Premium product photo from the catalogue drop (shot 33).", flagged: true,
    tags: ["premium", "shot 33"] },

  { id: "wa-premium33", name: "Premium Pick 33", brand: "ZARÉN archive", cat: "Unisex", size: "", type: "Fragrance",
    price: 10000, priceConfidence: "low", priceNote: "Chat tag ₦10k — VERIFY",
    img: "assets/images/IMG-20260926-WA0034.jpg", gallery: ["assets/images/IMG-20260926-WA0034.jpg"],
    desc: "Premium product photo from the catalogue drop (shot 34).", flagged: true,
    tags: ["premium", "shot 34"] },

  { id: "wa-premium34", name: "Premium Pick 34", brand: "ZARÉN archive", cat: "Unisex", size: "", type: "Fragrance",
    price: 10000, priceConfidence: "low", priceNote: "Chat tag ₦10k — VERIFY",
    img: "assets/images/IMG-20260926-WA0035.jpg", gallery: ["assets/images/IMG-20260926-WA0035.jpg"],
    desc: "Premium product photo from the catalogue drop (shot 35).", flagged: true,
    tags: ["premium", "shot 35"] },

  { id: "wa-premium35", name: "Premium Pick 35", brand: "ZARÉN archive", cat: "Unisex", size: "", type: "Fragrance",
    price: 15000, priceConfidence: "low", priceNote: "Chat tag ₦15k — VERIFY",
    img: "assets/images/IMG-20260926-WA0036.jpg", gallery: ["assets/images/IMG-20260926-WA0036.jpg"],
    desc: "Premium product photo from the catalogue drop (shot 36).", flagged: true,
    tags: ["premium", "shot 36"] },

  { id: "wa-premium36", name: "Premium Pick 36", brand: "ZARÉN archive", cat: "Unisex", size: "", type: "Fragrance",
    price: 5500, priceConfidence: "low", priceNote: "Chat tag ₦5,500 — VERIFY",
    img: "assets/images/IMG-20260926-WA0038.jpg", gallery: ["assets/images/IMG-20260926-WA0038.jpg"],
    desc: "Premium product photo from the catalogue drop (shot 38).", flagged: true,
    tags: ["premium", "shot 38"] },

  { id: "wa-yara", name: "Yara (Lattafa-style)", brand: "Lattafa line", cat: "Women", size: "EDP 100ml", type: "Eau de Parfum",
    price: 5500, priceConfidence: "low", priceNote: "Chat tag ₦5,500 — VERIFY",
    img: "assets/images/IMG-20260926-WA0039.jpg", gallery: ["assets/images/IMG-20260926-WA0039.jpg"],
    desc: "Lattafa Yara-style gold-capped EDP — powdery vanilla-rose favourite.", flagged: true,
    tags: ["yara", "lattafa", "women"] },

  { id: "wa-teriaq", name: "Teriaq Intense", brand: "Lattafa", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: 3500, priceConfidence: "low", priceNote: "Chat tag ₦3,500 — VERIFY",
    img: "assets/images/IMG-20260926-WA0040.jpg", gallery: ["assets/images/IMG-20260926-WA0040.jpg"],
    desc: "Teriaq Intense black-and-gold box — bold caramel-oud intensity.", flagged: true,
    tags: ["teriaq", "intense", "lattafa"] },

  { id: "wa-monsieur-coco", name: "Monsieur Coco Vanilla", brand: "Monsieur", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: 2500, priceConfidence: "low", priceNote: "Chat tag “2500 50ml” — VERIFY size",
    img: "assets/images/IMG-20260926-WA0041.jpg", gallery: ["assets/images/IMG-20260926-WA0041.jpg"],
    desc: "Monsieur Parfum Coco Vanilla — creamy vanilla unisex in black box.", flagged: true,
    tags: ["monsieur", "coco vanilla"] },

  { id: "wa-albait", name: "Al Bait Rose Gold", brand: "Al Bait", cat: "Women", size: "EDP 100ml", type: "Eau de Parfum",
    price: 3500, priceConfidence: "low", priceNote: "Chat tag ₦3,500 — VERIFY",
    img: "assets/images/IMG-20260926-WA0042.jpg", gallery: ["assets/images/IMG-20260926-WA0042.jpg"],
    desc: "Al Bait ornate rose-gold frame box — luxurious rose-oud eaux.", flagged: true,
    tags: ["al bait", "rose gold"] },

  { id: "wa-rayhaan-her", name: "Rayhaan HER", brand: "Rayhaan", cat: "Women", size: "EDP 100ml", type: "Eau de Parfum",
    price: 7770, priceConfidence: "low", priceNote: "Chat tag ₦7,700 — VERIFY",
    img: "assets/images/IMG-20260926-WA0043.jpg", gallery: ["assets/images/IMG-20260926-WA0043.jpg"],
    desc: "Rayhaan HER — elegant white-panel women's EDP.", flagged: true,
    tags: ["rayhaan", "her", "women"] },

  { id: "wa-khamrah-waha", name: "Khamrah Waha", brand: "Khamrah", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: 7000, priceConfidence: "high", priceNote: "Named chat tag “Khamrah waha 7k”",
    img: "assets/images/IMG-20260926-WA0044.jpg", gallery: ["assets/images/IMG-20260926-WA0044.jpg"],
    desc: "Khamrah Waha pair — the famous date-cinnamon warmth, blue edition boxes.", flagged: false,
    tags: ["khamrah", "waha", "dates", "cinnamon"] },

  { id: "wa-khashab", name: "Khashab & Oud Noir Stack", brand: "Khadlaj", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: 3370, priceConfidence: "low", priceNote: "Chat tag ₦3,370?? (uncertain block) — VERIFY",
    img: "assets/images/IMG-20260926-WA0045.jpg", gallery: ["assets/images/IMG-20260926-WA0045.jpg"],
    desc: "Khashab & Oud Noir stacked boxes — woody smoke and dark oud.", flagged: true,
    tags: ["khashab", "oud noir", "khadlaj"] },

  { id: "wa-oudnoir", name: "Oud Noir", brand: "Khadlaj", cat: "Men", size: "EDP 100ml", type: "Eau de Parfum",
    price: 6500, priceConfidence: "low", priceNote: "Chat tag ₦6,500 — VERIFY",
    img: "assets/images/IMG-20260926-WA0046.jpg", gallery: ["assets/images/IMG-20260926-WA0046.jpg"],
    desc: "Oud Noir by Khadlaj — black-gold box, saffron-forward dark oud.", flagged: true,
    tags: ["oud noir", "khadlaj", "men"] },

  { id: "wa-kids47", name: "Elena & Sunny Girl Kids", brand: "Kids line", cat: "Kids", size: "EDP", type: "Eau de Parfum",
    price: 9000, priceConfidence: "low", priceNote: "Chat tag ₦9,000 — VERIFY (kids range)",
    img: "assets/images/IMG-20260926-WA0047.jpg", gallery: ["assets/images/IMG-20260926-WA0047.jpg"],
    desc: "Elena Princess and Sunny Girl cartoon-ball perfumes for kids.", flagged: true,
    tags: ["elena", "sunny girl", "kids"] },

  { id: "wa-eclaire", name: "Eclaire", brand: "Lattafa", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: 6000, priceConfidence: "low", priceNote: "Chat tag ₦6,000 — VERIFY",
    img: "assets/images/IMG-20260926-WA0048.jpg", gallery: ["assets/images/IMG-20260926-WA0048.jpg", "assets/images/IMG-20260926-WA0057.jpg"],
    desc: "Eclaire gold pair — the caramel-ptarmigan viral Lattafa. Two shots in gallery.", flagged: true,
    tags: ["eclaire", "lattafa", "caramel"] },

  { id: "wa-royalombre", name: "Royal Ombre Intense", brand: "All Scents", cat: "Men", size: "EDP 100ml", type: "Eau de Parfum",
    price: 6000, priceConfidence: "low", priceNote: "Chat tag ₦6,000 — VERIFY",
    img: "assets/images/IMG-20260926-WA0049.jpg", gallery: ["assets/images/IMG-20260926-WA0049.jpg", "assets/images/IMG-20260926-WA0058.jpg"],
    desc: "Royal Ombre Intense “All Scents” pour homme — gold-medal black box. Two shots in gallery.", flagged: true,
    tags: ["royal ombre", "all scents", "men"] },

  { id: "wa-oniro", name: "Oniro", brand: "Oniro", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: 6000, priceConfidence: "low", priceNote: "Chat tag ₦6,000 — VERIFY",
    img: "assets/images/IMG-20260926-WA0050.jpg", gallery: ["assets/images/IMG-20260926-WA0050.jpg", "assets/images/IMG-20260926-WA0059.jpg"],
    desc: "Oniro white-gold box — powdery floral dream scent. Two shots in gallery.", flagged: true,
    tags: ["oniro", "floral"] },

  { id: "wa-liquidbrun", name: "Liquid Brun", brand: "French Avenue", cat: "Men", size: "EDP 100ml", type: "Eau de Parfum",
    price: 3500, priceConfidence: "low", priceNote: "Chat tag ₦3,500 — VERIFY",
    img: "assets/images/IMG-20260926-WA0051.jpg", gallery: ["assets/images/IMG-20260926-WA0051.jpg", "assets/images/IMG-20260926-WA0060.jpg"],
    desc: "Liquid Brun by French Avenue — sleek bronze-taupe box, smooth woody scent.", flagged: true,
    tags: ["liquid brun", "french avenue", "men"] },

  { id: "wa-suave", name: "Suave", brand: "Suave", cat: "Men", size: "EDP 100ml", type: "Eau de Parfum",
    price: 3500, priceConfidence: "low", priceNote: "Chat tag ₦3,500 — VERIFY",
    img: "assets/images/IMG-20260926-WA0052.jpg", gallery: ["assets/images/IMG-20260926-WA0052.jpg", "assets/images/IMG-20260926-WA0061.jpg"],
    desc: "Suave navy box with free deo-spray inside promo — clean masculine.", flagged: true,
    tags: ["suave", "men"] },

  { id: "wa-bluedream", name: "Blue Dream", brand: "Blue Dream", cat: "Women", size: "EDT 100ml", type: "Eau de Toilette",
    price: 3500, priceConfidence: "low", priceNote: "Chat tag ₦3,500 — VERIFY",
    img: "assets/images/IMG-20260926-WA0053.jpg", gallery: ["assets/images/IMG-20260926-WA0053.jpg", "assets/images/IMG-20260926-WA0062.jpg"],
    desc: "Blue Dream Eau de Toilette — airy blue bottle with Eiffel-tower motif.", flagged: true,
    tags: ["blue dream", "edt", "women"] },

  { id: "wa-ophylia", name: "Ophylia", brand: "Ophylia", cat: "Women", size: "EDP 100ml", type: "Eau de Parfum",
    price: 3500, priceConfidence: "low", priceNote: "Chat tag ₦3,500 — VERIFY",
    img: "assets/images/IMG-20260926-WA0054.jpg", gallery: ["assets/images/IMG-20260926-WA0054.jpg", "assets/images/IMG-20260926-WA0063.jpg"],
    desc: "Ophylia gold box with angel wings — soft powdery floral.", flagged: true,
    tags: ["ophylia", "women", "floral"] },

  { id: "wa-hayaati", name: "Hayaati", brand: "Lattafa", cat: "Men", size: "EDP 100ml", type: "Eau de Parfum",
    price: 3500, priceConfidence: "low", priceNote: "Chat tag ₦3,500 — VERIFY",
    img: "assets/images/IMG-20260926-WA0055.jpg", gallery: ["assets/images/IMG-20260926-WA0055.jpg", "assets/images/IMG-20260926-WA0064.jpg"],
    desc: "Hayaati by Lattafa — black wrapped box, fresh woody staple.", flagged: true,
    tags: ["hayaati", "lattafa", "men"] },

  { id: "wa-destino", name: "Le Destino (cream box)", brand: "Le Destino", cat: "Women", size: "EDP", type: "Eau de Parfum",
    price: 2500, priceConfidence: "low", priceNote: "Chat tag ₦2,500 — VERIFY",
    img: "assets/images/IMG-20260926-WA0056.jpg", gallery: ["assets/images/IMG-20260926-WA0056.jpg"],
    desc: "Cream quilted Le Destino box held in-store — soft feminine scent.", flagged: true,
    tags: ["le destino", "women"] },

  { id: "wa-eclaire2", name: "Eclaire (alt view)", brand: "Lattafa", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: null, priceConfidence: null, priceNote: "Second shot — grouped with “Eclaire” (₦6,000 pending)",
    img: "assets/images/IMG-20260926-WA0057.jpg", gallery: ["assets/images/IMG-20260926-WA0057.jpg"],
    desc: "Alternate Eclaire shot — grouped into the main Eclaire product.", flagged: false,
    tags: ["eclaire"] },

  { id: "wa-royalombre2", name: "Royal Ombre Intense (alt view)", brand: "All Scents", cat: "Men", size: "EDP 100ml", type: "Eau de Parfum",
    price: null, priceConfidence: null, priceNote: "Second shot — grouped with “Royal Ombre Intense”",
    img: "assets/images/IMG-20260926-WA0058.jpg", gallery: ["assets/images/IMG-20260926-WA0058.jpg"],
    desc: "Alternate Royal Ombre Intense shot — grouped into the main product.", flagged: false,
    tags: ["royal ombre"] },

  { id: "wa-oniro2", name: "Oniro (alt view)", brand: "Oniro", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: null, priceConfidence: null, priceNote: "Second shot — grouped with “Oniro”",
    img: "assets/images/IMG-20260926-WA0059.jpg", gallery: ["assets/images/IMG-20260926-WA0059.jpg"],
    desc: "Alternate Oniro shot — grouped into the main product.", flagged: false,
    tags: ["oniro"] },

  { id: "wa-heavenscent", name: "Heaven Scent", brand: "Heaven Scent", cat: "Unisex", size: "EDT", type: "Eau de Toilette",
    price: 3500, priceConfidence: "low", priceNote: "Chat tag ₦3,500 — VERIFY",
    img: "assets/images/IMG-20260926-WA0066.jpg", gallery: ["assets/images/IMG-20260926-WA0066.jpg"],
    desc: "Heaven Scent black-gold box — fresh heavenly EDT held in-store.", flagged: true,
    tags: ["heaven scent", "edt"] },

  { id: "wa-9pm-elixer", name: "9pm Elixer Amazon", brand: "FIBA", cat: "Men", size: "EDP 100ml", type: "Eau de Parfum",
    price: 3500, priceConfidence: "low", priceNote: "Chat tag ₦3,500 — VERIFY",
    img: "assets/images/IMG-20260926-WA0067.jpg", gallery: ["assets/images/IMG-20260926-WA0067.jpg"],
    desc: "9pm Elixer Amazon — burgundy-gold box from the 9pm family.", flagged: true,
    tags: ["9pm", "elixer", "amazon"] },

  { id: "wa-zenith", name: "Zenith RIFFS", brand: "RIFFS", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: 2500, priceConfidence: "low", priceNote: "Chat tag ₦2,500 — VERIFY",
    img: "assets/images/IMG-20260926-WA0068.jpg", gallery: ["assets/images/IMG-20260926-WA0068.jpg"],
    desc: "Zenith by RIFFS — white-gold ring box, clean musky scent.", flagged: true,
    tags: ["zenith", "riffs"] },

  { id: "wa-ameer", name: "Ameer Al Oudh Intense", brand: "Lattafa", cat: "Men", size: "EDP 100ml", type: "Eau de Parfum",
    price: 6000, priceConfidence: "low", priceNote: "Chat tag ₦6,000 — VERIFY",
    img: "assets/images/IMG-20260926-WA0069.jpg", gallery: ["assets/images/IMG-20260926-WA0069.jpg"],
    desc: "Ameer Al Oudh Intense Oud — the beloved Lattafa budget oud, white-gold box.", flagged: true,
    tags: ["ameer al oudh", "lattafa", "oud"] },

  { id: "wa-goldsand", name: "Gold Sand", brand: "Sand line", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: 3500, priceConfidence: "low", priceNote: "Chat tag ₦3,500 — VERIFY",
    img: "assets/images/IMG-20260926-WA0070.jpg", gallery: ["assets/images/IMG-20260926-WA0070.jpg"],
    desc: "Gold Sand EDP — beige-gold arabesque box, warm amber scent.", flagged: true,
    tags: ["gold sand", "amber"] },

  { id: "wa-silversand", name: "Silver Sand", brand: "Sand line", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: 2500, priceConfidence: "low", priceNote: "Chat tag ₦2,500 — VERIFY",
    img: "assets/images/IMG-20260926-WA0071.jpg", gallery: ["assets/images/IMG-20260926-WA0071.jpg"],
    desc: "Silver Sand EDP — black-silver arabesque box, cool fresh scent.", flagged: true,
    tags: ["silver sand", "fresh"] },

  { id: "wa-reddiamond", name: "Red Diamond Gift Set", brand: "Red Diamond", cat: "Women", size: "Gift set", type: "Gift Set",
    price: 6000, priceConfidence: "low", priceNote: "Chat tag ₦6,000 — VERIFY",
    img: "assets/images/IMG-20260926-WA0072.jpg", gallery: ["assets/images/IMG-20260926-WA0072.jpg"],
    desc: "Red Diamond heart-cap gift set — ruby glass perfume in presentation box.", flagged: true,
    tags: ["red diamond", "gift set", "women"] },

  { id: "wa-sauvage", name: "Sauvage (Dior style)", brand: "Dior line", cat: "Men", size: "EDP 100ml", type: "Eau de Parfum",
    price: 3500, priceConfidence: "low", priceNote: "Chat tag ₦3,500 — VERIFY",
    img: "assets/images/IMG-20260926-WA0073.jpg", gallery: ["assets/images/IMG-20260926-WA0073.jpg"],
    desc: "Sauvage Eau de Parfum — the iconic deep-blue masculine.", flagged: true,
    tags: ["sauvage", "dior", "men"] },

  { id: "wa-confession", name: "Confession", brand: "Confession", cat: "Men", size: "EDP", type: "Eau de Parfum",
    price: 2500, priceConfidence: "low", priceNote: "Chat tag ₦2,500 — VERIFY",
    img: "assets/images/IMG-20260926-WA0074.jpg", gallery: ["assets/images/IMG-20260926-WA0074.jpg"],
    desc: "Confession brown-silver box — warm spicy masculine.", flagged: true,
    tags: ["confession", "men"] },

  { id: "wa-smilenow", name: "Smile Now", brand: "Agabson", cat: "Women", size: "EDP 100ml", type: "Eau de Parfum",
    price: 6500, priceConfidence: "low", priceNote: "Chat tag ₦6,500 — VERIFY",
    img: "assets/images/IMG-20260926-WA0075.jpg", gallery: ["assets/images/IMG-20260926-WA0075.jpg"],
    desc: "Smile Now by Agabson — pink geometric box, joyful floral.", flagged: true,
    tags: ["smile now", "agabson", "women"] },

  { id: "wa-hummercode", name: "Hummer Code", brand: "Hummer", cat: "Men", size: "EDT 100ml", type: "Eau de Toilette",
    price: 6500, priceConfidence: "low", priceNote: "Chat tag ₦6,500 — VERIFY",
    img: "assets/images/IMG-20260926-WA0076.jpg", gallery: ["assets/images/IMG-20260926-WA0076.jpg"],
    desc: "Hummer Code black — bold masculine with free roll-on inside.", flagged: true,
    tags: ["hummer code", "men"] },

  { id: "wa-clubenuit", name: "Club de Nuit Intense Man", brand: "Armaf", cat: "Men", size: "EDT 105ml", type: "Eau de Toilette",
    price: 6000, priceConfidence: "medium", priceNote: "Chat tag ₦6,000 (Club de Nuit block)",
    img: "assets/images/IMG-20260926-WA0077.jpg", gallery: ["assets/images/IMG-20260926-WA0077.jpg"],
    desc: "Club de Nuit Intense Man by Armaf — the legendary Aventus-inspired beast.", flagged: false,
    tags: ["club de nuit", "armaf", "men", "intense"] },

  { id: "wa-escape", name: "Escape", brand: "Paris line", cat: "Women", size: "EDP + Body Mist", type: "Gift Set",
    price: 6000, priceConfidence: "low", priceNote: "Chat tag ₦6,000 — VERIFY",
    img: "assets/images/IMG-20260926-WA0078.jpg", gallery: ["assets/images/IMG-20260926-WA0078.jpg"],
    desc: "Escape For Her — blue box with EDP + body mist duo.", flagged: true,
    tags: ["escape", "for her", "set"] },

  { id: "wa-parisjade", name: "Paris Jade", brand: "Paris", cat: "Women", size: "EDP", type: "Eau de Parfum",
    price: 6000, priceConfidence: "low", priceNote: "Chat tag ₦6,000 — VERIFY",
    img: "assets/images/IMG-20260926-WA0079.jpg", gallery: ["assets/images/IMG-20260926-WA0079.jpg"],
    desc: "Paris Jade — deep green box, fresh floral-green signature.", flagged: true,
    tags: ["paris jade", "green"] },

  { id: "wa-diplomatic", name: "Diplomatic", brand: "Diplomatic", cat: "Men", size: "EDP", type: "Eau de Parfum",
    price: 45000, priceConfidence: "low", priceNote: "Chat tag ₦45k — VERIFY",
    img: "assets/images/IMG-20260926-WA0080.jpg", gallery: ["assets/images/IMG-20260926-WA0080.jpg"],
    desc: "Diplomatic burgundy-crest box — distinguished premium masculine.", flagged: true,
    tags: ["diplomatic", "premium"] },

  { id: "wa-khamra", name: "Khamra (Agabson)", brand: "Agabson", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: 6000, priceConfidence: "high", priceNote: "Named chat tag “6000 khamra agabson”",
    img: "assets/images/IMG-20260926-WA0081.jpg", gallery: ["assets/images/IMG-20260926-WA0081.jpg"],
    desc: "Khamra gold-script box — the Agabson take on the famous Khamrah date-cinnamon.", flagged: false,
    tags: ["khamra", "agabson", "khamrah"] },

  { id: "wa-suikercandy", name: "Suiker Candy", brand: "Aro-Fac", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: 3500, priceConfidence: "low", priceNote: "Chat tag ₦3,500 — VERIFY",
    img: "assets/images/IMG-20260926-WA0082.jpg", gallery: ["assets/images/IMG-20260926-WA0082.jpg", "assets/images/IMG-20260926-WA0083.jpg"],
    desc: "Aro-Fac Aroma Factory “Suiker Candy” — pink & white editions in gallery.", flagged: true,
    tags: ["suiker candy", "aro-fac", "sweet"] },

  { id: "wa-suikercandy2", name: "Suiker Candy Blanc (alt view)", brand: "Aro-Fac", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: null, priceConfidence: null, priceNote: "Second shot — grouped with “Suiker Candy”",
    img: "assets/images/IMG-20260926-WA0083.jpg", gallery: ["assets/images/IMG-20260926-WA0083.jpg"],
    desc: "Suiker Candy Blanc edition — grouped into the main Suiker Candy product.", flagged: false,
    tags: ["suiker candy", "blanc"] },

  { id: "wa-liquidbrun2", name: "Liquid Brun (alt view)", brand: "French Avenue", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: null, priceConfidence: null, priceNote: "Second view — grouped with main product, ask Sakinah for price",
    img: "assets/images/IMG-20260926-WA0060.jpg", gallery: ["assets/images/IMG-20260926-WA0060.jpg"],
    desc: "Alternate in-store view of Liquid Brun — grouped with the main Liquid Brun product.", flagged: false,
    tags: ["liquid brun", "french avenue", "alt view"] },

  { id: "wa-suave2", name: "Suave (alt view)", brand: "Suave", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: null, priceConfidence: null, priceNote: "Second view — grouped with main product, ask Sakinah for price",
    img: "assets/images/IMG-20260926-WA0061.jpg", gallery: ["assets/images/IMG-20260926-WA0061.jpg"],
    desc: "Alternate in-store view of Suave — grouped with the main Suave product.", flagged: false,
    tags: ["suave", "alt view"] },

  { id: "wa-bluedream2", name: "Blue Dream (alt view)", brand: "Blue Dream", cat: "Women", size: "EDP 100ml", type: "Eau de Parfum",
    price: null, priceConfidence: null, priceNote: "Second view — grouped with main product, ask Sakinah for price",
    img: "assets/images/IMG-20260926-WA0062.jpg", gallery: ["assets/images/IMG-20260926-WA0062.jpg"],
    desc: "Alternate in-store view of Blue Dream — grouped with the main Blue Dream product.", flagged: false,
    tags: ["blue dream", "alt view", "women"] },

  { id: "wa-ophylia2", name: "Ophylia (alt view)", brand: "Ophylia", cat: "Women", size: "EDP 100ml", type: "Eau de Parfum",
    price: null, priceConfidence: null, priceNote: "Second view — grouped with main product, ask Sakinah for price",
    img: "assets/images/IMG-20260926-WA0063.jpg", gallery: ["assets/images/IMG-20260926-WA0063.jpg"],
    desc: "Alternate in-store view of Ophylia — grouped with the main Ophylia product.", flagged: false,
    tags: ["ophylia", "alt view", "women"] },

  { id: "wa-hayaati2", name: "Hayaati (alt view)", brand: "Lattafa", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: null, priceConfidence: null, priceNote: "Second view — grouped with main product, ask Sakinah for price",
    img: "assets/images/IMG-20260926-WA0064.jpg", gallery: ["assets/images/IMG-20260926-WA0064.jpg"],
    desc: "Alternate in-store view of Hayaati — grouped with the main Hayaati product.", flagged: false,
    tags: ["hayaati", "lattafa", "alt view"] },

  { id: "wa-premium65", name: "Premium Pick 65 (alt view)", brand: "ZARÉN archive", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: null, priceConfidence: null, priceNote: "Second view — grouped with main product, ask Sakinah for price",
    img: "assets/images/IMG-20260926-WA0065.jpg", gallery: ["assets/images/IMG-20260926-WA0065.jpg"],
    desc: "Alternate in-store view — catalogue shot 65, previously unlisted. Ask Sakinah for details.", flagged: false,
    tags: ["premium", "shot 65", "alt view"] }
];

/* Categories present in the catalogue (for filter pills) */
window.CATALOG_CATS = ["Women", "Men", "Unisex", "Kids", "Skincare"];
