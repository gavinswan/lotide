const tail = require("../tail");
const assertEqual = require("../assertEqual");

const array = ["Yo Yo", "Lighthouse", "Labs"];
tail(array); // no need to capture the return value since we are not checking it
assertEqual(array.length, 2);