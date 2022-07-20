//! Count of positives / sum of negatives

//! https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

/* 
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
 */

//! Solution
function countPositivesSumNegatives(input) {
    let sumPositive = 0;
    let sumNegative = 0;
    
    if(input == null || input.length < 1){
      return [];
    } else {
      input.map(item => {
        if(item > 0){
          sumPositive++;
        }else if(item < 0){
          sumNegative += item;
        }else {
          return []
        }
      })
    }
    return [sumPositive, sumNegative];
  
  }