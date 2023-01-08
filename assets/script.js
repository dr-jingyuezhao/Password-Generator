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


// define the passwordOptions object
var passwordOptions = {
  // properties are made up of key-value pairs
  length: passwordLength,
  hasLowercase: function() {
    confirm("Please confirm OK if you would like to have lowercase in your password.");
    return;
  },
  lowercase: lowercaseCharacters,
  hasUppercase: function() {
    confirm("Please confirm OK if you would like to have uppercase in your password.");
  },
  uppercase: uppercaseCharacters,
  hasNumber: function() {
    confirm("Please confirm OK if you would like to have number in your password.");
  },
  number: numericCharacters,
  hasSpecial: function() {
    confirm("Please confirm OK if you would like to have special characters in your password.");
  },
  special: specialCharacters,
};

// console.log("Your password options are: ", passwordOptions);
// console.log(Object.entries(passwordOptions));

//Functions for
function lengthMessage() {
  if (passwordLength < 10 || passwordLength > 64) {
    alert(
      "Password length must be at least 10 characters but no more than 64."
    );
    console.log(
      "The number of password length " + passwordLength + " is invalid."
    );
    passwordLength = prompt("Please try again and enter a number between 10 and 64.");
  } else {
    alert("Your password will have " + passwordLength + " characters.");
  }
  console.log("Your password length is: " + passwordLength);
}

// Function to prompt user for password options
function getPasswordOptions() {
  // prompt the user for the length of password
  passwordLength = prompt(
    "Please choose the length of your password: enter a number between 10 and 64."
  );
  // alert if the password length is <10 or >64
  lengthMessage();

  // prompt the user for character types to be included in the password
  
  // prompt the user for lowercase character to be included in the password
  passwordOptions.hasLowercase();
  console.log("Your password has lowercase: ", passwordOptions.hasLowercase());
  // return hasLowercase;
  // prompt the user for uppercase character to be included in the password
  passwordOptions.hasUppercase();
  // return hasUppercase;
  passwordOptions.hasNumber();
  passwordOptions.hasSpecial();


}

// call the function to get password options
// var userInput = getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {
  alert("Called this function!!!");
  return "This is a secret password."
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
