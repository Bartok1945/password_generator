var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "="];
var charChoices = []

var generateBtn = document.querySelector("#generate")
function generatePassword() {

  var pwdLength = prompt("Choose password length. It must between 8-128 characters.");
  if (isNaN(pwdLength)) {
    alert("You must choose a number!")
    return
  }

  //if pwd is valid program continues with the following

  var includeLowerCase = confirm("Do you want to include lowercase letters in your password?");
  var includeUpperCase = confirm("Do you want your password to include uppercase letters?");
  var includeNumber = confirm("Do you want your password to include numbers?");
  var includeSpecial = confirm("Do you want your password to include special characters?");



  if (includeLowerCase) {
    charChoices = charChoices.concat(lowerCase);
  }

  if (includeUpperCase) {
    charChoices = charChoices.concat(upperCase);
  }

  if (includeNumber) {
    charChoices = charChoices.concat(numbers);
  }

  if (includeSpecial) {
    charChoices = charChoices.concat(specialChar);
  }
  
  var password = ""

  for (var i = 0; i < pwdLength; i++) {
    var randomNum = Math.floor(Math.random() * charChoices.length)
    password += charChoices[randomNum];
  }
  return password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
