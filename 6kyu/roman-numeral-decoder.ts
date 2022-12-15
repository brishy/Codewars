// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.
// Example:

// "MM"      -> 2000
// "MDCLXVI" -> 1666
// "M"       -> 1000
// "CD"      ->  400
// "XC"      ->   90
// "XL"      ->   40
// "I"       ->    1

// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

// Courtesy of rosettacode.org

export function solution(romanNumeral: string): number {
  // complete the solution by transforming the
  // string roman numeral into an integer
  // Define an object mapping Roman numerals to their decimal values
  const romanNumerals: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // Initialize the result variable to store the decimal value
  let result = 0;

  // Loop through each character in the Roman numeral
  for (let i = 0; i < romanNumeral.length; i++) {
    // Get the decimal value of the current Roman numeral character
    const currentSymbolValue = romanNumerals[romanNumeral[i]];

    // Get the decimal value of the next Roman numeral character (if it exists)
    const nextSymbolValue = romanNumerals[romanNumeral[i + 1]];

    // Check if the next symbol is larger than the current symbol
    if (nextSymbolValue && currentSymbolValue < nextSymbolValue) {
      // If so, subtract the current value from the next value and add it to the result
      result += nextSymbolValue - currentSymbolValue;

      // Move the index two steps ahead to skip the next symbol
      i++;
    } else {
      // If the next symbol is not larger, simply add the current value to the result
      result += currentSymbolValue;
    }
  }

  // Return the final result
  return result;
}
