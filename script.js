// Declare a function isPalindrome(str) that takes a string as an input.

// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both
// orward and backward, ignoring punctuation,  case, and spacing.

//Declare a function isPalindrome(str)
//Declare variable-string
//use split(" ") method to make array with space
//use join("") to make a string again-all in one line no space between letters
//foorloop Start:0; finish: string.lenght/2
//condition chek if pal[i] = pal[pal.lenght-1-i]
// return true
// else return false

let string = "elittile";

function isPalindrome(str) {
  let palindrome = string.split(" ").join("").toLowerCase();

  for (let i = 0; i < palindrome.length / 2; i++) {
    if ((palindrome[i] = palindrome[palindrome.length - 1 - i])) {
      return true;
    }
  }
  return false;
}

console.log(isPalindrome("elittile"));

//Declare a function isPalindrome(str)
//Declare variable-string
//use split(" ") method to make array with space
//use join("") to make a string again-all in one line no space between letters
//Declare new variable-empty string to store reverse string
//foorloop Start:palindrome.length - 1; finish: >= 0 , dectement i
//condition chek if newPal === palindrome
// return true
//  else return false

function isPalindrome2(str) {
  let palindrome = string.split(" ").join("").toLowerCase();
  let newPal = "";

  for (let i = palindrome.length - 1; i >= 0; i--) {
    newPal = newPal + palindrome[i];

    if (newPal === palindrome) {
      return true;
    }
  }
  return false;
}
console.log(isPalindrome2("elittile"));
