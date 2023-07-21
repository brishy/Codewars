Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"


//PREP
//P: string
//R: reversed string, keep space
//E: "This is an example!" ==> "sihT si na !elpmaxe"
//"double  spaces"      ==> "elbuod  secaps"




function reverseWords(str) {
  //split the intial string into an array of words, keeping the space
  const wordsArray = str.split(" ");
  //reverse the order of the words then map a new array of reversed words
  const reversedWordsArray = wordsArray.map((word) => {
    return word.split("").reverse().join("");
  });
  //join the array of reversed words into a string
  return reversedWordsArray.join(" ");
}
