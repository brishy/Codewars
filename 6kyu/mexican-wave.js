// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 



// PREP
// P: string
// R: array, mexican wave which means each character will be uppercased in the array of substrings, lowercase
// E:wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]


function wave(str) {
    // create an empty array to store the results
    let result = [];

    // loop through each character of the string
    for (let i = 0; i < str.length; i++) {
        // create a copy of the original string
        let temp = str;

        // check if the current character is not a space
        if (str[i] !== " ") {
            // convert the current character to uppercase
            temp = temp.substr(0, i) + temp[i].toUpperCase() + temp.substr(i + 1);
            // push the modified string to the result array
            result.push(temp);
        }
    }

    // return the result array
    return result;
}
