const fs = require('fs');
const { extractNumbersFromStartAndEnd, getFirstAndLastNumberFromArray, combineNumbers, getSumOfAllNumbers, convertToNumbers } = require('../utils/generalUtils');
const filePath = 'src/day-1-trebuchet/day-1-puzzle.txt';



const solveDayOnePuzzle = async () => {
  // Read the file line by line
  const readStream = fs.createReadStream(filePath, 'utf-8');
  let data = '';
  let combinedNumbers = [];

  readStream.on('data', function(chunk) {
    data += chunk;
    const lines = data.split('\n');
    // Process each line
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const arrayOfNumbersFromALine = extractNumbersFromStartAndEnd(line);
      const arrayOfNumbers = convertToNumbers(arrayOfNumbersFromALine);
      const { firstNumber, lastNumber } = getFirstAndLastNumberFromArray(arrayOfNumbers);
      combinedNumbers.push(combineNumbers(firstNumber, lastNumber));
    }
  });

  readStream.on('end', function() {
    const sumOfAllNumbers = getSumOfAllNumbers(combinedNumbers);
    console.log('The solution is', sumOfAllNumbers);
  });

  readStream.on('error', function(err) {
    console.error(err);
  });
}

module.exports = {
  solveDayOnePuzzle
};