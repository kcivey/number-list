# number-list

## Description

Convert arrays of positive integers (such as page numbers) to comma-separated strings,
with ranges represented with hyphens, or do the reverse, converting strings to arrays.

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

```js
console.log(NumberList.parse('1-3,5'));
// [ 1, 2, 3, 5 ]
```

### .stringify(*array*)

```js
console.log(NumberList.stringify([1, 2, 3, 5]));
// 1-3, 5
```
