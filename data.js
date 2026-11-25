const MH_DATA = {
  weapons: {
    "Great Sword": { wJewels: "Focus Jewel III, Critical Jewel III, Handicraft Jewel II", skills: "Focus 3, Crit Boost 3, Counterstrike 3" },
    "Long Sword": { wJewels: "Critical Jewel III, Quick Sheathe Jewel II, Razor Sharp Jewel III", skills: "Quick Sheathe 3, Crit Boost 3, Max Might 3" },
    "Sword & Shield": { wJewels: "Guardian/Ironwall Jewel III, Critical Jewel III, Master's Touch", skills: "Offensive Guard 3, Burst 3, Crit Boost 3" },
    "Dual Blades": { wJewels: "Elemental Attack Jewel III, Critical Element III, Razor Sharp III", skills: "Marathon Runner 3, Constitution 3, Burst 3" },
    "Hammer": { wJewels: "Focus Jewel III, KO Jewel II, Critical Jewel III", skills: "Focus 3, Slugger 3, Crit Boost 3" },
    "Hunting Horn": { wJewels: "Sonorous Jewel II (Horn Maestro), KO Jewel II, Critical Jewel III", skills: "Horn Maestro 2, Slugger 3, Agitator 5" },
    "Lance": { wJewels: "Shield Jewel III (Guard Up), Ironwall Jewel III, Guardian Jewel III", skills: "Guard 3, Guard Up 3, Offensive Guard 3" },
    "Gunlance": { wJewels: "Artillery Jewel III, Magazine Jewel II (Load Shells), Shield Jewel III", skills: "Artillery 3, Load Shells 2, Guard 3" },
    "Switch Axe": { wJewels: "Quickswitch Jewel III (Rapid Morph), Enhancer Jewel III, Critical III", skills: "Rapid Morph 3, Power Prolonger 3, Crit Boost 3" },
    "Charge Blade": { wJewels: "Magazine Jewel II (Load Shells), Artillery Jewel III, Quickswitch III", skills: "Load Shells 2, Artillery 3, Rapid Morph 3" },
    "Insect Glaive": { wJewels: "Enhancer Jewel III (Power Prolonger), Flight Jewel II, Critical III", skills: "Power Prolonger 3, Airborne 1, Constitution 3" },
    "Light Bowgun": { wJewels: "Opener Jewel III, Pierce/Spread Jewel III, Ballistics Jewel II", skills: "Opening Shot 3, Rapid Fire Up, Ballistics 2" },
    "Heavy Bowgun": { wJewels: "Opener Jewel III, Shield Jewel III, Tetrad Shot Jewel III", skills: "Opening Shot 3, Guard 3, Tetrad Shot 3" },
    "Bow": { wJewels: "Spread/Power Shots Jewel III, Mighty Bow Jewel II, Critical Element III", skills: "Constitution 4, Stamina Surge 3, Spread Up" }
  },
  monsters: [
    { name: "All Monsters (General Meta)", weak: "Dragon / Blast", hazard: "None", counterJewel: "Mighty Jewel II / Challenger Jewel III" },
    { name: "Arkveld", weak: "Dragon", hazard: "Dragonblight / Chain Slams", counterJewel: "Dragon Res Jewel I x3, Destroyer Jewel II" },
    { name: "Guardian Arkveld", weak: "Dragon", hazard: "Wylk Explosions / Dragonblight", counterJewel: "Dragon Res Jewel I x3, Protection Jewel I" },
    { name: "Gore Magala", weak: "Fire / Dragon", hazard: "Frenzy Virus", counterJewel: "Sane Jewel I x3 (Antivirus), Blaze Jewel III" },
    { name: "Zoh Shia", weak: "Dragon / Ice", hazard: "Wylk Nova / Fire & Thunder", counterJewel: "Protection Jewel I x3, Dragon Jewel III" },
    { name: "Jin Dahaad", weak: "Fire", hazard: "Frostblight / Ice Nova", counterJewel: "Bind Res Jewel I x3, Ice Res Jewel I x3" },
    { name: "Rey Dau", weak: "Ice", hazard: "Thunderblight / Railgun Stun", counterJewel: "Steadfast Jewel I x3 (Stun Res), Frost Jewel III" },
    { name: "Nu Udra", weak: "Water", hazard: "Fireblight / Oil Ignition", counterJewel: "Fire Res Jewel I x3, Stream Jewel III" },
    { name: "Uth Duna", weak: "Thunder", hazard: "Waterblight / Tidal Waves", counterJewel: "Water Res Jewel I x3, Bolt Jewel III" },
    { name: "Mizutsune", weak: "Thunder / Dragon", hazard: "Bubbleblight / Water", counterJewel: "Blight Res Jewel III, Bolt Jewel III" },
    { name: "Lagiacrus", weak: "Fire / Ice", hazard: "Thunderblight / AoE Shock", counterJewel: "Thunder Res Jewel I x3, Blaze Jewel III" },
    { name: "Seregios", weak: "Thunder / Ice", hazard: "Bleeding Status", counterJewel: "Suture Jewel I x3 (Bleed Res), Bolt Jewel III" },
    { name: "Rathalos / Guardian Rathalos", weak: "Dragon / Thunder", hazard: "Fireblight / Poison", counterJewel: "Antidote Jewel I x3, Dragon Jewel III" },
    { name: "Rathian", weak: "Dragon / Thunder", hazard: "Deadly Poison / Fire", counterJewel: "Antidote Jewel I x3, Bolt Jewel III" },
    { name: "Gravios", weak: "Water / Dragon", hazard: "Fireblight / Sleep Gas", counterJewel: "Pep Jewel I x3 (Sleep Res), Stream Jewel III" },
    { name: "Blangonga", weak: "Fire / Thunder", hazard: "Frostblight / Tremors", counterJewel: "Bind Res Jewel I x3, Blaze Jewel III" },
    { name: "Nerscylla", weak: "Fire / Thunder", hazard: "Webbed / Sleep / Poison", counterJewel: "Bind Res Jewel I x3, Antidote Jewel I" },
    { name: "Gypceros", weak: "Fire / Ice", hazard: "Flash Stun / Poison", counterJewel: "Steadfast Jewel I x3, Antidote Jewel I x3" },
    { name: "Xu Wu", weak: "Ice", hazard: "Pin Grab / Assassin Strikes", counterJewel: "Evade Window Jewel II, Frost Jewel III" },
    { name: "Guardian Ebony Odogaron", weak: "Water", hazard: "Dragonblight / Bleeding", counterJewel: "Suture Jewel I x3, Stream Jewel III" },
    { name: "Guardian Fulgur Anjanath", weak: "Ice / Water", hazard: "Thunderblight / Roars", counterJewel: "Thunder Res Jewel I x3, Frost Jewel III" },
    { name: "Guardian Doshaguma", weak: "Fire / Thunder", hazard: "Defense Down / Heavy Slams", counterJewel: "Iron Skin Jewel I x3, Protection Jewel I" },
    { name: "Ajarakan", weak: "Water / Ice", hazard: "Blastblight / Fire", counterJewel: "Antiblast Jewel I x3, Stream Jewel III" },
    { name: "Rompopolo", weak: "Water", hazard: "Poison Gas / Blast Puddles", counterJewel: "Antidote Jewel I x3, Stream Jewel III" },
    { name: "Hirabami", weak: "Fire / Thunder", hazard: "Frostblight / Aerial Hover", counterJewel: "Flash Pods + Blaze Jewel III" },
    { name: "Lala Barina", weak: "Fire", hazard: "Paralysis Florets", counterJewel: "Antipara Jewel I x3, Blaze Jewel III" },
    { name: "Balahara", weak: "Thunder", hazard: "Waterblight / Quicksand", counterJewel: "Mirewalker Jewel I, Bolt Jewel III" },
    { name: "Congalala", weak: "Fire / Ice", hazard: "Stench / Paralysis / Poison", counterJewel: "Deodorant / Antidote Jewel I" },
    { name: "Quematrice", weak: "Water", hazard: "Fireblight / Tail Sweeps", counterJewel: "Fire Res Jewel I x3, Stream Jewel III" },
    { name: "Doshaguma / Chatacabra", weak: "Fire / Thunder", hazard: "Physical / Tremors", counterJewel: "Protection Jewel I x3, Mighty Jewel II" }
  ],
  builds: [
    {
      title: "Endgame Gore-Arkveld Meta DPS",
      category: "Meta DPS",
      monster: "All Monsters (General Meta)",
      gear: {
        Weapon: "Artian Tier 8 (3x Attack / Affinity Infusion)",
        Helm: "Gore Helm Beta",
        Chest: "Arkvulcan Mail Beta",
        Arms: "Gore Vambraces Beta",
        Waist: "Arkvulcan Coil Beta",
        Legs: "Gore Greaves Beta",
        Talisman: "Challenger Charm II (Agitator)"
      },
      armorJewels: "Tenderizer Jewel III x2, Challenger Jewel III x2, Mighty Jewel II x3, Sane Jewel I x2, Chain Jewel III x1",
      skills: "Agitator 5, Weakness Exploit 5, Antivirus 3, Maximum Might 3, Burst 1",
      tip: "Clear Frenzy within seconds to activate +15% Affinity from Black Eclipse + Antivirus 3."
    },
    {
      title: "Rey Dau & Lagiacrus Ice/Fire Counter",
      category: "Elemental Counter",
      monster: "Rey Dau",
      gear: {
        Weapon: "Jin Dahaad / Artian Element Tree",
        Helm: "Dahaad Shardhelm Beta",
        Chest: "Arkvulcan Mail Beta",
        Arms: "Dahaad Shardbraces Beta",
        Waist: "Rey Sandcoil Beta",
        Legs: "Gore Greaves Beta",
        Talisman: "Frost Charm III / Blaze Charm III"
      },
      armorJewels: "Tenderizer Jewel III x2, Challenger Jewel III x2, Steadfast Jewel I x3, Thunder Res Jewel I x3, Sane Jewel I x1",
      skills: "Element Attack 3, Weakness Exploit 5, Agitator 5, Stun Resistance 3, Thunder Res 3",
      tip: "Stun Resistance 3 completely negates Rey Dau's railgun follow-up combo."
    },
    {
      title: "Gore Magala & Zoh Shia Frenzy-Blight Killer",
      category: "Elemental Counter",
      monster: "Gore Magala",
      gear: {
        Weapon: "Nu Udra / Arkveld Element Tree",
        Helm: "Gore Helm Beta",
        Chest: "Udra Miremail Beta",
        Arms: "Gore Vambraces Beta",
        Waist: "Arkvulcan Coil Beta",
        Legs: "Gore Greaves Beta",
        Talisman: "Blaze Charm III / Dragon Charm III"
      },
      armorJewels: "Sane Jewel I x3, Phoenix Jewel II x2 (Coalescence), Tenderizer Jewel III x2, Jumping Jewel II x2",
      skills: "Antivirus 3, Coalescence 3, Weakness Exploit 5, Fire/Dragon Attack 3, Evade Extender 2",
      tip: "Overcoming Frenzy triggers Coalescence 3 + Antivirus 3 simultaneously for massive elemental bursts."
    },
    {
      title: "Immortal Arkveld Wound-Heal Tank",
      category: "Comfy / Anti-Cart",
      monster: "Arkveld",
      gear: {
        Weapon: "Arkveld Dragon Tree (High Dragon / Elderseal)",
        Helm: "Arkvulcan Helm Beta",
        Chest: "Arkvulcan Mail Beta",
        Arms: "G. Arkveld Vambraces Beta",
        Waist: "Arkvulcan Coil Beta",
        Legs: "G. Arkveld Greaves Beta",
        Talisman: "Blessing Charm III (Divine Blessing)"
      },
      armorJewels: "Protection Jewel I x3, Medicine Jewel I x3 (Recovery Up), Destroyer Jewel II x2, Tenderizer Jewel III x2",
      skills: "Hasten Recovery II, Decimator II, Weakness Exploit 5, Divine Blessing 3, Recovery Up 3, Partbreaker 3",
      tip: "Every Focus Strike on a wound heals ~35% of your health bar automatically."
    }
  ]
};
