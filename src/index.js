// src/index.js
const { solveDayOnePuzzle } = require('./day-1-trebuchet/day-1-solution');

const main = async () => {
  await solveDayOnePuzzle();
};

main().catch(err => {
  console.error('Application failed:', err);
});