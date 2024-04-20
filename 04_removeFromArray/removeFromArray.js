const removeFromArray = function(data, ...parameters) {

  if(!Array.isArray(data)) {
    return 'ERROR';
  }

  if(data.length === 0) {
    return [];
  }

  // let index = -1;

  // for(let param of parameters) {
  //   index = data.indexOf(param);

  //   if(index !== -1) {
  //     data.splice(index,1);
  //   }
  // }

  const newArray = [];

  data.forEach((item) => {
    // push every element into the new array
    // UNLESS it is included in the function arguments
    // so we create a new array with every item, except those that should be removed
    if (!parameters.includes(item)) {
      newArray.push(item);
    }
  });

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
