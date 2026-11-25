const WEAPONS = {
  "Great Sword": { subs: ["True Charged Slash (Raw/Crit)", "Punishing Draw / Offset Counter"], j: "Focus Jewel III, Critical Jewel III, Handicraft Jewel II", s: "Focus 3, Crit Boost 3, Counterstrike 3", sec: "G. Arkveld Hunting Horn (Attack Up L + Earplugs pre-buff)" },
  "Long Sword": { subs: ["Crimson Slash / Spirit Helmbreaker", "Iai Spirit Slash Counter"], j: "Critical Jewel III, Quick Sheathe Jewel II, Razor Sharp III", s: "Quick Sheathe 3, Crit Boost 3, Max Might 3", sec: "Sleep Artian LBG (2x Wake-Up Bombs + Para)" },
  "Sword & Shield": { subs: ["Perfect Rush / Guard Slash", "Elemental Slide Shredder"], j: "Guardian Jewel III, Critical Jewel III, Master's Touch", s: "Offensive Guard 3, Burst 3, Crit Boost 3", sec: "Resounding Galahad HH (Sharpness Regen + Atk Up)" },
  "Dual Blades": { subs: ["Archdemon Elemental Shred", "Perfect Evade Blade Dance"], j: "Element Jewel III, Critical Element III, Razor Sharp III", s: "Marathon Runner 3, Constitution 3, Burst 3", sec: "Paralysis Artian Dual Blades (2x Para Lockdowns)" },
  "Hammer": { subs: ["Mighty Charge Slam (KO)", "Spinning Bludgeon / Offset"], j: "Focus Jewel III, KO Jewel II, Critical Jewel III", s: "Focus 3, Slugger 3, Crit Boost 3", sec: "G. Arkveld Hunting Horn (Stamina Use Reduced + Atk Up)" },
  "Hunting Horn": { subs: ["Attack Up (L) + Echo Wave Dragon", "All Melody Extended + Sharpness Regen"], j: "Sonorous Jewel II (Maestro), KO Jewel II, Critical III", s: "Horn Maestro 2, Slugger 3, Agitator 5", sec: "Secondary Status HH (Affinity Up + Health Recovery)" },
  "Lance": { subs: ["Power Guard / Retribution Thrust", "Triple Thrust Elemental"], j: "Shield Jewel III (Guard Up), Ironwall III, Guardian III", s: "Guard 3, Guard Up 3, Offensive Guard 3", sec: "G. Arkveld Hunting Horn (Self-Improvement + Atk Up L)" },
  "Gunlance": { subs: ["Wide Shelling (Wyrmstake Full Blast)", "Long Shelling (Charged / Wyvern Fire)", "Normal Shelling (Full Burst Loop)"], j: "Artillery Jewel III, Magazine Jewel II, Shield Jewel III", s: "Artillery 3, Load Shells 2, Guard 3", sec: "Resounding Galahad HH (Attack Up L boosts Shelling)" },
  "Switch Axe": { subs: ["Power Phial (Full Release Slash)", "Element Phial (Rapid ZSD/Sword)"], j: "Quickswitch Jewel III, Enhancer Jewel III, Critical III", s: "Rapid Morph 3, Power Prolonger 3, Crit Boost 3", sec: "Sleep Artian LBG (Wake-Up Full Release Slash)" },
  "Charge Blade": { subs: ["Impact Phial (Savage Axe / SAED)", "Power Element Phial (Elemental Shred)"], j: "Magazine Jewel II, Artillery Jewel III, Quickswitch III", s: "Load Shells 2, Artillery 3, Rapid Morph 3", sec: "G. Arkveld Hunting Horn (Attack Up L + Defense Up)" },
  "Insect Glaive": { subs: ["Rising Spiral Slash (Triple Buff)", "Aerial Vault & Kinsect Powder"], j: "Enhancer Jewel III, Flight Jewel II, Critical Jewel III", s: "Power Prolonger 3, Airborne 1, Constitution 3", sec: "Paralysis Artian LBG (Easy Triple Extract + Para)" },
  "Light Bowgun": { subs: ["Rapid Fire Pierce Lv2/3 (Opening Shot)", "Rapid Fire Elemental Ammo", "Spread Lv3 Close-Range"], j: "Opener Jewel III, Pierce/Spread III, Ballistics II", s: "Opening Shot 3, Rapid Fire Up, Ballistics 2", sec: "Status LBG (Sleep Lv2 + Paralysis Lv2 Swap)" },
  "Heavy Bowgun": { subs: ["Wyvernheart Ignition + Pierce Lv3", "Elemental Ammo + Auto-Guard Shield", "Spread Lv3 + Counter Wyvern"], j: "Opener Jewel III, Shield Jewel III, Tetrad Shot III", s: "Opening Shot 3, Guard 3, Tetrad Shot 3", sec: "Sleep/Para Artian HBG (Wyvernsnipe Wake-Up)" },
  "Bow": { subs: ["Close-Range Coating (Dash Dance)", "Power Coating (Dragon Piercer / Thousand Dragons)", "Pierce Coating (Long Monsters)"], j: "Spread/Power Shots III, Mighty Bow II, Crit Element III", s: "Constitution 4, Stamina Surge 3, Spread Up", sec: "G. Arkveld Hunting Horn (Dash Juice Melody + Atk Up)" }
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
function makeLoadout(wName, mObj, style, opts = {}) {
  const elem = mObj.w.split('/').shift().trim();
  const wInfo = WEAPONS[wName];
  const sub = opts.sub || wInfo.subs.at(0);
  const reinf = opts.reinf || 'artian-atk';
  const customCharm = (opts.charm || '').trim();
  const charms = { Fire: "Blaze Charm III", Water: "Stream Charm III", Thunder: "Bolt Charm III", Ice: "Frost Charm III", Dragon: "Dragon Charm III" };
  const wLabel = reinf === 'gog-tu4' ? `Gogmazios TU4 Tree (${elem} • Group Skill Roll)` : reinf === 'artian-aff' ? `Artian Tier 8 (${elem} • 2x Affinity / Sharpness)` : `Artian Tier 8 (${elem} • 3x Attack [3-3-3])`;
  const affNote = reinf === 'artian-aff' ? 'Swap 1x Mighty Jewel II for Counter/Chain Jewel to avoid >100% Affinity overcap.' : 'Reaches 95-100% Effective Affinity on weakspots with WEX 5 + Max Might 3 + Antivirus 3.';

  const presets = {
    meta: {
      title: `10★ Endgame Meta (${wName})`, cat: "Meta DPS",
      gear: { Primary: `${wLabel} [${sub}]`, Secondary: wInfo.sec, Helm: "Rey Sandhelm Gamma (γ)", Chest: "Arkvulcan Mail Gamma (γ)", Arms: "Rey Sandbraces Gamma (γ)", Waist: "Gore Coil Beta", Legs: "Gore Greaves Beta", Talisman: customCharm || "Challenger Charm III (Agitator 3)" },
      setBonus: "Black Eclipse I (2pc Gore — Frenzy + Affinity) + Thunderous Roar I (2pc Rey Dau — Latent Power)",
      groupSkill: "Lord's Soul (3pc Gamma γ — +5% Raw Attack & Guts/Tenacity One-Shot Save)",
      aj: "Tenderizer Jewel III x2, Challenger Jewel III x2, Mighty Jewel II x3, Sane Jewel I x2",
      sk: "Agitator 5, Weakness Exploit 5, Antivirus 3, Maximum Might 3, Burst 1",
      prep: "Mantles: Corrupted Mantle (DPS burst) + Rocksteady Mantle | Meal: Kunafa Village Meal (Defender Hi + Element Res)",
      tip: `${affNote} Exploit ${mObj.w} weak zones.`
    },
    counter: {
      title: `${mObj.n} Blight & Element Counter`, cat: "Monster Counter",
      gear: { Primary: `${wLabel} [${sub}]`, Secondary: wInfo.sec, Helm: "Gore Helm Beta", Chest: "Arkvulcan Mail Gamma (γ)", Arms: "Gore Vambraces Beta", Waist: "Arkvulcan Coil Beta", Legs: "Gore Greaves Beta", Talisman: customCharm || charms[elem] || "Challenger Charm III" },
      setBonus: "Black Eclipse II (4pc Gore — +15 Attack on Frenzy Clear) + Arkveld's Hunger I (2pc)",
      groupSkill: "Fortifying Pelt / Scaling Prowess (Active via Gogmazios TU4 Weapon or 3pc Mix)",
      aj: `Tenderizer Jewel III x2, Phoenix Jewel II x2 (Coalescence), Sane Jewel I x3, ${mObj.c}`,
      sk: `${elem} Attack 3, Weakness Exploit 5, Coalescence 3, Antivirus 3`,
      prep: `Mantles: Mending Mantle + Elemental/Immunity Mantle | Meal: Azuz / Sild Meal (Elemental Res Hi + Insurance)`,
      tip: `Neutralizes ${mObj.h} while triggering Coalescence 3 + Antivirus 3 on Frenzy clear.`
    },
    comfy: {
      title: `10★ Immortal Anti-Cart Sustain`, cat: "Comfy / Survival",
      gear: { Primary: `${wLabel} [${sub}]`, Secondary: wInfo.sec, Helm: "Arkvulcan Helm Gamma (γ)", Chest: "Arkvulcan Mail Gamma (γ)", Arms: "Dahaad Shardbraces Gamma (γ)", Waist: "Uth Duna Coil Gamma (γ)", Legs: "G. Arkveld Greaves Beta", Talisman: customCharm || "Blessing Charm III / Defense Charm V" },
      setBonus: "Arkveld's Hunger II (4pc — Heavy Wound Heal) + Hasten Recovery I",
      groupSkill: "Lord's Soul (3pc Gamma γ — Guts/Tenacity One-Shot Protection)",
      aj: `Protection Jewel I x3, Medicine Jewel I x3 (Recovery Up), Tenderizer Jewel III x2, ${mObj.c}`,
      sk: "Divine Blessing 3, Recovery Up 3, Weakness Exploit 5, Partbreaker 2",
      prep: "Mantles: Mending Mantle + Rocksteady Mantle | Meal: Kunafa Meal (Defender Hi + Moxie/Insurance)",
      tip: "Popping wounds restores ~35% HP while Lord's Soul Guts saves you from 10★ Arch-Tempered one-shots."
    },
    partbreak: {
      title: `Wound & Partbreaker Farm (${wName})`, cat: "Partbreaker / Farm",
      gear: { Primary: `${wLabel} [${sub}]`, Secondary: wInfo.sec, Helm: "G. Arkveld Helm Beta", Chest: "Arkvulcan Mail Gamma (γ)", Arms: "G. Arkveld Vambraces Beta", Waist: "Gore Coil Beta", Legs: "Gore Greaves Beta", Talisman: customCharm || "Destroyer Charm II (Partbreaker 2)" },
      setBonus: "Decimator I (2pc G. Arkveld — Extra Wound Heal) + Black Eclipse I (2pc Gore)",
      groupSkill: "Lord's Soul (with Gamma Chest/Weapon Roll) or Scaling Prowess",
      aj: "Destroyer Jewel II x2, Flayer Jewel III x2, Tenderizer Jewel III x2, Sane Jewel I x2",
      sk: "Partbreaker 3, Flayer 5, Weakness Exploit 5, Antivirus 3",
      prep: "Mantles: Corrupted Mantle + Ghillie/Mending Mantle | Meal: Suja / Carver Pro Meal (+Extra Carves)",
      tip: "Creates wounds 40% faster for constant topples and extra 10★ rare material carves."
    }
  };
  return presets[style];
}

function renderCard(b, wName) {
  const wInfo = WEAPONS[wName];
  const rows = Object.entries(b.gear).map(([k, v]) => `<div class="${k === 'Talisman' ? 'gear-row talisman-row' : 'gear-row'}"><span class="slot">${k}</span><span class="piece">${v}</span></div>`).join('');
  return `<div class="card">
    <div class="card-header"><h2>${b.title}</h2><span class="badge">${b.cat}</span></div>
    <div class="gear-grid">${rows}</div>
    <div class="bonus-grid">
      <div><strong>Set Bonus:</strong> ${b.setBonus}</div>
      <div><strong>Group Skill:</strong> ${b.groupSkill}</div>
    </div>
    <div class="jewels-section">
      <div class="jewel-title">Weapon Jewels (Decorations)</div><div class="jewel-list">${wInfo.j}</div>
      <div class="jewel-title" style="margin-top:4px;">Armor Jewels (Decorations)</div><div class="jewel-list">${b.aj}</div>
    </div>
    <div class="skills-box"><strong>Core Skills:</strong> ${b.sk}, ${wInfo.s}</div>
    <div class="prep-box"><strong>Hunter Prep:</strong> ${b.prep}</div>
    <div class="tip-box"><strong>Hunt Strategy:</strong> ${b.tip}</div>
  </div>`;
}

function syncSubtypes() {
  const wName = document.getElementById('weapon-select').value;
  document.getElementById('subtype-select').innerHTML = WEAPONS[wName].subs.map(s => `<option value="${s}">${s}</option>`).join('');
}

function updateMain() {
  const wName = document.getElementById('weapon-select').value;
  const sub = document.getElementById('subtype-select').value;
  const mObj = MONSTERS.find(m => m.n === document.getElementById('monster-select').value) || MONSTERS.at(0);
  document.getElementById('monster-banner').innerHTML = `<strong>Target: ${mObj.n}</strong><br>Weakness: <strong>${mObj.w}</strong> | Hazard: ${mObj.h}<br>Counter Jewels: <strong>${mObj.c}</strong>`;
  document.getElementById('builds-list').innerHTML = ['meta', 'counter', 'comfy'].map(st => renderCard(makeLoadout(wName, mObj, st, { sub }), wName)).join('');
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

document.getElementById('weapon-select').addEventListener('change', () => { syncSubtypes(); updateMain(); });
document.getElementById('subtype-select').addEventListener('change', updateMain);
document.getElementById('monster-select').addEventListener('change', updateMain);

document.getElementById('ai-generate').addEventListener('click', () => {
  const wName = document.getElementById('ai-weapon').value;
  const mObj = MONSTERS.find(m => m.n === document.getElementById('ai-monster').value) || MONSTERS.at(0);
  const style = document.getElementById('ai-style').value;
  const reinf = document.getElementById('ai-reinforce').value;
  const charm = document.getElementById('ai-charm').value;
  document.getElementById('ai-result').innerHTML = renderCard(makeLoadout(wName, mObj, style, { reinf, charm }), wName);
});

document.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => {
  document.querySelector('.tab.active').classList.remove('active');
  t.classList.add('active');
  document.getElementById('meta-view').classList.toggle('hidden', t.dataset.tab !== 'meta');
  document.getElementById('ai-view').classList.toggle('hidden', t.dataset.tab !== 'ai');
  document.getElementById('weapon-ai-view').classList.toggle('hidden', t.dataset.tab !== 'weapon-ai');
}));

syncSubtypes();
updateMain();
