const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

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

//declare empty [] for results
//loop through the array
//push [i] before the callback value
//return results

const data2 = [23, 22, 1, -2, 13, 10];
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const takeUntil = function(array, callback) {
  const results = [];
  for (element of array) {
    if (!callback(element)) {
      results.push(element);
    } else {
      return results;
    }
  } 
};
assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(data2, x => x < 0), [23, 22, 1, 3]);