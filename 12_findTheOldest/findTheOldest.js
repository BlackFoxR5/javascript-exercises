const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };

const findTheOldest = (array) => {
    return array.reduce((acc, cv) => {
        const ageOfOldest = getAge(acc.yearOfBirth, acc.yearOfDeath);
        const ageOfCurrent = getAge(cv.yearOfBirth, cv.yearOfDeath);
        return ageOfCurrent > ageOfOldest ? cv : acc;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
