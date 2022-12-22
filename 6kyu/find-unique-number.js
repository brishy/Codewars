// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique




// PREP
// P:array, numbers
// R:array, odd numbers sorted from smallest to highests, keep the order of even numbers
// E: [7, 1]  =>  [1, 7]
//    [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
//    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]





function sortArray(arr) {
    //filter out the even numbers by creating a part copy of the original array then sorting it out
        const oddArr = arr.filter(x => x%2).sort((a, b) => a - b);
    //mapping the even numbers into their original places
        return arr.map(x => x%2 ? oddArr.shift() : x);
    }