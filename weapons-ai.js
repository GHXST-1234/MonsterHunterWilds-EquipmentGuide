const NAMED_WEAPONS = [
  // Great Swords
  { name: "Varianza (Artian Tier 8 GS)", cls: "Great Sword", elem: "Dragon / Raw", bonus: "3x Attack Infusion" },
  { name: "Exterminating Sword (Arkveld GS)", cls: "Great Sword", elem: "Dragon", bonus: "Focus 3 Built-In" },
  { name: "Schattenstolz (Gore Magala GS)", cls: "Great Sword", elem: "Dragon", bonus: "20% Base Affinity" },
  { name: "Abaddonian Krake (Nu Udra GS)", cls: "Great Sword", elem: "Fire", bonus: "High Fire Element" },
  { name: "Precipice Metallum (Jin Dahaad GS)", cls: "Great Sword", elem: "Ice", bonus: "High Ice + Guard" },
  // Long Swords
  { name: "Dimensius (Artian Tier 8 LS)", cls: "Long Sword", elem: "Dragon / Blast", bonus: "3x Attack Infusion" },
  { name: "Lawful Lawgiver (Arkveld LS)", cls: "Long Sword", elem: "Dragon", bonus: "Elderseal + White Sharpness" },
  { name: "Stahlfakt (Gore Magala LS)", cls: "Long Sword", elem: "Dragon", bonus: "20% Affinity + Crit Element" },
  { name: "Kakaru Kumo Naki (Mizutsune LS)", cls: "Long Sword", elem: "Water", bonus: "Slicked Blade Synergy" },
  { name: "Crimson Scythe (Rathalos LS)", cls: "Long Sword", elem: "Fire", bonus: "Crit Boost Built-In" },
  // Sword & Shield
  { name: "Verdant Slasher (Artian Tier 8 SnS)", cls: "Sword & Shield", elem: "Dragon / Element", bonus: "3x Element/Attack" },
  { name: "Exalted Galahad (Arkveld SnS)", cls: "Sword & Shield", elem: "Dragon", bonus: "Guard + High Dragon" },
  { name: "Leumundslist (Gore Magala SnS)", cls: "Sword & Shield", elem: "Dragon", bonus: "20% Affinity" },
  { name: "Kurenawi Ougi (Mizutsune SnS)", cls: "Sword & Shield", elem: "Water", bonus: "High Water + Affinity" },
  // Dual Blades
  { name: "Tiltkreise (Artian Tier 8 DB)", cls: "Dual Blades", elem: "Element / Blast", bonus: "3x Element Infusion" },
  { name: "Crossenders (Arkveld DB)", cls: "Dual Blades", elem: "Dragon", bonus: "Max Dragon Shredder" },
  { name: "Fledderklauen (Gore Magala DB)", cls: "Dual Blades", elem: "Dragon", bonus: "20% Affinity" },
  { name: "Tessen (Mizutsune DB)", cls: "Dual Blades", elem: "Water", bonus: "High Water Element" },
  { name: "Twin Flames (Rathalos DB)", cls: "Dual Blades", elem: "Fire", bonus: "High Fire + Crit Boost" },
  // Hammer & Hunting Horn
  { name: "Moteurvogel (Artian Tier 8 Hammer)", cls: "Hammer", elem: "Blast / Dragon", bonus: "Slugger + High Raw" },
  { name: "Exalted Perceval (Arkveld Hammer)", cls: "Hammer", elem: "Dragon", bonus: "Focus Built-In" },
  { name: "Omiltika (Artian Tier 8 Hunting Horn)", cls: "Hunting Horn", elem: "Dragon / Blast", bonus: "Attack Up (L) Echo" },
  { name: "Resounding Galahad (Arkveld HH)", cls: "Hunting Horn", elem: "Dragon", bonus: "Sharpness Restore Melody" },
  // Lance & Gunlance
  { name: "Skyscraper (Artian Tier 8 Lance)", cls: "Lance", elem: "Dragon / Element", bonus: "Guard Up + High Raw" },
  { name: "Purifying Beaumains (Arkveld Lance)", cls: "Lance", elem: "Dragon", bonus: "Guard 3 Built-In" },
  { name: "Argenesis (Artian Tier 8 Gunlance)", cls: "Gunlance", elem: "Blast / Fire", bonus: "Slightly Strong Wide/Normal" },
  { name: "Lawful Bors (G. Arkveld Gunlance)", cls: "Gunlance", elem: "Dragon", bonus: "Slightly Strong Shelling + High Raw" },
  // Switch Axe & Charge Blade
  { name: "Mundus Altus (Artian Tier 8 SwAxe)", cls: "Switch Axe", elem: "Dragon / Power", bonus: "Power Phial" },
  { name: "Exalted Lancelot (Arkveld SwAxe)", cls: "Switch Axe", elem: "Dragon", bonus: "Dragon Phial + Power Prolonger" },
  { name: "Chrono Gear (Artian Tier 8 CB)", cls: "Charge Blade", elem: "Impact / Element", bonus: "Impact / Element Phial" },
  { name: "Valorous Hero (Arkveld CB)", cls: "Charge Blade", elem: "Dragon", bonus: "Element Phial + Guard" },
  // Insect Glaive
  { name: "Diprielcha (Artian Tier 8 IG)", cls: "Insect Glaive", elem: "Dragon / Blast", bonus: "High Kinsect Level" },
  { name: "Virtuous Tristan (Arkveld IG)", cls: "Insect Glaive", elem: "Dragon", bonus: "Airborne / Power Prolonger" },
  // Bowguns & Bow
  { name: "Animilater (Artian Tier 8 LBG)", cls: "Light Bowgun", elem: "Pierce / Element", bonus: "Rapid Fire Pierce/Element" },
  { name: "Greifen (Artian Tier 8 HBG)", cls: "Heavy Bowgun", elem: "Pierce / Wyvernheart", bonus: "Ignition Mode Boost" },
  { name: "Angelbein (Artian Tier 8 Bow)", cls: "Bow", elem: "Dragon / Element", bonus: "Close-Range / Power Coating" },
  { name: "Exalted Kay (Arkveld Bow)", cls: "Bow", elem: "Dragon", bonus: "High Dragon + Power Coating" },
  { name: "Wunderkiefer (Gore Magala Bow)", cls: "Bow", elem: "Dragon", bonus: "20% Affinity + Close Coating" },
  { name: "Tamanoya (Mizutsune Bow)", cls: "Bow", elem: "Water", bonus: "High Water + Pierce/Spread" },
  { name: "Prominence Bow (Rathalos Bow)", cls: "Bow", elem: "Fire", bonus: "Crit Boost + High Fire" }
];
(function initWeaponAI() {
  const view = document.getElementById('weapon-ai-view');
  if (!view) return;

  view.innerHTML = `
    <div class="ai-box">
      <label>1. Search & Select Any Specific Weapon</label>
      <div style="position:relative;">
        <input type="text" id="w-search-input" placeholder="Tap to search weapon name, monster, or class..."
          style="width:100%;padding:11px 12px;border-radius:8px;border:1px solid var(--accent);background:var(--card);color:var(--text);font-size:0.95rem;">
        <div id="w-dropdown-list" class="hidden"
          style="max-height:220px;overflow-y:auto;background:var(--panel);border:1px solid var(--accent);border-radius:8px;margin-top:6px;"></div>
      </div>
      <div id="selected-weapon-pill" style="font-size:0.83rem;color:var(--accent);font-weight:700;padding:4px 2px;">
        Selected: Varianza (Artian Tier 8 GS) — Great Sword
      </div>
      <label>2. Build Optimization Goal</label>
      <select id="w-ai-goal">
        <option value="max">10★ Gamma Lord's Soul (Max Weapon DPS)</option>
        <option value="elem">Elemental & Affinity Crit Synergy</option>
        <option value="tank">Immortal Wound-Heal & Guard/Evade</option>
      </select>
      <button type="button" id="w-ai-build-btn"
        style="width:100%;padding:11px;border-radius:8px;border:none;background:var(--accent);color:#0b0d10;font-weight:800;font-size:0.95rem;cursor:pointer;">
        Build Optimal Set For This Weapon
      </button>
    </div>
    <div id="w-ai-output" style="padding:14px;display:grid;gap:14px;"></div>
  `;

  let chosenWeapon = NAMED_WEAPONS.at(0);
  const searchInput = document.getElementById('w-search-input');
  const dropList = document.getElementById('w-dropdown-list');
  const pill = document.getElementById('selected-weapon-pill');

  function renderDropdown(filterText = '') {
    const q = filterText.toLowerCase();
    const filtered = NAMED_WEAPONS.filter(w =>
      (w.name + ' ' + w.cls + ' ' + w.elem).toLowerCase().includes(q)
    );
    dropList.innerHTML = filtered.map((w, idx) => `
      <div class="w-drop-item" data-name="${w.name}"
        style="padding:10px 12px;border-bottom:1px solid var(--border);cursor:pointer;font-size:0.86rem;">
        <strong style="color:var(--text);">${w.name}</strong><br>
        <span style="color:var(--accent);font-size:0.76rem;">${w.cls} • ${w.elem} (${w.bonus})</span>
      </div>
    `).join('') || '<div style="padding:10px;color:var(--muted);font-size:0.85rem;">No matching weapons found.</div>';

    dropList.querySelectorAll('.w-drop-item').forEach(item => {
      item.addEventListener('click', () => {
        chosenWeapon = NAMED_WEAPONS.find(x => x.name === item.dataset.name) || chosenWeapon;
        searchInput.value = chosenWeapon.name;
        pill.textContent = `Selected: ${chosenWeapon.name} — ${chosenWeapon.cls}`;
        dropList.classList.add('hidden');
      });
    });
  }

  searchInput.addEventListener('focus', () => {
    renderDropdown(searchInput.value);
    dropList.classList.remove('hidden');
  });
  searchInput.addEventListener('input', () => {
    renderDropdown(searchInput.value);
    dropList.classList.remove('hidden');
  });

  document.getElementById('w-ai-build-btn').addEventListener('click', () => {
    const goal = document.getElementById('w-ai-goal').value;
   const elem = chosenWeapon.elem.split('/').shift().trim();
    const charms = { Fire: "Blaze Charm III", Water: "Stream Charm III", Thunder: "Bolt Charm III", Ice: "Frost Charm III", Dragon: "Dragon Charm III" };
    const wInfo = WEAPONS[chosenWeapon.cls];

    const sets = {
      max: {
        cat: "Weapon AI • 10★ Gamma Meta",
        gear: { Weapon: `${chosenWeapon.name} (${chosenWeapon.bonus})`, Helm: "Rey Sandhelm Gamma (γ)", Chest: "Arkvulcan Mail Gamma (γ)", Arms: "Rey Sandbraces Gamma (γ)", Waist: "Gore Coil Beta", Legs: "Gore Greaves Beta", Talisman: "Challenger Charm III (Agitator)" },
        aj: "Tenderizer Jewel III x2, Challenger Jewel III x2, Mighty Jewel II x3, Sane Jewel I x2",
        sk: `Lord's Soul (+5% Raw + Guts), Agitator 5, Weakness Exploit 5, Antivirus 3, Max Might 3, ${wInfo.s}`,
        tip: `Maximizes ${chosenWeapon.name}'s raw and affinity output with 3-piece Gamma Lord's Soul + Black Eclipse.`
      },
      elem: {
        cat: "Weapon AI • Element & Crit",
        gear: { Weapon: `${chosenWeapon.name} (${chosenWeapon.bonus})`, Helm: "Gore Helm Beta", Chest: "Arkvulcan Mail Gamma (γ)", Arms: "Gore Vambraces Beta", Waist: "Arkvulcan Coil Beta", Legs: "Gore Greaves Beta", Talisman: charms[elem] || "Challenger Charm III" },
        aj: "Tenderizer Jewel III x2, Phoenix Jewel II x2 (Coalescence), Sane Jewel I x3, Chain Jewel III x1",
        sk: `${elem} Attack 3, Coalescence 3, Weakness Exploit 5, Antivirus 3, Burst 1, ${wInfo.s}`,
        tip: `Built around ${chosenWeapon.elem} scaling—overcoming Frenzy triggers Coalescence 3 + Antivirus 3.`
      },
      tank: {
        cat: "Weapon AI • Immortal Sustain",
        gear: { Weapon: `${chosenWeapon.name} (${chosenWeapon.bonus})`, Helm: "Arkvulcan Helm Gamma (γ)", Chest: "Arkvulcan Mail Gamma (γ)", Arms: "Dahaad Shardbraces Gamma (γ)", Waist: "Uth Duna Coil Gamma (γ)", Legs: "G. Arkveld Greaves Beta", Talisman: "Blessing Charm III / Defense Charm V" },
        aj: "Protection Jewel I x3, Medicine Jewel I x3 (Recovery Up), Tenderizer Jewel III x2, Destroyer Jewel II x1",
        sk: `Lord's Soul (Guts), Hasten Recovery II, Divine Blessing 3, Recovery Up 3, Weakness Exploit 5, ${wInfo.s}`,
        tip: `Keeps you at 100% HP via Arkveld wound-healing while Gamma Lord's Soul prevents one-shots.`
      }
    };

    const b = sets[goal];
    const rows = Object.entries(b.gear).map(([k, v]) =>
      `<div class="${k === 'Talisman' ? 'gear-row talisman-row' : 'gear-row'}"><span class="slot">${k}</span><span class="piece">${v}</span></div>`
    ).join('');

    document.getElementById('w-ai-output').innerHTML = `
      <div class="card">
        <div class="card-header"><h2>${chosenWeapon.name} Build</h2><span class="badge">${b.cat}</span></div>
        <div class="gear-grid">${rows}</div>
        <div class="jewels-section">
          <div class="jewel-title">Weapon Jewels (${chosenWeapon.cls})</div><div class="jewel-list">${wInfo.j}</div>
          <div class="jewel-title" style="margin-top:4px;">Armor Jewels (Decorations)</div><div class="jewel-list">${b.aj}</div>
        </div>
        <div class="skills-box"><strong>Active Skills:</strong> ${b.sk}</div>
        <div class="tip-box"><strong>Weapon Synergy:</strong> ${b.tip}</div>
      </div>`;
  });
})();
