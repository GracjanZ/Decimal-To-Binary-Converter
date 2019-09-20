const decimalToBinary = require('./decimalToBinary');
let answer = decimalToBinary(198);
console.log(answer);
// outputs: 11000110
let checkAnswer = parseInt(answer, 2);
// outputs: 198
console.log(checkAnswer);
