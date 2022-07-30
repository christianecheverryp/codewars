//! Remove String Spaces

//! https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript

/* 
Simple, remove the spaces from the string, then return the resultant string.
*/

//! Solution
function noSpace(x){
    return (x.replace(/\s/g, ''));
  }