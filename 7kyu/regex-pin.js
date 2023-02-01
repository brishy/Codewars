// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.



// PREP
// P: string
// R: boolean, string has to be 4 or 6 digits of letters
// E: "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false




function validatePIN(pin) {
  // Check if input is a string
  if (typeof pin !== 'string') return false;

  // Check length of the string
  const length = pin.length;
  if (length !== 4 && length !== 6) return false;

  // Iterate through each character of the string
  for (let i = 0; i < length; i++) {
    // Check if the character is a digit
    if (!/^\d$/.test(pin[i])) return false;
  }

  // Return true if all characters are digits and length is 4 or 6
  return true;
}
