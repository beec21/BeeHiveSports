async function loadData() {
  try {
    const playerRes = await fetch('./currentWeeklyData.json');
    const defenseRes = await fetch('./defenseStats.json');

    if (!playerRes.ok || !defenseRes.ok) {
      throw new Error('Failed to fetch one or both JSON files.');
    }

    const players = await playerRes.json();
    const defenses = await defenseRes.json();

    console.log('Loaded players:', players);
    console.log('Loaded defenses:', defenses);

    document.body.innerHTML += `<p>Loaded ${players.length} players and ${defenses.length} defenses!</p>`;
  } catch (error) {
    console.error('Error loading data:', error);
    document.body.innerHTML += `<p style="color:red;">Error loading data. Check console.</p>`;
  }
}

loadData();
