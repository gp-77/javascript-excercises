const reverseString = function(data) {
  if(typeof data !== 'string') {
    return false;
  }

  let reverse = '';

  for(let i = data.length-1; i >= 0; i--) {
    reverse += data.charAt(i);
  }

  return reverse;
};

// Do not edit below this line
module.exports = reverseString;
