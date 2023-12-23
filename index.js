// Part 1: Building the Object
function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          // Other players from the home team...
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          // Other players from the away team...
        }
      }
    };
  }
  
  console.log(gameObject()); // Check the output in the console
  
  // Part 2: Building Functions
  function numPointsScored(playerName) {
    const game = gameObject();
    const allPlayers = { ...game.home.players, ...game.away.players };
    if (allPlayers[playerName]) {
      return allPlayers[playerName].points;
    } else {
      return `${playerName} is not in the game!`;
    }
  }
  
  function teamColors(teamName) {
    const game = gameObject();
    if (game.home.teamName === teamName) {
      return game.home.colors;
    } else if (game.away.teamName === teamName) {
      return game.away.colors;
    } else {
      return `${teamName} is not playing in this game!`;
    }
  }
  
  function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
  function playerNumbers(teamName) {
    const game = gameObject();
    if (game.home.teamName === teamName) {
      return Object.values(game.home.players).map(player => player.number);
    } else if (game.away.teamName === teamName) {
      return Object.values(game.away.players).map(player => player.number);
    } else {
      return `${teamName} is not playing in this game!`;
    }
  }
  
  function playerStats(playerName) {
    const game = gameObject();
    const allPlayers = { ...game.home.players, ...game.away.players };
    if (allPlayers[playerName]) {
      return allPlayers[playerName];
    } else {
      return `${playerName} is not in the game!`;
    }
  }

  
  // Test the functions
  console.log(numPointsScored("Alan Anderson"));
  console.log(shoeSize("Jeff Adrien"));
  console.log(teamColors("Brooklyn Nets"));
  console.log(teamNames());
  console.log(playerNumbers("Charlotte Hornets"));
  console.log(playerStats("Reggie Evans"));
  console.log(bigShoeRebounds());
  