'use strict';
module.exports = function decimalToBinary(decimal) {
  let binary = [];
  while(decimal != 0) {
    binary.unshift(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }
  binary = binary.join('')
  return binary;
}