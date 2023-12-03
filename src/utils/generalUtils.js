
// This file contains general utility functions that can be used in multiple places in the application
const textToNumber = (text) => {
  const textToNumberMap = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six':6,
    'seven': 7,
    'eight': 8,
    'nine': 9
  };
  return parseInt(textToNumberMap[text]);
}

const convertToNumbers = (arrayOfNumbers) => {
  const numbers = [];
  arrayOfNumbers.forEach((item) => {
    if (Number.isInteger(parseInt(item))) {
      numbers.push(parseInt(item));
    } else {
      const number = textToNumber(item);
      numbers.push(number);
    }
  });
  return numbers;
}

function extractNumbersFromStartAndEnd(inputString) {
  // Regular expression to match a digit or number word at the start of the string
  const startRegex = /(one|two|three|four|five|six|seven|eight|nine|\d)/;

  // Regular expression to match a digit or number word at the end of the string
  const endRegex = /(one|two|three|four|five|six|seven|eight|nine|\d)$/;

  // Find matches at the start and end
  const startMatch = inputString.match(startRegex);
  // const endMatch = inputString.match(endRegex);

  // Initialize endMatch
  let endMatch = null;

  // Loop until a match is found or the string is fully checked
  while (inputString.length > 0 && !endMatch) {
    endMatch = inputString.match(endRegex);
    if (!endMatch) {
        inputString = inputString.slice(0, -1);
    }
  }
  
  const result = [
    startMatch ? startMatch[0] : null,
    endMatch ? endMatch[0] : null
  ];
  // Return the matches, handling cases where no match is found
  return result;
}

const getFirstAndLastNumberFromArray = (arrayOfNumbers) => {
  const firstNumber = parseInt(arrayOfNumbers[0]);
  const lastNumber = parseInt(arrayOfNumbers[arrayOfNumbers.length - 1]);
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

module.exports = {
  extractNumbersFromStartAndEnd,
  getFirstAndLastNumberFromArray,
  combineNumbers,
  getSumOfAllNumbers,
  convertToNumbers
};