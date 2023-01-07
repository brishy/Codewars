// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0



// PREP
// P: 3 numbers, a beginning, ending, step number
// R: the sum of the sequence
// E:assert.strictEqual(sequenceSum(2, 6, 2), 12)
//     assert.strictEqual(sequenceSum(1, 5, 1), 15)
//     assert.strictEqual(sequenceSum(1, 5, 3), 5)




const sequenceSum = (begin, end, step) => {
  //declare the result 
  let result = 0
  for (let i = begin; i <= end; i+= step){
    //for loop to add into the sequence
    result += i
  }
  return result
  
};
