// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?
// PREP
// P: integer
// R: integer rounded to the next multiple of 5
// E: input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.





function roundToNext5(n){
  return Math.ceil(n / 5) * 5
  //use math.ceil method to round the divided integer by 5 then multiply it by 5 to return the result
}
