// PREP
// P:string, numbers
// R:string, digit <5 => 0, digit >5 =>1
// E: "832832" => "100100"






function fakeBin(x) {
    //declare an empty string
    let result = ''
    //loop through the index of the string
    for (let i = 0; i < x.length; i++)
        //conditionals
        if (x[i] < 5) {
            result += '0'
        } else {
            result += '1'
        }

    //return the string
    return result
}