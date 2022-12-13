// Build Tower

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]

// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

export const towerBuilder = (floors: number): string[] => {
  const tower: string[] = [];

  // Loop for each floor
  for (let i = 0; i < floors; i++) {
    let row = "";

    // Add asterisks to the row
    for (let j = 0; j < 2 * i + 1; j++) {
      row += "*";
    }

    // Add spaces to the row for padding
    for (let k = 0; k < floors - i - 1; k++) {
      row = " " + row + " ";
    }

    // Add the completed row to the tower
    tower.push(row);
  }

  return tower;
};
