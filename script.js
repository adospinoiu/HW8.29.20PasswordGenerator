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
function generatePassword() {

  // Password is currently blank! We need to make a better one
  let password = "Hello";

  let passwordLengthEntry = prompt("Enter the password length.\n(Min: 8 -- Max: 128 characters.");
  console.log("Password Length: " + passwordLengthEntry);

  //If the user selects "CANCEL", automatically exits and returns value that is already in 'password'
  if (passwordLengthEntry === null) {
    console.log("Password Length: " + passwordLengthEntry);
    return password;
  }

  //Evaluates 'passwordLength' to make sure MIN: 8 & MAX: 128. Stays in loop until correct entry or user selects "CANCEL"
  while (passwordLengthEntry < 8 || passwordLengthEntry > 128) {
    passwordLengthEntry = prompt("Incorrect LENGTH entered. Enter a new password length.\n(Min: 8 -- Max: 128 characters.");
    console.log("Password Length: " + passwordLengthEntry);
    if (passwordLengthEntry === null) {
      console.log("Password Length: " + passwordLengthEntry);
      return password;
    }
  }

  //Arrays of all the characters that can be in the password
  let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let specialCharacter = ["\"", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@",
    "[", "\\", "]", "^", "`", "{", "|", "}", "~"];

  //New array to store the SELECTED characters that will be used in the password  
  let characterSet = [];


  //Confirms if the user wants lowercase, uppercase, numberic and special characters in the password
  let lowerCaseEntry = confirm("Include lowercase letter characters?");
  console.log("Lowercase choice: " + lowerCaseEntry);
  if (lowerCaseEntry === true) {
    characterSet = characterSet.concat(lowerCase);
    console.log(characterSet);
  }


  let upperCaseEntry = confirm("Include uppercase letter characters?");
  console.log("Uppercase choice: " + upperCaseEntry);
  if (upperCaseEntry === true) {
    characterSet = characterSet.concat(upperCase);
    console.log(characterSet);
  }


  let numbericEntry = confirm("Include numberic characters?");
  console.log("Numberic choice: " + numbericEntry);
  if (numbericEntry === true) {
    characterSet = characterSet.concat(numbers);
    console.log(characterSet);
  }


  let specialCharacterEntry = confirm("Include special characters?");
  console.log("Special character choice: " + specialCharacterEntry);
  if (specialCharacterEntry === true) {
    characterSet = characterSet.concat(specialCharacter);
    console.log(characterSet);
  }


  // //Evaluates if the user has selected AT LEAST one option. If not, re-asks the questions until AT LEAST one option is selected 
  // while (lowerCaseEntry === false && upperCaseEntry === false && numbericEntry === false && specialCharacterEntry === false) {
  //   let minimumEntryRequired = confirm("At least ONE OPTION must be selected to generate a password.")
  //   console.log(minimumEntryRequired);
  //   if (minimumEntryRequired === true) {
  //     lowerCaseEntry = confirm("Include lowercase letter characters?");
  //     console.log("Lowercase choice: " + lowerCaseEntry);
  //     upperCaseEntry = confirm("Include uppercase letter characters?");
  //     console.log("Uppercase choice: " + upperCaseEntry);
  //     numbericEntry = confirm("Include numberic characters?");
  //     console.log("Numberic choice: " + numbericEntry);
  //     specialCharacterEntry = confirm("Include special characters?");
  //     console.log("Special character choice: " + specialCharacterEntry);
  //   } else {
  //     console.log(minimumEntryRequired);
  //     return password;
  //   }
  // }



  // if (lowerCaseEntry === true) {
  //   characterSet = characterSet + lowerCase;
  //   console.log("Characters selected: " + characterSet);
  // } else if (upperCaseEntry === true) {
  //   characterSet = characterSet + upperCase;
  //   console.log("Characters selected: " + characterSet);
  // } else if (numbericEntry === true) {
  //   characterSet = characterSet + numbers;
  //   console.log("Characters selected: " + characterSet);
  // } else if (specialCharacterEntry === true) {
  //   characterSet = characterSet + specialCharacter;
  //   console.log("Characters selected: " + characterSet);
  // }





  return password;
}

//let lowerCase = "abcdefghijklmnopqrstuvwxyz";
//"ABCDEFGHIJKLMNOPQRSTUVWXY"
//"0123456789"
//"!@#$%^&*()+=<>?{}[]"



// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
