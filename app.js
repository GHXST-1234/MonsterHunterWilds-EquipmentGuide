const WEAPONS = {
  "Great Sword": { j: "Focus Jewel III, Critical Jewel III, Handicraft Jewel II", s: "Focus 3, Crit Boost 3, Counterstrike 3" },
  "Long Sword": { j: "Critical Jewel III, Quick Sheathe Jewel II, Razor Sharp III", s: "Quick Sheathe 3, Crit Boost 3, Max Might 3" },
  "Sword & Shield": { j: "Guardian Jewel III, Critical Jewel III, Master's Touch", s: "Offensive Guard 3, Burst 3, Crit Boost 3" },
  "Dual Blades": { j: "Element Jewel III, Critical Element III, Razor Sharp III", s: "Marathon Runner 3, Constitution 3, Burst 3" },
  "Hammer": { j: "Focus Jewel III, KO Jewel II, Critical Jewel III", s: "Focus 3, Slugger 3, Crit Boost 3" },
  "Hunting Horn": { j: "Sonorous Jewel II (Maestro), KO Jewel II, Critical III", s: "Horn Maestro 2, Slugger 3, Agitator 5" },
  "Lance": { j: "Shield Jewel III (Guard Up), Ironwall III, Guardian III", s: "Guard 3, Guard Up 3, Offensive Guard 3" },
  "Gunlance": { j: "Artillery Jewel III, Magazine Jewel II, Shield Jewel III", s: "Artillery 3, Load Shells 2, Guard 3" },
  "Switch Axe": { j: "Quickswitch Jewel III, Enhancer Jewel III, Critical III", s: "Rapid Morph 3, Power Prolonger 3, Crit Boost 3" },
  "Charge Blade": { j: "Magazine Jewel II, Artillery Jewel III, Quickswitch III", s: "Load Shells 2, Artillery 3, Rapid Morph 3" },
  "Insect Glaive": { j: "Enhancer Jewel III, Flight Jewel II, Critical Jewel III", s: "Power Prolonger 3, Airborne 1, Constitution 3" },
  "Light Bowgun": { j: "Opener Jewel III, Pierce/Spread III, Ballistics II", s: "Opening Shot 3, Rapid Fire Up, Ballistics 2" },
  "Heavy Bowgun": { j: "Opener Jewel III, Shield Jewel III, Tetrad Shot III", s: "Opening Shot 3, Guard 3, Tetrad Shot 3" },
  "Bow": { j: "Spread/Power Shots III, Mighty Bow II, Crit Element III", s: "Constitution 4, Stamina Surge 3, Spread Up" }
};

const MONSTERS = [
  { n: "All Monsters (General Meta)", w: "Dragon / Blast", h: "General Endgame", c: "Mighty Jewel II / Challenger Jewel III" },
  { n: "Arch-Tempered Arkveld (10★)", w: "Dragon", h: "One-Shot Chain Blasts / Dragonblight", c: "Dragon Res Jewel I x3, Protection Jewel I x3" },
  { n: "Arch-Tempered Jin Dahaad (10★)", w: "Fire", h: "Lethal Frost Nova / Frostblight", c: "Bind Res Jewel I x3, Ice Res Jewel I x3" },
  { n: "Arch-Tempered Nu Udra (10★)", w: "Water", h: "Extreme Hellfire / Oil Ignition", c: "Fire Res Jewel I x3, Stream Jewel III" },
  { n: "Arch-Tempered Uth Duna (10★)", w: "Thunder", h: "Mega Tidal Slams / Waterblight", c: "Water Res Jewel I x3, Bolt Jewel III" },
  { n: "Arch-Tempered Rey Dau (10★)", w: "Ice", h: "Hyper Railgun / Thunderblight Stun", c: "Steadfast Jewel I x3, Thunder Res Jewel I x3" },
  { n: "Arkveld", w: "Dragon", h: "Dragonblight / Chain Slams", c: "Dragon Res Jewel I x3, Destroyer Jewel II" },
  { n: "Guardian Arkveld", w: "Dragon", h: "Wylk Explosions / Dragonblight", c: "Dragon Res Jewel I x3, Protection Jewel I" },
  { n: "Gogmazios", w: "Dragon / Fire", h: "Heavy Tar / Massive Fire Beams", c: "Mirewalker Jewel I, Fire Res Jewel I x3" },
  { n: "Omega Planetes", w: "Thunder / Dragon", h: "Starboard Lasers / Mustard Bomb", c: "Evade Extender II, Fire Res Jewel I x3" },
  { n: "Gore Magala", w: "Fire / Dragon", h: "Frenzy Virus", c: "Sane Jewel I x3 (Antivirus), Blaze Jewel III" },
  { n: "Zoh Shia", w: "Dragon / Ice", h: "Wylk Nova / Fire & Thunder", c: "Protection Jewel I x3, Dragon Jewel III" },
  { n: "Jin Dahaad", w: "Fire", h: "Frostblight / Ice Nova", c: "Bind Res Jewel I x3, Ice Res Jewel I x3" },
  { n: "Rey Dau", w: "Ice", h: "Thunderblight / Railgun Stun", c: "Steadfast Jewel I x3, Frost Jewel III" },
  { n: "Nu Udra", w: "Water", h: "Fireblight / Oil Ignition", c: "Fire Res Jewel I x3, Stream Jewel III" },
  { n: "Uth Duna", w: "Thunder", h: "Waterblight / Tidal Waves", c: "Water Res Jewel I x3, Bolt Jewel III" },
  { n: "Mizutsune", w: "Thunder / Dragon", h: "Bubbleblight / Water", c: "Blight Res Jewel III, Bolt Jewel III" },
  { n: "Lagiacrus", w: "Fire / Ice", h: "Thunderblight / AoE Shock", c: "Thunder Res Jewel I x3, Blaze Jewel III" },
  { n: "Seregios", w: "Thunder / Ice", h: "Bleeding Status", c: "Suture Jewel I x3 (Bleed Res), Bolt Jewel III" },
  { n: "Rathalos", w: "Dragon / Thunder", h: "Fireblight / Poison", c: "Antidote Jewel I x3, Dragon Jewel III" },
  { n: "Guardian Rathalos", w: "Dragon / Thunder", h: "Wylk Fireballs / Poison", c: "Fire Res Jewel I x3, Dragon Jewel III" },
  { n: "Rathian", w: "Dragon / Thunder", h: "Deadly Poison / Fire", c: "Antidote Jewel I x3, Bolt Jewel III" },
  { n: "Gravios", w: "Water / Dragon", h: "Fireblight / Sleep Gas", c: "Pep Jewel I x3 (Sleep Res), Stream Jewel III" },
  { n: "Blangonga", w: "Fire / Thunder", h: "Frostblight / Tremors", c: "Bind Res Jewel I x3, Blaze Jewel III" },
  { n: "Nerscylla", w: "Fire / Thunder", h: "Webbed / Sleep / Poison", c: "Bind Res Jewel I x3, Antidote Jewel I" },
  { n: "Gypceros", w: "Fire / Ice", h: "Flash Stun / Poison", c: "Steadfast Jewel I x3, Antidote Jewel I x3" },
  { n: "Yian Kut-Ku", w: "Water / Ice", h: "Fireblight / Charge", c: "Fire Res Jewel I x2, Stream Jewel III" },
  { n: "Xu Wu", w: "Ice", h: "Pin Grab / Assassin Strikes", c: "Evade Window Jewel II, Frost Jewel III" },
  { n: "Guardian Ebony Odogaron", w: "Water", h: "Dragonblight / Bleeding", c: "Suture Jewel I x3, Stream Jewel III" },
  { n: "Guardian Fulgur Anjanath", w: "Ice / Water", h: "Thunderblight / Roars", c: "Thunder Res Jewel I x3, Frost Jewel III" },
  { n: "Guardian Doshaguma", w: "Fire / Thunder", h: "Defense Down / Slams", c: "Iron Skin Jewel I x3, Protection Jewel I" },
  { n: "Doshaguma", w: "Fire / Thunder", h: "Heavy Slams / Roars", c: "Earplugs Jewel II, Blaze Jewel III" },
  { n: "Ajarakan", w: "Water / Ice", h: "Blastblight / Fire", c: "Antiblast Jewel I x3, Stream Jewel III" },
  { n: "Rompopolo", w: "Water", h: "Poison Gas / Blast Puddles", c: "Antidote Jewel I x3, Stream Jewel III" },
  { n: "Hirabami", w: "Fire / Thunder", h: "Frostblight / Aerial Hover", c: "Flash Pods + Blaze Jewel III" },
  { n: "Lala Barina", w: "Fire", h: "Paralysis Florets", c: "Antipara Jewel I x3, Blaze Jewel III" },
  { n: "Balahara", w: "Thunder", h: "Waterblight / Quicksand", c: "Mirewalker Jewel I, Bolt Jewel III" },
  { n: "Congalala", w: "Fire / Ice", h: "Stench / Paralysis / Poison", c: "Antidote Jewel I x3, Blaze Jewel III" },
  { n: "Quematrice", w: "Water", h: "Fireblight / Tail Sweeps", c: "Fire Res Jewel I x3, Stream Jewel III" },
  { n: "Chatacabra", w: "Thunder / Ice", h: "Tongue Slams / Rock Arms", c: "Destroyer Jewel II, Bolt Jewel III" }
];
function makeLoadout(wName, mObj, style) {
  const elem = mObj.w.split('/').trim();
  const charms = { Fire: "Blaze Charm III", Water: "Stream Charm III", Thunder: "Bolt Charm III", Ice: "Frost Charm III", Dragon: "Dragon Charm III" };
  const presets = {
    meta: {
      title: `10★ Gamma Lord's Soul Meta (${wName})`, cat: "Meta DPS",
      gear: { Weapon: `Artian Tier 8 (${elem} / Attack Roll)`, Helm: "Rey Sandhelm Gamma (γ)", Chest: "Arkvulcan Mail Gamma (γ)", Arms: "Rey Sandbraces Gamma (γ)", Waist: "Gore Coil Beta", Legs: "Gore Greaves Beta", Talisman: "Challenger Charm III (Agitator)" },
      aj: "Tenderizer Jewel III x2, Challenger Jewel III x2, Mighty Jewel II x3, Sane Jewel I x2",
      sk: "Lord's Soul (+5% Raw + Guts), Agitator 5, Weakness Exploit 5, Antivirus 3, Max Might 3",
      tip: `3-piece Gamma activates Lord's Soul (+5% Attack + One-Shot Save). Exploit ${mObj.w} weakness.`
    },
    counter: {
      title: `${mObj.n} Elemental & Blight Counter`, cat: "Monster Counter",
      gear: { Weapon: `${elem} Monster / Artian Tree`, Helm: "Gore Helm Beta", Chest: "Arkvulcan Mail Gamma (γ)", Arms: "Gore Vambraces Beta", Waist: "Arkvulcan Coil Beta", Legs: "Gore Greaves Beta", Talisman: charms[elem] || "Challenger Charm III" },
      aj: `Tenderizer Jewel III x2, Phoenix Jewel II x2 (Coalescence), Sane Jewel I x3, ${mObj.c}`,
      sk: `${elem} Attack 3, Weakness Exploit 5, Coalescence 3, Antivirus 3`,
      tip: `Built specifically to shut down ${mObj.h} while hitting ${mObj.w} weak zones.`
    },
    comfy: {
      title: `Immortal Anti-Cart Tank (${wName})`, cat: "Comfy / Survival",
      gear: { Weapon: `Arkveld / Artian (${elem} Element)`, Helm: "Arkvulcan Helm Gamma (γ)", Chest: "Arkvulcan Mail Gamma (γ)", Arms: "Dahaad Shardbraces Gamma (γ)", Waist: "Uth Duna Coil Gamma (γ)", Legs: "G. Arkveld Greaves Beta", Talisman: "Blessing Charm III / Defense Charm V" },
      aj: `Protection Jewel I x3, Medicine Jewel I x3 (Recovery Up), Tenderizer Jewel III x2, ${mObj.c}`,
      sk: "Lord's Soul (Guts), Hasten Recovery II, Divine Blessing 3, Recovery Up 3, Weakness Exploit 5",
      tip: "Popping wounds heals massive HP while Gamma Guts prevents 10★ Arch-Tempered one-shots."
    },
    partbreak: {
      title: `Wound & Partbreaker Farm (${wName})`, cat: "Partbreaker",
      gear: { Weapon: `Artian Tier 8 (${elem} / Affinity Roll)`, Helm: "G. Arkveld Helm Beta", Chest: "Arkvulcan Mail Gamma (γ)", Arms: "G. Arkveld Vambraces Beta", Waist: "Gore Coil Beta", Legs: "Gore Greaves Beta", Talisman: "Destroyer Charm II (Partbreaker)" },
      aj: "Destroyer Jewel II x2, Flayer Jewel III x2, Tenderizer Jewel III x2, Sane Jewel I x2",
      sk: "Partbreaker 3, Flayer 5, Weakness Exploit 5, Antivirus 3, Decimator I",
      tip: "Creates wounds 40% faster for constant topples and extra monster part carves."
    }
  };
  return presets[style];
}

function renderCard(b, wName) {
  const wInfo = WEAPONS[wName];
  const rows = Object.entries(b.gear).map(([k, v]) => {
    const val = k === 'Weapon' ? `${wName} — ${v}` : v;
    return `<div class="${k === 'Talisman' ? 'gear-row talisman-row' : 'gear-row'}"><span class="slot">${k}</span><span class="piece">${val}</span></div>`;
  }).join('');
  return `<div class="card">
    <div class="card-header"><h2>${b.title}</h2><span class="badge">${b.cat}</span></div>
    <div class="gear-grid">${rows}</div>
    <div class="jewels-section">
      <div class="jewel-title">Weapon Jewels (Decorations)</div><div class="jewel-list">${wInfo.j}</div>
      <div class="jewel-title" style="margin-top:4px;">Armor Jewels (Decorations)</div><div class="jewel-list">${b.aj}</div>
    </div>
    <div class="skills-box"><strong>Active Skills:</strong> ${b.sk}, ${wInfo.s}</div>
    <div class="tip-box"><strong>Hunt Strategy:</strong> ${b.tip}</div>
  </div>`;
}

function updateMain() {
  const wName = document.getElementById('weapon-select').value;
  const mName = document.getElementById('monster-select').value;
  const mObj = MONSTERS.find(m => m.n === mName) || MONSTERS;
  document.getElementById('monster-banner').innerHTML = `<strong>Target: ${mObj.n}</strong><br>Weakness: <strong>${mObj.w}</strong> | Hazard: ${mObj.h}<br>Counter Jewels: <strong>${mObj.c}</strong>`;
  const list = ['meta', 'counter', 'comfy'].map(st => renderCard(makeLoadout(wName, mObj, st), wName)).join('');
  document.getElementById('builds-list').innerHTML = list;
}

const themeSel = document.getElementById('theme-select');
const saved = localStorage.getItem('mhTheme') || 'gold';
document.documentElement.setAttribute('data-theme', saved);
themeSel.value = saved;
themeSel.addEventListener('change', e => { document.documentElement.setAttribute('data-theme', e.target.value); localStorage.setItem('mhTheme', e.target.value); });

const wOpts = Object.keys(WEAPONS).map(w => `<option value="${w}">${w}</option>`).join('');
const mOpts = MONSTERS.map(m => `<option value="${m.n}">${m.n}</option>`).join('');
['weapon-select', 'ai-weapon'].forEach(id => document.getElementById(id).innerHTML = wOpts);
['monster-select', 'ai-monster'].forEach(id => document.getElementById(id).innerHTML = mOpts);

document.getElementById('weapon-select').addEventListener('change', updateMain);
document.getElementById('monster-select').addEventListener('change', updateMain);
document.getElementById('ai-generate').addEventListener('click', () => {
  const wName = document.getElementById('ai-weapon').value;
  const mObj = MONSTERS.find(m => m.n === document.getElementById('ai-monster').value) || MONSTERS;
  const style = document.getElementById('ai-style').value;
  document.getElementById('ai-result').innerHTML = renderCard(makeLoadout(wName, mObj, style), wName);
});

document.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => {
  document.querySelector('.tab.active').classList.remove('active');
  t.classList.add('active');
  document.getElementById('meta-view').classList.toggle('hidden', t.dataset.tab !== 'meta');
  document.getElementById('ai-view').classList.toggle('hidden', t.dataset.tab !== 'ai');
}));

updateMain();
