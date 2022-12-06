// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


// My solution:


// PREP
// P: string, 1 space between words
// R: string, 2 capital letters with a dot 
// E:Sam Harris => S.H
//   patrick feeney => P.F







function abbrevName(name) {
    ////declare the result with the first letter and the next index after the space with a dot between
    let result = name[0] + "." + name[name.indexOf(" ") + 1]
    //uppercase it
    return result.toUpperCase(
    )


}