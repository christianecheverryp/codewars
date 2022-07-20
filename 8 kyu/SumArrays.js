//! Sum Arrays

//! https://www.codewars.com/kata/53dc54212259ed3d4f00071c

/* Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. 
If the array does not contain any numbers then you should return 0. */

//! Solution
// Sum Numbers
function sum (numbers) {
    "use strict";
  const suma = numbers.reduce((resultado, elemento) => resultado + elemento, 0)  
  return suma;
};