class RomanNumerals {
    static toRoman(num) {
        let roman = '';
        let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        let numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
        for (let i = 0; i < values.length; i++) {
            while (num >= values[i]) {
                roman += numerals[i];
                num -= values[i];
            }
        }
        return roman;
    }

    static fromRoman(roman) {
        let values = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
        let num = 0;
        for (let i = 0; i < roman.length; i++) {
            if (i > 0 && values[roman[i]] > values[roman[i - 1]]) {
                num += values[roman[i]] - 2 * values[roman[i - 1]];
            } else {
                num += values[roman[i]];
            }
        }
        return num;
    }
}
