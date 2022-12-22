// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"


// PREP 
// P:String, with dashes/underscores,
// R:String, without dashes/underscores, words after the first word must be capitalized
// E: "the-stealth-warrior" gets converted to "theStealthWarrior"
//    "The_Stealth_Warrior" gets converted to "TheStealthWarrior"















function toCamelCase(str){
//split input string into an array of substrings   
    str = str.split('');
//using el as an variable to identify as dashes/underscores, i as index in the str array
    return str.map(function(el, i){
//uppercasing the next index after the dashes/underscores       
      if(el == '-' || el == '_'){
        el = str[i+1].toUpperCase();
//replacing the dashes/underscores        
        str.splice(i, 1);
      }
//return the new array after uppercasing and replacing dashes/underscores
      return el;
//joining the array into the result string
    }).join('');
  }