// const palindromes = function (string) {

//   let isPalindrome = false;

//   let cleanString = string.replace(/[^\w\s]|_/g, "").replace(/\s+/g, '');

//   cleanStr = cleanString.toLowerCase();

//   let newString = '';
//   for(let i=cleanStr.length - 1; i>=0; i--) {
//     newString += cleanStr[i];
//   }

//   if(newString === cleanStr) isPalindrome = true;

//   return isPalindrome;
// };


const palindromes = function (string) {
  let isPalindrome = false;

  let cleanString = string.replace(/[^\w\s]|_/g, "").replace(/\s+/g, '');

  let cleanStr = cleanString.toLowerCase();

  let arrString = cleanStr.split("");
  let arrReverseString = arrString.reverse();
  let reverseString = arrReverseString.join("");

  if(reverseString === cleanStr) isPalindrome = true;

  return isPalindrome;
}


// Do not edit below this line
module.exports = palindromes;
