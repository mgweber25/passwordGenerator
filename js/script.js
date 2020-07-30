// Assignment code here


function createPassword () {


var numberCheck = document.createElement("box1").innerHTML;
//box1.setAttribute("type", "checkbox");

var lowerCaseCheck = document.createElement("box2").innerHTML;
//box2.setAttribute("type", "checkbox");

var upperCaseCheck = document.createElement("box3").innerHTML;
//box3.setAttribute("type", "checkbox");

var specialCharCheck = document.createElement("box4").innerHTML;
//box4.setAttribute("type", "checkbox");


if (numberCheck === false && 
    lowerCaseCheck === false && 
    upperCaseCheck === false && 
    specialCaseCheck === false) 
    {
    alert("You must select one or more attributes to create a password!");
    exit();
}






var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialChar = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '-', '`', '{', '}', '|', '~'];





  /*  alert("You must select at least one attribute") */

  var charInput = document.querySelector("pass-length");

var passChars = parseInt(charInput);
  

if(passChars < 8 || passChars > 128) {
  alert("Please re-enter a number between 8 and 256 for the password length");
  
}



if(passChars > 7 && passChars < 129) {

  passGenerate = function(passChars) {

//for(i=0, i < passChars, i++) {

//};

}


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


}