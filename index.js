function gameObject() {
    return {
      home: {
        teamName: 'Brooklyn Nets',
        colors: ['Black', 'White'],
        players: {
          'Alan Anderson': {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          'Reggie Evans': {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          // ... (other players of the home team)
        },
      },
      away: {
        teamName: 'Charlotte Hornets',
        colors: ['Turquoise', 'Purple'],
        players: {
          'Jeff Adrien': {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          'Bismak Biyombo': {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          // ... (other players of the away team)
        },
      },
    };
  }
  
  // Rest of the functions
  function mostPointsScored() {
    const game = gameObject();
    let highestPoints = 0;
    let playerWithMostPoints = '';
  
    for (const team in game) {
      for (const player in game[team].players) {
        const points = game[team].players[player].points;
        if (points > highestPoints) {
          highestPoints = points;
          playerWithMostPoints = player;
        }
      }
    }
  
    return playerWithMostPoints;
  }
  
  function winningTeam() {
    const game = gameObject();
    let homeTeamPoints = 0;
    let awayTeamPoints = 0;
  
    for (const player in game.home.players) {
      homeTeamPoints += game.home.players[player].points;
    }
  
    for (const player in game.away.players) {
      awayTeamPoints += game.away.players[player].points;
    }
  
    return homeTeamPoints > awayTeamPoints ? game.home.teamName : game.away.teamName;
  }
  
  function playerWithLongestName() {
    const game = gameObject();
    let longestName = '';
  
    for (const team in game) {
      for (const player in game[team].players) {
        if (player.length > longestName.length) {
          longestName = player;
        }
      }
    }
  
    return longestName;
  }
  
  // Testing the functions
  console.log(gameObject());
  console.log(mostPointsScored());
  console.log(winningTeam());
  console.log(playerWithLongestName());
  