[![devDependency Status](https://david-dm.org/PK1A/mind the bulk/dev-status.svg)](https://david-dm.org/PK1A/mind the bulk#info=devDependencies)

mind the bulk
==============

A (very) simple utility to size of files containing JavaSript source code.
It will report file size in its raw, minified ad gziped form. useful for tracking deliverables' size.

### Usage

```javascript
var getSizes = require('mind-the-bulk');
var sizes = getSizes(['file1.js', 'file2.js']);
```

This module exports a simple function that accepts an array of paths to files.
The function will return an object where keys are equal to file's basename and values are of the following structure
(sizes are in bytes):

```javascript
{ "raw": 228,
  "min": 200,
  "gzip": 173}
```
