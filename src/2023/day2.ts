export const example = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

export const numberOfPossibleGames = (input: string): number => {
  const games = input.split('\n');
  const possibleGames = games
    .map((game) => {
      const gameNumber = game.split(':')[0];
      const isGamePossible = game
        .split(':')[1]
        .split(';')
        .flatMap((round) => {
          // console.log(round);
          return round.split(',').map((color) => {
            if (
              (color.includes('red') && parseInt(color.match(/\b\d{1,2}\b/g)[0]) <= 12) ||
              (color.includes('green') && parseInt(color.match(/\b\d{1,2}\b/g)[0]) <= 13) ||
              (color.includes('blue') && parseInt(color.match(/\b\d{1,2}\b/g)[0]) <= 14)
            ) {
              return 'possible';
            } else {
              return 'impossible';
            }
          });
        });
      if (!isGamePossible.includes('impossible')) {
        return parseInt(gameNumber.split(' ')[1]);
      }
    })
    .filter(function (element) {
      return element !== undefined;
    });
  return possibleGames.reduce((a, b) => a + b, 0);
};

// Part 2
// could iterate over the rounds see if the next number is higher
// if it is higher replace that count if not keep the original

export const part2 = (input: string): number => {
  const games = input.split('\n');
  const possibleGames = games.map((game) => {
    return game
      .split(':')[1]
      .split(';')
      .flatMap((round) => {
        const colorCounts = {
          red: 0,
          green: 0,
          blue: 0,
        };
        round.split(',').map((color) => {
          if (color.includes('red')) {
            colorCounts.red += parseInt(color.match(/\b\d{1,2}\b/g)[0]);
          }
          if (color.includes('green')) {
            colorCounts.green += parseInt(color.match(/\b\d{1,2}\b/g)[0]);
          }
          if (color.includes('blue')) {
            colorCounts.blue += parseInt(color.match(/\b\d{1,2}\b/g)[0]);
          }
        });
        return colorCounts;
      })
      .reduce((a, b) => {
        if (a.red < b.red) {
          a.red = b.red;
        }
        if (a.green < b.green) {
          a.green = b.green;
        }
        if (a.blue < b.blue) {
          a.blue = b.blue;
        }

        return a;
      });
  });
  const powers = possibleGames
    .map((game) => {
      const power = game.red * game.green * game.blue;
      return power;
    })
    .reduce((a, b) => a + b, 0);
  return powers;
};
