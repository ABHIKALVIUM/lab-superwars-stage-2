const PLAYERS = [
    'Spiderman',
    'Captain America',
    'Wonderwoman',
    'Popcorn',
    'Gemwoman',
    'Bolt',
    'Antwoman',
    'Mask',
    'Tiger',
    'Captain',
    'Catwoman',
    'Fish',
    'Hulk',
    'Ninja',
    'Black Cat',
    'Volverine',
    'Thor',
    'Slayer',
    'Vader',
    'Slingo',
  ];
  
 // initialize players with image and strength
  const initPlayers = (players) => {
    return players.map((player, index) => ({
      name: player,
      strength: getRandomStrength(),
      image: `images/super-${index + 1}.png`,
      type: index % 2 === 0 ? 'hero' : 'villain',
      id: index + 1,
    }));
  };
  
 // getting random strength
 // Return a random integer (0,100]
  // Note: You can use Math.random() and Math.ceil()
  const getRandomStrength = () => Math.ceil(Math.random() * 100);
  
  // Function to create the HTML structure for a player
  const view = (playerObj) => {
    const player = document.createElement('div');
    player.classList.add('player');
  
    const image = document.createElement('img');
    image.src = playerObj.image;
    image.alt = '';
  
    const name = document.createElement('div');
    name.className = 'name';
    name.textContent = playerObj.name;
  
    const strength = document.createElement('div');
    strength.className = 'strength';
    strength.textContent = playerObj.strength;
  
    player.append(image, name, strength);
    return player;
  };
  
  // Build HTML structure for players based on type (hero/villain)
  // Loop through players and accumulate HTML template
  // depending of type of player(hero|villain)
  // Type your code here
  const buildPlayers = (players, type) => {
    const filteredPlayers = players.filter((player) => player.type === type);
    return filteredPlayers.map((player) => view(player)).join('');
  };
  
 // Display players in HTML
  const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
  };
  
  window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
  };
  