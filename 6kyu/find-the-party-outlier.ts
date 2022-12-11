// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

//PREP
//P: an array of numbers that will have a length of at least 3, will be  either entirely comprised of odd integers or entirely comprised of even integers except for a single integer
//R: the odd interger
//E: [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
//P:   // make new variable called isMostEvenOrOddArray = 0
//loop through the array so that everytime there's an even number, isMostEvenOrOddArray++
//conditional: if isMostEvenOrOddArray = 1, then return the only even number, but isMostEvenOrOddArray > 1, then return the only odd number

export function findOutlier(integers: number[]): number {
  // Initialize a variable to count the number of even integers in the array
  let isMostEvenOrOddArray = 0;

  // Loop through the array
  for (let num of integers) {
    // Check if the current number is even
    if (num % 2 === 0) {
      // If even, increment the count of even numbers
      isMostEvenOrOddArray++;
    }
  }

  // If there is only one even number in the array, it's the outlier
  if (isMostEvenOrOddArray === 1) {
    // Return the only even number found
    return integers.find((num) => num % 2 === 0) || 0;
  } else {
    // If there is only one odd number in the array, it's the outlier
    // Return the only odd number found
    return integers.find((num) => num % 2 !== 0) || 0;
  }
}
