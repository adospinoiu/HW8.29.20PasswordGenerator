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
  let password = "";

  //Ask the user how long the password length should be
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

  //Asks the user four different options of which type of characters to include in the password
  let lowerCaseEntry = confirm("Include lowercase letter characters?");
  console.log("Lowercase choice: " + lowerCaseEntry);
  let upperCaseEntry = confirm("Include uppercase letter characters?");
  console.log("Uppercase choice: " + upperCaseEntry);
  let numbericEntry = confirm("Include numberic characters?");
  console.log("Numberic choice: " + numbericEntry);
  let specialCharacterEntry = confirm("Include special characters?");
  console.log("Special character choice: " + specialCharacterEntry);

  //Evaluates if the user selected AT LEAST one option; If not, stays in loop until at least one option is selected
  while (lowerCaseEntry === false && upperCaseEntry === false && numbericEntry === false && specialCharacterEntry === false) {
    let minimumEntryRequired = confirm("At least ONE OPTION must be selected to generate a password.")
    console.log(minimumEntryRequired);
    if (minimumEntryRequired === true) {
      lowerCaseEntry = confirm("Include lowercase letter characters?");
      console.log("Lowercase choice: " + lowerCaseEntry);
      upperCaseEntry = confirm("Include uppercase letter characters?");
      console.log("Uppercase choice: " + upperCaseEntry);
      numbericEntry = confirm("Include numberic characters?");
      console.log("Numberic choice: " + numbericEntry);
      specialCharacterEntry = confirm("Include special characters?");
      console.log("Special character choice: " + specialCharacterEntry);
    }
  }

  //Adds lowercase characters to the array holding the possible characters that will be used to generate the password
  if (lowerCaseEntry === true) {
    characterSet = characterSet.concat(lowerCase);
    console.log("Characters selected: " + characterSet);
  }

  //Adds uppercase characters to the array holding the possible characters that will be used to generate the password
  if (upperCaseEntry === true) {
    characterSet = characterSet.concat(upperCase);
    console.log("Characters selected: " + characterSet);
  }

  //Adds numberic characters to the array holding the possible characters that will be used to generate the password
  if (numbericEntry === true) {
    characterSet = characterSet.concat(numbers);
    console.log("Characters selected: " + characterSet);
  }

  //Adds special characters to the array holding the possible characters that will be used to generate the password
  if (specialCharacterEntry === true) {
    characterSet = characterSet.concat(specialCharacter);
    console.log("Characters selected: " + characterSet);
  }

  //Loop to select the random characters based on the password length selected and the character choices selected
  for (let i = 0; i < passwordLengthEntry; i++) {
    password = password + characterSet[Math.floor(Math.random() * characterSet.length)];
    console.log(password);
  }

  return password;
}


// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
