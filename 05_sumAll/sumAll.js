const sumAll = function(start, stop) {

  if(typeof start !== 'number' || typeof stop !== 'number') {
    return 'ERROR';
  }

  if(start < 0 || stop < 0) {
    return 'ERROR';
  }

  if(stop < start) {
    let tempNr = start;
    start = stop;
    stop = tempNr;
  }

  let sum = 0;

  for(let i=start; i<=stop; i++ ) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
