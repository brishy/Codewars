// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// PREP
// P:string
// R:string, every letter replaced with its position in the alphabet
// E:alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )





// creating a fuction that converts each letter into their position in the alphabet
function returnNumber(letter) {
    //declaring the alphabet array
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    // assigning the letter with their position
      const index = alphabet.indexOf(letter.toLowerCase());
    return index == -1 ? "" : " " + (index + 1);
    }
    
    //creating a function that uses returnNumber on every single letter
    function alphabetPosition(text) {
    //declaring a variable to assign the resulting string to
      let newText = "";
    //looping through the string and changing letters into numbers
      for (let i = 0; i < text.length; i++) {
        newText += returnNumber(text.charAt(i));
      }
    //return the trimmed string
      return newText.trim();
    }
    