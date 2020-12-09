var generateBtn = document.querySelector("#generate");
var pwdLength = prompt("How long do you want your password to be? 8-128 characters");
var lowerCase = confirm("Do you want to include lowercase letters in your password?");
var upperCase = confirm("Do you want your password to include uppercase letters?");
var num = confirm("Do you want your password to include numbers?");
var special = confirm("Do you want your password to include special characters?");




function getLowerCase() {

}
function getUpperCase(){

}

function getNumber() {

}

function getSpecial() {
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
