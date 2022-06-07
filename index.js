function getSumTwoMin(array) {
  if (!Array.isArray(array)) {
    return "variable is not array";
  }

  if (array.length < 2) {
    return "array must contains two or more numbers";
  }

  let firstMinNumber = Number.MAX_SAFE_INTEGER;
  let secondMinNumber = Number.MAX_SAFE_INTEGER;

  for (const number of array) {
    if (number < firstMinNumber) {
      secondMinNumber = firstMinNumber;
      firstMinNumber = number;

      continue;
    }

    if (number < secondMinNumber) {
      secondMinNumber = number;
    }
  }

  return firstMinNumber + secondMinNumber;
}
module.exports = getSumTwoMin;
