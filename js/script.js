// Character arrays & Password Length

var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w', 'x','y','z'];

var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialChar = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '-', '`', '{', '}', '|', '~'];


function getCheckboxValues() {

  const checkboxes = document.querySelectorAll('input[name="checkBoxes"]:checked');
  let values = [];

  checkboxes.forEach((checkbox) => {
      values.push(checkbox.value);
  });

  console.log(values);

  return values;
};

// Generate Password Function

function getPasswordOptions() {
  
       getCheckboxValues();
    
  // Box 1
    if(box1.checked === true) {
      var numberCheck = true}
      else if(box1.checked != true) {
        numberCheck = false
      }

      //box2
      if(box2.checked === true) {
        var lowerCaseCheck = true}
        else if(box2.checked != true) {
          lowerCaseCheck = false
        }

        // Box 3
        if(box3.checked === true) {
          var upperCaseCheck = true}
          else if(box3.checked != true) {
            upperCaseCheck = false
          }

      //Box 4
      if(box4.checked === true) {
        var specialCharCheck = true}
        else if(box4.checked != true) {
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

      var charInput = parseInt(document.getElementById("pass-length").value);
       
       console.log(charInput);
     
         if(charInput < 8) {
           alert("Please re-enter a number equal to or greater than 8 for the password length");
           return;
         }
         else if(isNaN(charInput) === true) {
             alert("Length of password must be entered as a number only");
             return;
           };
     
           if(charInput > 128) {
             alert("Please re-enter a number equal to or less than 128 for the password length");
             return;
           };
              
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

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {

  var options = getPasswordOptions();
  // Variable to store password as it's being concatenated
  var result = [];

  // Array to store types of characters to include in password
  var possibleCharacters = [];

  // Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];

  
   // Add special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.specialCharCheck) {
    possibleCharacters = possibleCharacters.concat(specialChar);
    guaranteedCharacters.push(getRandom(specialChar));
  }

  // Add numeric characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.numberCheck) {
    possibleCharacters = possibleCharacters.concat(numeric);
    guaranteedCharacters.push(getRandom(numeric));
  }
  
  // Add lowercase characters into array of possible characters based on user input
  // Push new random lower-cased character to guaranteedCharacters
  if (options.lowerCaseCheck) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
    guaranteedCharacters.push(getRandom(lowerCase));
  }

 // Add uppercase characters into array of possible characters based on user input
  // Push new random upper-cased character to guaranteedCharacters
  if (options.upperCaseCheck) {
    possibleCharacters = possibleCharacters.concat(upperCase);
    guaranteedCharacters.push(getRandom(upperCase));
  }

  
  // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
  
  for (var i = 0; i < options.charInput; i++) {
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
var createPassword = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
createPassword.addEventListener('click', writePassword);

