# Node Relative Loader

Yet another native node addon loader. The project is an enhanced version inspired by [node-addon-loader](https://github.com/ushu/node-addon-loader) and [node-native-loader](https://github.com/smt116/node-native-ext-loader).

## Why relative loader is created?

In electron-based applications generally use asar to pack resources and if there are node addon which depends on other native modules like dlls on Windows or so on Linux/Mac, the .node module should be unpacked, but any existed loader could not work with this condition. Relative loader is born to solve this issue.

## Installation

Add the package to the development dependencies:

```bash
# using npm:
$ npm install relative-loader --save-dev

# using yarn:
$ yarn add --dev relative-loader
```

## Usage

Update rules entry in the Webpack configuration file:

```js
module: {
  rules: [
    {
      test: /\.node$/,
      loader: "relative-loader"
    }
  ];
}
```

## Options

Options are configurable using `options` hash:

**unlike [node-native-loader](https://github.com/smt116/node-native-ext-loader) options is required!**

```js
module: {
  rules: [
    {
      test: /\.node$/,
      loader: "relative-loader",
      options: {
        relativePath: "../../"
      }
    }
  ];
}
```
### `relativePath`

It allows to set an relative paths to node addon files.
