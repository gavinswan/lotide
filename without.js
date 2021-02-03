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


const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }
  return newArray;
}

const words = ['hello', 'world', 'lighthouse'];
console.log(without(words, ["lighthouse"]));
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));

const numbers = [1, 2, 3];
without(numbers, [1]);
assertArraysEqual(numbers, [1,2,3]);