// PREP
// P: a non-negative number
// R: if n!= 0 => return a tribonacci 
//    if n==0 => return an empty array
// E: doTest([ [1,1,1], 10], [1,1,1,3,5,9,17,31,57,105]   )
//   doTest([ [0,0,1], 10], [0,0,1,1,2,4,7,13,24,44]     )
//   doTest([ [0,1,1], 10], [0,1,1,2,4,7,13,24,44,81]    )
//   doTest([ [1,0,0], 10], [1,0,0,1,1,2,4,7,13,24]      )
//   doTest([ [0,0,0], 10], [0,0,0,0,0,0,0,0,0,0]        )
//   doTest([ [1,2,3], 10], [1,2,3,6,11,20,37,68,125,230])
//   doTest([ [3,2,1], 10], [3,2,1,6,9,16,31,56,103,190] )
//   doTest([ [1,1,1],  1], [1])






function tribonacci(signature, n) {
    //returning special cases due to having to return the tribonacci
    // if n equals 0 then return an empty array
    if (n == 0) { 
      return [];
    }
    if (n == 1) {  // if n equals 1 then return the first element of the signature
      return [signature[0]];
    }
    if (n == 2) {
      return [signature[0], signature[1]]; // if n equals 2 then return the first 2 elements of the signature
    }
    if (n == 3) {   // if n equals 3 then return the first 3 elements of the signature
      return signature;
    }
    
    let sequence = signature; 
    for (let i = 3; i < n; i++) { //push the sum of the last 3 numbers into the next array every time this loop loops through an array
      sequence.push(sequence[i - 1] + sequence[i - 2] + sequence[i - 3]);
    }
    return sequence; //return the array
  }