// Character arrays & Password Length

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialChar = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '-', '`', '{', '}', '|', '~'];

var length = document.querySelector("#pass-length");



// Generate Password Function

function generatePassword () {


      var numberCheck = document.getElementsByTagName("box1")[0].setAttribute(Boolean, "checkbox");
      //box1

      var lowerCaseCheck = document.getElementsByTagName("box2")[1].setAttribute(Boolean, "checkbox");
      //box2.setAttribute("type", "checkbox");

      var upperCaseCheck = document.getElementsByTagName("box3")[2].setAttribute(Boolean, "checkbox");
      //box3.setAttribute("type", "checkbox");

      var specialCharCheck = document.getElementsByTagName("box4")[3].setAttribute(Boolean, "checkbox");
      //box4.setAttribute("type", "checkbox");

      if (numberCheck === false && 
        lowerCaseCheck === false && 
        upperCaseCheck === false && 
        specialCharCheck === false) 
        {
        alert("You must select one or more attributes to create a password!");
        return;
      }



        var charInput = parseInt(document.querySelector("#pass-length"));


          
        
        if(charInput < 8 || charInput > 128) {
          alert("Please re-enter a number between 8 and 256 for the password length");
        }
        else if(isNaN(charInput) === true) {

            alert("Length of password must be entered as a number only");
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




// Get references to the #generate element
var createPassword = document.querySelector("#passwordButton");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
createPassword.addEventListener('click', writePassword());









  /*  alert("You must select at least one attribute") */





if(passChars > 7 && passChars < 129) {

  passGenerate = function(passChars) {

//for(i=0, i < passChars, i++) {

//};
}

}

