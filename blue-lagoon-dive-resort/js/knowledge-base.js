/* ============================================================
   Blue Lagoon Dive Resort — default knowledge base
   ------------------------------------------------------------
   The assistant searches these entries to answer guests. Owners can
   extend or override this at runtime by uploading .txt/.md/.json/.csv
   files in the chat widget (see assistant.js), or edit this file directly.
   Each entry: { q: [keywords...], a: "answer" }
   ============================================================ */
window.DEFAULT_KB = [
  {
    q: ["where", "location", "located", "address", "how to find", "map", "où", "adresse"],
    a: "Blue Lagoon Dive Resort is on Small La Laguna Beach in Sabang, Puerto Galera, Oriental Mindoro, Philippines — right on the beachfront, about 5 minutes from the town centre."
  },
  {
    q: ["get here", "getting here", "airport", "transfer", "manila", "ferry", "directions", "arrive", "comment venir", "aéroport"],
    a: "Fly into Manila (MNL), then transfer about 2 hours to Batangas Pier and take a short ferry across to Puerto Galera. We can arrange your airport transfer and ferry tickets — just send us your arrival details."
  },
  {
    q: ["room", "rooms", "bungalow", "accommodation", "stay", "chambre", "hébergement", "types"],
    a: "We have 20 rooms: Standard Bungalows (from $55/night), Superior Rooms (from $80), Superior Sea View rooms with a plunge pool (from $120), and self-catering Beach Apartments (from $95). Every room has air-conditioning, a private bathroom, a balcony and free Wi-Fi."
  },
  {
    q: ["sea view", "best room", "plunge pool", "ocean view", "vue mer"],
    a: "Our Superior Sea View rooms are the most popular — they include a private plunge pool, a walk-in shower and uninterrupted views over the Verde Island Passage, from $120 per night."
  },
  {
    q: ["price", "cost", "rate", "how much", "tarif", "prix", "combien"],
    a: "Nightly rates start at $55 for a Standard Bungalow, $80 for a Superior Room, $95 for a Beach Apartment and $120 for a Superior Sea View. Book direct for our best-rate guarantee. Tell me your dates in the booking bar for an estimate."
  },
  {
    q: ["book", "booking", "reserve", "availability", "available", "réserver", "disponibilité"],
    a: "You can check availability and request a booking using the booking bar at the top of the page, or message us on WhatsApp at +63 900 000 0000. We reply to every request within 24 hours and guarantee the best rate for direct bookings."
  },
  {
    q: ["dive", "diving", "scuba", "padi", "sdi", "ffessm", "course", "certification", "plongée", "cours"],
    a: "We're a full dive centre offering courses through PADI, SDI and FFESSM — from a first-time Try Scuba experience to Open Water (3–4 days), Advanced, Rescue, Divemaster and technical diving. Puerto Galera has 30+ dive sites within a short boat ride in the heart of the Coral Triangle."
  },
  {
    q: ["beginner", "never dived", "try scuba", "discover", "first time", "débutant", "baptême"],
    a: "No experience needed! Our Try Scuba / Discover Diving session lets you take your first breaths underwater with an instructor by your side. If you love it, you can continue straight into the Open Water certification course."
  },
  {
    q: ["dive site", "dive sites", "reef", "wreck", "what can i see", "marine life", "turtle", "sites de plongée"],
    a: "Puerto Galera sits in the Coral Triangle, the most biodiverse marine area on Earth. Expect vibrant coral reefs, walls, drift dives, macro muck-diving, turtles, frogfish, nudibranchs and the occasional reef shark — all within 15 minutes of the resort."
  },
  {
    q: ["restaurant", "food", "eat", "dining", "breakfast", "menu", "french", "cuisine", "manger", "restaurant"],
    a: "Our beachfront 'French Savoir-faire' restaurant serves French cuisine alongside the freshest local catch and tropical produce — fresh pastries and barista coffee for breakfast, French classics and seafood for lunch and dinner, plus sunset cocktails at the beach bar. Vegetarian and special diets are welcome."
  },
  {
    q: ["amenities", "facilities", "pool", "spa", "massage", "wifi", "wi-fi", "services", "piscine"],
    a: "Resort amenities include a beachfront outdoor pool with sun loungers, a spa offering Thai massage, a café and beach bar, free Wi-Fi throughout, private beach access and airport/ferry transfers on request."
  },
  {
    q: ["language", "languages", "french", "english", "tagalog", "speak", "langue", "francophone"],
    a: "We're the only French-speaking dive resort in Sabang, Puerto Galera. Our team speaks French, English and Tagalog, and this website can be translated into any language using the language switcher at the top."
  },
  {
    q: ["check in", "check-in", "check out", "checkout", "time", "arrival", "departure", "heure"],
    a: "Standard check-in is from 2:00 PM and check-out is by 11:00 AM. Early check-in or late check-out can often be arranged on request, subject to availability."
  },
  {
    q: ["family", "children", "kids", "child", "enfants", "famille"],
    a: "Families are very welcome. Our Beach Apartments with a kitchenette are ideal for families and longer stays, and children can join snorkelling trips and Bubblemaker dive experiences."
  },
  {
    q: ["pay", "payment", "card", "cash", "deposit", "paiement", "carte"],
    a: "We accept major credit cards, cash and bank transfer. A deposit may be requested to confirm your booking — our team will share the details when you make a reservation."
  },
  {
    q: ["cancel", "cancellation", "refund", "policy", "annulation", "remboursement"],
    a: "Cancellation terms depend on the season and length of stay. Please contact us at hello@bluelagoondiveresort-philippines.com and our team will share the current policy for your dates."
  },
  {
    q: ["contact", "phone", "email", "whatsapp", "call", "téléphone", "courriel"],
    a: "You can reach us by WhatsApp/phone at +63 900 000 0000 or by email at hello@bluelagoondiveresort-philippines.com. We reply within 24 hours in English, French or Tagalog."
  },
  {
    q: ["weather", "best time", "season", "when to visit", "météo", "saison"],
    a: "Puerto Galera is a year-round destination. The dry season (roughly November to May) offers the best visibility and calmest seas, while the green season brings warm water and fewer crowds. Water temperatures stay a comfortable 26–30°C all year."
  }
];
