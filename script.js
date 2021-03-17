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
      team1: 6.5, 
      x: 3.25,
      team2: 1.33,
    },
  };

  // Player array for each team (USA, Brazil)
  const [playersUSA, playersBrazil] = game.players;

  // First player will be goalie. Rest are players in field.
  const [gkUSA, ...fieldPlayersUSA] = playersUSA;
  const [gkBrazil, ...fieldPlayersBrazil] = playersBrazil;

  // An array that will contain ALL players (both teams)
  const allPlayers = [...playersUSA, ...playersBrazil];