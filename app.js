/* =======================================================
   POKÉMON DUEL CEPAT - GAME ENGINE & UI CORE
   ======================================================= */

// 1. DATABASE KARTU OFFLINE (FALLBACK & DEFAULT DECKS)
const OFFLINE_CARD_DB = [
  // FIRE TYPE (API)
  {
    id: "fire_01",
    name: "Charmander",
    type: "fire",
    stage: "Basic",
    hp: 50,
    maxHp: 50,
    attacks: [
      { name: "Cakar (Scratch)", damage: 10, needsCoin: false },
      { name: "Bara Api (Ember)", damage: 30, needsCoin: true }
    ],
    imageUrl: "https://images.pokemontcg.io/base1/46.png"
  },
  {
    id: "fire_02",
    name: "Vulpix",
    type: "fire",
    stage: "Basic",
    hp: 50,
    maxHp: 50,
    attacks: [
      { name: "Sinar Pusing (Confuse Ray)", damage: 10, needsCoin: false },
      { name: "Pusaran Api (Fire Spin)", damage: 30, needsCoin: true }
    ],
    imageUrl: "https://images.pokemontcg.io/base1/68.png"
  },
  {
    id: "fire_03",
    name: "Charmeleon",
    type: "fire",
    stage: "Stage 1",
    hp: 80,
    maxHp: 80,
    attacks: [
      { name: "Cabik (Slash)", damage: 30, needsCoin: false },
      { name: "Semburan Api (Flamethrower)", damage: 50, needsCoin: true }
    ],
    imageUrl: "https://images.pokemontcg.io/base1/24.png"
  },
  {
    id: "fire_04",
    name: "Charizard",
    type: "fire",
    stage: "Stage 2",
    hp: 120,
    maxHp: 120,
    attacks: [
      { name: "Cakar Naga (Claw Slash)", damage: 35, needsCoin: false },
      { name: "Pusaran Api Mega (Fire Spin)", damage: 100, needsCoin: true }
    ],
    imageUrl: "https://images.pokemontcg.io/base1/4.png"
  },

  // WATER TYPE (AIR)
  {
    id: "water_01",
    name: "Squirtle",
    type: "water",
    stage: "Basic",
    hp: 40,
    maxHp: 40,
    attacks: [
      { name: "Pukulan Kepala (Tackle)", damage: 10, needsCoin: false },
      { name: "Pistol Air (Water Gun)", damage: 30, needsCoin: true }
    ],
    imageUrl: "https://images.pokemontcg.io/base1/63.png"
  },
  {
    id: "water_02",
    name: "Psyduck",
    type: "water",
    stage: "Basic",
    hp: 50,
    maxHp: 50,
    attacks: [
      { name: "Cakar Lumpur (Scratch)", damage: 10, needsCoin: false },
      { name: "Tembakan Air (Water Gun)", damage: 30, needsCoin: true }
    ],
    imageUrl: "https://images.pokemontcg.io/base1/53.png"
  },
  {
    id: "water_03",
    name: "Wartortle",
    type: "water",
    stage: "Stage 1",
    hp: 70,
    maxHp: 70,
    attacks: [
      { name: "Gigitan (Bite)", damage: 20, needsCoin: false },
      { name: "Pistol Air Ganda", damage: 40, needsCoin: true }
    ],
    imageUrl: "https://images.pokemontcg.io/base1/42.png"
  },
  {
    id: "water_04",
    name: "Blastoise",
    type: "water",
    stage: "Stage 2",
    hp: 100,
    maxHp: 100,
    attacks: [
      { name: "Tubruk (Tackle)", damage: 30, needsCoin: false },
      { name: "Pompa Hidrolik (Hydro Pump)", damage: 80, needsCoin: true }
    ],
    imageUrl: "https://images.pokemontcg.io/base1/2.png"
  },

  // GRASS TYPE (DAUN)
  {
    id: "grass_01",
    name: "Bulbasaur",
    type: "grass",
    stage: "Basic",
    hp: 40,
    maxHp: 40,
    attacks: [
      { name: "Tabrak (Tackle)", damage: 10, needsCoin: false },
      { name: "Cambuk Rambat (Vine Whip)", damage: 30, needsCoin: true }
    ],
    imageUrl: "https://images.pokemontcg.io/base1/44.png"
  },
  {
    id: "grass_02",
    name: "Oddish",
    type: "grass",
    stage: "Basic",
    hp: 50,
    maxHp: 50,
    attacks: [
      { name: "Spora Bius (Stun Spore)", damage: 10, needsCoin: false },
      { name: "Asam (Acid)", damage: 30, needsCoin: true }
    ],
    imageUrl: "https://images.pokemontcg.io/base1/58.png"
  },
  {
    id: "grass_03",
    name: "Ivysaur",
    type: "grass",
    stage: "Stage 1",
    hp: 65,
    maxHp: 65,
    attacks: [
      { name: "Potong (Cut)", damage: 20, needsCoin: false },
      { name: "Cambuk Rambat Keras", damage: 40, needsCoin: true }
    ],
    imageUrl: "https://images.pokemontcg.io/base1/30.png"
  },
  {
    id: "grass_04",
    name: "Venusaur",
    type: "grass",
    stage: "Stage 2",
    hp: 100,
    maxHp: 100,
    attacks: [
      { name: "Tamparan Ganda (Double Slap)", damage: 30, needsCoin: false },
      { name: "Sinar Surya (Solar Beam)", damage: 80, needsCoin: true }
    ],
    imageUrl: "https://images.pokemontcg.io/base1/15.png"
  },

  // LIGHTNING TYPE (LISTRIK)
  {
    id: "light_01",
    name: "Pikachu",
    type: "lightning",
    stage: "Basic",
    hp: 60,
    maxHp: 60,
    attacks: [
      { name: "Gigit (Gnaw)", damage: 10, needsCoin: false },
      { name: "Sengatan Petir (Thunderbolt)", damage: 45, needsCoin: true }
    ],
    imageUrl: "https://images.pokemontcg.io/base1/58.png"
  },
  {
    id: "light_02",
    name: "Raichu",
    type: "lightning",
    stage: "Stage 1",
    hp: 90,
    maxHp: 90,
    attacks: [
      { name: "Pukulan Petir (Thunder Punch)", damage: 30, needsCoin: false },
      { name: "Guntur Kilat (Thunder)", damage: 60, needsCoin: true }
    ],
    imageUrl: "https://images.pokemontcg.io/base1/14.png"
  },

  // PSYCHIC TYPE (PSIKIS)
  {
    id: "psychic_01",
    name: "Mewtwo",
    type: "psychic",
    stage: "Basic",
    hp: 80,
    maxHp: 80,
    attacks: [
      { name: "Psikis (Psychic)", damage: 20, needsCoin: false },
      { name: "Tameng Pelindung (Barrier)", damage: 40, needsCoin: true }
    ],
    imageUrl: "https://images.pokemontcg.io/base1/10.png"
  },

  // TRAINER ITEMS
  {
    id: "trainer_01",
    name: "Potion (Obat)",
    type: "trainer",
    stage: "Item",
    hp: 0,
    maxHp: 0,
    effect: "heal_20",
    description: "Sembuhkan 20 HP dari 1 Pokémon Anda.",
    imageUrl: "https://images.pokemontcg.io/base1/94.png"
  },
  {
    id: "trainer_02",
    name: "Super Potion",
    type: "trainer",
    stage: "Item",
    hp: 0,
    maxHp: 0,
    effect: "heal_50",
    description: "Sembuhkan 50 HP dari 1 Pokémon Anda.",
    imageUrl: "https://images.pokemontcg.io/base1/90.png"
  },
  {
    id: "trainer_03",
    name: "Switch (Tukar)",
    type: "trainer",
    stage: "Item",
    hp: 0,
    maxHp: 0,
    effect: "switch_bench",
    description: "Tukar Pokémon Aktif Anda dengan salah satu Cadangan.",
    imageUrl: "https://images.pokemontcg.io/base1/95.png"
  }
];

// 2. GAME SETUP STATE VARIABLES
let gameState = {
  playerDeck: [],
  playerHand: [],
  playerActive: null,
  playerBench: [null, null],
  playerDiscard: [],
  playerKOs: 0,
  
  opponentDeck: [],
  opponentHand: [],
  opponentActive: null,
  opponentBench: [null, null],
  opponentDiscard: [],
  opponentKOs: 0,
  
  turn: "player", // "player" | "opponent"
  phase: "setup", // "setup" | "draw" | "action" | "attack" | "gameover"
  hasRetreatedThisTurn: false,
  cardsDrawnThisTurn: 0,
  
  selectedCard: null,
  selectedCardIndex: -1,
  selectedCardSource: "" // "hand" | "active" | "bench" | "opponent-active" | "opponent-bench"
};

// Custom Scanned Cards Deck
let myScannedDeck = [];

// Camera Stream Configuration
let localStream = null;
let currentFacingMode = "environment"; // "environment" (Back) or "user" (Front)

// Load Scanned Deck from LocalStorage
function loadScannedDeck() {
  const saved = localStorage.getItem("duel_cepat_scanned_deck");
  if (saved) {
    try {
      myScannedDeck = JSON.parse(saved);
      updateDeckBuilderProgress();
    } catch(e) {
      myScannedDeck = [];
    }
  }
}

// Save Scanned Deck to LocalStorage
function saveScannedDeck() {
  localStorage.setItem("duel_cepat_scanned_deck", JSON.stringify(myScannedDeck));
}

// 3. UI SCREEN TRANSITIONS & INITIALIZATIONS
document.addEventListener("DOMContentLoaded", () => {
  loadScannedDeck();
  
  // Navigation: Welcome -> Play Select Deck
  document.getElementById("btn-quick-play").addEventListener("click", () => {
    switchScreen("deck-select-screen");
    checkCustomDeckAvailability();
  });
  
  // Navigation: Welcome -> Scanner/Deck Builder
  document.getElementById("btn-deck-builder").addEventListener("click", () => {
    switchScreen("deck-builder-screen");
    startCamera();
  });
  
  // Navigation: Back to Welcome
  document.querySelectorAll(".btn-back-to-welcome").forEach(btn => {
    btn.addEventListener("click", () => {
      stopCamera();
      switchScreen("welcome-screen");
    });
  });
  
  // Rules modal toggles
  document.getElementById("btn-show-rules").addEventListener("click", () => {
    document.getElementById("rules-modal").classList.remove("hide");
  });
  document.getElementById("btn-close-rules").addEventListener("click", () => {
    document.getElementById("rules-modal").classList.add("hide");
  });

  // Deck Selection Actions
  document.querySelectorAll(".btn-select-deck").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const deckId = e.currentTarget.getAttribute("data-deck-id");
      initializeGame(deckId);
    });
  });

  // Switch Camera facing mode
  document.getElementById("btn-switch-camera").addEventListener("click", () => {
    currentFacingMode = currentFacingMode === "environment" ? "user" : "environment";
    startCamera();
  });

  // Trigger snapshot card scan
  document.getElementById("btn-capture-scan").addEventListener("click", captureAndScanCard);

  // Manual Card Search
  document.getElementById("btn-card-search").addEventListener("click", performManualCardSearch);
  document.getElementById("input-card-search").addEventListener("keypress", (e) => {
    if (e.key === "Enter") performManualCardSearch();
  });

  // Clear / Autofill Custom Deck
  document.getElementById("btn-clear-deck").addEventListener("click", () => {
    myScannedDeck = [];
    saveScannedDeck();
    updateDeckBuilderProgress();
  });

  document.getElementById("btn-auto-fill-deck").addEventListener("click", () => {
    const missing = 20 - myScannedDeck.length;
    if (missing <= 0) return;
    
    // Pick random cards from offline database (except trainer duplicates if necessary, but random is fine)
    for (let i = 0; i < missing; i++) {
      const idx = Math.floor(Math.random() * OFFLINE_CARD_DB.length);
      // Deep copy to prevent state sharing
      myScannedDeck.push(JSON.parse(JSON.stringify(OFFLINE_CARD_DB[idx])));
    }
    saveScannedDeck();
    updateDeckBuilderProgress();
    showToast("Berhasil melengkapi dek kustom Anda!");
  });

  // Add currently previewed card to deck
  document.getElementById("btn-add-to-deck").addEventListener("click", () => {
    const cardData = document.getElementById("btn-add-to-deck").cardData;
    if (cardData) {
      if (myScannedDeck.length >= 20) {
        showToast("Dek Anda sudah penuh (20 kartu). Hapus beberapa jika ingin mengganti!");
        return;
      }
      myScannedDeck.push(JSON.parse(JSON.stringify(cardData)));
      saveScannedDeck();
      updateDeckBuilderProgress();
      showToast(`${cardData.name} ditambahkan ke Dek!`);
      document.getElementById("scanned-card-result").classList.add("hide");
    }
  });

  // Closing bottom actions drawer
  document.getElementById("btn-close-drawer").addEventListener("click", closeBottomDrawer);
  document.getElementById("bottom-drawer-modal").addEventListener("click", (e) => {
    if (e.target === document.getElementById("bottom-drawer-modal")) closeBottomDrawer();
  });

  // Concede fight
  document.getElementById("btn-concede").addEventListener("click", () => {
    if (confirm("Apakah Anda yakin ingin menyerah?")) {
      endGame("opponent");
    }
  });

  // Victory Overlay return to main menu
  document.getElementById("btn-back-to-menu").addEventListener("click", () => {
    document.getElementById("winner-overlay").classList.add("hide");
    switchScreen("welcome-screen");
  });

  // Mobile Shortcut Buttons
  document.getElementById("shortcut-retreat").addEventListener("click", () => {
    if (gameState.playerActive) {
      openCardDetailDrawer(gameState.playerActive, 0, "active");
    }
  });
  
  document.getElementById("shortcut-endturn").addEventListener("click", () => {
    if (gameState.turn === "player") {
      switchTurn();
    }
  });
});

// Helper for switching active screens
function switchScreen(screenId) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });
  document.getElementById(screenId).classList.add("active");
}

function showToast(msg) {
  // Simple elegant non-intrusive alert
  const oldToast = document.querySelector(".toast-alert");
  if (oldToast) oldToast.remove();
  
  const toast = document.createElement("div");
  toast.className = "toast-alert";
  toast.innerText = msg;
  toast.style.cssText = `
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%) translateY(50px);
    background: rgba(26, 32, 44, 0.95);
    color: #fff;
    border: 1px solid #d4af37;
    padding: 10px 20px;
    border-radius: 40px;
    font-size: 0.85rem;
    z-index: 1000;
    box-shadow: 0 4px 15px rgba(0,0,0,0.5);
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  `;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.transform = "translateX(-50%) translateY(0)";
  }, 50);

  setTimeout(() => {
    toast.style.transform = "translateX(-50%) translateY(80px)";
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// 4. CAMERA & OCR & POKEMON TCG API CODES
async function startCamera() {
  stopCamera();
  const video = document.getElementById("scanner-video");
  const indicator = document.getElementById("scan-status");
  
  indicator.innerText = "Membuka Kamera...";
  indicator.style.color = "#eab308";
  
  try {
    const constraints = {
      video: {
        facingMode: currentFacingMode,
        width: { ideal: 640 },
        height: { ideal: 480 }
      },
      audio: false
    };
    
    localStream = await navigator.mediaDevices.getUserMedia(constraints);
    video.srcObject = localStream;
    indicator.innerText = "Kamera Siap";
    indicator.style.color = "#48bb78";
  } catch(e) {
    console.error("Camera access failed", e);
    indicator.innerText = "Gagal Mengakses Kamera";
    indicator.style.color = "#f56565";
    showToast("Tidak bisa membuka kamera. Gunakan bar pencarian manual di bawah!");
  }
}

function stopCamera() {
  const video = document.getElementById("scanner-video");
  if (video && video.srcObject) {
    const stream = video.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
    video.srcObject = null;
  }
  localStream = null;
}

// Perform client-side OCR and look up Pokemon TCG API
async function captureAndScanCard() {
  const video = document.getElementById("scanner-video");
  const indicator = document.getElementById("scan-status");
  
  if (!localStream) {
    showToast("Aktifkan kamera terlebih dahulu atau gunakan pencarian manual.");
    return;
  }
  
  indicator.innerText = "Memotret...";
  indicator.style.color = "#eab308";
  
  // Render video frame to offscreen canvas
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  
  // Crop image exactly to the card frame coordinates (Center box)
  // Let's crop about 50% width and 80% height in the center
  const cropW = canvas.width * 0.5;
  const cropH = canvas.height * 0.8;
  const cropX = (canvas.width - cropW) / 2;
  const cropY = (canvas.height - cropH) / 2;
  
  const cropCanvas = document.createElement("canvas");
  cropCanvas.width = cropW;
  cropCanvas.height = cropH;
  const cropCtx = cropCanvas.getContext("2d");
  cropCtx.drawImage(canvas, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);
  
  indicator.innerText = "Menjalankan AI Scanner (OCR)...";
  
  try {
    // Run local Tesseract OCR on crop canvas
    const result = await Tesseract.recognize(
      cropCanvas,
      'eng',
      { logger: m => console.log(m) }
    );
    
    const text = result.data.text;
    console.log("OCR Detected Text:", text);
    
    // Extract potential names
    // Filter words: keep only characters, longer than 3, split by line
    const lines = text.split("\n");
    let detectedName = "";
    
    for (let line of lines) {
      // Pokemon name is usually near the top and written in bold letters
      // Clean up string: keep only letters
      const cleanLine = line.replace(/[^a-zA-Z\s]/g, "").trim();
      if (cleanLine.length >= 3 && cleanLine.length < 15) {
        // Let's assume the first matching line is the name
        detectedName = cleanLine.split(" ")[0]; // Take first word
        break;
      }
    }
    
    if (detectedName) {
      indicator.innerText = `Menemukan: ${detectedName}! Mencari database...`;
      queryPokemonAPI(detectedName);
    } else {
      indicator.innerText = "Gagal mendeteksi teks. Coba dekatkan kartu.";
      indicator.style.color = "#f56565";
      showToast("Teks tidak terbaca. Harap posisikan nama kartu di tengah kotak!");
    }
    
  } catch(e) {
    console.error("OCR Failed", e);
    indicator.innerText = "Kamera Siap";
    indicator.style.color = "#48bb78";
    showToast("OCR terganggu. Silakan gunakan pencarian nama kartu di bawah.");
  }
}

// Call manual search bar
function performManualCardSearch() {
  const q = document.getElementById("input-card-search").value.trim();
  if (!q) {
    showToast("Masukkan nama Pokémon terlebih dahulu!");
    return;
  }
  queryPokemonAPI(q);
}

// Pokémon TCG API Fetching
async function queryPokemonAPI(name) {
  const resultPanel = document.getElementById("scanned-card-result");
  const indicator = document.getElementById("scan-status");
  
  if (indicator) {
    indicator.innerText = `Mencari '${name}'...`;
    indicator.style.color = "#eab308";
  }
  
  try {
    const url = `https://api.pokemontcg.io/v2/cards?q=name:"${name}"&pageSize=5`;
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.data && data.data.length > 0) {
      // Take the first card found
      const apiCard = data.data[0];
      
      // Convert API card format to simplified "Duel Cepat" format
      const cardType = getElementCategory(apiCard.types ? apiCard.types[0] : "Colorless");
      
      // Extract attacks or create custom ones
      let simplifiedAttacks = [];
      if (apiCard.attacks && apiCard.attacks.length > 0) {
        simplifiedAttacks.push({
          name: apiCard.attacks[0].name,
          damage: apiCard.attacks[0].damage ? parseInt(apiCard.attacks[0].damage.replace(/[^0-9]/g, "")) || 10 : 10,
          needsCoin: false
        });
        
        if (apiCard.attacks.length > 1) {
          simplifiedAttacks.push({
            name: apiCard.attacks[1].name + " (Koin)",
            damage: apiCard.attacks[1].damage ? parseInt(apiCard.attacks[1].damage.replace(/[^0-9]/g, "")) || 40 : 40,
            needsCoin: true
          });
        } else {
          // Add default coin flip attack
          simplifiedAttacks.push({
            name: "Hantaman Koin (Coin Slam)",
            damage: (simplifiedAttacks[0].damage * 2) || 40,
            needsCoin: true
          });
        }
      } else {
        // Fallback attacks
        simplifiedAttacks = [
          { name: "Pukulan Cepat", damage: 10, needsCoin: false },
          { name: "Hantaman Mega", damage: 30, needsCoin: true }
        ];
      }
      
      const parsedCard = {
        id: apiCard.id,
        name: apiCard.name,
        type: cardType,
        stage: apiCard.supertype === "Trainer" ? "Item" : (apiCard.subtypes ? apiCard.subtypes[0] : "Basic"),
        hp: apiCard.hp ? parseInt(apiCard.hp) || 60 : 60,
        maxHp: apiCard.hp ? parseInt(apiCard.hp) || 60 : 60,
        attacks: simplifiedAttacks,
        imageUrl: apiCard.images.small
      };
      
      // Store Trainer Items effects
      if (parsedCard.stage === "Item") {
        parsedCard.effect = "heal_20"; // standard fallback
        parsedCard.description = "Sembuhkan 20 HP dari 1 Pokémon.";
      }
      
      // Show result card details
      displayScannedCard(parsedCard);
      if (indicator) {
        indicator.innerText = "Pencarian Berhasil!";
        indicator.style.color = "#48bb78";
      }
    } else {
      // No cards found, check if it fits our offline DB elements
      const localSearch = OFFLINE_CARD_DB.find(c => c.name.toLowerCase().includes(name.toLowerCase()));
      if (localSearch) {
        displayScannedCard(localSearch);
        showToast(`Ditemukan di database offline: ${localSearch.name}`);
        if (indicator) {
          indicator.innerText = "Offline Match!";
          indicator.style.color = "#48bb78";
        }
      } else {
        showToast(`Tidak ditemukan kartu '${name}' di database.`);
        if (indicator) {
          indicator.innerText = "Kartu Tidak Ditemukan";
          indicator.style.color = "#f56565";
        }
      }
    }
  } catch(e) {
    console.error("API query failed", e);
    showToast("Pencarian API gagal. Harap periksa jaringan internet.");
    if (indicator) {
      indicator.innerText = "Pencarian Gagal";
      indicator.style.color = "#f56565";
    }
  }
}

// Convert official Pokemon types to our 5 elements
function getElementCategory(type) {
  const t = type.toLowerCase();
  if (t === "fire") return "fire";
  if (t === "water" || t === "lightning" || t === "psychic" || t === "grass") return t;
  // Fallbacks:
  if (t === "lightning") return "lightning";
  if (t === "grass" || t === "bug") return "grass";
  if (t === "psychic" || t === "dark" || t === "fairy") return "psychic";
  return "colorless"; // Normal
}

function displayScannedCard(card) {
  const resultPanel = document.getElementById("scanned-card-result");
  const viewSlot = document.getElementById("scanned-card-view");
  
  viewSlot.innerHTML = renderCardHTML(card);
  document.getElementById("res-card-name").innerText = card.name;
  document.getElementById("res-card-meta").innerText = `${card.stage} | HP ${card.hp} | ${getTipeLabelIndo(card.type)}`;
  
  const attList = document.querySelector(".res-attacks-list");
  if (card.stage === "Item") {
    attList.innerHTML = `<div class="res-attack-item"><span>${card.description}</span></div>`;
  } else {
    attList.innerHTML = card.attacks.map(att => `
      <div class="res-attack-item">
        <span class="attack-name">${att.name}</span>
        <span class="attack-damage">${att.damage}</span>
      </div>
    `).join("");
  }
  
  // Attach card data to add button
  document.getElementById("btn-add-to-deck").cardData = card;
  resultPanel.classList.remove("hide");
}

function getTipeLabelIndo(type) {
  if (type === "fire") return "Api";
  if (type === "water") return "Air";
  if (type === "grass") return "Daun";
  if (type === "lightning") return "Listrik";
  if (type === "psychic") return "Psikis";
  return "Normal";
}

// Update Deck count and list visual in Deck Builder Screen
function updateDeckBuilderProgress() {
  document.getElementById("deck-count-num").innerText = myScannedDeck.length;
  const grid = document.getElementById("my-deck-grid");
  
  if (myScannedDeck.length === 0) {
    grid.innerHTML = `
      <div class="empty-deck-notice">
        <i class="fa-solid fa-qrcode"></i>
        <p>Dek Anda kosong. Pindai kartu Anda menggunakan kamera atau cari namanya di atas!</p>
      </div>
    `;
    return;
  }
  
  grid.innerHTML = myScannedDeck.map((card, idx) => `
    <div class="deck-grid-item" style="position: relative;">
      ${renderCardHTML(card)}
      <button onclick="removeCardFromScannedDeck(${idx})" class="btn-circle btn-sm" style="
        position: absolute;
        top: -6px;
        right: -6px;
        width: 20px;
        height: 20px;
        background-color: #e63946;
        border: 1px solid #fff;
        color: #fff;
        font-size: 0.6rem;
      ">
        <i class="fa-solid fa-times"></i>
      </button>
    </div>
  `).join("");
}

// Click remove card inside Deck Builder
window.removeCardFromScannedDeck = function(idx) {
  myScannedDeck.splice(idx, 1);
  saveScannedDeck();
  updateDeckBuilderProgress();
};

function checkCustomDeckAvailability() {
  const card = document.getElementById("custom-deck-card");
  const status = document.getElementById("custom-deck-status");
  const selectBtn = document.getElementById("btn-select-custom-deck");
  
  if (myScannedDeck.length === 20) {
    card.classList.remove("locked");
    status.innerText = "Dek Kustom Anda siap digunakan! (20 kartu)";
    selectBtn.removeAttribute("disabled");
  } else {
    card.classList.add("locked");
    status.innerText = `Belum siap. (${myScannedDeck.length}/20 kartu). Pindai kartu fisik Anda hingga 20 kartu.`;
    selectBtn.setAttribute("disabled", "true");
  }
}

// 5. GAME ENGINE CORE LOGIC (DUEL CEPAT ARENA)
function initializeGame(deckId) {
  stopCamera();
  switchScreen("game-screen");
  
  // Compile Deck
  let chosenDeck = [];
  if (deckId === "custom") {
    chosenDeck = JSON.parse(JSON.stringify(myScannedDeck));
  } else {
    chosenDeck = compileDefaultDeck(deckId);
  }
  
  // Set players decks
  gameState.playerDeck = shuffleArray(JSON.parse(JSON.stringify(chosenDeck)));
  // AI picks a random deck of the standard types
  const aiDeckTypes = ["fire", "water", "grass"];
  const randomAiType = aiDeckTypes[Math.floor(Math.random() * aiDeckTypes.length)];
  gameState.opponentDeck = shuffleArray(compileDefaultDeck(randomAiType));
  
  // Reset other state parameters
  gameState.playerHand = [];
  gameState.playerActive = null;
  gameState.playerBench = [null, null];
  gameState.playerDiscard = [];
  gameState.playerKOs = 0;
  
  gameState.opponentHand = [];
  gameState.opponentActive = null;
  gameState.opponentBench = [null, null];
  gameState.opponentDiscard = [];
  gameState.opponentKOs = 0;
  
  gameState.turn = "player";
  gameState.phase = "setup";
  gameState.hasRetreatedThisTurn = false;
  
  // Draw Initial Hands (5 cards each)
  for (let i = 0; i < 5; i++) {
    gameState.playerHand.push(gameState.playerDeck.pop());
    gameState.opponentHand.push(gameState.opponentDeck.pop());
  }
  
  // Update Game Arena UI
  updateBattlefield();
  updateGameLog("Pasang Pokémon Aktif! Tap kartu Pokémon Basic di tangan Anda.");
  
  // Show prompt for player to choose active Pokemon
  document.getElementById("shortcut-retreat").setAttribute("disabled", "true");
  document.getElementById("shortcut-endturn").setAttribute("disabled", "true");
}

function compileDefaultDeck(type) {
  // Return exactly 20 cards corresponding to element
  const deck = [];
  const pokemonList = OFFLINE_CARD_DB.filter(c => c.type === type && c.stage !== "Item");
  const items = OFFLINE_CARD_DB.filter(c => c.type === "trainer");
  
  // Let's pull:
  // 1x Stage 2, 2x Stage 1, 4x Basic of type
  // Plus 4 other basic (colorless/others), plus 9 Items = exactly 20 cards
  const stage2 = pokemonList.find(c => c.stage === "Stage 2");
  const stage1 = pokemonList.find(c => c.stage === "Stage 1");
  const basics = pokemonList.filter(c => c.stage === "Basic");
  
  if (stage2) deck.push(JSON.parse(JSON.stringify(stage2)));
  if (stage1) {
    deck.push(JSON.parse(JSON.stringify(stage1)));
    deck.push(JSON.parse(JSON.stringify(stage1)));
  }
  basics.forEach(b => {
    deck.push(JSON.parse(JSON.stringify(b)));
    deck.push(JSON.parse(JSON.stringify(b)));
  });
  
  // Add fallback colorless basic (e.g. Mewtwo/Pikachu etc)
  const colorlessList = OFFLINE_CARD_DB.filter(c => c.type !== type && c.stage === "Basic");
  deck.push(JSON.parse(JSON.stringify(colorlessList[0])));
  deck.push(JSON.parse(JSON.stringify(colorlessList[1])));
  
  // Add Items (Potion, Super Potion, Switch)
  items.forEach(it => {
    deck.push(JSON.parse(JSON.stringify(it)));
    deck.push(JSON.parse(JSON.stringify(it)));
  });
  
  // Supplement up to 20 with random standard cards
  while (deck.length < 20) {
    deck.push(JSON.parse(JSON.stringify(items[0])));
  }
  
  return deck;
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[arr[j]]] = [arr[arr[j]], arr[i]];
  }
  return arr;
}

// 6. RENDER CARD TO HTML ENGINE
function renderCardHTML(card, hasDamage = false) {
  if (!card) return "";
  
  // Calculate percentage of remaining HP
  let hpPercent = 100;
  if (card.stage !== "Item" && card.maxHp > 0) {
    hpPercent = Math.max(0, (card.hp / card.maxHp) * 100);
  }
  
  // Render attacks text list
  let attacksHTML = "";
  if (card.stage !== "Item" && card.attacks) {
    attacksHTML = card.attacks.map(att => `
      <div class="card-attack-line">
        <span class="att-name">${att.name}</span>
        <span class="att-dmg">${att.damage}</span>
      </div>
    `).join("");
  } else if (card.stage === "Item") {
    attacksHTML = `<div class="card-attack-line"><span class="att-name" style="font-size:0.4rem; white-space:normal; line-height:1.2;">${card.description}</span></div>`;
  }
  
  // Render red damage dice counters overlay
  let damageCountersHTML = "";
  if (card.stage !== "Item" && card.hp < card.maxHp) {
    const damageDealt = card.maxHp - card.hp;
    // Each 10 damage is 1 counter dice
    const numDice = Math.floor(damageDealt / 10);
    
    if (numDice > 0) {
      damageCountersHTML = `<div class="card-damage-counters-holder">`;
      // Render dice with the number
      damageCountersHTML += `<div class="damage-dice">${damageDealt}</div>`;
      damageCountersHTML += `</div>`;
    }
  }

  // Element logo class
  let classType = card.type;
  
  return `
    <div class="pokemon-card ${classType}">
      <div class="card-holo-foil"></div>
      <div class="card-header-row">
        <span class="card-stage-tag">${card.stage}</span>
        <span class="card-name-text">${card.name}</span>
        ${card.stage !== "Item" ? `<span class="card-hp-text">HP ${card.hp}</span>` : ""}
      </div>
      <div class="card-illustration" style="background-image: url('${card.imageUrl}')"></div>
      <div class="card-body-row">
        ${attacksHTML}
      </div>
      ${damageCountersHTML}
    </div>
  `;
}

// 7. BATTLEFIELD DYNAMIC DRAWING ENGINE
function updateBattlefield() {
  // 1. Draw Player Active
  const pActiveSlot = document.getElementById("player-active");
  if (gameState.playerActive) {
    pActiveSlot.innerHTML = renderCardHTML(gameState.playerActive);
    pActiveSlot.className = "active-slot occupied";
    pActiveSlot.onclick = () => openCardDetailDrawer(gameState.playerActive, -1, "active");
  } else {
    pActiveSlot.innerHTML = "Pasang Pokémon Aktif";
    pActiveSlot.className = "active-slot empty";
    pActiveSlot.onclick = handleActiveSlotSetupClick;
  }
  
  // 2. Draw Player Bench
  gameState.playerBench.forEach((card, idx) => {
    const slot = document.querySelector(`#player-bench .bench-slot[data-slot="${idx}"]`);
    if (card) {
      slot.innerHTML = renderCardHTML(card);
      slot.className = "bench-slot occupied";
      slot.onclick = () => openCardDetailDrawer(card, idx, "bench");
    } else {
      slot.innerHTML = "Cadangan";
      slot.className = "bench-slot empty";
      slot.onclick = null;
    }
  });

  // 3. Draw Player Hand
  const pHandContainer = document.getElementById("player-hand");
  pHandContainer.innerHTML = gameState.playerHand.map((card, idx) => {
    // Generate card element
    return `
      <div class="hand-card-wrapper animate-draw-card" onclick="openCardDetailDrawerFromHand(${idx})">
        ${renderCardHTML(card)}
      </div>
    `;
  }).join("");

  // 4. Draw Opponent Active
  const oActiveSlot = document.getElementById("opponent-active");
  if (gameState.opponentActive) {
    oActiveSlot.innerHTML = renderCardHTML(gameState.opponentActive);
    oActiveSlot.className = "active-slot occupied";
    oActiveSlot.onclick = () => openCardDetailDrawer(gameState.opponentActive, -1, "opponent-active");
  } else {
    oActiveSlot.innerHTML = "Aktif Lawan";
    oActiveSlot.className = "active-slot empty";
    oActiveSlot.onclick = null;
  }

  // 5. Draw Opponent Bench
  gameState.opponentBench.forEach((card, idx) => {
    const slot = document.querySelector(`#opponent-bench .bench-slot[data-slot="${idx}"]`);
    if (card) {
      slot.innerHTML = renderCardHTML(card);
      slot.className = "bench-slot occupied";
      slot.onclick = () => openCardDetailDrawer(card, idx, "opponent-bench");
    } else {
      slot.innerHTML = "Cadangan";
      slot.className = "bench-slot empty";
      slot.onclick = null;
    }
  });

  // 6. Draw Opponent Hand (Face down backs)
  const oHandContainer = document.getElementById("opponent-hand");
  oHandContainer.innerHTML = "";
  for (let i = 0; i < gameState.opponentHand.length; i++) {
    oHandContainer.innerHTML += `<div class="card-back-pattern small"></div>`;
  }

  // 7. Update Deck piles count numbers
  document.getElementById("player-deck-count").innerText = gameState.playerDeck.length;
  document.getElementById("opponent-deck-count").innerText = gameState.opponentDeck.length;

  // 8. Update Discard Piles
  const pDiscard = document.getElementById("player-discard-pile");
  if (gameState.playerDiscard.length > 0) {
    const lastCard = gameState.playerDiscard[gameState.playerDiscard.length - 1];
    pDiscard.innerHTML = renderCardHTML(lastCard);
    pDiscard.style.borderColor = "#fff";
  } else {
    pDiscard.innerHTML = `<div class="discard-empty-placeholder">Abuan</div>`;
    pDiscard.style.borderColor = "rgba(255,255,255,0.2)";
  }

  const oDiscard = document.getElementById("opponent-discard-pile");
  if (gameState.opponentDiscard.length > 0) {
    const lastCard = gameState.opponentDiscard[gameState.opponentDiscard.length - 1];
    oDiscard.innerHTML = renderCardHTML(lastCard);
    oDiscard.style.borderColor = "#fff";
  } else {
    oDiscard.innerHTML = `<div class="discard-empty-placeholder">Abuan</div>`;
    oDiscard.style.borderColor = "rgba(255,255,255,0.2)";
  }

  // 9. Update KO Ball Counters Tracker
  updateKOBalls("player-ko-balls", gameState.playerKOs);
  updateKOBalls("opponent-ko-balls", gameState.opponentKOs);

  // 10. Update Status Buttons
  updateStatusButtons();
}

function updateKOBalls(elementId, count) {
  const container = document.getElementById(elementId);
  const slots = container.querySelectorAll(".ko-ball-slot");
  
  slots.forEach((slot, idx) => {
    if (idx < count) {
      slot.className = "ko-ball-slot active";
      slot.innerHTML = `<i class="fa-solid fa-circle-dot"></i>`;
    } else {
      slot.className = "ko-ball-slot";
      slot.innerHTML = `<i class="fa-solid fa-circle text-muted"></i>`;
    }
  });
}

function updateStatusButtons() {
  const btnRetreat = document.getElementById("shortcut-retreat");
  const btnEndTurn = document.getElementById("shortcut-endturn");
  
  if (gameState.phase === "setup") {
    btnRetreat.setAttribute("disabled", "true");
    btnEndTurn.setAttribute("disabled", "true");
    return;
  }
  
  if (gameState.turn === "player") {
    btnEndTurn.removeAttribute("disabled");
    
    // Retreat available if Player has Active, has Bench, and hasn't retreated yet
    const hasBench = gameState.playerBench.some(c => c !== null);
    if (gameState.playerActive && hasBench && !gameState.hasRetreatedThisTurn) {
      btnRetreat.removeAttribute("disabled");
    } else {
      btnRetreat.setAttribute("disabled", "true");
    }
  } else {
    btnRetreat.setAttribute("disabled", "true");
    btnEndTurn.setAttribute("disabled", "true");
  }
}

function updateGameLog(msg) {
  document.getElementById("battle-log-text").innerText = msg;
}

// 8. CARD DETAILED BOTTOM SHEET / DRAWER CONTROLS
function openCardDetailDrawerFromHand(idx) {
  const card = gameState.playerHand[idx];
  openCardDetailDrawer(card, idx, "hand");
}

function openCardDetailDrawer(card, index, source) {
  gameState.selectedCard = card;
  gameState.selectedCardIndex = index;
  gameState.selectedCardSource = source;
  
  const modal = document.getElementById("bottom-drawer-modal");
  const preview = document.getElementById("drawer-card-view");
  
  preview.innerHTML = renderCardHTML(card);
  document.getElementById("drawer-card-name").innerText = card.name;
  document.getElementById("drawer-card-meta").innerText = `${card.stage} | HP ${card.hp}/${card.maxHp} | ${getTipeLabelIndo(card.type)}`;
  
  // Show damage counters status
  const damageTracker = document.getElementById("drawer-damage-counters");
  if (card.stage !== "Item" && card.hp < card.maxHp) {
    damageTracker.innerText = `Terluka: -${card.maxHp - card.hp} HP (Butuh Penyembuhan)`;
    damageTracker.style.display = "block";
  } else {
    damageTracker.style.display = "none";
  }
  
  // Inject contextual buttons based on game state
  const actionsGroup = document.getElementById("drawer-actions-group");
  actionsGroup.innerHTML = "";
  
  if (gameState.turn === "player" && gameState.phase !== "gameover") {
    // A. Card is in HAND
    if (source === "hand") {
      if (gameState.phase === "setup") {
        if (card.stage === "Basic") {
          actionsGroup.innerHTML += `<button onclick="playActiveFromHand()" class="btn btn-primary btn-block">Pasang Pokémon Aktif</button>`;
        } else {
          actionsGroup.innerHTML += `<p class="text-center font-sm text-muted">Hanya Pokémon Basic yang dapat dipasang di awal permainan.</p>`;
        }
      } else {
        // Active phase
        if (card.stage === "Basic") {
          // Play to Bench if spot available
          const hasBenchSpace = gameState.playerBench.some(c => c === null);
          if (hasBenchSpace) {
            actionsGroup.innerHTML += `<button onclick="playToBench()" class="btn btn-primary btn-block">Mainkan ke Cadangan (Bench)</button>`;
          } else {
            actionsGroup.innerHTML += `<p class="text-center font-sm text-muted">Cadangan penuh! Maksimal 2 Pokémon.</p>`;
          }
          // Also check if active slot is empty (after KO)
          if (!gameState.playerActive) {
            actionsGroup.innerHTML += `<button onclick="playActiveFromHand()" class="btn btn-primary btn-block">Pasang Pokémon Aktif</button>`;
          }
        } else if (card.stage === "Stage 1" || card.stage === "Stage 2") {
          // Evolve basic pokemon of same type
          const evolutionsAvailable = getEvolutionTargets(card);
          if (evolutionsAvailable.length > 0) {
            evolutionsAvailable.forEach(target => {
              actionsGroup.innerHTML += `
                <button onclick="evolvePokemon(${target.id}, '${target.zone}', ${target.index})" class="btn btn-primary btn-block">
                  Evolusikan ${target.name} (Tipe ${getTipeLabelIndo(card.type)})
                </button>
              `;
            });
          } else {
            actionsGroup.innerHTML += `<p class="text-center font-sm text-muted">Tidak ada Pokémon bertipe ${getTipeLabelIndo(card.type)} di arena untuk berevolusi.</p>`;
          }
        } else if (card.stage === "Item") {
          // Play Trainer Item Card
          actionsGroup.innerHTML += `<button onclick="playTrainerItem()" class="btn btn-primary btn-block">Gunakan Kartu Item</button>`;
        }
      }
    }
    
    // B. Card is ACTIVE Pokémon
    else if (source === "active") {
      if (gameState.phase === "action") {
        // Attack options
        if (card.attacks) {
          card.attacks.forEach((att, idx) => {
            if (gameState.opponentActive) {
              actionsGroup.innerHTML += `
                <button onclick="triggerPlayerAttack(${idx})" class="btn btn-primary btn-block">
                  ${att.name} (Damage: ${att.damage})
                </button>
              `;
            } else {
              actionsGroup.innerHTML += `<p class="text-center font-sm text-muted">Tidak ada Pokémon aktif lawan untuk diserang!</p>`;
            }
          });
        }
        
        // Retreat option
        const hasBench = gameState.playerBench.some(c => c !== null);
        if (hasBench && !gameState.hasRetreatedThisTurn) {
          actionsGroup.innerHTML += `<button onclick="openRetreatSelection()" class="btn btn-secondary btn-block">Mundur Gratis (Retreat)</button>`;
        }
      }
    }
    
    // C. Card is BENCH Pokémon
    else if (source === "bench") {
      if (!gameState.playerActive) {
        // Active is empty, must swap Bench to Active
        actionsGroup.innerHTML += `<button onclick="promoteBenchToActive(${index})" class="btn btn-primary btn-block">Jadikan Pokémon Aktif</button>`;
      }
    }
  } else {
    actionsGroup.innerHTML += `<p class="text-center font-sm text-muted">Bukan giliran Anda.</p>`;
  }
  
  // Close Button
  actionsGroup.innerHTML += `<button onclick="closeBottomDrawer()" class="btn btn-text btn-block">Batal</button>`;
  
  modal.classList.add("active");
}

function closeBottomDrawer() {
  document.getElementById("bottom-drawer-modal").classList.remove("active");
}

// 9. GAME PLAY ACTION HANDLERS

// A. Play Basic from Hand as Active
window.playActiveFromHand = function() {
  const idx = gameState.selectedCardIndex;
  const card = gameState.playerHand[idx];
  
  gameState.playerActive = card;
  gameState.playerHand.splice(idx, 1);
  closeBottomDrawer();
  
  updateBattlefield();
  updateGameLog(`Anda memasang ${card.name} di Posisi Aktif!`);
  
  // If we are in initial setup, trigger Opponent setup as well
  if (gameState.phase === "setup") {
    setTimeout(handleOpponentSetupPhase, 1000);
  }
};

// B. Play Basic from Hand to Bench Cadangan
window.playToBench = function() {
  const idx = gameState.selectedCardIndex;
  const card = gameState.playerHand[idx];
  
  // Find open bench slot
  const openIdx = gameState.playerBench.findIndex(c => c === null);
  if (openIdx !== -1) {
    gameState.playerBench[openIdx] = card;
    gameState.playerHand.splice(idx, 1);
    closeBottomDrawer();
    updateBattlefield();
    updateGameLog(`Anda menaruh ${card.name} di Cadangan!`);
  }
};

// C. Find compatible pokemon on board to evolve
function getEvolutionTargets(evolutionCard) {
  const targets = [];
  
  // Evolve rules: Stage 1 or 2 can evolve from lower stage of SAME TYPE
  // Check Active
  if (gameState.playerActive && gameState.playerActive.type === evolutionCard.type) {
    if (evolutionCard.stage === "Stage 1" && gameState.playerActive.stage === "Basic") {
      targets.push({ id: 99, zone: "active", index: -1, name: `Aktif: ${gameState.playerActive.name}` });
    } else if (evolutionCard.stage === "Stage 2" && (gameState.playerActive.stage === "Basic" || gameState.playerActive.stage === "Stage 1")) {
      targets.push({ id: 99, zone: "active", index: -1, name: `Aktif: ${gameState.playerActive.name}` });
    }
  }
  
  // Check Bench
  gameState.playerBench.forEach((card, idx) => {
    if (card && card.type === evolutionCard.type) {
      if (evolutionCard.stage === "Stage 1" && card.stage === "Basic") {
        targets.push({ id: idx, zone: "bench", index: idx, name: `Cadangan ${idx+1}: ${card.name}` });
      } else if (evolutionCard.stage === "Stage 2" && (card.stage === "Basic" || card.stage === "Stage 1")) {
        targets.push({ id: idx, zone: "bench", index: idx, name: `Cadangan ${idx+1}: ${card.name}` });
      }
    }
  });
  
  return targets;
}

// D. Execute evolution
window.evolvePokemon = function(id, zone, index) {
  const evolutionCardIndex = gameState.selectedCardIndex;
  const evolutionCard = gameState.playerHand[evolutionCardIndex];
  
  let targetCard = null;
  
  if (zone === "active") {
    targetCard = gameState.playerActive;
    // Perform evolution: replace active
    evolutionCard.hp = evolutionCard.maxHp - (targetCard.maxHp - targetCard.hp); // carry over damage!
    evolutionCard.hp = Math.max(10, evolutionCard.hp); // ensure it doesn't KO instantly
    gameState.playerActive = evolutionCard;
  } else {
    targetCard = gameState.playerBench[index];
    evolutionCard.hp = evolutionCard.maxHp - (targetCard.maxHp - targetCard.hp); // carry over damage!
    evolutionCard.hp = Math.max(10, evolutionCard.hp);
    gameState.playerBench[index] = evolutionCard;
  }
  
  // Remove evolution card from hand, put target card to discard (or stack it below, but simplified is discard)
  gameState.playerHand.splice(evolutionCardIndex, 1);
  gameState.playerDiscard.push(targetCard);
  
  closeBottomDrawer();
  updateBattlefield();
  updateGameLog(`Sensation! ${targetCard.name} Berevolusi menjadi ${evolutionCard.name}!`);
};

// E. Promote Bench to Active (after KO)
window.promoteBenchToActive = function(benchIdx) {
  const card = gameState.playerBench[benchIdx];
  
  gameState.playerActive = card;
  gameState.playerBench[benchIdx] = null;
  
  closeBottomDrawer();
  updateBattlefield();
  updateGameLog(`${card.name} dimajukan ke posisi Aktif!`);
};

// F. Open Retreat Selection
window.openRetreatSelection = function() {
  const actionsGroup = document.getElementById("drawer-actions-group");
  actionsGroup.innerHTML = `<h4>Pilih Pokémon Cadangan Pengganti:</h4>`;
  
  gameState.playerBench.forEach((card, idx) => {
    if (card) {
      actionsGroup.innerHTML += `
        <button onclick="executeRetreat(${idx})" class="btn btn-secondary btn-block">
          Tukar dengan ${card.name} (HP: ${card.hp})
        </button>
      `;
    }
  });
  
  actionsGroup.innerHTML += `<button onclick="closeBottomDrawer()" class="btn btn-text btn-block">Batal</button>`;
};

window.executeRetreat = function(benchIdx) {
  const oldActive = gameState.playerActive;
  const newActive = gameState.playerBench[benchIdx];
  
  gameState.playerActive = newActive;
  gameState.playerBench[benchIdx] = oldActive;
  gameState.hasRetreatedThisTurn = true;
  
  closeBottomDrawer();
  updateBattlefield();
  updateGameLog(`Anda menarik mundur ${oldActive.name} dan menukar dengan ${newActive.name}!`);
};

// G. Play Trainer Item Cards
window.playTrainerItem = function() {
  const itemIndex = gameState.selectedCardIndex;
  const itemCard = gameState.playerHand[itemIndex];
  
  const actionsGroup = document.getElementById("drawer-actions-group");
  actionsGroup.innerHTML = `<h4>Pilih target penggunaan ${itemCard.name}:</h4>`;
  
  if (itemCard.effect === "heal_20" || itemCard.effect === "heal_50") {
    const healVal = itemCard.effect === "heal_20" ? 20 : 50;
    
    // Choose active
    if (gameState.playerActive && gameState.playerActive.hp < gameState.playerActive.maxHp) {
      actionsGroup.innerHTML += `
        <button onclick="executeHealItem('active', -1, ${healVal}, ${itemIndex})" class="btn btn-primary btn-block">
          Sembuhkan Aktif: ${gameState.playerActive.name} (+${healVal} HP)
        </button>
      `;
    }
    
    // Choose bench
    gameState.playerBench.forEach((card, idx) => {
      if (card && card.hp < card.maxHp) {
        actionsGroup.innerHTML += `
          <button onclick="executeHealItem('bench', ${idx}, ${healVal}, ${itemIndex})" class="btn btn-primary btn-block">
            Sembuhkan Cadangan ${idx+1}: ${card.name} (+${healVal} HP)
          </button>
        `;
      }
    });
    
    if (actionsGroup.children.length === 1) {
      actionsGroup.innerHTML += `<p class="text-center font-sm text-muted">Tidak ada Pokémon terluka untuk disembuhkan.</p>`;
    }
  } else if (itemCard.effect === "switch_bench") {
    // Switch Active and Bench
    gameState.playerBench.forEach((card, idx) => {
      if (card) {
        actionsGroup.innerHTML += `
          <button onclick="executeSwitchItem(${idx}, ${itemIndex})" class="btn btn-primary btn-block">
            Tukar Aktif dengan ${card.name}
          </button>
        `;
      }
    });
    
    if (actionsGroup.children.length === 1) {
      actionsGroup.innerHTML += `<p class="text-center font-sm text-muted">Tidak ada Pokémon cadangan untuk ditukar.</p>`;
    }
  }
  
  actionsGroup.innerHTML += `<button onclick="closeBottomDrawer()" class="btn btn-text btn-block">Batal</button>`;
};

window.executeHealItem = function(zone, idx, val, itemIdx) {
  let target = null;
  if (zone === "active") {
    target = gameState.playerActive;
  } else {
    target = gameState.playerBench[idx];
  }
  
  const healAmount = Math.min(val, target.maxHp - target.hp);
  target.hp += healAmount;
  
  // Discard trainer card
  const item = gameState.playerHand[itemIdx];
  gameState.playerHand.splice(itemIdx, 1);
  gameState.playerDiscard.push(item);
  
  closeBottomDrawer();
  updateBattlefield();
  updateGameLog(`Menggunakan ${item.name}! ${target.name} sembuh ${healAmount} HP!`);
};

window.executeSwitchItem = function(benchIdx, itemIdx) {
  const oldActive = gameState.playerActive;
  const newActive = gameState.playerBench[benchIdx];
  
  gameState.playerActive = newActive;
  gameState.playerBench[benchIdx] = oldActive;
  
  // Discard trainer card
  const item = gameState.playerHand[itemIdx];
  gameState.playerHand.splice(itemIdx, 1);
  gameState.playerDiscard.push(item);
  
  closeBottomDrawer();
  updateBattlefield();
  updateGameLog(`Menggunakan ${item.name}! ${oldActive.name} ditukar dengan ${newActive.name}!`);
};

// 10. GAME BATTLE LOGIC (ATTACKING & KO CONTROLLER)

// Attacking flow
window.triggerPlayerAttack = function(attackIdx) {
  closeBottomDrawer();
  const activePokemon = gameState.playerActive;
  const attack = activePokemon.attacks[attackIdx];
  
  updateGameLog(`Anda memilih ${activePokemon.name} menggunakan ${attack.name}!`);
  
  if (attack.needsCoin) {
    // Require coin flip
    setTimeout(() => {
      triggerCoinFlipOverlay(true, (isHeads) => {
        if (isHeads) {
          executeAttack(activePokemon, attack, "player");
        } else {
          updateGameLog(`Serangan meleset! Koin Ekor. Giliran Anda selesai.`);
          setTimeout(switchTurn, 1800);
        }
      });
    }, 500);
  } else {
    // Direct guaranteed attack
    setTimeout(() => {
      executeAttack(activePokemon, attack, "player");
    }, 500);
  }
};

function executeAttack(attacker, attack, owner) {
  const target = owner === "player" ? gameState.opponentActive : gameState.playerActive;
  const targetSlot = owner === "player" ? document.getElementById("opponent-active") : document.getElementById("player-active");
  const attackerSlot = owner === "player" ? document.getElementById("player-active") : document.getElementById("opponent-active");
  
  // 1. Play Attack Animation
  attackerSlot.classList.add(owner === "player" ? "animate-attack-player" : "animate-attack-opponent");
  
  setTimeout(() => {
    // Remove attack animation
    attackerSlot.classList.remove(owner === "player" ? "animate-attack-player" : "animate-attack-opponent");
    
    // 2. Play Hit Damage Shake Animation
    targetSlot.classList.add("animate-damage-shake");
    
    // 3. Subtract HP
    target.hp -= attack.damage;
    target.hp = Math.max(0, target.hp);
    
    updateGameLog(`${attacker.name} menghasilkan ${attack.damage} damage pada ${target.name}!`);
    updateBattlefield();
    
    setTimeout(() => {
      targetSlot.classList.remove("animate-damage-shake");
      
      // 4. Check KO Condition
      if (target.hp <= 0) {
        handlePokemonKO(target, owner);
      } else {
        // Standard turn switch
        setTimeout(switchTurn, 1000);
      }
    }, 400);
    
  }, 300);
}

function handlePokemonKO(koedPokemon, owner) {
  const isPlayerKo = owner === "opponent"; // Opponent KOed Player's Pokémon
  const targetSlot = isPlayerKo ? document.getElementById("player-active") : document.getElementById("opponent-active");
  
  updateGameLog(`${koedPokemon.name} pingsan! KO!`);
  
  // Play KO Animation (Fade/shrink out)
  targetSlot.classList.add("animate-card-ko");
  
  setTimeout(() => {
    targetSlot.classList.remove("animate-card-ko");
    
    // Move card to Discard pile
    if (isPlayerKo) {
      gameState.playerDiscard.push(gameState.playerActive);
      gameState.playerActive = null;
      gameState.opponentKOs += 1;
    } else {
      gameState.opponentDiscard.push(gameState.opponentActive);
      gameState.opponentActive = null;
      gameState.playerKOs += 1;
    }
    
    updateBattlefield();
    
    // Check if game over conditions are met (First to 3 KOs)
    if (gameState.playerKOs >= 3) {
      endGame("player");
    } else if (gameState.opponentKOs >= 3) {
      endGame("opponent");
    } else {
      // Continue, check if the defeated player needs to promote bench
      if (isPlayerKo) {
        const hasBench = gameState.playerBench.some(c => c !== null);
        if (hasBench) {
          updateGameLog("Pokémon Anda pingsan! Pilih Pokémon Cadangan Anda untuk ditaruh di depan.");
          // Keep game phase suspended until active is chosen
          gameState.phase = "setup";
          updateBattlefield();
        } else {
          // Instant defeat if no bench available!
          updateGameLog("Anda tidak memiliki Pokémon cadangan! Anda Kalah.");
          endGame("opponent");
        }
      } else {
        // Opponent KOed, bot must promote bench
        const oBenchIndex = gameState.opponentBench.findIndex(c => c !== null);
        if (oBenchIndex !== -1) {
          const promo = gameState.opponentBench[oBenchIndex];
          gameState.opponentActive = promo;
          gameState.opponentBench[oBenchIndex] = null;
          updateBattlefield();
          updateGameLog(`Komputer memajukan ${promo.name} ke posisi Aktif!`);
          
          setTimeout(switchTurn, 1000);
        } else {
          // Bot has no bench, Player wins!
          updateGameLog("Komputer tidak memiliki Pokémon cadangan! Anda Menang!");
          endGame("player");
        }
      }
    }
  }, 800);
}

// 11. 3D COIN FLIP ANIMATION IMPLEMENTATION
function triggerCoinFlipOverlay(isPlayer, callback) {
  const overlay = document.getElementById("coin-flip-overlay");
  const coin = document.getElementById("coin-3d");
  const resultText = document.getElementById("coin-flip-result");
  
  resultText.innerText = isPlayer ? "MELEMPAR KOIN ANDA..." : "KOMPUTER MELEMPAR KOIN...";
  overlay.classList.remove("hide");
  
  // Decide heads or tails
  const isHeads = Math.random() < 0.5;
  
  // Calculate rotation target based on heads or tails
  // Heads is Y=0/360/720..., Tails is Y=180/540/900...
  // Let's set exact Y angles. Add 5 full spins (1800deg) to target
  const targetY = isHeads ? 1800 : 1980; 
  const targetX = 1440; // full rotation X
  
  coin.style.setProperty("--coin-target-rotation", `rotateX(${targetX}deg) rotateY(${targetY}deg)`);
  coin.className = "coin-3d animate-coin-spin";
  
  setTimeout(() => {
    // Animation finished
    resultText.innerText = isHeads ? "KEPALA! BERHASIL!" : "EKOR! MELESET!";
    resultText.style.color = isHeads ? "#48bb78" : "#f56565";
    
    setTimeout(() => {
      // Fade out overlay
      overlay.classList.add("hide");
      coin.className = "coin-3d"; // reset
      resultText.style.color = "#fff";
      callback(isHeads);
    }, 1200);
    
  }, 2500); // coin flip anim is 2.5s long
}

// 12. TURN SYSTEM CONTROL LOOP
function switchTurn() {
  if (gameState.phase === "gameover") return;
  
  gameState.turn = gameState.turn === "player" ? "opponent" : "player";
  gameState.hasRetreatedThisTurn = false;
  gameState.phase = "draw";
  
  if (gameState.turn === "player") {
    // Player's Turn
    updateGameLog("Giliran Anda! Mengambil kartu...");
    setTimeout(playerDrawCard, 1000);
  } else {
    // Opponent's Turn
    updateGameLog("Giliran Komputer...");
    setTimeout(handleOpponentTurnLoop, 1200);
  }
}

function playerDrawCard() {
  if (gameState.playerDeck.length > 0) {
    const drawn = gameState.playerDeck.pop();
    gameState.playerHand.push(drawn);
    updateBattlefield();
    updateGameLog("Ambil kartu selesai. Lakukan Aksi atau Serang!");
    gameState.phase = "action";
  } else {
    // Deck out check
    updateGameLog("Dek Anda habis! Anda Kalah.");
    endGame("opponent");
  }
}

function endGame(winner) {
  gameState.phase = "gameover";
  const overlay = document.getElementById("winner-overlay");
  const icon = document.getElementById("winner-icon");
  const title = document.getElementById("winner-title");
  const message = document.getElementById("winner-message");
  
  if (winner === "player") {
    icon.innerHTML = `<i class="fa-solid fa-trophy text-gold"></i>`;
    title.innerText = "MENANG!";
    title.style.color = "#ecc94b";
    message.innerText = `Luar biasa! Anda berhasil mengalahkan 3 Pokémon AI Komputer dan memenangkan pertarungan Duel Cepat!`;
  } else {
    icon.innerHTML = `<i class="fa-solid fa-face-frown text-muted"></i>`;
    title.innerText = "KALAH";
    title.style.color = "#fc8181";
    message.innerText = `Bot Komputer berhasil mengalahkan Pokémon Anda. Ayo bangun dek kustom yang lebih kuat dan coba lagi!`;
  }
  
  overlay.classList.remove("hide");
}

function handleActiveSlotSetupClick() {
  // If active slot clicked while empty during setup, remind user to tap hand
  showToast("Tap kartu Pokémon Basic di Tangan untuk memasangnya!");
}

// 13. AI COMPUTER OPPONENT LOGIC (BOT INTEL)
function handleOpponentSetupPhase() {
  updateGameLog("Komputer sedang memilih Pokémon Aktif...");
  
  setTimeout(() => {
    // Bot looks for a Basic Pokemon in its hand
    const basics = gameState.opponentHand.filter(c => c.stage === "Basic");
    if (basics.length > 0) {
      // Pick first basic
      const choice = basics[0];
      const idx = gameState.opponentHand.indexOf(choice);
      
      gameState.opponentActive = choice;
      gameState.opponentHand.splice(idx, 1);
      
      updateGameLog("Komputer memasang Pokémon Aktif. Duel dimulai!");
      gameState.phase = "action";
      
      updateBattlefield();
      
      // Since player is first, player starts action
      setTimeout(() => {
        updateGameLog("Giliran Anda! Lakukan Aksi atau Serang.");
      }, 1000);
    } else {
      // Emergency: no basic found in computer hand, draw 1 from deck and try
      if (gameState.opponentDeck.length > 0) {
        gameState.opponentHand.push(gameState.opponentDeck.pop());
        handleOpponentSetupPhase();
      } else {
        // Impossible, deck has basics.
        endGame("player");
      }
    }
  }, 1000);
}

// Opponent Turn Loop Logic
function handleOpponentTurnLoop() {
  if (gameState.phase === "gameover") return;
  
  // 1. Draw Card
  if (gameState.opponentDeck.length > 0) {
    gameState.opponentHand.push(gameState.opponentDeck.pop());
    updateBattlefield();
    updateGameLog("Komputer mengambil 1 kartu...");
  } else {
    updateGameLog("Dek Komputer habis! Anda Menang!");
    endGame("player");
    return;
  }
  
  // 2. Play Actions Phase (Items, Bench, Evolve)
  setTimeout(() => {
    let playedSomething = false;
    
    // A. Evolve on active/bench if possible
    const stageCards = gameState.opponentHand.filter(c => c.stage === "Stage 1" || c.stage === "Stage 2");
    for (let evoCard of stageCards) {
      // Check active
      if (gameState.opponentActive && gameState.opponentActive.type === evoCard.type && gameState.opponentActive.stage === "Basic") {
        const old = gameState.opponentActive;
        evoCard.hp = evoCard.maxHp - (old.maxHp - old.hp);
        evoCard.hp = Math.max(10, evoCard.hp);
        
        gameState.opponentActive = evoCard;
        gameState.opponentHand.splice(gameState.opponentHand.indexOf(evoCard), 1);
        gameState.opponentDiscard.push(old);
        
        updateGameLog(`Komputer berevolusi: ${old.name} menjadi ${evoCard.name}!`);
        playedSomething = true;
        break;
      }
      
      // Check bench
      for (let i = 0; i < gameState.opponentBench.length; i++) {
        const bCard = gameState.opponentBench[i];
        if (bCard && bCard.type === evoCard.type && bCard.stage === "Basic") {
          evoCard.hp = evoCard.maxHp - (bCard.maxHp - bCard.hp);
          evoCard.hp = Math.max(10, evoCard.hp);
          
          gameState.opponentBench[i] = evoCard;
          gameState.opponentHand.splice(gameState.opponentHand.indexOf(evoCard), 1);
          gameState.opponentDiscard.push(bCard);
          
          updateGameLog(`Komputer berevolusi Cadangan: ${bCard.name} menjadi ${evoCard.name}!`);
          playedSomething = true;
          break;
        }
      }
      if (playedSomething) break;
    }
    
    // B. Play basic to bench
    const oBasics = gameState.opponentHand.filter(c => c.stage === "Basic");
    const openBench = gameState.opponentBench.findIndex(c => c === null);
    if (oBasics.length > 0 && openBench !== -1 && !playedSomething) {
      const card = oBasics[0];
      gameState.opponentBench[openBench] = card;
      gameState.opponentHand.splice(gameState.opponentHand.indexOf(card), 1);
      updateGameLog(`Komputer meletakkan ${card.name} di Cadangan.`);
      playedSomething = true;
    }
    
    // C. Use Item (Potion) if active is low HP
    const oPotion = gameState.opponentHand.find(c => c.stage === "Item" && c.effect.startsWith("heal"));
    if (oPotion && gameState.opponentActive && gameState.opponentActive.hp <= gameState.opponentActive.maxHp - 20) {
      const healAmount = oPotion.effect === "heal_50" ? 50 : 20;
      gameState.opponentActive.hp = Math.min(gameState.opponentActive.maxHp, gameState.opponentActive.hp + healAmount);
      gameState.opponentHand.splice(gameState.opponentHand.indexOf(oPotion), 1);
      gameState.opponentDiscard.push(oPotion);
      updateGameLog(`Komputer menggunakan ${oPotion.name}! Menyembuhkan ${gameState.opponentActive.name}.`);
      playedSomething = true;
    }
    
    // D. Retreat if active is low HP and bench is healthy
    const hasHealthyBench = gameState.opponentBench.some(c => c !== null && c.hp > 30);
    if (gameState.opponentActive && gameState.opponentActive.hp <= 20 && hasHealthyBench && !playedSomething) {
      // Find index
      const benchIdx = gameState.opponentBench.findIndex(c => c !== null && c.hp > 30);
      const oldActive = gameState.opponentActive;
      gameState.opponentActive = gameState.opponentBench[benchIdx];
      gameState.opponentBench[benchIdx] = oldActive;
      updateGameLog(`Komputer menarik mundur ${oldActive.name} dan menukar dengan ${gameState.opponentActive.name}!`);
      playedSomething = true;
    }
    
    updateBattlefield();
    
    // 3. Attack Phase
    setTimeout(() => {
      executeOpponentAttack();
    }, playedSomething ? 1500 : 800);
    
  }, 1200);
}

function executeOpponentAttack() {
  const attacker = gameState.opponentActive;
  if (!attacker || !gameState.playerActive) {
    // If somehow active is missing, switch turn
    switchTurn();
    return;
  }
  
  // Decide attack index
  // Rule: if Attack 2 exists, decide risk.
  let choiceIdx = 0;
  
  if (attacker.attacks && attacker.attacks.length > 1) {
    const att1 = attacker.attacks[0];
    const att2 = attacker.attacks[1];
    
    // If Attack 1 is enough to KO player's active, choose Attack 1 (zero risk)
    if (gameState.playerActive.hp <= att1.damage) {
      choiceIdx = 0;
    } else {
      // Bot takes risk to achieve bigger damage!
      choiceIdx = 1;
    }
  }
  
  const chosenAttack = attacker.attacks[choiceIdx];
  updateGameLog(`Komputer memilih ${attacker.name} menyerang dengan ${chosenAttack.name}!`);
  
  if (chosenAttack.needsCoin) {
    // Bot coin flip
    setTimeout(() => {
      triggerCoinFlipOverlay(false, (isHeads) => {
        if (isHeads) {
          executeAttack(attacker, chosenAttack, "opponent");
        } else {
          updateGameLog(`Serangan Komputer meleset! Koin Ekor. Giliran Komputer selesai.`);
          setTimeout(switchTurn, 1800);
        }
      });
    }, 500);
  } else {
    // Direct attack
    setTimeout(() => {
      executeAttack(attacker, chosenAttack, "opponent");
    }, 500);
  }
}
