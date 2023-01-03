// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19

export function solve(s: string) {
  // Define a dictionary to map consonants to their respective values
  const consonantValues: { [key: string]: number } = {
    b: 2,
    c: 3,
    d: 4,
    f: 6,
    g: 7,
    h: 8,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  // Initialize variables to keep track of the result and the current substring value
  let result = 0;
  let currentSubstring = 0;

  // Loop through the characters in the string
  for (let i = 0; i < s.length; i++) {
    // Check if the character is a consonant (not a vowel)
    if (!"aeiou".includes(s[i])) {
      // Add the value of the consonant to the current substring value
      currentSubstring += consonantValues[s[i]];
    } else {
      // If a vowel is encountered, update the result with the maximum value found so far
      result = Math.max(result, currentSubstring);
      // Reset the current substring value for the next substring
      currentSubstring = 0;
    }
  }

  // Return the maximum value found (in case the last substring is the highest)
  return Math.max(result, currentSubstring);
}
