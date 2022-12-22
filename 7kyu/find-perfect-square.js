// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

// My solution:

// PREP 
// P: positive interger
// R: next squared of the input 
// E: 121 --> 144
//    625 --> 676
//    114 --> -1 since 114 is not a perfect square

   function findNextSquare(sq) {
// check if the square rooted of the input is an interger or no, if yes then find the next square of it 
    if (Number.isInteger(Math.sqrt(sq))===true){
     let rootResult = Math.sqrt(sq) + 1 
     var result = rootResult * rootResult
     return result
    }
// if no then return -1
    else if (Number.isInteger(Math.sqrt(sq))===false){
    return -1;
    }
  }
