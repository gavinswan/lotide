const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  array.shift();
  return array;
};
const array = ["Yo Yo", "Lighthouse", "Labs"];
tail(array); // no need to capture the return value since we are not checking it
assertEqual(array.length, 3);