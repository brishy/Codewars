// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.


// PREP
// P: string
// R: array, indexes of uppercase letters
// E: Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );





var capitals = function (word) {
  //declare the result array
  let result = []
  // loop through every single letter of the word
  for (let i = 0; i<word.length; i++){
   // check if its uppercase
    if (word[i] == word[i].toUpperCase()){
      // push the index onto the resulting array 
     result.push(i)
    }
  }
  return result
};
