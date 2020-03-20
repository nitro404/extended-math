# Extended Math

[![NPM version][npm-version-image]][npm-url]
[![Build Status][build-status-image]][build-status-url]
[![Coverage Status][coverage-image]][coverage-url]
[![Known Vulnerabilities][vulnerabilities-image]][vulnerabilities-url]
[![Dependencies][dependencies-image]][dependencies-url]
[![Downloads][npm-downloads-image]][npm-url]
[![Install Size][install-size-image]][install-size-url]
[![Contributors][contributors-image]][contributors-url]
[![Pull Requests Welcome][pull-requests-image]][pull-requests-url]

A collection mathemtatical helper functions and constant values.

## Client-Side Usage

```html
<script src="extended-math.js"></script>

<script type="text/javascript">
	extendedMath.clamp(5, 0, 2); // => 2
</script>
```

## Server-Side Usage

```javascript
const extendedMath = require("extended-math");

extendedMath.clamp(5, 0, 2); // => 2
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
or
```bash
gulp build
```

[npm-url]: https://www.npmjs.com/package/extended-math
[npm-version-image]: https://img.shields.io/npm/v/extended-math.svg
[npm-downloads-image]: http://img.shields.io/npm/dm/extended-math.svg

[build-status-url]: https://travis-ci.org/nitro404/extended-math
[build-status-image]: https://travis-ci.org/nitro404/extended-math.svg?branch=master

[coverage-url]: https://coveralls.io/github/nitro404/extended-math?branch=master
[coverage-image]: https://coveralls.io/repos/github/nitro404/extended-math/badge.svg?branch=master

[vulnerabilities-url]: https://snyk.io/test/github/nitro404/extended-math?targetFile=package.json
[vulnerabilities-image]: https://snyk.io/test/github/nitro404/extended-math/badge.svg?targetFile=package.json

[dependencies-url]: https://david-dm.org/nitro404/extended-math
[dependencies-image]: https://img.shields.io/david/nitro404/extended-math.svg

[install-size-url]: https://packagephobia.now.sh/result?p=extended-math
[install-size-image]: https://badgen.net/packagephobia/install/extended-math

[contributors-url]: https://github.com/nitro404/extended-math/graphs/contributors
[contributors-image]: https://img.shields.io/github/contributors/nitro404/extended-math.svg

[pull-requests-url]: https://github.com/nitro404/extended-math/pulls
[pull-requests-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
