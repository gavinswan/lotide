# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @gavinswan/lotide`

**Require it:**

`const _ = require('@gavinswan/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns first element of an array.
* `tail(array)`: Returns an array minus the first element.
* `middle(array)`: Returns an array containing the middle of an array.
* `assertArraysEqual(array1, array2)`: Checks to see if array1 === array2.
* `assertEqual(actual, expected)`: Checks if actual === expected.
* `eqArrays(array1, array2)`: Returns a boolean value if array1 === array2.