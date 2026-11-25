let db = { weapons: [], monsters: [], builds: [] };

const weaponSkills = {
  "Great Sword": "Focus 3, Crit Draw / Counterstrike 3",
  "Long Sword": "Quick Sheathe 3, Maximum Might 3",
  "Sword & Shield": "Offensive Guard 3, Burst 3",
  "Dual Blades": "Marathon Runner 3, Constitution 3, Burst 3",
  "Hammer": "Focus 3, Slugger 3, Maximum Might 3",
  "Hunting Horn": "Horn Maestro 2, Slugger 3",
  "Lance": "Guard 3, Guard Up 3, Offensive Guard 3",
  "Gunlance": "Artillery 3, Load Shells 2, Guard 3",
  "Switch Axe": "Rapid Morph 3, Power Prolonger 3",
  "Charge Blade": "Load Shells 2, Rapid Morph 3, Artillery 3",
  "Insect Glaive": "Power Prolonger 3, Airborne 1, Constitution 3",
  "Light Bowgun": "Opening Shot 3, Pierce/Spread Up, Ballistics 2",
  "Heavy Bowgun": "Opening Shot 3, Guard 3, Tetrad Shot 3",
  "Bow": "Constitution 4, Stamina Surge 3, Spread/Power Shots"
};

async function init() {
  const res = await fetch(`builds.json?t=${Date.now()}`);
  db = await res.json();
  ['weapon-select', 'ai-weapon'].forEach(id => {
    document.getElementById(id).innerHTML = db.weapons.map(w => `<option value="${w}">${w}</option>`).join('');
  });
  ['monster-select', 'ai-monster'].forEach(id => {
    document.getElementById(id).innerHTML = db.monsters.map(m => `<option value="${m.name}">${m.name}</option>`).join('');
  });
  renderMeta();
}

function renderCard(b, selectedWeapon) {
  const rows = Object.entries(b.gear).map(([slot, piece]) => {
    const val = slot === 'Weapon' ? `${selectedWeapon} — ${piece}` : piece;
    const cls = slot === 'Talisman' ? 'gear-row talisman-row' : 'gear-row';
    return `<div class="${cls}"><span class="slot">${slot}</span><span class="piece">${val}</span></div>`;
  }).join('');
  return `
    <div class="card">
      <div class="card-header"><h2>${b.title}</h2><span class="badge">${b.type}</span></div>
      <div class="gear-grid">${rows}</div>
      <div class="skills-box"><strong>Core & Weapon Skills:</strong> ${b.skills}, ${weaponSkills[selectedWeapon] || ''}</div>
      <div class="tip-box"><strong>Hunt Tip:</strong> ${b.tip}</div>
    </div>`;
}

function renderMeta() {
  const w = document.getElementById('weapon-select').value;
  const m = document.getElementById('monster-select').value;
  const matches = db.builds.filter(b => b.monster === m || b.monster.startsWith('All Monsters'));
  document.getElementById('builds-list').innerHTML = matches.map(b => renderCard(b, w)).join('');
}

document.getElementById('ai-generate').addEventListener('click', () => {
  const w = document.getElementById('ai-weapon').value;
  const mName = document.getElementById('ai-monster').value;
  const style = document.getElementById('ai-style').value;
  const mObj = db.monsters.find(x => x.name === mName) || db.monsters;
  const elem = mObj.weakness.split('/') [0].trim();

  const presets = {
    meta: { tag: "AI Meta DPS", helm: "Gore Helm Beta", chest: "Arkvulcan Mail Beta", arms: "Gore Vambraces Beta", waist: "Arkvulcan Coil Beta", legs: "Gore Greaves Beta", charm: "Challenger Charm II (Agitator)", core: "Agitator 5, Weakness Exploit 5, Antivirus 3" },
    comfy: { tag: "AI Anti-Cart", helm: "Arkvulcan Helm Beta", chest: "Arkvulcan Mail Beta", arms: "G. Arkveld Vambraces Beta", waist: "Arkvulcan Coil Beta", legs: "G. Arkveld Greaves Beta", charm: "Defense Charm IV / Blessing Charm III", core: "Divine Blessing 3, Recovery Up 3, Hasten Recovery II" },
    partbreak: { tag: "AI Wound & Break", helm: "G. Arkveld Helm Beta", chest: "Arkvulcan Mail Beta", arms: "G. Arkveld Vambraces Beta", waist: "Gore Coil Beta", legs: "Gore Greaves Beta", charm: "Destroyer Charm II (Partbreaker)", core: "Partbreaker 3, Flayer 4, Weakness Exploit 5" }
  }[style];

  const customBuild = {
    title: `AI Custom: ${w} vs ${mName}`,
    type: presets.tag,
    gear: {
      Weapon: `Artian / Monster Tree (${elem} Element)`,
      Helm: presets.helm, Chest: presets.chest, Arms: presets.arms,
      Waist: presets.waist, Legs: presets.legs, Talisman: presets.charm
    },
    skills: `${presets.core}, ${elem} Attack 3`,
    tip: `Target weakness: ${mObj.weakness}. Slot decos against ${mObj.resist} and eat Kunafa meal for Defender/Element Res.`
  };
  document.getElementById('ai-result').innerHTML = renderCard(customBuild, w);
});

document.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => {
  document.querySelector('.tab.active').classList.remove('active');
  t.classList.add('active');
  document.getElementById('meta-view').classList.toggle('hidden', t.dataset.tab !== 'meta');
  document.getElementById('ai-view').classList.toggle('hidden', t.dataset.tab !== 'ai');
}));
['weapon-select', 'monster-select'].forEach(id => document.getElementById(id).addEventListener('change', renderMeta));
init();

