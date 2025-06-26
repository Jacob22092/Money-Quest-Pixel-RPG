// --- SVG PIXEL HEROES ---
const KNIGHT_SVG = `<svg viewBox="0 0 16 16" style="image-rendering:pixelated"><rect width="16" height="16" fill="#e3e3e3"/>
<rect x="6" y="1" width="4" height="2" fill="#6f7175"/><rect x="5" y="3" width="6" height="1" fill="#6f7175"/>
<rect x="4" y="4" width="8" height="2" fill="#b0b3b6"/><rect x="6" y="6" width="4" height="2" fill="#b0b3b6"/>
<rect x="5" y="8" width="6" height="4" fill="#b0b3b6"/><rect x="6" y="12" width="1" height="2" fill="#6f7175"/>
<rect x="9" y="12" width="1" height="2" fill="#6f7175"/><rect x="5" y="11" width="1" height="1" fill="#6f7175"/>
<rect x="10" y="11" width="1" height="1" fill="#6f7175"/>
<rect x="7" y="6" width="2" height="2" fill="#fff"/><rect x="7" y="8" width="2" height="2" fill="#fff"/>
<rect x="7" y="10" width="2" height="1" fill="#fff"/>
<rect x="7" y="13" width="2" height="1" fill="#fff"/>
<rect x="4" y="6" width="2" height="1" fill="#6f7175"/><rect x="10" y="6" width="2" height="1" fill="#6f7175"/>
<rect x="4" y="10" width="1" height="1" fill="#6f7175"/><rect x="11" y="10" width="1" height="1" fill="#6f7175"/>
<rect x="5" y="5" width="6" height="1" fill="#b0b3b6"/>
<rect x="7" y="3" width="2" height="1" fill="#fff"/>
<rect x="7" y="4" width="2" height="1" fill="#b0b3b6"/>
</svg>`;

const MAGE_SVG = `<svg viewBox="0 0 16 16" style="image-rendering:pixelated"><rect width="16" height="16" fill="#e3e3e3"/>
<rect x="7" y="1" width="2" height="2" fill="#7b1fa2"/><rect x="6" y="3" width="4" height="2" fill="#7b1fa2"/>
<rect x="5" y="5" width="6" height="2" fill="#c158dc"/><rect x="4" y="7" width="8" height="4" fill="#c158dc"/>
<rect x="6" y="11" width="1" height="3" fill="#7b1fa2"/><rect x="9" y="11" width="1" height="3" fill="#7b1fa2"/>
<rect x="7" y="12" width="2" height="2" fill="#fff"/>
<rect x="6" y="10" width="4" height="1" fill="#fff"/>
<rect x="3" y="10" width="2" height="1" fill="#7b1fa2"/><rect x="11" y="10" width="2" height="1" fill="#7b1fa2"/>
<rect x="5" y="9" width="6" height="1" fill="#c158dc"/>
<rect x="4" y="8" width="8" height="1" fill="#e1bee7"/>
<rect x="7" y="6" width="2" height="1" fill="#fff"/>
</svg>`;

const ARCHER_SVG = `<svg viewBox="0 0 16 16" style="image-rendering:pixelated"><rect width="16" height="16" fill="#e3e3e3"/>
<rect x="7" y="1" width="2" height="2" fill="#388e3c"/><rect x="6" y="3" width="4" height="2" fill="#388e3c"/>
<rect x="5" y="5" width="6" height="1" fill="#8bc34a"/><rect x="4" y="6" width="8" height="3" fill="#8bc34a"/>
<rect x="6" y="9" width="4" height="2" fill="#a1887f"/><rect x="7" y="11" width="2" height="2" fill="#fff"/>
<rect x="6" y="13" width="1" height="2" fill="#388e3c"/><rect x="9" y="13" width="1" height="2" fill="#388e3c"/>
<rect x="5" y="8" width="1" height="1" fill="#388e3c"/><rect x="10" y="8" width="1" height="1" fill="#388e3c"/>
<rect x="6" y="8" width="4" height="1" fill="#fff"/>
<rect x="7" y="4" width="2" height="1" fill="#fff"/>
</svg>`;

// --- SVG for horse (pixel art style, improved) ---
const HORSE_SVG = `<svg viewBox="0 0 20 18" style="image-rendering:pixelated">
<rect width="20" height="18" fill="#e3e3e3"/>
<!-- Body -->
<rect x="4" y="7" width="10" height="4" fill="#a9824a"/>
<rect x="12" y="8" width="3" height="2" fill="#a9824a"/>
<rect x="7" y="5" width="5" height="2" fill="#a9824a"/>
<rect x="5" y="11" width="1" height="3" fill="#7d5c34"/>
<rect x="13" y="12" width="1" height="3" fill="#7d5c34"/>
<rect x="9" y="12" width="1" height="3" fill="#7d5c34"/>
<rect x="7" y="11" width="1" height="3" fill="#7d5c34"/>
<!-- Head -->
<rect x="2" y="6" width="3" height="3" fill="#a9824a"/>
<rect x="1" y="7" width="1" height="2" fill="#a9824a"/>
<rect x="2" y="9" width="1" height="2" fill="#a9824a"/>
<!-- Ear -->
<rect x="4" y="5" width="1" height="1" fill="#7d5c34"/>
<rect x="3" y="4" width="1" height="1" fill="#7d5c34"/>
<!-- Nose/Face -->
<rect x="1" y="8" width="1" height="1" fill="#fff"/>
<rect x="2" y="10" width="1" height="1" fill="#fff"/>
<!-- Eye -->
<rect x="3" y="7" width="1" height="1" fill="#232323"/>
<rect x="4" y="8" width="1" height="1" fill="#fff"/>
<!-- Mane -->
<rect x="5" y="5" width="1" height="2" fill="#3e2723"/>
<rect x="6" y="4" width="1" height="1" fill="#3e2723"/>
<rect x="9" y="4" width="1" height="2" fill="#3e2723"/>
</svg>`;

const HEROES = [
  { name: "Knight", key: "knight", svg: KNIGHT_SVG },
  { name: "Mage", key: "mage", svg: MAGE_SVG },
  { name: "Archer", key: "archer", svg: ARCHER_SVG }
];

// --- Potion/Shop SVGs ---
const POTION_COIN_SVG = `<svg viewBox="0 0 16 16" style="image-rendering:pixelated"><rect width="16" height="16" fill="#e3e3e3"/>
<rect x="5" y="2" width="6" height="2" fill="#ffd600"/><rect x="4" y="4" width="8" height="6" fill="#ffd600"/>
<rect x="5" y="10" width="6" height="2" fill="#ffc107"/><rect x="6" y="12" width="4" height="2" fill="#ffb300"/>
<rect x="7" y="1" width="2" height="1" fill="#fff59d"/>
</svg>`;

const POTION_XP_SVG = `<svg viewBox="0 0 16 16" style="image-rendering:pixelated"><rect width="16" height="16" fill="#e3e3e3"/>
<rect x="6" y="2" width="4" height="2" fill="#1976d2"/><rect x="5" y="4" width="6" height="6" fill="#1976d2"/>
<rect x="6" y="10" width="4" height="2" fill="#64b5f6"/><rect x="7" y="12" width="2" height="2" fill="#fff"/>
<rect x="8" y="1" width="1" height="1" fill="#bbdefb"/>
</svg>`;

const POTION_MULTI_SVG = `<svg viewBox="0 0 16 16" style="image-rendering:pixelated"><rect width="16" height="16" fill="#e3e3e3"/>
<rect x="6" y="2" width="4" height="2" fill="#d32f2f"/><rect x="5" y="4" width="6" height="6" fill="#d32f2f"/>
<rect x="6" y="10" width="4" height="2" fill="#f44336"/><rect x="7" y="12" width="2" height="2" fill="#fff"/>
<rect x="8" y="1" width="1" height="1" fill="#ffcdd2"/>
</svg>`;

const SHOP_ITEMS = [
  {
    key: "coin_boost",
    name: "Gold Potion",
    desc: "2x coins for 30 seconds.",
    cost: 60,
    svg: POTION_COIN_SVG,
    duration: 30,
    type: "coin"
  },
  {
    key: "xp_boost",
    name: "XP Potion",
    desc: "2x XP for 30 seconds.",
    cost: 60,
    svg: POTION_XP_SVG,
    duration: 30,
    type: "xp"
  },
  {
    key: "multi_boost",
    name: "Combo Potion",
    desc: "2x coins & XP for 20 seconds.",
    cost: 120,
    svg: POTION_MULTI_SVG,
    duration: 20,
    type: "both"
  },
  {
    key: "horse",
    name: "Pixel Horse",
    desc: "+2 coins per click (permanently).",
    cost: 200,
    svg: HORSE_SVG,
    type: "horse"
  }
];

// --- Shop state ---
let horseBought = false;
let activeBonuses = {
  coin: {mult:1, until:0},
  xp: {mult:1, until:0}
};
let shopModal = null;

const defaultGameState = {
  money: 0,
  xp: 0,
  level: 1,
  xpMax: 10,
  upgrades: [0,0,0],
  hero: {
    classKey: "knight",
    displayName: "Hero"
  },
  settings: {
    darkMode: false,
    music: true,
    sfx: true
  }
};

const UPGRADE_DEFS = [
  {
    name: "Auto collector",
    desc: "Automatically collects coins every 3 seconds.",
    baseCost: 100,
    effect: lvl => lvl ? (1 + lvl*0.15) : 0,
    icon: "fa-robot"
  },
  {
    name: "Coin multiplier",
    desc: "Each click = more coins.",
    baseCost: 60,
    effect: lvl => 1 + lvl,
    icon: "fa-star"
  },
  {
    name: "XP bonus",
    desc: "More XP per click.",
    baseCost: 90,
    effect: lvl => 1 + lvl*0.7,
    icon: "fa-fire"
  },
  {
    name: "Instant 10 coins",
    desc: "Buy to instantly receive 10 coins.",
    baseCost: 30,
    effect: () => 10,
    icon: "fa-bolt",
    instant: true
  },
  {
    name: "Instant 100 XP",
    desc: "Buy to instantly receive 100 XP.",
    baseCost: 120,
    effect: () => 100,
    icon: "fa-burst",
    instant: true,
    xp: true
  }
];

// --- Sounds (Howler.js) ---
const clickSfx = new Howl({ src: ['https://cdn.pixabay.com/audio/2022/12/19/audio_12b4b1a9de.mp3'], volume: 0.5 });
const coinSfx = new Howl({ src: ['https://cdn.pixabay.com/audio/2022/07/26/audio_124b1d11b6.mp3'], volume: 0.5 });
const levelupSfx = new Howl({ src: ['https://cdn.pixabay.com/audio/2022/07/26/audio_1217fce12b.mp3'], volume: 0.5 });
const buySfx = new Howl({ src: ['https://cdn.pixabay.com/audio/2022/07/26/audio_1218c1e2e0.mp3'], volume: 0.5 });
const errorSfx = new Howl({ src: ['https://cdn.pixabay.com/audio/2022/08/20/audio_121f1e3a9d.mp3'], volume: 0.45 });
const bgMusic = new Howl({
  src: ['https://cdn.pixabay.com/audio/2022/12/19/audio_129e7e6a4c.mp3'],
  loop: true,
  volume: 0.1
});

// --- DOM ---
const $ = sel => document.querySelector(sel);
const heroLvl = $('#hero-level'), heroXp = $('#hero-xp'), heroXpMax = $('#hero-xpmax');
const moneyVal = $('#money-val'), collectBtn = $('#collect-btn');
const upgradeList = $('#upgrade-list');
const heroAvatar = $('#hero-avatar');
const settingsBtn = $('#settings-btn'), settingsModalBg = $('#settings-modal-bg');
const closeSettingsBtn = $('#close-settings-btn'), resetGameBtn = $('#reset-game-btn');
const darkmodeToggle = $('#darkmode-toggle'), musicToggle = $('#music-toggle'), sfxToggle = $('#sfx-toggle');
let heroNameDiv = document.getElementById('hero-name');
let heroModal = null;

// --- Save/load expanded for horseBought ---
function save() {
  localStorage.setItem("moneyquest2024", JSON.stringify(state));
  localStorage.setItem("moneyquest2024:horseBought", horseBought ? "1" : "0");
}
function load() {
  let s = localStorage.getItem("moneyquest2024");
  state = s ? JSON.parse(s) : JSON.parse(JSON.stringify(defaultGameState));
  horseBought = localStorage.getItem("moneyquest2024:horseBought") === "1";
}

// --- Shop Modal logic ---
function showShopModal() {
  if (shopModal) shopModal.close();
  document.body.classList.add('shop-open');
  const content = document.createElement('div');
  content.innerHTML = `<h3>Shop</h3>
  <div class="shop-items-list">
    ${SHOP_ITEMS.map(item => {
      let owned = (item.key === "horse" && horseBought);
      return `
      <div class="shop-item" data-key="${item.key}">
        <div class="shop-svg">${item.svg}</div>
        <div class="shop-info">
          <div class="shop-name">${item.name}</div>
          <div class="shop-desc">${item.desc}</div>
          <div class="shop-cost"><i class="fa-solid fa-coins"></i> ${item.cost}</div>
          <button class="shop-buy-btn" data-key="${item.key}" ${owned ? 'disabled' : ''}>
            ${owned ? "Owned" : "Buy"}
          </button>
        </div>
      </div>
    `;
    }).join("")}
  </div>
  <div class="shop-active-bonuses">
    ${renderActiveBonuses()}
  </div>
  `;
  shopModal = new tingle.modal({
    closeMethods: ['overlay','button','escape'],
    closeLabel: "Close",
    cssClass: ['hero-select-modal'],
    zIndex: 20000,
    onClose: function() {
      document.body.classList.remove('shop-open');
      shopModal = null;
    }
  });
  setTimeout(()=>{
    content.querySelectorAll('.shop-buy-btn').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const key = btn.getAttribute('data-key');
        buyShopItem(key);
        shopModal.close();
        setTimeout(showShopModal, 250); // refresh shop
      });
    });
  },30);
  shopModal.setContent(content);
  shopModal.open();
}
function renderActiveBonuses() {
  let now = Date.now()/1000;
  let arr = [];
  if (activeBonuses.coin.mult > 1 && activeBonuses.coin.until > now)
    arr.push(`<span style="color:#fbc02d;">2x Coins <b>${Math.ceil(activeBonuses.coin.until-now)}</b>s</span>`);
  if (activeBonuses.xp.mult > 1 && activeBonuses.xp.until > now)
    arr.push(`<span style="color:#1565c0;">2x XP <b>${Math.ceil(activeBonuses.xp.until-now)}</b>s</span>`);
  if (!arr.length) return `<em>No active bonuses</em>`;
  return '<div>Active bonuses: ' + arr.join(" | ") + '</div>';
}
function buyShopItem(key) {
  const item = SHOP_ITEMS.find(x=>x.key===key);
  if (!item) return;
  if (item.key === "horse" && horseBought) return;
  if (state.money < item.cost) { errorSfx.play(); return; }
  state.money -= item.cost;
  if(item.type==="coin"||item.type==="both"){
    const now = Date.now()/1000;
    activeBonuses.coin.mult = 2;
    activeBonuses.coin.until = Math.max(activeBonuses.coin.until, now+item.duration);
  }
  if(item.type==="xp"||item.type==="both"){
    const now = Date.now()/1000;
    activeBonuses.xp.mult = 2;
    activeBonuses.xp.until = Math.max(activeBonuses.xp.until, now+item.duration);
  }
  if(item.key==="horse"){
    horseBought = true;
  }
  buySfx.play();
  save();
  render();
  updateBonusTimers();
}
function updateBonusTimers() {
  clearInterval(window._shopBonusTimer);
  window._shopBonusTimer = setInterval(()=>{
    let now = Date.now()/1000;
    if(activeBonuses.coin.mult>1 && now > activeBonuses.coin.until){
      activeBonuses.coin.mult = 1;
    }
    if(activeBonuses.xp.mult>1 && now > activeBonuses.xp.until){
      activeBonuses.xp.mult = 1;
    }
    render();
  }, 1000);
}

// --- Render character ---
function renderHero() {
  const hero = HEROES.find(h=>h.key===state.hero.classKey) || HEROES[0];
  heroAvatar.innerHTML = hero.svg;
  heroNameDiv.innerHTML = `<span>${state.hero.displayName}</span><span class="hero-class">${hero.name}</span>`;
}

// --- SHOP button with particles ---
function createShopParticles(btn) {
  let particles = document.createElement("div");
  particles.className = "shop-particles";
  for(let i=0;i<10;i++) {
    let part = document.createElement("div");
    part.className = "shop-particle";
    part.style.left = `${22+Math.random()*26}px`;
    part.style.top = `${35+Math.random()*15}px`;
    part.style.background = `radial-gradient(circle at 30% 30%, #fff9, #82e5ff, #ff90c2, #b695f9)`;
    part.style.animationDelay = `${Math.random()}s`;
    particles.appendChild(part);
  }
  btn.appendChild(particles);
}

// --- Render game (updated for horse) ---
function render() {
  moneyVal.textContent = state.money;
  heroLvl.textContent = state.level;
  heroXp.textContent = state.xp;
  heroXpMax.textContent = state.xpMax;
  renderHero();

  // Upgrades
  upgradeList.innerHTML = '';
  for (let i = 0; i < UPGRADE_DEFS.length; ++i) {
    let upg = UPGRADE_DEFS[i];
    let lvl = state.upgrades[i] || 0;
    let cost = Math.floor(upg.baseCost * (upg.instant ? 1 : Math.pow(2, lvl)));
    let locked = (i > 0 && i < 3 && state.upgrades[i-1] < 1);
    let div = document.createElement('div');
    div.className = 'upgrade-card' + (locked ? ' locked' : '');

    let buyBtn;
    if (!upg.instant) {
      buyBtn = `<button class="upgrade-buy-btn" ${locked?'disabled':''} data-upg="${i}">
        <i class="fa-solid fa-coins"></i> ${cost}
      </button>`;
    } else {
      buyBtn = `<button class="upgrade-buy-btn2" data-upg="${i}">
        <i class="fa-solid fa-coins"></i> ${cost}
      </button>`;
    }

    div.innerHTML = `
      <div>
        <i class="fa-solid ${upg.icon}" style="margin-right:6px;"></i>
        <b>${upg.name}</b> ${!upg.instant ? `<span style="color:#b99d19;">LVL ${lvl}</span>` : ""}
        <div style="font-size:0.83em;color:#8d7005;">${upg.desc}</div>
      </div>
      <div>
        ${buyBtn}
      </div>
    `;
    upgradeList.appendChild(div);
  }
  // Shop button with particles
  if (!document.getElementById('open-shop-btn')) {
    const shopBtn = document.createElement('button');
    shopBtn.id = 'open-shop-btn';
    shopBtn.textContent = "Shop";
    shopBtn.style.margin = "12px auto 0 auto";
    shopBtn.style.display = "block";
    shopBtn.style.background = "linear-gradient(90deg,#ffe082 70%,#fbc02d 100%)";
    shopBtn.style.color = "#a46a06";
    shopBtn.style.border = "2px solid #ffd54f";
    shopBtn.style.borderRadius = "11px";
    shopBtn.style.fontSize = "1.11em";
    shopBtn.style.fontFamily = "inherit";
    shopBtn.style.fontWeight = "700";
    shopBtn.style.padding = "10px 27px";
    shopBtn.style.cursor = "pointer";
    shopBtn.style.boxShadow = "0 1.5px 0 #fff5";
    shopBtn.style.transition = "background .14s, transform .13s";
    shopBtn.addEventListener('click', showShopModal);
    upgradeList.parentNode.insertBefore(shopBtn, upgradeList.nextSibling);
    createShopParticles(shopBtn);
  }

  // Settings modal
  darkmodeToggle.checked = state.settings.darkMode;
  musicToggle.checked = state.settings.music;
  sfxToggle.checked = state.settings.sfx;
  document.body.setAttribute('data-theme', state.settings.darkMode ? 'dark' : 'light');

  if(state.settings.music && !bgMusic.playing()) bgMusic.play();
  if(!state.settings.music && bgMusic.playing()) bgMusic.pause();

  updateBonusTimers();
}

// --- Coin animation (Anime.js) ---
function animateCoin() {
  if(document.body.classList.contains("shop-open")) return;
  let coin = document.createElement('div');
  coin.className = 'coin-fx';
  coin.style.position = 'absolute';
  const btnRect = collectBtn.getBoundingClientRect();
  coin.style.left = (btnRect.left + btnRect.width/2 - 10) + 'px';
  coin.style.top = (btnRect.top + btnRect.height/2 - 10) + 'px';
  coin.style.zIndex = 11000;
  coin.innerHTML = '<i class="fa-solid fa-coins" style="color:#ffd600;font-size:2em;text-shadow:0 1.5px #fff8"></i>';
  document.body.appendChild(coin);
  anime({
    targets: coin,
    translateY: [-10, -90],
    scale: [1,1.6,0.7],
    opacity: [1,0.6,0],
    easing: 'easeOutCubic',
    duration: 750,
    complete: () => coin.remove()
  });
}
function animateXpBar() {
  heroAvatar.classList.remove('animate__pulse');
  void heroAvatar.offsetWidth;
  heroAvatar.classList.add('animate__pulse');
}

// --- Game logic (updated for horse) ---
function addMoney(amt, xpamt) {
  let now = Date.now()/1000;
  let coinMult = (activeBonuses.coin.mult>1 && activeBonuses.coin.until>now) ? 2 : 1;
  let xpMult = (activeBonuses.xp.mult>1 && activeBonuses.xp.until>now) ? 2 : 1;
  if(horseBought) amt += 2;
  amt *= coinMult;
  xpamt *= xpMult;
  state.money += amt;
  state.xp += xpamt;
  while(state.xp >= state.xpMax) {
    state.xp -= state.xpMax;
    state.level++;
    state.xpMax = Math.floor(state.xpMax * 1.18 + 4);
    if(state.settings.sfx) levelupSfx.play();
    heroAvatar.classList.add('animate__tada');
    setTimeout(()=>heroAvatar.classList.remove('animate__tada'), 600);
  }
  render();
  save();
}
function buyUpgrade(i) {
  let upg = UPGRADE_DEFS[i];
  let lvl = state.upgrades[i] || 0;
  let cost = Math.floor(upg.baseCost * (upg.instant ? 1 : Math.pow(2, lvl)));
  if(state.money >= cost) {
    if(state.settings.sfx) buySfx.play();
    state.money -= cost;
    if (upg.instant) {
      if (upg.xp) {
        addMoney(0, upg.effect());
      } else {
        addMoney(upg.effect(), 0);
      }
    } else {
      state.upgrades[i]++;
    }
    render();
    save();
  } else if(state.settings.sfx) {
    errorSfx.play();
  }
}
function setupAutoCollect() {
  if(window.autoCollectInt) clearInterval(window.autoCollectInt);
  let interval = 3000;
  let autoLvl = state.upgrades[0] || 0;
  if(autoLvl > 0) {
    window.autoCollectInt = setInterval(()=>{
      let amt = 1 * (state.upgrades[1]?UPGRADE_DEFS[1].effect(state.upgrades[1]):1);
      addMoney(amt, Math.round(1* (state.upgrades[2]?UPGRADE_DEFS[2].effect(state.upgrades[2]):1)));
      if(state.settings.sfx) coinSfx.play();
      animateCoin();
    }, interval);
  }
}

// --- Character select modal on game start ---
function showHeroSelectModal(force = false) {
  const content = document.createElement('div');
  content.innerHTML = `<h3>Choose your hero</h3>
    <div class="hero-choose-list">
      ${HEROES.map(h => `
        <div class="hero-choose-item" data-key="${h.key}">
          <div style="margin-bottom:7px;">${h.svg}</div>
          ${h.name}
          <span class="hero-choose-class">${h.key}</span>
        </div>
      `).join("")}
    </div>
    <div style="margin-bottom:7px;">
      <label>Hero name:<br>
        <input type="text" id="hero-name-input" maxlength="15" autocomplete="off">
      </label>
    </div>
    <button id="confirm-hero-btn" disabled>Start!</button>
  `;
  if (heroModal) heroModal.close();
  heroModal = new tingle.modal({
    closeMethods: force ? ['overlay','button','escape'] : [],
    closeLabel: "Close",
    cssClass: ['hero-select-modal'],
    onOpen: function() {
      settingsModalBg.classList.add("hidden");
    }
  });
  let selectedKey = HEROES[0].key;
  let heroName = '';
  setTimeout(()=>{
    const items = content.querySelectorAll('.hero-choose-item');
    items.forEach(div=>{
      div.addEventListener('click', ()=>{
        items.forEach(x=>x.classList.remove('selected'));
        div.classList.add('selected');
        selectedKey = div.getAttribute('data-key');
        updateBtn();
      });
    });
    items[0].classList.add('selected');
    const input = content.querySelector('#hero-name-input');
    input.value = '';
    input.addEventListener('input',(e)=>{
      heroName = e.target.value.trim();
      updateBtn();
    });
    content.querySelector('#confirm-hero-btn').addEventListener('click', ()=>{
      state.hero.classKey = selectedKey;
      state.hero.displayName = heroName || "Hero";
      save();
      render();
      heroModal.close();
    });
    function updateBtn() {
      content.querySelector('#confirm-hero-btn').disabled = !heroName;
    }
    input.focus();
  },30);
  heroModal.setContent(content);
  heroModal.open();
}

// --- Events ---
collectBtn.addEventListener('click', ()=>{
  let multi = state.upgrades[1]?UPGRADE_DEFS[1].effect(state.upgrades[1]):1;
  let xpMulti = state.upgrades[2]?UPGRADE_DEFS[2].effect(state.upgrades[2]):1;
  addMoney(multi, Math.round(1 * xpMulti));
  if(state.settings.sfx) clickSfx.play();
  animateCoin();
  animateXpBar();
});
upgradeList.addEventListener('click', e=>{
  if(e.target.closest('.upgrade-buy-btn') || e.target.closest('.upgrade-buy-btn2')) {
    let btn = e.target.closest('.upgrade-buy-btn') || e.target.closest('.upgrade-buy-btn2');
    let idx = +btn.getAttribute('data-upg');
    buyUpgrade(idx);
    setupAutoCollect();
  }
});
settingsBtn.addEventListener('click', ()=>{
  if (heroModal && heroModal.isOpen()) return;
  settingsModalBg.classList.remove('hidden');
});
closeSettingsBtn.addEventListener('click', ()=>{
  settingsModalBg.classList.add('hidden');
});
darkmodeToggle.addEventListener('change', ()=>{
  state.settings.darkMode = darkmodeToggle.checked;
  render();
  save();
});
musicToggle.addEventListener('change', ()=>{
  state.settings.music = musicToggle.checked;
  render();
  save();
});
sfxToggle.addEventListener('change', ()=>{
  state.settings.sfx = sfxToggle.checked;
  render();
  save();
});
resetGameBtn.addEventListener('click', ()=>{
  if(confirm("Reset game? All progress will be lost!")) {
    Object.assign(state, JSON.parse(JSON.stringify(defaultGameState)));
    render();
    save();
    setupAutoCollect();
    settingsModalBg.classList.add("hidden");
    setTimeout(() => showHeroSelectModal(true), 50);
  }
});

// Option to change hero during the game
let changeHeroBtn = null;
function addChangeHeroBtn() {
  if (!changeHeroBtn) {
    changeHeroBtn = document.createElement('button');
    changeHeroBtn.textContent = "Change hero";
    changeHeroBtn.style.background = "#ffe082";
    changeHeroBtn.style.color = "#b99d19";
    changeHeroBtn.style.border = "1.3px solid #fbc02d";
    changeHeroBtn.style.borderRadius = "7px";
    changeHeroBtn.style.fontFamily = "inherit";
    changeHeroBtn.style.fontSize = "0.95em";
    changeHeroBtn.style.padding = "5px 10px";
    changeHeroBtn.style.cursor = "pointer";
    changeHeroBtn.style.marginLeft = "20px";
    changeHeroBtn.addEventListener('click', ()=> showHeroSelectModal(true));
    $('#hero-section').appendChild(changeHeroBtn);
  }
}
addChangeHeroBtn();

// --- Init ---
window.addEventListener('DOMContentLoaded', ()=>{
  load();
  if(!state.hero || !state.hero.classKey) {
    state.hero = {classKey: "knight", displayName: ""};
    showHeroSelectModal();
  }
  render();
  setupAutoCollect();
  heroAvatar.classList.add('animate__fadeInDown');
});

const SPECIAL_OFFERS = [
  {
    key: "super_coin",
    name: "SUPER Gold Potion",
    desc: "3x coins for 60 seconds!",
    cost: 180,
    svg: `<svg viewBox="0 0 20 20" style="image-rendering:pixelated"><rect width="20" height="20" fill="#fffbe7"/>
      <circle cx="10" cy="10" r="7" fill="#ffd600" stroke="#efb600" stroke-width="2"/>
      <circle cx="10" cy="10" r="5" fill="#fffde7"/>
      <text x="10" y="14" font-size="8" text-anchor="middle" font-family="Arial" fill="#f57f17" font-weight="bold">x3</text>
    </svg>`,
    duration: 60,
    type: "coin",
    coinMult: 3
  },
  {
    key: "super_xp",
    name: "SUPER XP Potion",
    desc: "3x XP for 60 seconds!",
    cost: 160,
    svg: `<svg viewBox="0 0 20 20" style="image-rendering:pixelated"><rect width="20" height="20" fill="#fffbe7"/>
      <rect x="5" y="5" width="10" height="10" fill="#1976d2" stroke="#1565c0" stroke-width="2"/>
      <text x="10" y="15" font-size="8" text-anchor="middle" font-family="Arial" fill="#fff" font-weight="bold">x3</text>
    </svg>`,
    duration: 60,
    type: "xp",
    xpMult: 3
  },
  {
    key: "jackpot",
    name: "Jackpot Chest",
    desc: "+500 coins instantly!",
    cost: 260,
    svg: `<svg viewBox="0 0 20 20" style="image-rendering:pixelated"><rect width="20" height="20" fill="#fffbe7"/>
      <rect x="4" y="11" width="12" height="5" fill="#ffb300" stroke="#a46a06" stroke-width="2"/>
      <rect x="4" y="6" width="12" height="7" fill="#ffe082" stroke="#a46a06" stroke-width="2"/>
      <circle cx="10" cy="14" r="2" fill="#fff59d"/>
      <text x="10" y="18" font-size="7" text-anchor="middle" font-family="Arial" fill="#c43a9f" font-weight="bold">500</text>
    </svg>`,
    duration: 0,
    type: "jackpot",
    jackpot: 500
  }
];

// --- Special offer state ---
let specialOffer = null; // {offer, nextTime, running}
let specialOfferTimer = null;

// --- Save/load: add specialOffer
function save() {
  localStorage.setItem("moneyquest2024", JSON.stringify(state));
  localStorage.setItem("moneyquest2024:horseBought", horseBought ? "1" : "0");
  if(specialOffer) {
    localStorage.setItem("moneyquest2024:specialOffer", JSON.stringify(specialOffer));
  }
}
function load() {
  let s = localStorage.getItem("moneyquest2024");
  state = s ? JSON.parse(s) : JSON.parse(JSON.stringify(defaultGameState));
  horseBought = localStorage.getItem("moneyquest2024:horseBought") === "1";
  let so = localStorage.getItem("moneyquest2024:specialOffer");
  specialOffer = so ? JSON.parse(so) : null;
}

// --- Special Offer panel rendering ---
function getRandomSpecialOffer() {
  // Avoid offering the same one twice in a row
  let idx = Math.floor(Math.random() * SPECIAL_OFFERS.length);
  if (specialOffer && specialOffer.offer && SPECIAL_OFFERS.length > 1) {
    while (SPECIAL_OFFERS[idx].key === specialOffer.offer.key) {
      idx = Math.floor(Math.random() * SPECIAL_OFFERS.length);
    }
  }
  return SPECIAL_OFFERS[idx];
}

function showSpecialOfferPane() {
  let pane = document.getElementById("special-offer-pane");
  if (!pane) {
    pane = document.createElement('div');
    pane.id = "special-offer-pane";
    document.body.appendChild(pane);
  }
  // Decide which offer to show
  const now = Date.now();
  // If not present or time is up, pick a new one
  if (!specialOffer || (specialOffer.nextTime && now > specialOffer.nextTime)) {
    specialOffer = {
      offer: getRandomSpecialOffer(),
      timerRunning: false,
      nextTime: null
    };
    save();
  }
  // If timer running, show countdown
  let showTimer = !!specialOffer.nextTime && now < specialOffer.nextTime;
  let content = `
    <div class="special-title">Special Offer!</div>
    <div class="special-svg">${specialOffer.offer.svg}</div>
    <div class="special-desc">${specialOffer.offer.desc}</div>
    <div class="special-cost"><i class="fa-solid fa-coins"></i> ${specialOffer.offer.cost}</div>
    ${showTimer 
      ? `<div class="special-timer" id="special-offer-timer">Next offer in: <span id="offer-timer-val">${formatMMSS(specialOffer.nextTime - now)}</span></div>`
      : `<button class="special-buy-btn" id="special-offer-buy-btn">Buy</button>`
    }
  `;
  pane.innerHTML = content;
  // Bind buy btn
  if (!showTimer) {
    document.getElementById('special-offer-buy-btn').onclick = buySpecialOffer;
  }
  // Start timer interval if needed
  if (showTimer && !specialOfferTimer) {
    specialOfferTimer = setInterval(updateSpecialOfferTimer, 1000);
  }
}

function updateSpecialOfferTimer() {
  if (!specialOffer || !specialOffer.nextTime) return;
  let now = Date.now();
  let left = specialOffer.nextTime - now;
  const el = document.getElementById('offer-timer-val');
  if (el) {
    el.textContent = formatMMSS(left);
  }
  if (left <= 0) {
    clearInterval(specialOfferTimer);
    specialOfferTimer = null;
    specialOffer = null;
    save();
    showSpecialOfferPane();
  }
}
function formatMMSS(ms) {
  ms = Math.max(0, ms);
  let sec = Math.ceil(ms/1000);
  let m = Math.floor(sec/60);
  let s = sec%60;
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

function buySpecialOffer() {
  if (!specialOffer || !specialOffer.offer) return;
  const offer = specialOffer.offer;
  if (state.money < offer.cost) { errorSfx.play(); return; }
  state.money -= offer.cost;
  if (offer.type === "coin") {
    const now = Date.now()/1000;
    activeBonuses.coin.mult = offer.coinMult;
    activeBonuses.coin.until = Math.max(activeBonuses.coin.until, now+offer.duration);
  } else if (offer.type === "xp") {
    const now = Date.now()/1000;
    activeBonuses.xp.mult = offer.xpMult;
    activeBonuses.xp.until = Math.max(activeBonuses.xp.until, now+offer.duration);
  } else if (offer.type === "jackpot") {
    addMoney(offer.jackpot, 0);
  }
  buySfx.play();
  // Start 10min (600,000 ms) until next offer
  specialOffer.nextTime = Date.now() + 10 * 60 * 1000;
  save();
  showSpecialOfferPane();
}

window.addEventListener('DOMContentLoaded', ()=>{
  load();
  if(!state.hero || !state.hero.classKey) {
    state.hero = {classKey: "knight", displayName: ""};
    showHeroSelectModal();
  }
  render();
  setupAutoCollect();
  heroAvatar.classList.add('animate__fadeInDown');
  showSpecialOfferPane();
});

function render() {
  moneyVal.textContent = state.money;
  heroLvl.textContent = state.level;
  heroXp.textContent = state.xp;
  heroXpMax.textContent = state.xpMax;
  renderHero();

  // Upgrades
  upgradeList.innerHTML = '';
  for (let i = 0; i < UPGRADE_DEFS.length; ++i) {
    let upg = UPGRADE_DEFS[i];
    let lvl = state.upgrades[i] || 0;
    let cost = Math.floor(upg.baseCost * (upg.instant ? 1 : Math.pow(2, lvl)));
    let locked = (i > 0 && i < 3 && state.upgrades[i-1] < 1);
    let div = document.createElement('div');
    div.className = 'upgrade-card' + (locked ? ' locked' : '');

    let buyBtn;
    if (!upg.instant) {
      buyBtn = `<button class="upgrade-buy-btn" ${locked?'disabled':''} data-upg="${i}">
        <i class="fa-solid fa-coins"></i> ${cost}
      </button>`;
    } else {
      buyBtn = `<button class="upgrade-buy-btn2" data-upg="${i}">
        <i class="fa-solid fa-coins"></i> ${cost}
      </button>`;
    }

    div.innerHTML = `
      <div>
        <i class="fa-solid ${upg.icon}" style="margin-right:6px;"></i>
        <b>${upg.name}</b> ${!upg.instant ? `<span style="color:#b99d19;">LVL ${lvl}</span>` : ""}
        <div style="font-size:0.83em;color:#8d7005;">${upg.desc}</div>
      </div>
      <div>
        ${buyBtn}
      </div>
    `;
    upgradeList.appendChild(div);
  }
  // Shop button with particles
  if (!document.getElementById('open-shop-btn')) {
    const shopBtn = document.createElement('button');
    shopBtn.id = 'open-shop-btn';
    shopBtn.textContent = "Shop";
    shopBtn.style.margin = "12px auto 0 auto";
    shopBtn.style.display = "block";
    shopBtn.style.background = "linear-gradient(90deg,#ffe082 70%,#fbc02d 100%)";
    shopBtn.style.color = "#a46a06";
    shopBtn.style.border = "2px solid #ffd54f";
    shopBtn.style.borderRadius = "11px";
    shopBtn.style.fontSize = "1.11em";
    shopBtn.style.fontFamily = "inherit";
    shopBtn.style.fontWeight = "700";
    shopBtn.style.padding = "10px 27px";
    shopBtn.style.cursor = "pointer";
    shopBtn.style.boxShadow = "0 1.5px 0 #fff5";
    shopBtn.style.transition = "background .14s, transform .13s";
    shopBtn.addEventListener('click', showShopModal);
    upgradeList.parentNode.insertBefore(shopBtn, upgradeList.nextSibling);
    createShopParticles(shopBtn);
  }

  // Settings modal
  darkmodeToggle.checked = state.settings.darkMode;
  musicToggle.checked = state.settings.music;
  sfxToggle.checked = state.settings.sfx;
  document.body.setAttribute('data-theme', state.settings.darkMode ? 'dark' : 'light');

  if(state.settings.music && !bgMusic.playing()) bgMusic.play();
  if(!state.settings.music && bgMusic.playing()) bgMusic.pause();

  updateBonusTimers();
  showSpecialOfferPane();
}

// ...rest of unchanged code (animateCoin, animateXpBar, upgrades, shop, hero select, etc)...
function animateCoin() {
  if(document.body.classList.contains("shop-open")) return;
  let coin = document.createElement('div');
  coin.className = 'coin-fx';
  coin.style.position = 'absolute';
  const btnRect = collectBtn.getBoundingClientRect();
  coin.style.left = (btnRect.left + btnRect.width/2 - 10) + 'px';
  coin.style.top = (btnRect.top + btnRect.height/2 - 10) + 'px';
  coin.style.zIndex = 11000;
  coin.innerHTML = '<i class="fa-solid fa-coins" style="color:#ffd600;font-size:2em;text-shadow:0 1.5px #fff8"></i>';
  document.body.appendChild(coin);
  anime({
    targets: coin,
    translateY: [-10, -90],
    scale: [1,1.6,0.7],
    opacity: [1,0.6,0],
    easing: 'easeOutCubic',
    duration: 750,
    complete: () => coin.remove()
  });
}
