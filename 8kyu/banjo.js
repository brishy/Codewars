// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:


// PREP
// P:string, name
// R:string + " plays banjo" or " does not play banjo"
// E: assert.strictEqual(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
//     assert.strictEqual(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
//     assert.strictEqual(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
//     assert.strictEqual(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
//     assert.strictEqual(areYouPlayingBanjo("rolf"), "rolf plays banjo");




function areYouPlayingBanjo(name) {
  //conditional logic 
  if (name.charAt(0)==="r" || name.charAt(0)==="R"){
    const Name = name.split(" ")
    return Name[0] + " plays banjo"
  } else {
    const Name = name.split(" ")
    return Name[0] + " does not play banjo"
  }
  
