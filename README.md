# @CaramelDrop/tiny

[![](https://img.shields.io/npm/v/@carameldrop/tinypack.svg)](https://www.npmjs.com/package/@carameldrop/tinypack)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@carameldrop/tinypack.svg)](https://www.npmjs.com/package/@carameldrop/tinypack)

Removes all spaces from a string.

## Install

```
$ npm install @carameldrop/tinypack
```

## Usage

```js
const tinypack = require("@carameldrop/tinypack");

tinypack("So much space!");
//=> "Somuchspace!"

tiny(1337);
//=> Uncaught TypeError: Tinypack wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```
