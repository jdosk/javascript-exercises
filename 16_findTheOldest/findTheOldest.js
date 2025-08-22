const findTheOldest = function(people) {
  const oldest = people.reduce((acc, curr) => {
    const currDeath = curr.yearOfDeath || new Date().getFullYear(); 
    const accDeath = acc.yearOfDeath || new Date().getFullYear();

    const currAge = currDeath - curr.yearOfBirth;
    const accAge = accDeath - acc.yearOfBirth;

    return currAge > accAge ? curr : acc;
  });

  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
