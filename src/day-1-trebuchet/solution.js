const fs = require('fs');
const filePath = 'src/day-1-trebuchet/puzzle.txt';

const sanitizeString = (line) => {
  let sanitizedString = '';
  for (let i = 0; i < line.length; i++) {
    if (!isNaN(line[i])) {
      sanitizedString += line[i];
    }
  }
  return sanitizedString;
}

const getFirstAndLastNumberFromString = (string) => {
  const firstNumber = parseInt(string[0]);
  const lastNumber = parseInt(string[string.length - 1]);
  return { firstNumber, lastNumber };
}

const combineNumbers = (firstNumber, lastNumber) => {
  return firstNumber.toString() + lastNumber.toString();
}

const getSumOfAllNumbers = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += parseInt(numbers[i]);
  }
  return sum;
}

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
      const sanitizedString = sanitizeString(line);
      const { firstNumber, lastNumber } = getFirstAndLastNumberFromString(sanitizedString);
      combinedNumbers.push(combineNumbers(firstNumber, lastNumber));
    }
    
  });

  readStream.on('end', function() {
    const sumOfAllNumbers = getSumOfAllNumbers(combinedNumbers);
    console.log(sumOfAllNumbers); // You can replace this with your own code to process each line
  });

  readStream.on('error', function(err) {
    console.error(err);
  });
}

module.exports = {
  solveDayOnePuzzle
};