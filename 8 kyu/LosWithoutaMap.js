//! Beginner - Lost Without a Map

//! https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript

/* 
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
 */

//! Solution
function maps(x){

    const doubles = x.map(function(x){
      return x * 2;
    })
    return doubles;
  }