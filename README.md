# inject-version

> CLI tool to inject `version` into your source code when `prepublishOnly`.

[![npm Version](https://img.shields.io/npm/v/inject-version.svg)](https://www.npmjs.com/package/inject-version)
[![Build Status](https://github.com/hustcc/inject-version/workflows/build/badge.svg)](https://github.com/hustcc/inject-version/actions)
[![npm](https://img.shields.io/npm/dm/inject-version.svg)](https://www.npmjs.com/package/inject-version)
[![npm License](https://img.shields.io/npm/l/inject-version.svg)](https://www.npmjs.com/package/inject-version)


## Install

```bash
$ npm i --save-dev inject-version
```


## Usage

 - Add the `prepublishOnly` script to your `package.json` with `inject-version`:

```diff
  "scripts": {
+   "prepublishOnly": "inject-version ./src/index.ts",
    "test": "jest"
  },
```


## License

MIT@[hustcc](https://github.com/hustcc).
