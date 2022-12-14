// Write a function that checks if a given string (case insensitive) is a palindrome.





// PREP
// P: string , case insensitive
// R: true or false if its a palindrome
// E: it("Testing for 'a'", () => assert.strictEqual(isPalindrome("a"), true));
//   it("Testing for 'aba'", () => assert.strictEqual(isPalindrome("aba"), true));
//   it("Testing for 'Abba'", () => assert.strictEqual(isPalindrome("Abba"), true));
//   it("Testing for 'hello'", () => assert.strictEqual(isPalindrome("hello"), false));
//   it("Testing for 'Bob'", () => assert.strictEqual(isPalindrome("Bob"), true));
//   it("Testing for 'Madam'", () => assert.strictEqual(isPalindrome("Madam"), true));
//   it("Testing for 'AbBa'", () => assert.strictEqual(isPalindrome("AbBa"), true));
//   it("Testing for ''", () => assert.strictEqual(isPalindrome(""), true));
// });





function isPalindrome(x) {
    //make the string lowercase
      let newX = x.toLowerCase()
    //split, reverse, join the original string then compare it with the original string
      const palindrome = newX.split('').reverse().join('')
      return x.toLowerCase() === palindrome
}