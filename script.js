// The Password generator will create a random password with 10-64 characters based on criteria the user specifies.

// Variables declaration
var passwordLength = 0;

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

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

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

// define the passwordOptions object
var passwordOptions = {
  // properties are made up of key-value pairs
length: passwordLength,
lowercase: lowercaseCharacters,
uppercase: uppercaseCharacters,
numeric: numericCharacters,
specialChar: specialCharacters,
};

console.log("Your password options are: ", passwordOptions);
console.log(Object.entries(passwordOptions));

// Function to prompt user for password options
function getPasswordOptions() {
  // prompt the user for the length of password
  passwordLength = prompt("Please choose the length of your password: enter a number between 10 and 64.");
  // alert if the password length is <10 or >64
  if (passwordLength < 10 || passwordLength > 64) {
    alert("Password length must be at least 10 characters but no more than 64.");
  } else {
    alert("Your password will have " + passwordLength + " characters.");
  }
}

// call the function to get password length
getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {}

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
