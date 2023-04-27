# Extended Math

[![NPM version][npm-version-image]][npm-url]
[![Coverage Status][coverage-image]][coverage-url]
[![Known Vulnerabilities][vulnerabilities-image]][vulnerabilities-url]
[![Downloads][npm-downloads-image]][npm-url]
[![Install Size][install-size-image]][install-size-url]
[![Contributors][contributors-image]][contributors-url]
[![Pull Requests Welcome][pull-requests-image]][pull-requests-url]

A collection of JavaScript mathemtatical helper functions and constant values.

## Documentation

Complete API documentation is available [here][documentation-url].

## Web Usage

```html
<script src="extended-math.js"></script>

<script type="text/javascript">
	extendedMath.clamp(5, 0, 2); // => 2 
</script>
```

## Node.js Usage

```javascript
const extendedMath = require("extended-math");

extendedMath.normalize(1, 0, 2); // => 0.5
```

## Installation

To install this module:
```bash
npm install extended-math
```

## Building

To build the distribution files for this module:
```bash
npm run build
```

## Running Unit Tests

To run the unit test suite for this module:
```bash
npm run test
```

## Generating Documentation

```bash
npm run docs
```

[documentation-url]: https://nitro404.github.io/extended-math/module-extendedMath.html

[npm-url]: https://www.npmjs.com/package/extended-math
[npm-version-image]: https://img.shields.io/npm/v/extended-math.svg
[npm-downloads-image]: http://img.shields.io/npm/dm/extended-math.svg

[coverage-url]: https://coveralls.io/github/nitro404/extended-math?branch=master
[coverage-image]: https://coveralls.io/repos/github/nitro404/extended-math/badge.svg?branch=master

[vulnerabilities-url]: https://snyk.io/test/github/nitro404/extended-math?targetFile=package.json
[vulnerabilities-image]: https://snyk.io/test/github/nitro404/extended-math/badge.svg?targetFile=package.json

[install-size-url]: https://packagephobia.now.sh/result?p=extended-math
[install-size-image]: https://badgen.net/packagephobia/install/extended-math

[contributors-url]: https://github.com/nitro404/extended-math/graphs/contributors
[contributors-image]: https://img.shields.io/github/contributors/nitro404/extended-math.svg

[pull-requests-url]: https://github.com/nitro404/extended-math/pulls
[pull-requests-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
