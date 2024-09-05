const findPairWithSum = (numbers, targetSum) => {
  const pastNumbers = new Set()  
  for (let i = 0; i < numbers.length; i++) {
    if (pastNumbers.has(targetSum - numbers[i])) {
      return [targetSum - numbers[i],numbers[i]];
    }
    pastNumbers.add(numbers[i])
  }
  return [];
};

module.exports = findPairWithSum;
