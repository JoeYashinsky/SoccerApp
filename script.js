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
console.log(gkUSA, fieldPlayersUSA);
// Prints:  Howard, then (10) ["Lalas", "Wynalda", etc.]
const [gkBrazil, ...fieldPlayersBrazil] = playersBrazil;

// An array that will contain ALL players (both teams)
const allPlayers = [...playersUSA, ...playersBrazil];
console.log(allPlayers); // Prints: one single array with all 22 elements

// USA inserted 3 subs. New array will consist of all original USA players plus the 3 substitutes.

const playersUSAFinal = [...playersUSA, 'Jones', 'Stewart', 'Dooley'];

// Based on game.odds object, create a variable to represent each separate odd.
const {
  odds: { oddsUSA, x: draw, oddsBrazil },
} = game;

// Function 'printGoals'
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} were the total number of goals scored in the game.`);
};

printGoals('Wynalda', 'Ronaldo'); // 2 goals were scored in the game.
printGoals(...game.scored); // 4 goals were scored in the game.

// Team with lower odds more likely to win. Print to console which team more likely to win based on game.odds
oddsUSA < oddsBrazil &&
  console.log(`${game.team1} is more likely to win the soccer game today.`);
oddsBrazil < oddsUSA &&
  console.log(`${game.team2} is more likely to win the soccer game today.`);

// Loop over game.scored array and print each player name to the console, along with the goal number. Using 'entries' will give index of each goal.

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// Goal 1: Ramos
// Goal 2: Ronaldo
// Goal 3: Cafu
// Goal 4: Bebeto

// Calculae the average odd of this game
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
  average /= odds.length;
  console.log(average); //  11.08 / 3 = 3.69
}

// Print all 3 odds to console with key/value of each odd
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(team, odd);
  // oddsUSA 6.5
  // x 3.25
  // oddsBrazil 1.33
  console.log(`Odd of ${teamStr} ${odd}`);
  //Odd of victory oddsUSA 6.5
  //Odd of draw 3.25
  //Odd of victory oddsBrazil 1.33
}

//Create an object that contains names of all players who scored (as properties), and the number of goals scored as the associated value.
const goalScorers = {};
for (const player of game.scored) {
  goalScorers[player] ? goalScorers[player]++ : (goalScorers[player] = 1);
}

const gameEvents = new Map([
  [16, 'Yellow card'],
  [17, 'GOAL'],
  [47, 'GOAL'],
  [61, 'Substitution'],
  [64, 'Yellow card'],
  [69, 'Red card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'GOAL'],
  [80, 'GOAL'],
  [92, 'Yellow card'],
]);

// Array called 'uniqueEvents', but without duplicates
const uniqueEvents = [...new Set(gameEvents.values())];
console.log(unqiueEvents); // (4) ["GOAL", "Substitution", "Yellow card", "Red card"]

// Yellow card from minute 64 was ruled incorrectly. Remove this yellow card event from the log of gameEvents.
gameEvents.delete(64);
console.log(gameEvents); // Now shows 10 events instead of 11
gameEvents.delete(61);
console.log(gameEvents);  // Now displays just 9 events instead of 10

// Print a string displaying how many events happened per minute in the game
const gameString = `An event happened, on average, every ${90 / gameEvents.size} minutes out there on the pitch.`;
console.log(gameString);

// loop over events and log to console. Designate whether the event took place in 1st half or 2nd half.
for (const [min, gameEvent] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF}] ${min}: ${gameEvent}`);
}

// Find the last value in gameEvents map. 
const time = [...gameEvents.keys()].pop();  // "pop" will return 92
console.log(time);  // 92

