// Character arrays & Password Length

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialChar = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '-', '`', '{', '}', '|', '~'];

var length = document.querySelector("#pass-length");



// Generate Password Function

function passwordAttributes () {

    var box1 = document.querySelector('input[id="box1"]');
    var box2 = document.querySelector('input[id="box2"]');
    var box3 = document.querySelector('input[id="box3"]');
    var box4 = document.querySelector('input[id="box4"]');

  
  // Box 1
    if(box1.checked === true) {
      var numberCheck = true}
      else {
        numberCheck = false
      }

      //box2
      if(box2.checked === true) {
        var lowerCaseCheck = true}
        else {
          lowerCaseCheck = false
        }

        // Box 3
        if(box3.checked === true) {
          var upperCaseCheck = true}
          else {
            upperCaseCheck = false
          }

      //Box 4
      if(box4.checked === true) {
        var specialCharCheck = true}
        else {
          specialCharCheck = false
        }

      if (numberCheck === false && 
        lowerCaseCheck === false && 
        upperCaseCheck === false && 
        specialCharCheck === false) 
        {
        alert("You must select one or more attributes to create a password!");
        return;
      }

        

      var charInput = length;

      console.log(charInput, length);

      charInput = parseInt(charInput);

        if(charInput < 8 || charInput > 128) {
          alert("Please re-enter a number between 8 and 128 for the password length");
          return;
        }
        else if(isNaN(charInput) === true) {
            alert("Length of password must be entered as a number only");
            return;
          }
          
      // Object to store user input

      var passwordOptions = {
        charInput: charInput,
        numberCheck: numberCheck,
        lowerCaseCheck: lowerCaseCheck,
        upperCaseCheck: upperCaseCheck,
        specialCharCheck: specialCharCheck
      };

      return passwordOptions;
}


function generatePassword() {

  var options = passwordAttributes();
  // Variable to store password as it's being concatenated
  var result = [];

  // Array to store types of characters to include in password
  var possibleCharacters = [];

  // Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];

  // Conditional statement that adds array of numeric characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  
  if (options.numberCheck) {
    possibleCharacters = possibleCharacters.concat(numeric);
    guaranteedCharacters.push(getRandom(numeric));
  }
  
  
  
  
  
  // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  
  
  
  
  
  
  
  if (options.specialCharCheck) {
    possibleCharacters = possibleCharacters.concat(specialChar);
    guaranteedCharacters.push(getRandom(specialChar));
  }

  

  // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
  // Push new random lower-cased character to guaranteedCharacters
  if (options.lowerCaseCheck) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
    guaranteedCharacters.push(getRandom(lowerCase));
  }

  // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
  // Push new random upper-cased character to guaranteedCharacters
  
  if (options.upperCaseCheck) {
    possibleCharacters = possibleCharacters.concat(upperCase);
    guaranteedCharacters.push(getRandom(upperCase));
  }

  // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
  
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  // Mix in at least one of each guaranteed character in the result
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  // Transform the result into a string and pass into writePassword
  return result.join('');
}



// Get references to the #generate element
var createPassword = document.querySelector("#passwordButton");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
createPassword.addEventListener('click', writePassword);

