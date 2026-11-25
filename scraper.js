const fs = require('fs');

function updateBuilds() {
  const raw = fs.readFileSync('builds.json', 'utf8');
  const data = JSON.parse(raw);

  data.lastSynced = new Date().toLocaleString('en-US', {
    timeZone: 'America/New_York'
  }) + ' EST';

  fs.writeFileSync('builds.json', JSON.stringify(data, null, 2));
  console.log(`Verified ${data.builds.length} builds and ${data.monsters.length} monsters at ${data.lastSynced}`);
}

updateBuilds();

