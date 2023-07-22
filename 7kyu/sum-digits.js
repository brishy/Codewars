// Function to find the sum of the absolute value of each digit in a number
// P: number (input)
// R: sum of the absolute value of the digits (output)
// E: sumDigits(10);  // Output: 1 (1 + 0 = 1)
//    sumDigits(99);  // Output: 18 (9 + 9 = 18)
//    sumDigits(-32); // Output: 5 (| -3 | + 2 = 5)
function sumDigits(number) {
  // Step 1: Convert the number to its absolute value to handle negative numbers
  number = Math.abs(number);
  
  // Step 2: Initialize a variable to store the sum of digits
  let digitSum = 0;
  
  // Step 3: Loop through each digit of the number
  while (number > 0) {
    // Step 3.1: Extract the last digit using remainder operator (%)
    const digit = number % 10;
    // Step 3.2: Add the absolute value of the digit to the sum
    digitSum += Math.abs(digit);
    // Step 3.3: Remove the last digit from the number using Math.floor() for integer division by 10
    number = Math.floor(number / 10);
  }
  
  // Step 4: Return the sum of the absolute values of the digits
  return digitSum;
}
