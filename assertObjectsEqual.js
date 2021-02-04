// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};


//eqArrays function to check arrays:
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
//Object checker:
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  } 
  return true;
};
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);