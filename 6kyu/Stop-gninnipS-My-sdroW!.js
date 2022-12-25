// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.



// PREP
// P: a string of one or more words
// R: a string, five or more letter words reversed 
// E:spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"






function spinWords(string){
  //split the string in an array of substrings
  const words = string.split(' ');

  //mapping the array with words reversed
  const transformedWords = words.map((word) => {
    //conditional logic to reverse only words that are five or more letters
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    }
    return word;
  });

  //join the array back together into a string
  return transformedWords.join(' ');
}
