// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.


// PREP
// P: 2 integers, a<b
// R: an array of all integers between a and b
// E: a = 1
// b = 4
// --> [1, 2, 3, 4]







function between(a, b) {
  let result = []
  for(let i=a; i<=b;i++){
    result.push(i)
  }
  return result
}
