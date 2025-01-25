const findTheOldest = (array) => {
    return array.reduce((oldestPerson, currentPerson) => {
        const ageOfOldest = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
        const ageOfCurrent = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
    
        return ageOfCurrent > ageOfOldest ? currentPerson : oldestPerson;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
