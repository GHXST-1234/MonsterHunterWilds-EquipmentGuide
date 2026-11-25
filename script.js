const themeSelect = document.getElementById('theme-select');
const savedTheme = localStorage.getItem('mhTheme') || 'gold';
document.documentElement.setAttribute('data-theme', savedTheme);
themeSelect.value = savedTheme;

themeSelect.addEventListener('change', (e) => {
  document.documentElement.setAttribute('data-theme', e.target.value);
  localStorage.setItem('mhTheme', e.target.value);
});

function populateDropdowns() {
  const weaponNames = Object.keys(MH_DATA.weapons);
  ['weapon-select', 'ai-weapon'].forEach(id => {
    document.getElementById(id).innerHTML = weaponNames.map(w => `<option value="${w}">${w}</option>`).join('');
  });
  ['monster-select', 'ai-monster'].forEach(id => {
    document.getElementById(id).innerHTML = MH_DATA.monsters.map(m => `<option value="${m.name}">${m.name}</option>`).join('');
  });
}

function buildCardHTML(b, weaponName, monsterObj) {
  const wInfo = MH_DATA.weapons[weaponName];
  const gearRows = Object.entries(b.gear).map(([slot, piece]) => {
    const label = slot === 'Weapon' ? `${weaponName} — ${piece}` : piece;
    const rowClass = slot === 'Talisman' ? 'gear-row talisman-row' : 'gear-row';
    return `<div class="${rowClass}"><span class="slot">${slot}</span><span class="piece">${label}</span></div>`;
  }).join('');

  const extraJewel = monsterObj && monsterObj.counterJewel ? `, ${monsterObj.counterJewel}` : '';
  return `
    <div class="card">
      <div class="card-header"><h2>${b.title}</h2><span class="badge">${b.category}</span></div>
      <div class="gear-grid">${gearRows}</div>
      <div class="jewels-section">
        <div class="jewel-title">Weapon Jewels (Decorations)</div>
        <div class="jewel-list">${wInfo.wJewels}</div>
        <div class="jewel-title" style="margin-top:4px;">Armor Jewels (Decorations)</div>
        <div class="jewel-list">${b.armorJewels}${extraJewel}</div>
      </div>
      <div class="skills-box"><strong>Active Skills:</strong> ${b.skills}, ${wInfo.skills}</div>
      <div class="tip-box"><strong>Hunt Strategy:</strong> ${b.tip}</div>
    </div>`;
}

function renderMetaBuilds() {
  const wName = document.getElementById('weapon-select').value;
  const mName = document.getElementById('monster-select').value;
  const mObj = MH_DATA.monsters.find(m => m.name === mName) || MH_DATA.monsters;

  document.getElementById('monster-banner').innerHTML = `
    <strong>Target: ${mObj.name}</strong><br>
    Weakness: <strong>${mObj.weak}</strong> | Hazard: ${mObj.hazard}<br>
    Recommended Counter Jewel: <strong>${mObj.counterJewel}</strong>`;

  const relevant = MH_DATA.builds.filter(b =>
    b.monster === mName || mName.includes(b.monster) || b.monster.startsWith('All Monsters')
  );
  document.getElementById('builds-list').innerHTML = relevant.map(b => buildCardHTML(b, wName, mObj)).join('');
}
document.getElementById('ai-generate').addEventListener('click', () => {
  const wName = document.getElementById('ai-weapon').value;
  const mName = document.getElementById('ai-monster').value;
  const style = document.getElementById('ai-style').value;
  const mObj = MH_DATA.monsters.find(m => m.name === mName) || MH_DATA.monsters;
  const primaryElem = mObj.weak.split('/').trim();

  const charmMap = {
    Fire: "Blaze Charm III (Fire Attack)",
    Water: "Stream Charm III (Water Attack)",
    Thunder: "Bolt Charm III (Thunder Attack)",
    Ice: "Frost Charm III (Ice Attack)",
    Dragon: "Dragon Charm III (Dragon Attack)"
  };

  const configs = {
    meta: {
      cat: "AI Max Meta DPS",
      gear: { Weapon: `Artian Tier 8 (${primaryElem} / Attack Roll)`, Helm: "Gore Helm Beta", Chest: "Arkvulcan Mail Beta", Arms: "Gore Vambraces Beta", Waist: "Arkvulcan Coil Beta", Legs: "Gore Greaves Beta", Talisman: "Challenger Charm II (Agitator)" },
      jewels: "Tenderizer Jewel III x2, Challenger Jewel III x2, Mighty Jewel II x3, Sane Jewel I x2",
      skills: "Agitator 5, Weakness Exploit 5, Antivirus 3, Maximum Might 3, Black Eclipse I"
    },
    counter: {
      cat: "AI Elemental & Blight Counter",
      gear: { Weapon: `${primaryElem} Element Monster / Artian Tree`, Helm: "Gore Helm Beta", Chest: "Udra / Dahaad Counter Mail Beta", Arms: "Gore Vambraces Beta", Waist: "Arkvulcan Coil Beta", Legs: "Gore Greaves Beta", Talisman: charmMap[primaryElem] || "Challenger Charm II" },
      jewels: `Tenderizer Jewel III x2, Phoenix Jewel II x2 (Coalescence), Sane Jewel I x3`,
      skills: `${primaryElem} Attack 3, Weakness Exploit 5, Coalescence 3, Antivirus 3`
    },
    comfy: {
      cat: "AI Immortal Anti-Cart",
      gear: { Weapon: `Artian / Arkveld (${primaryElem} Element)`, Helm: "Arkvulcan Helm Beta", Chest: "Arkvulcan Mail Beta", Arms: "G. Arkveld Vambraces Beta", Waist: "Arkvulcan Coil Beta", Legs: "G. Arkveld Greaves Beta", Talisman: "Blessing Charm III (Divine Blessing)" },
      jewels: "Protection Jewel I x3, Medicine Jewel I x3 (Recovery Up), Tenderizer Jewel III x2",
      skills: "Hasten Recovery II, Decimator II, Divine Blessing 3, Recovery Up 3, Weakness Exploit 5"
    },
    partbreak: {
      cat: "AI Wound & Partbreaker",
      gear: { Weapon: `Artian Tier 8 (${primaryElem} / Affinity Roll)`, Helm: "G. Arkveld Helm Beta", Chest: "Arkvulcan Mail Beta", Arms: "G. Arkveld Vambraces Beta", Waist: "Gore Coil Beta", Legs: "Gore Greaves Beta", Talisman: "Destroyer Charm II (Partbreaker)" },
      jewels: "Destroyer Jewel II x2, Flayer Jewel III x2, Tenderizer Jewel III x2, Sane Jewel I x2",
      skills: "Partbreaker 3, Flayer 5, Weakness Exploit 5, Antivirus 3, Decimator I"
    }
  }[style];

  const generated = {
    title: `AI Custom: ${wName} vs ${mName}`,
    category: configs.cat,
    gear: configs.gear,
    armorJewels: configs.jewels,
    skills: configs.skills,
    tip: `Exploit ${mObj.weak} weakness. Watch out for ${mObj.hazard}—slotted counter jewels included automatically.`
  };
  document.getElementById('ai-result').innerHTML = buildCardHTML(generated, wName, mObj);
});

document.querySelectorAll('.tab').forEach(tab => tab.addEventListener('click', () => {
  document.querySelector('.tab.active').classList.remove('active');
  tab.classList.add('active');
  document.getElementById('meta-view').classList.toggle('hidden', tab.dataset.tab !== 'meta');
  document.getElementById('ai-view').classList.toggle('hidden', tab.dataset.tab !== 'ai');
}));

['weapon-select', 'monster-select'].forEach(id => document.getElementById(id).addEventListener('change', renderMetaBuilds));
populateDropdowns();
renderMetaBuilds();
