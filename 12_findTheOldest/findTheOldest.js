const findTheOldest = function(people) {
  let oldest = [];

  people.forEach(person => {
    if(person.hasOwnProperty('yearOfDeath') === false) {
      const d = new Date();
      person.yearOfDeath = parseInt(d.getFullYear());
    }
    console.log(person);

    if(oldest.length === 0) {
      oldest = person;
    } else {
      let gap = person.yearOfDeath - person.yearOfBirth;
      let gapOldest = oldest.yearOfDeath - oldest.yearOfBirth;
      console.log(gap);

      if(gapOldest < gap) oldest = person;
    }
  });

  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
