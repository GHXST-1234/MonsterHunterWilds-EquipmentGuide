const NAMED_WEAPONS = [
  // Great Swords
  { name: "Varianza (Gogma Artian GS)", cls: "Great Sword", elem: "Auto", bonus: "5x EX Reinforcements [3-3-3]" },
  { name: "Exterminating Sword (Arkveld GS)", cls: "Great Sword", elem: "Dragon", bonus: "Focus 3 Built-In" },
  { name: "Schattenstolz (Gore Magala GS)", cls: "Great Sword", elem: "Dragon", bonus: "20% Base Affinity" },
  { name: "Abaddonian Krake (Nu Udra GS)", cls: "Great Sword", elem: "Fire", bonus: "High Fire Element" },
  { name: "Precipice Metallum (Jin Dahaad GS)", cls: "Great Sword", elem: "Ice", bonus: "High Ice + Guard" },
  { name: "Zoh Shia Great Sword (Apex Dragon GS)", cls: "Great Sword", elem: "Dragon", bonus: "Whiteflame Torrent" },
  // Long Swords
  { name: "Dimensius (Gogma Artian LS)", cls: "Long Sword", elem: "Auto", bonus: "5x EX Reinforcements [3-3-3]" },
  { name: "Lawful Lawgiver (Arkveld LS)", cls: "Long Sword", elem: "Dragon", bonus: "Elderseal + White Sharpness" },
  { name: "Stahlfakt (Gore Magala LS)", cls: "Long Sword", elem: "Dragon", bonus: "20% Affinity + Crit Element" },
  { name: "Kakaru Kumo Naki (Mizutsune LS)", cls: "Long Sword", elem: "Water", bonus: "Slicked Blade Synergy" },
  { name: "Crimson Scythe (Rathalos LS)", cls: "Long Sword", elem: "Fire", bonus: "Crit Boost Built-In" },
  // Sword & Shield
  { name: "Verdant Slasher (Gogma Artian SnS)", cls: "Sword & Shield", elem: "Auto", bonus: "5x EX Reinforcements [3-3-3]" },
  { name: "Exalted Galahad (Arkveld SnS)", cls: "Sword & Shield", elem: "Dragon", bonus: "Guard + High Dragon" },
  { name: "Leumundslist (Gore Magala SnS)", cls: "Sword & Shield", elem: "Dragon", bonus: "20% Affinity" },
  { name: "Kurenawi Ougi (Mizutsune SnS)", cls: "Sword & Shield", elem: "Water", bonus: "High Water + Affinity" },
  { name: "Lagiacrus Thunder SnS", cls: "Sword & Shield", elem: "Thunder", bonus: "High Thunder Element" },
  // Dual Blades
  { name: "Tiltkreise (Gogma Artian DB)", cls: "Dual Blades", elem: "Auto", bonus: "5x EX Reinforcements [3-3-3]" },
  { name: "Crossenders (Arkveld DB)", cls: "Dual Blades", elem: "Dragon", bonus: "Max Dragon Shredder" },
  { name: "Fledderklauen (Gore Magala DB)", cls: "Dual Blades", elem: "Dragon", bonus: "20% Affinity" },
  { name: "Tessen (Mizutsune DB)", cls: "Dual Blades", elem: "Water", bonus: "High Water Element" },
  { name: "Twin Flames (Rathalos DB)", cls: "Dual Blades", elem: "Fire", bonus: "High Fire + Crit Boost" },
  // Hammer & Hunting Horn
  { name: "Moteurvogel (Gogma Artian Hammer)", cls: "Hammer", elem: "Auto", bonus: "5x EX Reinforcements [3-3-3]" },
  { name: "Exalted Perceval (Arkveld Hammer)", cls: "Hammer", elem: "Dragon", bonus: "Focus Built-In" },
  { name: "Omiltika (Gogma Artian Hunting Horn)", cls: "Hunting Horn", elem: "Auto", bonus: "Attack Up (L) Echo" },
  { name: "Resounding Galahad (Arkveld HH)", cls: "Hunting Horn", elem: "Dragon", bonus: "Sharpness Restore Melody" },
  // Lance & Gunlance
  { name: "Skyscraper (Gogma Artian Lance)", cls: "Lance", elem: "Auto", bonus: "5x EX Reinforcements [3-3-3]" },
  { name: "Purifying Beaumains (Arkveld Lance)", cls: "Lance", elem: "Dragon", bonus: "Guard 3 Built-In" },
  { name: "Argenesis (Gogma Artian Gunlance)", cls: "Gunlance", elem: "Auto", bonus: "Focus shifts Wide/Long/Normal" },
  { name: "Lawful Bors (G. Arkveld Gunlance)", cls: "Gunlance", elem: "Dragon", bonus: "Slightly Strong Wide + High Raw" },
  // Switch Axe & Charge Blade
  { name: "Mundus Altus (Gogma Artian SwAxe)", cls: "Switch Axe", elem: "Auto", bonus: "Focus shifts Power/Element Phial" },
  { name: "Exalted Lancelot (Arkveld SwAxe)", cls: "Switch Axe", elem: "Dragon", bonus: "Dragon Phial + Power Prolonger" },
  { name: "Chrono Gear (Gogma Artian CB)", cls: "Charge Blade", elem: "Auto", bonus: "Focus shifts Impact/Element Phial" },
  { name: "Valorous Hero (Arkveld CB)", cls: "Charge Blade", elem: "Dragon", bonus: "Element Phial + Guard" },
  // Insect Glaive
  { name: "Diprielcha (Gogma Artian IG)", cls: "Insect Glaive", elem: "Auto", bonus: "5x EX Reinforcements [3-3-3]" },
  { name: "Virtuous Tristan (Arkveld IG)", cls: "Insect Glaive", elem: "Dragon", bonus: "Airborne / Power Prolonger" },
  { name: "Seregios Razor Glaive", cls: "Insect Glaive", elem: "Raw", bonus: "Auto-Sharpen on Evade" },
  // Bowguns & Bow
  { name: "Animilater (Gogma Artian LBG)", cls: "Light Bowgun", elem: "Auto", bonus: "Rapid Fire Pierce/Element" },
  { name: "Greifen (Gogma Artian HBG)", cls: "Heavy Bowgun", elem: "Auto", bonus: "Wyvernheart Ignition Boost" },
  { name: "Angelbein (Gogma Artian Bow)", cls: "Bow", elem: "Auto", bonus: "Focus shifts Close/Power/Elem" },
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
      <div class="step-group"><label for="w-search-input">1. Search & Select Specific Weapon</label>
        <input type="text" id="w-search-input" placeholder="Tap to search weapon name, monster, or class...">
        <div id="w-dropdown-list" class="hidden"
          style="max-height:210px;overflow-y:auto;background:var(--panel);border:1px solid var(--accent);border-radius:8px;"></div>
        <div id="selected-weapon-pill" style="font-size:0.82rem;color:var(--accent);font-weight:700;">
          Selected: Varianza (Gogma Artian GS) — Great Sword
        </div></div>

      <div class="step-group"><label for="w-ai-elem">2. Weapon Element / Status & Gogma Focus Path</label>
        <select id="w-ai-elem">
          <option value="Dragon">Dragon</option><option value="Fire">Fire</option><option value="Water">Water</option>
          <option value="Thunder">Thunder</option><option value="Ice">Ice</option><option value="Blast">Blast</option>
          <option value="Paralysis">Paralysis</option><option value="Poison">Poison</option><option value="Sleep">Sleep</option><option value="Raw">Raw / Non-Elemental</option>
        </select>
        <select id="w-ai-focus">
          <option value="atk">Gogma Attack Focus (2x Attack EX, 2x Element EX, 1x Sharpness EX)</option>
          <option value="aff">Gogma Affinity Focus (2x Affinity EX, 2x Attack EX, 1x Sharpness EX)</option>
          <option value="elem">Gogma Element Focus (2x Element EX, 2x Affinity EX, 1x Sharpness EX)</option>
          <option value="r8">Base Rarity 8 Artian / Standard Monster Tree</option>
        </select></div>

      <div class="step-group"><label>3. Gogma Weapon Dual Skill Rolls (1 Set + 1 Group)</label>
        <select id="w-ai-set">
          <option value="Gore Magala's Tyranny">Set Roll: Gore Magala's Tyranny</option>
          <option value="Gogmapocalypse">Set Roll: Gogmapocalypse</option>
          <option value="Rey Dau's Voltage">Set Roll: Rey Dau's Voltage</option>
          <option value="Arkveld's Hunger">Set Roll: Arkveld's Hunger</option>
        </select>
        <select id="w-ai-group">
          <option value="Lord's Soul">Group Roll: Lord's Soul (2pc Gamma Stacking!)</option>
          <option value="Fortifying Pelt">Group Roll: Fortifying Pelt</option>
          <option value="Scaling Prowess">Group Roll: Scaling Prowess</option>
        </select></div>

      <div class="step-group"><label>4. Custom Timeworn RNG Charm & Transcendence</label>
        <input type="text" id="w-ai-charm-skill" placeholder="Rolled Charm Skills (e.g., Attack Boost 3 + WEX 1)">
        <select id="w-ai-charm-slots">
          <option value="[3-1-0]">Charm Slots: [3-1-0]</option><option value="[2-2-0]">Charm Slots: [2-2-0]</option>
          <option value="[3-0-0]">Charm Slots: [3-0-0]</option><option value="Craftable">No RNG Charm (Best Craftable)</option>
        </select>
        <label class="check-row"><input type="checkbox" id="w-ai-trans" checked> Enable TU4 Armor Transcendence (Rarity 5–7)</label></div>

      <div class="step-group"><label for="w-ai-goal">5. Optimization Strategy</label>
        <select id="w-ai-goal">
          <option value="meta">10★ Max Meta DPS (Multi-Set Bonus Stack)</option>
          <option value="counter">Elemental & Blight Counter</option>
          <option value="comfy">Immortal Anti-Cart Sustain</option>
        </select></div>

      <button type="button" id="w-ai-build-btn"
        style="width:100%;padding:11px;border-radius:8px;border:none;background:var(--accent);color:#0b0d10;font-weight:800;font-size:0.95rem;cursor:pointer;">
        Build Optimal TU4 Set For This Weapon
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
    const filtered = NAMED_WEAPONS.filter(w => (w.name + ' ' + w.cls + ' ' + w.elem).toLowerCase().includes(q));
    dropList.innerHTML = filtered.map(w => `
      <div class="w-drop-item" data-name="${w.name}" style="padding:10px 12px;border-bottom:1px solid var(--border);cursor:pointer;font-size:0.86rem;">
        <strong style="color:var(--text);">${w.name}</strong><br>
        <span style="color:var(--accent);font-size:0.76rem;">${w.cls} • ${w.bonus}</span>
      </div>`).join('') || '<div style="padding:10px;color:var(--muted);font-size:0.85rem;">No matching weapons found.</div>';

    dropList.querySelectorAll('.w-drop-item').forEach(item => {
      item.addEventListener('click', () => {
        chosenWeapon = NAMED_WEAPONS.find(x => x.name === item.dataset.name) || chosenWeapon;
        searchInput.value = chosenWeapon.name;
        if (chosenWeapon.elem !== 'Auto') document.getElementById('w-ai-elem').value = chosenWeapon.elem;
        pill.textContent = `Selected: ${chosenWeapon.name} — ${chosenWeapon.cls}`;
        dropList.classList.add('hidden');
      });
    });
  }

  searchInput.addEventListener('focus', () => { renderDropdown(searchInput.value); dropList.classList.remove('hidden'); });
  searchInput.addEventListener('input', () => { renderDropdown(searchInput.value); dropList.classList.remove('hidden'); });

  document.getElementById('w-ai-build-btn').addEventListener('click', () => {
    const mObj = MONSTERS.at(0);
    const opts = {
      elem: document.getElementById('w-ai-elem').value,
      focus: document.getElementById('w-ai-focus').value,
      wSet: document.getElementById('w-ai-set').value,
      wGroup: document.getElementById('w-ai-group').value,
      charmSkill: document.getElementById('w-ai-charm-skill').value,
      charmSlots: document.getElementById('w-ai-charm-slots').value,
      trans: document.getElementById('w-ai-trans').checked
    };
    const loadout = makeLoadout(chosenWeapon.cls, mObj, document.getElementById('w-ai-goal').value, opts);
    loadout.title = `${chosenWeapon.name} — TU4 Custom Loadout`;
    loadout.gear.Primary = `${chosenWeapon.name} (${opts.elem} • ${opts.focus.toUpperCase()} Focus)`;
    document.getElementById('w-ai-output').innerHTML = renderCard(loadout, chosenWeapon.cls);
  });
})();
