// Constants
const generateBtn = document.querySelector("#generate");

// Functions

/**
 * writes a generated password to the #password
 */
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

/**
 * generate a password based on certain criteria
 */
function generatePassword(){

  // Password is currently blank! We need to make a better one
  let password = "Hello";

  let passwordLength = prompt("Enter the password length.\n(Min: 8 -- Max: 128 characters.");
  
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Incorrect LENGTH entered. Enter a new password length.\n(Min: 8 -- Max: 128 characters.");
  }
  
  console.log(passwordLength);


  //let specialCharacter = [""", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", "]", "^",_"`", "{", "|", "}", "~"];
  //let numbers = [0,1,2,3,4,5,6,7,8,9];
  //let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  //let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y, "Z"];




  return password;
}

// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
