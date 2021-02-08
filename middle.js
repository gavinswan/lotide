
// ACTUAL FUNCTION
const middle = function(array) {
  let result = [];
  if (array.length < 3) {
    return result;
  } else if (array.length % 2 !== 0) {
    let middleIndex = array[Math.floor(array.length / 2)];
    result.push(middleIndex);
    return result;
  } else {
    let middleIndex = array[array.length / 2];
    let secondIndex = array[array.length / 2 - 1];
    result.push(secondIndex, middleIndex);
    return result;
  }
}

module.exports = middle;