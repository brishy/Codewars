// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.


// PREP
// P:number, must be odd and not-negative
// R:a string that looks like a diamond shape, with (*)
// E: A size 3 diamond:

//  *
// ***
//  *
//    A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *





function diamond(n) {
  // Return null if the input is an even number or negative, as it is not possible to print a diamond of even or negative size
  if (n <= 0 || n % 2 == 0) {
    return null;
  }

  // Calculate the value of m, which is used to determine the number of spaces in each line
  var m = (n - 1) / 2;

  // Initialize the string that will store the diamond
  var diam = "";

  // Loop through each row of the diamond
  for (var i = 0; i < n; i++) {
    // Add the appropriate number of spaces for this row
    for (var j = 0; j < Math.abs(m - i); j++) {
      diam += " ";
    }

    // Add the appropriate number of asterisks for this row
    for (var j = 0; j < n - Math.abs(i * 2 - n + 1); j++) {
      diam += "*";
    }

    // Add a newline character at the end of the row
    diam += "\n";
  }

  // Return the completed diamond string
  return diam;
}
