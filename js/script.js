// Assignment code here

var lowerCase = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];

var upperCase = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z];

var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialChar = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '-', '`', '{', '}', '|', '~'];

var charInput = document.querySelector("#passLength");

passChars = parseInt(charInput);

if(passChars < 8 || passChars > 256) {
  alert("Please re-enter a number between 8 and 256 for the password length");
  return;
}

if(passChars > 7 && passChars < 257) {

passGenerate = function(passChars) {
/*
for(i=0, i < passChars, i++) {


};
*/
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
