const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };

const findTheOldest = function(people) {
    return people.reduce((a, b) =>{
    const currentAge = getAge(a.yearOfBirth, a.yearOfDeath);
    const oldestAge = getAge(b.yearOfBirth, b.yearOfDeath);
        return oldestAge < currentAge? a : b;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
