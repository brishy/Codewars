class RomanNumerals {
    static toRoman(num) {
        let roman = '';
        let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        let numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

        // Loop through the values and numerals arrays
        for (let i = 0; i < values.length; i++) {
            // While the input number is greater than or equal to the current value
            while (num >= values[i]) {
                // Append the corresponding numeral to the result
                roman += numerals[i];
                // Subtract the value from the input number
                num -= values[i];
            }
        }
        return roman;
    }

    static fromRoman(roman) {
        let values = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
        let num = 0;

        // Loop through the characters in the Roman numeral string
        for (let i = 0; i < roman.length; i++) {
            // If the current numeral is greater than the previous one
            if (i > 0 && values[roman[i]] > values[roman[i - 1]]) {
                // Subtract twice the value of the previous numeral
                num += values[roman[i]] - 2 * values[roman[i - 1]];
            } else {
                // Add the value of the current numeral to the result
                num += values[roman[i]];
            }
        }
        return num;
    }
}
