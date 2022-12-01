const fs = require('fs');
const { cursorTo } = require('readline');
const inputFile = 'input.txt'
// const inputFile = 'sample.txt'

const input = fs.readFileSync(inputFile, 'utf-8').split(/\n{2,}/);
const caloriesByElves = input.map(elf => elf.split('\n').filter(val => val).map(val => parseInt(val)).reduce((prev, cur) => prev + cur, 0))

const elfWithMaxCalorie = Math.max(...caloriesByElves)

// highest calories
console.log(elfWithMaxCalorie)

const top3ElvesTotalCalories = caloriesByElves.sort((a, b) => {
  if ( a > b ) return -1
  if (a < b) return 1
  return 0
}).slice(0,3).reduce((prev, cur) => prev + cur, 0)

// total calories of top 3
console.log(top3ElvesTotalCalories)
