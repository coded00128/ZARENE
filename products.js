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
    price: 2500, priceConfidence: "high", priceNote: "N2,500 sticker visible in photo",
    img: "assets/images/24k.jpg", gallery: ["assets/images/24k.jpg"],
    desc: "Striking gold-toned EDP from the 24K line — a bold evening scent with a luxurious golden box.", flagged: false,
    tags: ["24k", "gold", "edp", "unisex"] },

  { id: "alldayfresh", name: "All Day Fresh (Karis Roll-On)", brand: "Karis", cat: "Unisex", size: "Roll-on",
    type: "Perfume Oil", price: 2000, priceConfidence: "high", priceNote: "Owner confirmed ₦2,000 (sticker in photo shows ₦1,800, now updated)",
    img: "assets/images/alldayfresh.jpg", gallery: ["assets/images/alldayfresh.jpg"],
    desc: "Karis All Day Fresh roll-on — the everyday pocket perfume oil that lasts from morning to night.", flagged: false,
    tags: ["karis", "all day fresh", "roll on", "oil"] },

  { id: "aventos", name: "Aventos Blue Lineup", brand: "Aventos", cat: "Men", size: "Body Spray / EDP", type: "Fragrance",
    price: 5500, priceConfidence: "high", priceNote: "N5,500 sticker on Aventos Blue box in photo",
    img: "assets/images/aventos.jpg", gallery: ["assets/images/aventos.jpg"],
    desc: "Aventos Blue for Him with Rayhaan, Smart and Attention boxes.", flagged: false,
    tags: ["aventos", "blue", "lineup", "men"] },

  { id: "candycrush", name: "Candy Crush (Rose Magic)", brand: "FM", cat: "Women", size: "Body Mist / EDP", type: "Body Mist",
    price: 2500, priceConfidence: "high", priceNote: "Owner confirmed ₦2,500 (sticker in photo shows ₦2,000, now updated)",
    img: "assets/images/candycrush.jpg", gallery: ["assets/images/candycrush.jpg"],
    desc: "Sweet, playful and unmistakable — the famous Candy Crush scent in the pink Rose Magic box.", flagged: false,
    tags: ["candy crush", "rose magic", "sweet", "women", "mist"] },

  { id: "challenge", name: "Challenge", brand: "Body Spray Line", cat: "Men", size: "Body Spray", type: "Body Spray",
    price: 1700, priceConfidence: "high", priceNote: "N1,700 sticker visible in photo",
    img: "assets/images/challenge.jpg", gallery: ["assets/images/challenge.jpg"],
    desc: "Bold deodorant body sprays built to be noticed — sporty freshness with an aromatic edge.", flagged: false,
    tags: ["challenge", "body spray", "men", "sport"] },

  { id: "dove", name: "Dove Go Fresh Sprays", brand: "Dove", cat: "Women", size: "Body Spray", type: "Body Spray",
    price: 5000, priceConfidence: "high", priceNote: "N5,000 stickers visible in photo",
    img: "assets/images/dove.jpg", gallery: ["assets/images/dove.jpg"],
    desc: "Dove go fresh deodorant sprays, pear and raspberry.", flagged: false,
    tags: ["dove", "go fresh", "spray", "women"] },

  { id: "fruitcherry", name: "Fruit Cherry", brand: "Fruit Line", cat: "Women", size: "Roll-on", type: "Perfume Oil",
    price: 1200, priceConfidence: "high", priceNote: "Existing site price ₦1,200",
    img: "assets/images/fruitcherry.jpg", gallery: ["assets/images/fruitcherry.jpg"],
    desc: "Juicy cherry and red fruits in a tiny roll-on — sweet, fun and pocket-friendly.", flagged: false,
    tags: ["fruit cherry", "cherry", "roll on", "sweet"] },

  { id: "genie", name: "Genie", brand: "Genie Oils", cat: "Unisex", size: "Roll-on", type: "Perfume Oil",
    price: 1000, priceConfidence: "medium", priceNote: "Chat tag ₦1,000 beside the Genie oils shot",
    img: "assets/images/genie.jpg", gallery: ["assets/images/genie.jpg"],
    desc: "Concentrated genie-bottle perfume oils — one dab goes a long way.", flagged: false,
    tags: ["genie", "oil", "roll on"] },

  { id: "imperioway", name: "Imperio Way", brand: "Imperio", cat: "Unisex", size: "EDP 25ml", type: "Eau de Parfum",
    price: 3500, priceConfidence: "high", priceNote: "N3,500 sticker visible in photo",
    img: "assets/images/imperioway.jpg", gallery: ["assets/images/imperioway.jpg"],
    desc: "Imperio Way pair — pink-capped freshness with a smooth woody drydown.", flagged: false,
    tags: ["imperio", "way", "edp"] },

  { id: "kaly", name: "Kaly Mini Collection", brand: "Kaly", cat: "Unisex", size: "Minis (set)", type: "Miniature Set",
    price: 1000, priceConfidence: "high", priceNote: "N1,000 stickers visible in photo",
    img: "assets/images/kaly.jpg", gallery: ["assets/images/kaly.jpg"],
    desc: "Kaly and Mosuf mini boxes, pocket perfumes for every mood.", flagged: false,
    tags: ["kaly", "mini", "set", "collection"] },

  { id: "karis", name: "Karis All Day Fresh Sprays", brand: "Karis", cat: "Unisex", size: "Body Spray 200ml", type: "Body Spray",
    price: 3700, priceConfidence: "high", priceNote: "₦3,700 stickers visible on spray cans in photo (roll-on stays ₦2,000)",
    img: "assets/images/karis.jpg", gallery: ["assets/images/karis.jpg"],
    desc: "The famous Karis All Day Fresh deodorant sprays — 48h protection in four colour variants.", flagged: false,
    tags: ["karis", "all day fresh", "spray", "48h"] },

  { id: "mask", name: "Face Mask Trio (Eye Tanke / Milk / Sadoun)", brand: "Skincare", cat: "Skincare", size: "Sheet masks", type: "Skincare",
    price: 400, priceConfidence: "high", priceNote: "₦400 per one — owner confirmed",
    img: "assets/images/mask.jpg", gallery: ["assets/images/mask.jpg"],
    desc: "Skincare trio: green eye patches, milk sheet mask and pink lip/nose strips. ₦400 per one.", flagged: false,
    tags: ["mask", "skincare", "sheet"] },

  { id: "mosuf", name: "Mosuf 25ml", brand: "Mosuf", cat: "Unisex", size: "25ml", type: "Eau de Parfum",
    price: 2000, priceConfidence: "high", priceNote: "N2,000 sticker visible in photo",
    img: "assets/images/mosuf.jpg", gallery: ["assets/images/mosuf.jpg"],
    desc: "Mosuf mist trio, sweet powdery warmth in handy bottles.", flagged: false,
    tags: ["mosuf", "25ml", "edp"] },

  { id: "mosufwardI", name: "Mosuf Ward I", brand: "Mosuf", cat: "Unisex", size: "EDP 50ml", type: "Eau de Parfum",
    price: 4000, priceConfidence: "high", priceNote: "N4,000 stickers visible in photo",
    img: "assets/images/mosufward.jpg", gallery: ["assets/images/mosufward.jpg"],
    desc: "Mosuf Ward I — beige, blush and violet boxes; soft musky rose character.", flagged: false,
    tags: ["mosuf", "ward", "edp"] },

  { id: "mousufward1", name: "Mousuf Wardas", brand: "Mousuf", cat: "Unisex", size: "EDP", type: "Eau de Parfum",
    price: 3500, priceConfidence: "medium", priceNote: "Chat tag ₦3,500 (Mosuf block)",
    img: "assets/images/mousuf-wardi.jpg", gallery: ["assets/images/mousuf-wardi.jpg"],
    desc: "Mousuf Wardas rose-pink sprays — romantic, powdery and long lasting.", flagged: false,
    tags: ["mousuf", "wardas", "rose"] },

  { id: "natador", name: "Natador", brand: "Natador", cat: "Unisex", size: "Roll-on + refill", type: "Perfume Oil",
    price: 2500, priceConfidence: "medium", priceNote: "Chat tag ₦2,500 (early block)",
    img: "assets/images/natador.jpg", gallery: ["assets/images/natador.jpg"],
    desc: "Natador maroon roll-on with its refill tube — classic concentrated oil.", flagged: false,
    tags: ["natador", "roll on", "oil"] },

  { id: "nivea", name: "Nivea Roll-On Family", brand: "Nivea", cat: "Unisex", size: "Roll-on 50ml", type: "Deodorant",
    price: 2200, priceConfidence: "high", priceNote: "N2,200 sticker visible in photo",
    img: "assets/images/nivea.jpg", gallery: ["assets/images/nivea.jpg", "assets/images/nivea-rollons.jpg"],
    desc: "Nivea Beauty, Black & White and Deep Impact roll-ons — everyday freshness you can trust.", flagged: false,
    tags: ["nivea", "roll on", "deodorant"] },

  { id: "pinklove", name: "Pink Love", brand: "Aster", cat: "Women", size: "EDP", type: "Eau de Parfum",
    price: 1000, priceConfidence: "high", priceNote: "N1,000 sticker visible in photo",
    img: "assets/images/pinklove.jpg", gallery: ["assets/images/pinklove.jpg"],
    desc: "Pink Love and Mousuf Wardi stack, sweet floral boxes.", flagged: false,
    tags: ["pink love", "floral", "women"] },

  { id: "storm", name: "Storm Elixir Deodorants", brand: "Storm", cat: "Unisex", size: "Body Spray 200ml", type: "Body Spray",
    price: 3000, priceConfidence: "high", priceNote: "N3,000 stickers visible in photo",
    img: "assets/images/storm.jpg", gallery: ["assets/images/storm.jpg"],
    desc: "Storm Elixir perfumed deodorant sprays.", flagged: false,
    tags: ["storm", "elixir", "deodorant"] },

  { id: "stormkids", name: "Storm Kids", brand: "Storm", cat: "Kids", size: "Body Spray", type: "Body Spray",
    price: 2500, priceConfidence: "high", priceNote: "₦2,500 sticker visible on blue Shark bottle in photo",
    img: "assets/images/stormkids.jpg", gallery: ["assets/images/stormkids.jpg"],
    desc: "Gentle Storm Kids deodorants — Dora-blue and pink caps, made for little ones.", flagged: false,
    tags: ["storm kids", "kids", "deodorant"] },

  { id: "super", name: "Super Fruit Roll-Ons", brand: "Fruit line", cat: "Women", size: "Roll-on", type: "Perfume Oil",
    price: 1500, priceConfidence: "high", priceNote: "₦1,500 sticker visible on rightmost bottle in photo",
    img: "assets/images/super.jpg", gallery: ["assets/images/super.jpg"],
    desc: "Ball-topped fruit roll-ons in pink and violet — juicy everyday oils.", flagged: false,
    tags: ["super", "fruit", "roll on"] },

  { id: "touch", name: "Touch Minis", brand: "Touch", cat: "Unisex", size: "Minis (set)", type: "Miniature Set",
    price: 1300, priceConfidence: "high", priceNote: "₦1,300 stickers visible on pink + blue boxes in photo",
    img: "assets/images/touch.jpg", gallery: ["assets/images/touch.jpg"],
    desc: "Touch mini boxes — black, pink and blue pocket perfumes with white caps.", flagged: false,
    tags: ["touch", "mini", "set"] },

  { id: "vannila", name: "Vanilla Oil Lineup", brand: "Oil bar", cat: "Unisex", size: "Roll-on 10ml", type: "Perfume Oil",
    price: 500, priceConfidence: "high", priceNote: "₦500 stickers visible on oil bottles in photo",
    img: "assets/images/vanilla.jpg", gallery: ["assets/images/vanilla.jpg"],
    desc: "A full lineup of vanilla and fruity oils with colourful branded sleeves.", flagged: false,
    tags: ["vanilla", "oil", "lineup"] },

  { id: "vintageradio", name: "Vintage Radio (Oud Pafum)", brand: "Oud line", cat: "Unisex", size: "EDP", type: "Eau de Parfum",
    price: 3500, priceConfidence: "high", priceNote: "₦3,500 sticker visible on middle box in photo",
    img: "assets/images/vintageradio.jpg", gallery: ["assets/images/vintageradio.jpg"],
    desc: "Three maroon “Oud Pafum” boxes — the vintage-radio inspired oud trio.", flagged: false,
    tags: ["vintage radio", "oud", "pafum"] },

  /* ============ WHATSAPP CATALOGUE (26 Sept drop) ============ */

  { id: "wa-nivea-shot", name: "Nivea Roll-On Shelf Shot", brand: "Nivea", cat: "Unisex", size: "Roll-on", type: "Deodorant",
    price: 2200, priceConfidence: "high", priceNote: "₦2,200 sticker visible on Fresh Energy bottle in photo",
    img: "assets/images/nivea-rollons.jpg", gallery: ["assets/images/nivea-rollons.jpg"],
    desc: "In-store photo of the Nivea roll-on shelf — Beauty, Black & White, Deep Impact.", flagged: false,
    tags: ["nivea", "shelf"] },

  { id: "wa-hug", name: "HUG", brand: "HUG", cat: "Unisex", size: "Body Spray", type: "Body Spray",
    price: 3000, priceConfidence: "high", priceNote: "Chat tag #3000 + ₦3000 sticker visible on the can",
    img: "assets/images/hug-body-spray.jpg", gallery: ["assets/images/hug-body-spray.jpg"],
    desc: "HUG black body spray — musky evening freshness with its own ₦3000 price sticker.", flagged: false,
    tags: ["hug", "body spray", "black"] },

  { id: "wa-fogg", name: "FOGG Essence (Pink)", brand: "FOGG", cat: "Men", size: "Body Spray", type: "Body Spray",
    price: 4000, priceConfidence: "high", priceNote: "N4,000 sticker visible in photo",
    img: "assets/images/fogg-essence-pink.jpg", gallery: ["assets/images/fogg-essence-pink.jpg"],
    desc: "FOGG Essence fragrance body spray for women, pink 120ml can.", flagged: false,
    tags: ["fogg", "essence", "pink", "spray"] },

  { id: "wa-cosmo", name: "Cosmo Passion Roll-Ons", brand: "Cosmo", cat: "Women", size: "Roll-on", type: "Perfume Oil",
    price: 2500, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/cosmo-passion-rollons.jpg", gallery: ["assets/images/cosmo-passion-rollons.jpg"],
    desc: "Cosmo Passion anti-perspirant roll-on duo.", flagged: false,
    tags: ["cosmo", "passion", "roll on"] },

  { id: "wa-oud-duo", name: "Prestige SUGER", brand: "Prestige", cat: "Unisex", size: "EDP 120ml", type: "Eau de Parfum",
    price: 2000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/prestige-suger.jpg", gallery: ["assets/images/prestige-suger.jpg"],
    desc: "Prestige SUGER black EDP spray.", flagged: false,
    tags: ["prestige", "suger", "edp"] },

  { id: "wa-gelato-oudcrush", name: "Gelato Crush / Oud Crush (Lasgidi)", brand: "Lasgidi", cat: "Unisex", size: "EDP", type: "Eau de Parfum",
    price: 2500, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/lasgidi-gelato-oud-crush.jpg", gallery: ["assets/images/lasgidi-gelato-oud-crush.jpg"],
    desc: "Lasgidi Gelato Crush and Oud Crush body mists.", flagged: false,
    tags: ["lasgidi", "gelato", "oud crush", "mist"] },

  { id: "wa-wavepop", name: "Wave Pop (Solar Peach + Plum)", brand: "Wave", cat: "Unisex", size: "Body Spray", type: "Body Spray",
    price: 4500, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/wave-pop-peach-plum.jpg", gallery: ["assets/images/wave-pop-peach-plum.jpg"],
    desc: "Wave Pop Solar Peach Bloom and Plum Perfect mists.", flagged: false,
    tags: ["wave pop", "peach", "plum", "mist"] },

  { id: "wa-monogotas", name: "Monogotas Vanilla + Mora", brand: "Monogotas", cat: "Women", size: "EDP", type: "Eau de Parfum",
    price: 3000, priceConfidence: "high", priceNote: "N3,000 stickers visible in photo",
    img: "assets/images/monogotas-vanilla-mora.jpg", gallery: ["assets/images/monogotas-vanilla-mora.jpg"],
    desc: "Monogotas Vanilla and Mora 100ml pair.", flagged: false,
    tags: ["monogotas", "vanilla", "mora"] },

  { id: "wa-unsure-8", name: "Ameer Al Oudh + Mousuf Pen Set", brand: "Mixed", cat: "Unisex", size: "", type: "Fragrance",
    price: 1000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/ameer-mousuf-pens.jpg", gallery: ["assets/images/ameer-mousuf-pens.jpg"],
    desc: "Ameer Al Oudh with Mousuf pen-boxes.", flagged: false,
    tags: ["ameer", "mousuf", "pen", "set"] },

  { id: "wa-unsure-9", name: "Sugar Baby 25ml", brand: "Sugar Baby", cat: "Unisex", size: "EDP 25ml", type: "Eau de Parfum",
    price: 3500, priceConfidence: "high", priceNote: "N3,500 sticker visible in photo",
    img: "assets/images/sugar-baby-25ml.jpg", gallery: ["assets/images/sugar-baby-25ml.jpg"],
    desc: "Sugar Baby 25ml spray box.", flagged: false,
    tags: ["sugar baby", "25ml"] },

  { id: "wa-giftminis", name: "Mosuf 25ml Trio", brand: "Mosuf", cat: "Unisex", size: "25ml trio", type: "Eau de Parfum",
    price: 3000, priceConfidence: "high", priceNote: "N3,000 stickers visible in photo",
    img: "assets/images/mosuf-25ml-trio.jpg", gallery: ["assets/images/mosuf-25ml-trio.jpg"],
    desc: "Mosuf 25ml trio, Wardi Luxe and Rizz.", flagged: false,
    tags: ["mosuf", "25ml", "trio"] },

  { id: "wa-lineup1", name: "Designer Spray Lineup", brand: "Mixed", cat: "Unisex", size: "Mixed", type: "Lineup",
    price: 3500, priceConfidence: "low", priceNote: "Chat tag ₦3,500 — VERIFY",
    img: "assets/images/designer-spray-lineup.jpg", gallery: ["assets/images/designer-spray-lineup.jpg"],
    desc: "Shelf lineup with 9pm, Yara, Aventos Blue, Eclaire and others.", flagged: true,
    tags: ["lineup", "9uf", "whisper", "soka"] },

  { id: "wa-araman-gold", name: "Al Araman Amber Oud — Golden Edition", brand: "Al Araman", cat: "Unisex", size: "60ml", type: "Eau de Parfum",
    price: 9000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/al-araman-amber-oud.jpg", gallery: ["assets/images/al-araman-amber-oud.jpg"],
    desc: "Al Araman Amber Oud Golden Edition 60ml gift box.", flagged: false,
    tags: ["al araman", "amber oud", "golden", "angham"] },

  { id: "wa-dora", name: "Dora Perfume 50ml", brand: "Dora", cat: "Kids", size: "EDP 50ml", type: "Eau de Parfum",
    price: 3500, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/dora-perfume.jpg", gallery: ["assets/images/dora-perfume.jpg"],
    desc: "Dora the Explorer EDP 50ml — fruity kids' fragrance in blister pack.", flagged: false,
    tags: ["dora", "kids", "50ml"] },

  { id: "wa-9pm-fiba", name: "9pm FIBA", brand: "Fragrance World", cat: "Men", size: "EDP 100ml", type: "Eau de Parfum",
    price: 7500, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/9pm-fiba.jpg", gallery: ["assets/images/9pm-fiba.jpg"],
    desc: "9pm by FIBA — the sweet ambery night scent in its black presentation box.", flagged: false,
    tags: ["9pm", "fiba", "men"] },

  { id: "wa-9pm-nightout", name: "9pm Night Out", brand: "FIBA", cat: "Men", size: "EDP 100ml", type: "Eau de Parfum",
    price: 7500, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/9pm-night-out.jpg", gallery: ["assets/images/9pm-night-out.jpg"],
    desc: "9pm Night Out EDP — the party scent. Second wrapped shot added to gallery.", flagged: false,
    tags: ["9pm", "night out", "rebel", "men"] },

  { id: "wa-happygirl", name: "Happy Girl", brand: "Kids line", cat: "Kids", size: "EDP", type: "Eau de Parfum",
    price: 3500, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/happy-girl-kids.jpg", gallery: ["assets/images/happy-girl-kids.jpg"],
    desc: "Happy Girl pink-ball perfume set for children — sweet and playful.", flagged: false,
    tags: ["happy girl", "kids"] },

  { id: "wa-fancyrose", name: "Fancy Rose", brand: "Fancy", cat: "Women", size: "EDP 100ml", type: "Eau de Parfum",
    price: 7700, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/fancy-rose.jpg", gallery: ["assets/images/fancy-rose.jpg"],
    desc: "Fancy Rose — a soft rosy EDP in the pink-and-white box.", flagged: false,
    tags: ["fancy rose", "rose", "women"] },

  { id: "wa-mensmart", name: "MEN Smart 332", brand: "Smart Collection", cat: "Men", size: "EDP 100ml", type: "Eau de Parfum",
    price: 8000, priceConfidence: "high", priceNote: "N8,000 sticker visible in photo",
    img: "assets/images/men-smart-332.jpg", gallery: ["assets/images/men-smart-332.jpg"],
    desc: "Smart Collection No. 332 MEN 100ml EDP.", flagged: false,
    tags: ["men smart", "smart collection"] },

  { id: "wa-candylisse", name: "Oak Finesse De Oud", brand: "Oak", cat: "Women", size: "EDP", type: "Eau de Parfum",
    price: 60000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/oak-finesse-de-oud.jpg", gallery: ["assets/images/oak-finesse-de-oud.jpg"],
    desc: "Oak Finesse De Oud maroon box.", flagged: false,
    tags: ["oak", "finesse", "oud"] },

  { id: "wa-araman-rouge", name: "Al Dirgham Limited Edition", brand: "Ard al Zaafaran", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: 25500, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/al-dirgham-limited-edition.jpg", gallery: ["assets/images/al-dirgham-limited-edition.jpg"],
    desc: "Al Dirgham by Ard al Zaafaran — black-gold Limited Edition 100ml box.", flagged: false,
    tags: ["al dirgham", "ard al zaafaran", "limited edition"] },

  { id: "wa-zandas", name: "Matelot Pouch (Pink)", brand: "Matelot", cat: "Men", size: "EDP", type: "Eau de Parfum",
    price: 7000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/matelot-pouch-pink.jpg", gallery: ["assets/images/matelot-pouch-pink.jpg"],
    desc: "Matelot pink-striped pouch.", flagged: false,
    tags: ["matelot", "pouch", "pink"] },

  { id: "wa-hummervip", name: "Oud Intense (Black)", brand: "Oud line", cat: "Men", size: "EDT 100ml", type: "Eau de Toilette",
    price: 25000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/oud-intense-black.jpg", gallery: ["assets/images/oud-intense-black.jpg"],
    desc: "Oud Intense black embossed box.", flagged: false,
    tags: ["oud intense", "black", "men"] },

  { id: "wa-touareg", name: "Lamsa by Naseem", brand: "Naseem", cat: "Unisex", size: "Perfume Oil", type: "Perfume Oil",
    price: 4500, priceConfidence: "high", priceNote: "N4,500 sticker visible in photo",
    img: "assets/images/lamsa-naseem-oil.jpg", gallery: ["assets/images/lamsa-naseem-oil.jpg"],
    desc: "Lamsa by Naseem concentrated perfume oil roll-on.", flagged: true,
    tags: ["lamsa", "naseem", "oil"] },

  { id: "wa-gkmen", name: "Saheb (Ard al Zaafaran)", brand: "Ard al Zaafaran", cat: "Men", size: "EDP 50ml", type: "Eau de Parfum",
    price: 25500, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/saheb-ard-al-zaafaran.jpg", gallery: ["assets/images/saheb-ard-al-zaafaran.jpg"],
    desc: "Saheb black window box by Ard al Zaafaran.", flagged: false,
    tags: ["saheb", "ard al zaafaran", "men"] },

  { id: "wa-9pm-nightout2", name: "Onleeu White Crack", brand: "Onleeu", cat: "Men", size: "EDP 100ml", type: "Eau de Parfum",
    price: 5500, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/onleeu-white-crack.jpg", gallery: ["assets/images/onleeu-white-crack.jpg"],
    desc: "Onleeu white crack EDP with Deal gold.", flagged: false,
    tags: ["onleeu", "white crack", "men"] },

  { id: "wa-premium26", name: "Deal Gold", brand: "Deal", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: 5500, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/deal-gold.jpg", gallery: ["assets/images/deal-gold.jpg"],
    desc: "Deal Gold crack EDP.", flagged: false,
    tags: ["deal", "gold", "unisex"] },

  { id: "wa-premium27", name: "Imperio Prive Oud Stallion", brand: "Imperio", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: 3500, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/imperio-prive-oud-stallion.jpg", gallery: ["assets/images/imperio-prive-oud-stallion.jpg"],
    desc: "Imperio Prive Oud Stallion green box.", flagged: false,
    tags: ["imperio", "oud", "stallion"] },

  { id: "wa-premium28", name: "Candy Lush FOMO Dubai", brand: "FOMO", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: 77000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/candy-lush-fomo-dubai.jpg", gallery: ["assets/images/candy-lush-fomo-dubai.jpg"],
    desc: "Candy Lush FOMO Dubai extrait pink envelope.", flagged: false,
    tags: ["candy lush", "fomo", "dubai"] },

  { id: "wa-premium29", name: "Al Araman Amber Oud (Love Edition)", brand: "Al Araman", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: 10000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/al-araman-amber-oud-love.jpg", gallery: ["assets/images/al-araman-amber-oud-love.jpg"],
    desc: "Al Araman Amber Oud red-gold Love Edition.", flagged: false,
    tags: ["al araman", "love", "oud"] },

  { id: "wa-premium30", name: "Zandas Elemental", brand: "Zandas", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: 4300, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/zandas-elemental.jpg", gallery: ["assets/images/zandas-elemental.jpg"],
    desc: "Zandas Elemental Extraordinary white-gold box.", flagged: false,
    tags: ["zandas", "elemental", "men"] },

  { id: "wa-mosuf100", name: "Hummer VIP (Free Roll-On)", brand: "Hummer", cat: "Men", size: "100ml", type: "Eau de Parfum",
    price: 6000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/hummer-vip-for-men.jpg", gallery: ["assets/images/hummer-vip-for-men.jpg"],
    desc: "Hummer VIP for men with free roll-on inside.", flagged: false,
    tags: ["hummer", "vip", "men"] },

  { id: "wa-premium32", name: "Mousuf Ramadi (Pouch)", brand: "Mousuf", cat: "Unisex", size: "Pouch", type: "Eau de Parfum",
    price: 18000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/mousuf-ramadi-pouch.jpg", gallery: ["assets/images/mousuf-ramadi-pouch.jpg"],
    desc: "Mousuf Ramadi grey woven pouch.", flagged: false,
    tags: ["mousuf", "ramadi", "pouch"] },

  { id: "wa-premium33", name: "GK Men 50ml", brand: "GK", cat: "Men", size: "EDP 50ml", type: "Eau de Parfum",
    price: 2500, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/gk-men-50ml.jpg", gallery: ["assets/images/gk-men-50ml.jpg"],
    desc: "GK Men for Men navy 50ml box.", flagged: false,
    tags: ["gk", "men", "50ml"] },

  { id: "wa-premium34", name: "9pm Night Out (Afnan)", brand: "AFNAN", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: 65000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/9pm-night-out-afnan.jpg", gallery: ["assets/images/9pm-night-out-afnan.jpg"],
    desc: "9pm Night Out by Afnan, black wrapped 100ml.", flagged: false,
    tags: ["9pm", "afnan", "men"] },

  { id: "wa-premium35", name: "Supremacy Collectors (Afnan)", brand: "AFNAN", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: 90000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/supremacy-collectors-edition-afnan.jpg", gallery: ["assets/images/supremacy-collectors-edition-afnan.jpg"],
    desc: "Supremacy Collectors Edition black box by Afnan.", flagged: false,
    tags: ["supremacy", "afnan", "men"] },

  { id: "wa-premium36", name: "Elixir Atralia", brand: "Atralia", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: 60000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/elixir-atralia.jpg", gallery: ["assets/images/elixir-atralia.jpg"],
    desc: "Elixir Atralia brown embossed 100ml.", flagged: false,
    tags: ["elixir", "atralia", "unisex"] },

  { id: "wa-yara", name: "Angham (Lattafa)", brand: "Lattafa", cat: "Women", size: "EDP 100ml", type: "Eau de Parfum",
    price: 35500, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/lattafa-angham-cream.jpg", gallery: ["assets/images/lattafa-angham-cream.jpg"],
    desc: "Lattafa Angham cream musical-note 100ml box.", flagged: false,
    tags: ["angham", "lattafa", "women"] },

  { id: "wa-teriaq", name: "Teriaq Intense", brand: "Lattafa", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: 45000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/teriaq-intense-lattafa.jpg", gallery: ["assets/images/teriaq-intense-lattafa.jpg"],
    desc: "Teriaq Intense black-and-gold box — bold caramel-oud intensity.", flagged: false,
    tags: ["teriaq", "intense", "lattafa"] },

  { id: "wa-monsieur-coco", name: "Monsieur Coco Vanilla", brand: "Monsieur", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: 15000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/monsieur-coco-vanilla.jpg", gallery: ["assets/images/monsieur-coco-vanilla.jpg"],
    desc: "Monsieur Parfum Coco Vanilla — creamy vanilla unisex in black box.", flagged: false,
    tags: ["monsieur", "coco vanilla"] },

  { id: "wa-albait", name: "Oud Al Layl", brand: "Oud line", cat: "Women", size: "EDP 100ml", type: "Eau de Parfum",
    price: 15000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/oud-al-layl.jpg", gallery: ["assets/images/oud-al-layl.jpg"],
    desc: "Oud Al Layl ornate rose-gold 100ml box.", flagged: false,
    tags: ["oud al layl", "oud", "women"] },

  { id: "wa-rayhaan-her", name: "Rayhaan HER", brand: "Rayhaan", cat: "Women", size: "EDP 100ml", type: "Eau de Parfum",
    price: 38000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/rayhaan-her.jpg", gallery: ["assets/images/rayhaan-her.jpg"],
    desc: "Rayhaan HER — elegant white-panel women's EDP.", flagged: false,
    tags: ["rayhaan", "her", "women"] },

  { id: "wa-khamrah-waha", name: "Khamrah Waha", brand: "Khamrah", cat: "Unisex", size: "EDP 50ml", type: "Eau de Parfum",
    price: 7000, priceConfidence: "high", priceNote: "Named chat tag “Khamrah waha 7k”",
    img: "assets/images/khamrah-waha.jpg", gallery: ["assets/images/khamrah-waha.jpg"],
    desc: "Khamrah Waha blue 50ml pair.", flagged: false,
    tags: ["khamrah", "waha", "dates", "cinnamon"] },

  { id: "wa-khashab", name: "Kashan (White)", brand: "Kashan", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: 45000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/kashan-white.jpg", gallery: ["assets/images/kashan-white.jpg"],
    desc: "Kashan white-gold 100ml with carpet card.", flagged: false,
    tags: ["kashan", "white", "unisex"] },

  { id: "wa-oudnoir", name: "Oud Noir", brand: "Khadlaj", cat: "Men", size: "EDP 100ml", type: "Eau de Parfum",
    price: 33000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/oud-noir-khadlaj.jpg", gallery: ["assets/images/oud-noir-khadlaj.jpg"],
    desc: "Oud Noir by Khadlaj — black-gold box, saffron-forward dark oud.", flagged: false,
    tags: ["oud noir", "khadlaj", "men"] },

  { id: "wa-kids47", name: "Elena & Sunny Girl Kids", brand: "Kids line", cat: "Kids", size: "EDP", type: "Eau de Parfum",
    price: 3500, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/elena-sunny-girl-kids.jpg", gallery: ["assets/images/elena-sunny-girl-kids.jpg"],
    desc: "Elena Princess and Sunny Girl cartoon-ball perfumes for kids.", flagged: false,
    tags: ["elena", "sunny girl", "kids"] },

  { id: "wa-eclaire", name: "Eclaire", brand: "Lattafa", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: 6000, priceConfidence: "low", priceNote: "Chat tag ₦6,000 — VERIFY",
    img: "assets/images/eclaire.jpg", gallery: ["assets/images/eclaire.jpg"],
    desc: "Eclaire gold pair — the caramel-ptarmigan viral Lattafa. Two shots in gallery.", flagged: true,
    tags: ["eclaire", "lattafa", "caramel"] },

  { id: "wa-royalombre", name: "Royal Ombre Intense", brand: "All Scents", cat: "Men", size: "EDP 100ml", type: "Eau de Parfum",
    price: 77000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/royal-ombre-intense.jpg", gallery: ["assets/images/royal-ombre-intense.jpg"],
    desc: "Royal Ombre Intense “All Scents” pour homme — gold-medal black box. Two shots in gallery.", flagged: false,
    tags: ["royal ombre", "all scents", "men"] },

  { id: "wa-oniro", name: "Oniro", brand: "Oniro", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: 18000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/oniro.jpg", gallery: ["assets/images/oniro.jpg"],
    desc: "Oniro white-gold box — powdery floral dream scent. Two shots in gallery.", flagged: false,
    tags: ["oniro", "floral"] },

  { id: "wa-liquidbrun", name: "Liquid Brun", brand: "French Avenue", cat: "Men", size: "EDP 100ml", type: "Eau de Parfum",
    price: 53000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/liquid-brun.jpg", gallery: ["assets/images/liquid-brun.jpg"],
    desc: "Liquid Brun by French Avenue — sleek bronze-taupe box, smooth woody scent.", flagged: false,
    tags: ["liquid brun", "french avenue", "men"] },

  { id: "wa-suave", name: "Suave", brand: "Suave", cat: "Men", size: "EDP 100ml", type: "Eau de Parfum",
    price: 18000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/suave.jpg", gallery: ["assets/images/suave.jpg"],
    desc: "Suave navy box with free deo-spray inside promo — clean masculine.", flagged: false,
    tags: ["suave", "men"] },

  { id: "wa-bluedream", name: "Blue Dream", brand: "Blue Dream", cat: "Women", size: "EDT 100ml", type: "Eau de Toilette",
    price: 3500, priceConfidence: "low", priceNote: "Chat tag ₦3,500 — VERIFY",
    img: "assets/images/blue-dream.jpg", gallery: ["assets/images/blue-dream.jpg"],
    desc: "Blue Dream Eau de Toilette — airy blue bottle with Eiffel-tower motif.", flagged: true,
    tags: ["blue dream", "edt", "women"] },

  { id: "wa-ophylia", name: "Ophylia", brand: "Ophylia", cat: "Women", size: "EDP 80ml", type: "Eau de Parfum",
    price: 18000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/ophylia.jpg", gallery: ["assets/images/ophylia.jpg"],
    desc: "Ophylia gold box with angel wings — soft powdery floral.", flagged: false,
    tags: ["ophylia", "women", "floral"] },

  { id: "wa-hayaati", name: "Hayaati", brand: "Lattafa", cat: "Men", size: "EDP 100ml", type: "Eau de Parfum",
    price: 22000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/hayaati-lattafa.jpg", gallery: ["assets/images/hayaati-lattafa.jpg"],
    desc: "Hayaati by Lattafa — black wrapped box, fresh woody staple.", flagged: false,
    tags: ["hayaati", "lattafa", "men"] },

  { id: "wa-destino", name: "Leather Cream Box", brand: "Unbranded", cat: "Women", size: "EDP", type: "Eau de Parfum",
    price: 45000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/leather-cream-box.jpg", gallery: ["assets/images/leather-cream-box.jpg"],
    desc: "Cream quilted leather-look box held in-store.", flagged: false,
    tags: ["leather", "cream", "box"] },

  { id: "wa-eclaire2", name: "Vintage Radio (Lattafa)", brand: "Lattafa", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: 45000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/vintage-radio-lattafa.jpg", gallery: ["assets/images/vintage-radio-lattafa.jpg"],
    desc: "Vintage Radio EDP 100ml by Lattafa.", flagged: false,
    tags: ["vintage radio", "lattafa"] },

  { id: "wa-royalombre2", name: "Secret Blossom (Lamsat Harir)", brand: "Arabiyat", cat: "Unisex", size: "EDP 50ml", type: "Eau de Parfum",
    price: 7000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/secret-blossom-lamsat-harir.jpg", gallery: ["assets/images/secret-blossom-lamsat-harir.jpg"],
    desc: "Secret Blossom Lamsat Harir 50ml by Arabiyat.", flagged: false,
    tags: ["secret blossom", "arabiyat", "unisex"] },

  { id: "wa-oniro2", name: "Yum Yum Delights (Armaf)", brand: "Armaf", cat: "Unisex", size: "EDP 50ml", type: "Eau de Parfum",
    price: 8500, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/armaf-yum-yum-delights.jpg", gallery: ["assets/images/armaf-yum-yum-delights.jpg"],
    desc: "Yum Yum Delights pink-marble 50ml by Armaf.", flagged: false,
    tags: ["yum yum", "armaf", "unisex"] },

  { id: "wa-heavenscent", name: "Heaven Scent", brand: "Heaven Scent", cat: "Unisex", size: "EDT", type: "Eau de Toilette",
    price: 8000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/heaven-scent.jpg", gallery: ["assets/images/heaven-scent.jpg"],
    desc: "Heaven Scent black-gold box — fresh heavenly EDT held in-store.", flagged: false,
    tags: ["heaven scent", "edt"] },

  { id: "wa-9pm-elixer", name: "9pm Elixer Amazon", brand: "FIBA", cat: "Men", size: "EDP 50ml", type: "Eau de Parfum",
    price: 7000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/9pm-elixer-amazon.jpg", gallery: ["assets/images/9pm-elixer-amazon.jpg"],
    desc: "9pm Elixer Amazon — burgundy-gold box from the 9pm family.", flagged: false,
    tags: ["9pm", "elixer", "amazon"] },

  { id: "wa-zenith", name: "Zenith RIFFS", brand: "RIIFFS", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: 45000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/zenith-riffs.jpg", gallery: ["assets/images/zenith-riffs.jpg"],
    desc: "Zenith by RIFFS — white-gold ring box, clean musky scent.", flagged: false,
    tags: ["zenith", "riffs"] },

  { id: "wa-ameer", name: "Ameer Al Oudh Intense", brand: "Lattafa", cat: "Men", size: "EDP 100ml", type: "Eau de Parfum",
    price: 8000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/ameer-al-oudh-intense.jpg", gallery: ["assets/images/ameer-al-oudh-intense.jpg"],
    desc: "Ameer Al Oudh Intense Oud — the beloved Lattafa budget oud, white-gold box.", flagged: false,
    tags: ["ameer al oudh", "lattafa", "oud"] },

  { id: "wa-goldsand", name: "Gold Sand", brand: "Sand line", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: 6200, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/gold-sand.jpg", gallery: ["assets/images/gold-sand.jpg"],
    desc: "Gold Sand EDP — beige-gold arabesque box, warm amber scent.", flagged: false,
    tags: ["gold sand", "amber"] },

  { id: "wa-silversand", name: "Silver Sand", brand: "Sand line", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: 6200, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/silver-sand.jpg", gallery: ["assets/images/silver-sand.jpg"],
    desc: "Silver Sand EDP — black-silver arabesque box, cool fresh scent.", flagged: false,
    tags: ["silver sand", "fresh"] },

  { id: "wa-reddiamond", name: "Red Diamond Gift Set", brand: "Red Diamond", cat: "Women", size: "Gift set", type: "Gift Set",
    price: 6500, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/red-diamond.jpg", gallery: ["assets/images/red-diamond.jpg"],
    desc: "Red Diamond heart-cap gift set — ruby glass perfume in presentation box.", flagged: false,
    tags: ["red diamond", "gift set", "women"] },

  { id: "wa-sauvage", name: "Sauvage (Dior style)", brand: "Dior line", cat: "Men", size: "EDP 100ml", type: "Eau de Parfum",
    price: 6000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/sauvage-dior.jpg", gallery: ["assets/images/sauvage-dior.jpg"],
    desc: "Sauvage Eau de Parfum — the iconic deep-blue masculine.", flagged: false,
    tags: ["sauvage", "dior", "men"] },

  { id: "wa-confession", name: "Confession", brand: "Confession", cat: "Men", size: "EDP", type: "Eau de Parfum",
    price: 6500, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/confession.jpg", gallery: ["assets/images/confession.jpg"],
    desc: "Confession brown-silver box — warm spicy masculine.", flagged: false,
    tags: ["confession", "men"] },

  { id: "wa-smilenow", name: "Smile Now", brand: "Agabson", cat: "Women", size: "EDP 100ml", type: "Eau de Parfum",
    price: 6000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/smile-now-agabson.jpg", gallery: ["assets/images/smile-now-agabson.jpg"],
    desc: "Smile Now by Agabson — pink geometric box, joyful floral.", flagged: false,
    tags: ["smile now", "agabson", "women"] },

  { id: "wa-hummercode", name: "Hummer Code", brand: "Hummer", cat: "Men", size: "EDT 100ml", type: "Eau de Toilette",
    price: 6000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/hummer-code.jpg", gallery: ["assets/images/hummer-code.jpg"],
    desc: "Hummer Code black — bold masculine with free roll-on inside.", flagged: false,
    tags: ["hummer code", "men"] },

  { id: "wa-clubenuit", name: "Club de Nuit Intense Man", brand: "Agabson", cat: "Men", size: "Pure Perfume 50ml", type: "Eau de Toilette",
    price: 6000, priceConfidence: "medium", priceNote: "Chat tag ₦6,000 (Club de Nuit block)",
    img: "assets/images/club-de-nuit-intense-man-agabson.jpg", gallery: ["assets/images/club-de-nuit-intense-man-agabson.jpg"],
    desc: "Club de Nuit Intense Man Pure Perfume 50ml by Agabson.", flagged: false,
    tags: ["club de nuit", "agabson", "men", "intense"] },

  { id: "wa-escape", name: "Escape", brand: "Paris line", cat: "Women", size: "EDP + Body Mist", type: "Gift Set",
    price: 3500, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/escape-for-her.jpg", gallery: ["assets/images/escape-for-her.jpg"],
    desc: "Escape For Her — blue box with EDP + body mist duo.", flagged: false,
    tags: ["escape", "for her", "set"] },

  { id: "wa-parisjade", name: "Paris Jade", brand: "Paris", cat: "Women", size: "EDP", type: "Eau de Parfum",
    price: 6500, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/paris-jade.jpg", gallery: ["assets/images/paris-jade.jpg"],
    desc: "Paris Jade — deep green box, fresh floral-green signature.", flagged: false,
    tags: ["paris jade", "green"] },

  { id: "wa-diplomatic", name: "Diplomatic", brand: "Diplomatic", cat: "Men", size: "EDP", type: "Eau de Parfum",
    price: 6500, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/diplomatic.jpg", gallery: ["assets/images/diplomatic.jpg"],
    desc: "Diplomatic burgundy-crest box — distinguished premium masculine.", flagged: false,
    tags: ["diplomatic", "premium"] },

  { id: "wa-khamra", name: "Khamra (Agabson)", brand: "Agabson", cat: "Unisex", size: "EDP 50ml", type: "Eau de Parfum",
    price: 6000, priceConfidence: "high", priceNote: "Named chat tag “6000 khamra agabson”",
    img: "assets/images/khamra-agabson.jpg", gallery: ["assets/images/khamra-agabson.jpg"],
    desc: "Khamra gold-script box — the Agabson take on the famous Khamrah date-cinnamon.", flagged: false,
    tags: ["khamra", "agabson", "khamrah"] },

  { id: "wa-suikercandy", name: "Suger Candy (Blanc)", brand: "Aro-Fac", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: 5500, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/suger-candy-blanc.jpg", gallery: ["assets/images/suger-candy-blanc.jpg"],
    desc: "Aro-Fac Suger Candy pink and white editions.", flagged: false,
    tags: ["suger candy", "aro-fac", "blanc"] },

  { id: "wa-suikercandy2", name: "Suger Candy (Noir)", brand: "Aro-Fac", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: 5500, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/suger-candy-noir.jpg", gallery: ["assets/images/suger-candy-noir.jpg"],
    desc: "Aro-Fac Suger grey and black edition.", flagged: false,
    tags: ["suger candy", "noir"] },

  { id: "wa-liquidbrun2", name: "Rayhaan Imperia For Him", brand: "Rayhaan", cat: "Men", size: "EDP 100ml", type: "Eau de Parfum",
    price: 25000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/rayhaan-imperia-for-him.jpg", gallery: ["assets/images/rayhaan-imperia-for-him.jpg"],
    desc: "Rayhaan Imperia For Him 100ml.", flagged: false,
    tags: ["rayhaan", "imperia", "men"] },

  { id: "wa-suave2", name: "Kashan (Lattafa Pride)", brand: "Lattafa", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: null, priceConfidence: null, priceNote: "No sticker visible, price to confirm",
    img: "assets/images/lattafa-pride-kashan.jpg", gallery: ["assets/images/lattafa-pride-kashan.jpg"],
    desc: "Kashan by Lattafa Pride.", flagged: true,
    tags: ["kashan", "lattafa", "unisex"] },

  { id: "wa-bluedream2", name: "Oud Al Layl (Second Shot)", brand: "Oud line", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: null, priceConfidence: null, priceNote: "No sticker visible, price to confirm",
    img: "assets/images/oud-al-layl-2.jpg", gallery: ["assets/images/oud-al-layl-2.jpg"],
    desc: "Second in-store shot of the Oud Al Layl box.", flagged: true,
    tags: ["oud al layl", "second shot"] },

  { id: "wa-ophylia2", name: "Nebras (Lattafa Pride)", brand: "Lattafa", cat: "Women", size: "EDP 100ml", type: "Eau de Parfum",
    price: null, priceConfidence: null, priceNote: "No sticker visible, price to confirm",
    img: "assets/images/lattafa-pride-nebras.jpg", gallery: ["assets/images/lattafa-pride-nebras.jpg"],
    desc: "Nebras maroon box by Lattafa Pride.", flagged: true,
    tags: ["nebras", "lattafa", "unisex"] },

  { id: "wa-hayaati2", name: "9pm Rebel (Afnan)", brand: "AFNAN", cat: "Men", size: "EDP 50ml", type: "Eau de Parfum",
    price: 9000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/afnan-9pm-rebel-50ml.jpg", gallery: ["assets/images/afnan-9pm-rebel-50ml.jpg"],
    desc: "9pm Rebel grey 50ml box by Afnan.", flagged: false,
    tags: ["9pm", "rebel", "afnan"] },

  { id: "wa-premium65", name: "Europe Ultimate Classic", brand: "Europe", cat: "Unisex", size: "EDP 100ml", type: "Eau de Parfum",
    price: 10000, priceConfidence: "high", priceNote: "Owner-confirmed price",
    img: "assets/images/europe-ultimate-classic.jpg", gallery: ["assets/images/europe-ultimate-classic.jpg"],
    desc: "Europe Ultimate Classic gold 100ml box.", flagged: false,
    tags: ["europe", "classic", "unisex"] }
];

/* Categories present in the catalogue (for filter pills) */
window.CATALOG_CATS = ["Women", "Men", "Unisex", "Kids", "Skincare"];
