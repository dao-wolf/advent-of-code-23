// scan the input file
// for each line check if there is <= 12 red cubes and/or <= 13 green cubes and/or <= 14 blue cubes
// if so, extract the number of the game and add it the the result array

const fs = require('fs');
// const { } = require('../utils/generalUtils');
const filePath = 'src/day-2-cube-conundrum/puzzlecopy.txt';



const solveDayTwoPuzzle = async () => {
  // Read the file line by line
  const readStream = fs.createReadStream(filePath, 'utf-8');
  let data = '';
  let allValidGames = [];

  readStream.on('data', function(chunk) {
    data += chunk;
    const lines = data.split('\n');
    // Process each line
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
    }
  });

  readStream.on('end', function() {
    // const sumOfAllValidGames = getSumOfAllNumbers(allValidGames);
    // console.log('The solution is', sumOfAllValidGames);
  });

  readStream.on('error', function(err) {
    console.error(err);
  });
}

module.exports = {
  solveDayTwoPuzzle
};