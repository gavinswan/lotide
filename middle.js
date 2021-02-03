const eqArrays = function(array1, array2) {
  let first = '';
  let second = '';
  for (let i = 0; i < array1.length; i++) {
    first = array1[i];
    for (let j = 0; j < array2.length; j++) {
      second = array2[j];
    }
  }
  return first === second;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

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
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);
assertArraysEqual(middle([1,2]), []);