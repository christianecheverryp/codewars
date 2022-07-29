//! Beginner Series #4 Cockroach

//! https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript

/* 
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
*/

//! Solution
function cockroachSpeed(s) {
    let cms = s / 0.036;
    return Math.floor(cms);
    
    // otra forma de convertirlo a Int
    //return (parseInt(cms, 10));
}