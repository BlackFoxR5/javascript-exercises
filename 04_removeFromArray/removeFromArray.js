function removeFromArray(arr, ...itemsToRemove) {
    return arr.filter(item => !itemsToRemove.includes(item));
  }
  
  // Example usage
  const result = removeFromArray([1, 2, 3], "1", 3);
  console.log(result); // Output: [1, 3, 4]
  



// Do not edit below this line
module.exports = removeFromArray;
