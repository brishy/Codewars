// Complete the solution so that the function will break up camel casing, using a space between words.





// PREP
// P: camel cased string
// R: break up the camel casing, adding a space between the words
// E: "camelCasing"  =>  "camel Casing"
//    "identifier"   =>  "identifier"
//    ""             =>  ""





// Define a function called "splitCamelCase" that takes in a string "s"
function solution(s) {
  // Initialize an empty string called "result"
  let result = "";

  // Iterate through each character in the string "s"
  for (let i = 0; i < s.length; i++) {
    // Store the current character in a variable "c"
    const c = s[i];

    // Check if the character is uppercase, is not lowercase, and is not the first character in the string
    if (c.toUpperCase() === c && c.toLowerCase() !== c && i > 0) {
      // If all these conditions are met, add a space to the "result" string
      result += " ";
    }
    // Add the current character to the "result" string
    result += c;
  }

  // Return the "result" string
  return result;
}
