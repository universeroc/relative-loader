# Node Relative Loader

Yet another native node addon loader. The project is an enhanced version inspired by [node-addon-loader](https://github.com/ushu/node-addon-loader) and [node-native-loader](https://github.com/smt116/node-native-ext-loader).

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
