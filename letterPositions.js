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


const letterPositions = function(sentence) {
  const results = {};
  let counter = 0
  for (letter of sentence) {
    if (letter !== ' ') {
      let index = [];
      if (results[letter]) {
        results[letter].push(counter);
        counter++;
      } else {
        index.push(counter);
        results[letter] = index;
        counter++;
        
      }
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);