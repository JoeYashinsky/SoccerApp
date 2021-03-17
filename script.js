'use strict';

const game = {
    team1: 'USA',
    team2: 'Brazil',
    players: [
      [
        'Howard',
        'Lalas', 
        'Wynalda',
        'Ramos',
        'Preki',
        'Lewandowski',
        'Adu',
        'Beasley',
        'Donovan',
        'Altidore',
        'Dempsey',
      ],
      [
        'Zetti',
        'Ronaldo', 
        'Branco', 
        'Leonardo',
        'Mazinho',
        'Jorginho',
        'Aldair',
        'Cafu',
        'Viola',
        'Mauro Silva',
        'Bebeto',
      ],
    ],
    score: '1:3',
    scored: ['Ramos', 'Ronaldo', 'Cafu', 'Bebeto'],
    date: 'July 4th, 1994', 
    odds: {
      oddsUSA: 6.5, 
      x: 3.25,
      oddsBrazil: 1.33,
    },
  };

  // Player array for each team (USA, Brazil)
  const [playersUSA, playersBrazil] = game.players;

  // First player will be goalie. Rest are players in field.
  const [gkUSA, ...fieldPlayersUSA] = playersUSA;
  const [gkBrazil, ...fieldPlayersBrazil] = playersBrazil;

  // An array that will contain ALL players (both teams)
  const allPlayers = [...playersUSA, ...playersBrazil];

  // USA inserted 3 subs. New array will consist of all original USA players plus the 3 substitutes.

  const playersUSAFinal = [...playersUSA, 'Jones', 'Stewart', 'Dooley'];

  // Based on game.odds object, create a variable to represent each separate odd.
  const {odds: {oddsUSA, x: draw, oddsBrazil}} = game;

  // Function 'printGoals' 
  const printGoals = function (...players) {
      console.log(players);
      console.log(`${players.length} goals were scored in the game.`);
  }
  printGoals(...game.scored);

  // Team with lower odds more likely to win. Print to console which team more likely to win based on game.odds
  oddsUSA < oddsBrazil && console.log(`${game.team1} is more likely to win the soccer game today.`);
  oddsBrazil < oddsUSA && console.log(`${game.team2} is more likely to win the soccer game today.`);