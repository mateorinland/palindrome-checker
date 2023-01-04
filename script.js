function palindrome(str) {
  
  //Lowercase the string:
  str = str.toLowerCase();

  //Remove spaces and symbols:
  let alphanumericArray = str.match(/[a-z0-9]/g)
  
  //Reverse the array
  let revertedArray = [...alphanumericArray].reverse();

  //Check for palindromes:
  return alphanumericArray.join("") === revertedArray.join("");
}

palindrome("not a palind*rome");
