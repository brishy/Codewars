// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9

// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

export function multiplicationTable(size: number): number[][] {
  // Initialize an empty array to hold the multiplication table
  let table: number[][] = [];

  // Loop through rows
  for (let i = 1; i <= size; i++) {
    let row: number[] = [];

    // Loop through columns for each row
    for (let j = 1; j <= size; j++) {
      // Multiply row number (i) with column number (j)
      let product = i * j;

      // Add the product to the row array
      row.push(product);
    }

    // Add the completed row to the table
    table.push(row);
  }

  return table;
}
