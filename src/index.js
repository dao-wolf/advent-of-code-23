// src/index.js
const { solveDayOnePuzzle } = require('./day-1-trebuchet/day-1-solution');
const { solveDayTwoPuzzle } = require('./day-2-cube-conundrum/day-2-solution');

const main = async () => {
  await solveDayOnePuzzle();
  await solveDayTwoPuzzle();
};

main().catch(err => {
  console.error('Application failed:', err);
});