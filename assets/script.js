// The Password generator will create a random password with 10-64 characters based on criteria the user specifies.

// Array of lowercase characters to be included in password
var lowercaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var uppercaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Variables declaration
var passwordLength = 0;
var lowercase = lowercaseCharacters;
var uppercase = uppercaseCharacters;
var number = numericCharacters;
var special = specialCharacters;

// define the passwordOptions object
var passwordOptions = {
  // property: password length
  lengthPrompt: function () {
    passwordLength = prompt(
      "Please choose the length of your password: enter a number between 10 and 64."
    );
    if (passwordLength < 10 || passwordLength > 64) {
      alert(
        "Password length must be at least 10 but no more than 64 characters."
      );
      console.log(
        "The input for password length " + passwordLength + " is invalid."
      );
      passwordLength = prompt(
        "Please try again and enter a number between 10 and 64."
      );
    } else {
      alert("Your password will have " + passwordLength + " characters.");
    }
    console.log("Your password length is: ", passwordLength);
    return passwordLength;
  },
  // property: password has lowercase or not
  hasLowercase: function () {
    lowercase = confirm(
      "Please click OK to confirm including lowercase characters in your password."
    );
    console.log("Your password has lowercase characters: ", lowercase);
    return lowercase;
  },
  // property: password has uppercase or not
  hasUppercase: function () {
    uppercase = confirm(
      "Please click OK to confirm including uppercase characters in your password."
    );
    console.log("Your password has uppercase characters: ", uppercase);
    return uppercase;
  },
  // property: password has number or not
  hasNumber: function () {
    number = confirm(
      "Please click OK to confirm including numeric characters in your password."
    );
    console.log("Your password has numeric characters: ", number);
    return number;
  },
  // property: password has special characters or not
  hasSpecial: function () {
    special = confirm(
      "Please click OK to confirm including special characters in your password."
    );
    console.log("Your password has special characters: ", special);
    return special;
  },
};

// console.log("Your password options are: ", passwordOptions);
// console.log(Object.entries(passwordOptions));

function selectCharType() {
  // prompt the user confirming lowercase character to be included in the password
  passwordOptions.hasLowercase();
  // prompt the user confirming uppercase character to be included in the password
  passwordOptions.hasUppercase();
  // prompt the user confirming numeric character to be included in the password
  passwordOptions.hasNumber();
  // prompt the user confirming special character to be included in the password
  passwordOptions.hasSpecial();
}

// Function to prompt user for password options
function getPasswordOptions() {
  // prompt the user for the password length
  passwordOptions.lengthPrompt();
  selectCharType();
}

// call the function to get password options
// var userInput = getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {
  var userInput = getPasswordOptions();
  while (
    lowercase === false &&
    uppercase === false &&
    number === false &&
    special === false
  ) {
    alert(
      "Your password must include at least one character type. Please try again and select the character types."
    );
    selectCharType();
  }
  alert("Your password will be generated based on your selection criteria.");

  return "This is a secret password.";
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
