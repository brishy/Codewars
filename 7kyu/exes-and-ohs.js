// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// PREP
// P: string, case sensitive
// R: boolean, same amount of x and o or no x and o
// E:XO("ooxx") => true
//   XO("xooxx") => false
//   XO("ooxXm") => true
//   XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
//   XO("zzoo") => false








function XO(str) {
    // declaring both amounts for x and o
    let resultX = 0
    let resultO = 0
    //looping through the string then conditionals
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == 'x' || str.charAt(i) == 'X') {
            resultX += 1
        }
        if (str.charAt(i) == 'o' || str.charAt(i) == 'O') {
            resultO += 1
        }
    }
    //returning the boolean
    return resultX == resultO

}