# number-list

## Description

Convert arrays of positive integers (such as page numbers) to comma-separated strings,
with ranges represented with hyphens, or do the reverse, converting strings to arrays.
Numbers are sorted in the output, and duplicates are removed. To avoid memory problems
(and because this is designed for page numbers), the integers must be less than 1 million.

## Installation

```sh
$ npm install --save number-list
```

## Usage

```js
const NumberList = require('number-list');
```

## Methods

### .parse(*string*)

The argument is a string made up of numbers and number ranges, separated by commas or
whitespace.

```js
console.log(NumberList.parse('1-3, 5'));
// [ 1, 2, 3, 5 ]

console.log(NumberList.parse('3-4 1-6 2,2'));
// [ 1, 2, 3, 4, 5, 6 ]
```

### .stringify(*array*)

The argument is an array of positive integers.

```js
console.log(NumberList.stringify([1, 2, 3, 5]));
// 1-3, 5

console.log(NumberList.stringify([2, 7, 3, 2, 6]));
// 2-3, 6-7
```
