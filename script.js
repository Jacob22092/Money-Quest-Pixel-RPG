// --- Single character: Knight (SVG pixel art) ---
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

const HEROES = [
  {
    name: "Knight",
    key: "knight"
    // Avatar: SVG above
  }
];

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

// --- Game state ---
let state = null, autoCollectInt = null;

// --- Utility: hide settings modal if open ---
function closeSettingsModalIfOpen() {
  if (!settingsModalBg.classList.contains("hidden")) {
    settingsModalBg.classList.add("hidden");
  }
}

// --- Coin animation (Anime.js) ---
function animateCoin() {
  let coin = document.createElement('div');
  coin.className = 'coin-fx';
  coin.style.position = 'absolute';
  const btnRect = collectBtn.getBoundingClientRect();
  coin.style.left = (btnRect.left + btnRect.width/2 - 10) + 'px';
  coin.style.top = (btnRect.top + btnRect.height/2 - 10) + 'px';
  coin.style.zIndex = 1001;
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

// --- Render character ---
function renderHero() {
  // Inject SVG knight
  heroAvatar.innerHTML = KNIGHT_SVG;
  heroNameDiv.innerHTML = `<span>${state.hero.displayName}</span><span class="hero-class">Knight</span>`;
}

// --- Render game ---
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

  // Settings modal
  darkmodeToggle.checked = state.settings.darkMode;
  musicToggle.checked = state.settings.music;
  sfxToggle.checked = state.settings.sfx;
  document.body.setAttribute('data-theme', state.settings.darkMode ? 'dark' : 'light');

  if(state.settings.music && !bgMusic.playing()) bgMusic.play();
  if(!state.settings.music && bgMusic.playing()) bgMusic.pause();
}
function save() {
  localStorage.setItem("moneyquest2024", JSON.stringify(state));
}
function load() {
  let s = localStorage.getItem("moneyquest2024");
  state = s ? JSON.parse(s) : JSON.parse(JSON.stringify(defaultGameState));
}

// --- Game logic ---
function addMoney(amt, xpamt) {
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
  if(autoCollectInt) clearInterval(autoCollectInt);
  let interval = 3000;
  let autoLvl = state.upgrades[0] || 0;
  if(autoLvl > 0) {
    autoCollectInt = setInterval(()=>{
      let amt = 1 * (state.upgrades[1]?UPGRADE_DEFS[1].effect(state.upgrades[1]):1);
      addMoney(amt, Math.round(1* (state.upgrades[2]?UPGRADE_DEFS[2].effect(state.upgrades[2]):1)));
      if(state.settings.sfx) coinSfx.play();
      animateCoin();
    }, interval);
  }
}

// --- Character select modal on game start ---
function showHeroSelectModal(force = false) {
  // Only one class for now, but keep the code for future extensibility
  const content = document.createElement('div');
  content.innerHTML = `<h3>Choose your hero</h3>
    <div class="hero-choose-list">
      <div class="hero-choose-item selected" data-key="knight">
        Knight
        <span class="hero-choose-class">knight</span>
      </div>
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
      // Always hide settings modal if open
      closeSettingsModalIfOpen();
    }
  });
  let selectedKey = "knight";
  let heroName = '';
  setTimeout(()=>{
    content.querySelectorAll('.hero-choose-item').forEach(div=>{
      div.addEventListener('click', ()=>{
        content.querySelectorAll('.hero-choose-item').forEach(x=>x.classList.remove('selected'));
        div.classList.add('selected');
        selectedKey = div.getAttribute('data-key');
        updateBtn();
      });
    });
    content.querySelector('.hero-choose-item').classList.add('selected');
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
    // Focus input
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
  // Don't show settings modal if hero selection modal is open
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
    closeSettingsModalIfOpen();
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
