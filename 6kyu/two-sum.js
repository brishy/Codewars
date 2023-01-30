// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).





// PREP
// P: array of numbers and a targer number
// R: array of the indices of the 2 values in the array of numbers that added together = the target number
// E: [[1,2,3],          4,     [0,2]],
//     [[1234,5678,9012], 14690, [1,2]],
//     [[2,2,3],          4,     [0,1]],
//     [[2,3,1],          4,     [1,2]]



function twoSum(numbers, target) {
    // Use a for loop to iterate through each number in the numbers array
    for (let i = 0; i < numbers.length; i++) {
        // Use a nested for loop to compare the current number with every other number in the array
        for (let j = i + 1; j < numbers.length; j++) {
            // Check if the sum of the current number and the second number is equal to the target
            if (numbers[i] + numbers[j] === target) {
                // If the sum is equal to the target, return the indices of the two numbers
                return [i, j];
            }
        }
    }
}
