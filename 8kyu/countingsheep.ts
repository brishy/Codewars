// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
  // Initialize a variable to keep track of the number of sheep
  let numberOfSheep: number = 0;

  // Iterate through the array
  for (let i = 0; i < arrayOfSheep.length; i++) {
    // Check if the element is true (represents a present sheep)
    if (arrayOfSheep[i] === true) {
      // If true, increment the count of sheep
      numberOfSheep++;
    } else {
      // If not true, do nothing (skip to the next element)
      numberOfSheep = numberOfSheep + 0;
    }
  }

  // Return the total count of present sheep
  return numberOfSheep;
}
