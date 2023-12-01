// src/index.js
const { solveDayOnePuzzle } = require('./day-1-trebuchet/solution');

const main = async () => {
  await solveDayOnePuzzle();
};

main().catch(err => {
  console.error('Application failed:', err);
});