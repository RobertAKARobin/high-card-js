# Let's Play High-Card-Wins

## Hints

- Methods you will definitely need to use:
	- `Math.random()`
	- `alert()`
	- `prompt()`
- How can you make Javascript "remember" what `this` is?
- Some methods that you might want to research, but by no means have to use:
	- `array.sort()`:
		```js
		array.sort(function(itemA, itemB){

		});
		```
	- `array.indexOf()`
	- `array.forEach()`:
		```js
		array.forEach(function(item, index){

		});
		```
	- `array.push()`
	- `array.pop()`
	- `array.unshift()`

  - [Screencast of an instructor solving it](https://youtu.be/X1341yVNCqE)

## Bonus 1

If there's a tie, announce "It's a tie between [name] and [name] with the [value] of [suit]!"

## Bonus 2

If there's a tie, deal all the players new cards.

## Bonus 3

Eliminate ties altogether. Spades > Hearts > Diamonds > Clubs.

## Bonus 4

Make this game run as an actual webpage -- not in alert boxes.

## Bonus 5

Turn the game into a series of "turns". After each round, deal all players new cards. Keep track of who has won the most rounds. Announce them as the winner.

## Testing using Mocha and Chai

- [Mocha](https://mochajs.org/)
- [Chai BDD](http://chaijs.com/api/bdd/)

Install the latest official version of Mocha

```bash
$ npm install -g mocha
```

Install dependencies

```bash
$ npm init -y
$ npm install mocha chai --save-dev
```

Write tests

- 'test/*.js'

Run tests

```bash
mocha
```

or

```bash
npm run test
```

## Set up to use ES6

Install dependencies

```
$ npm install --save react react-dom && npm install
$ npm install -D html-webpack-plugin webpack webpack-dev-server babel-{core,loader} babel-preset-react
$ npm install -D babel-cli babel-preset-es2015 babel-preset-stage-1
```

Create the app directory

```
$ mkdir app
$ touch app/index.html app/index.js
```

app/index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <div id="app"></div>
</body>
</html>
```

app/index.js

```html

```

webpack.config.js

```js
const path    = require('path');
const webpack = require('webpack');

// https://github.com/ampedandwired/html-webpack-plugin
const HtmlWebpackPlugin       = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + "/app/index.html",
  filename: "index.html",
  inject: "body"  // Inject all assets into body.
});

// Given plenty of places expect absolute paths,
// we can avoid confusion by using absolute paths everywhere.
const PATHS = {
  app:    path.join(__dirname, 'app'),
  dist:   path.join(__dirname, 'dist'),
  // style:  path.join(__dirname, 'app/scss'),
  // images: path.join(__dirname, 'app/images')
};

module.exports = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.dist,
    filename: 'index_bundle.js'
  },
  devtool: 'eval-source-map',
  // http://webpack.github.io/docs/configuration.html
  resolve: {
    root: path.resolve(__dirname),
    // To require('file') instead of require('file.js')
    extensions: ['', '.js', '.jsx', 'json']
  },
  devServer: {
    contentBase: PATHS.dist,

    // Enable history API fallback so HTML5 History API based routing works.
    // This is a good default that will come in handy in more complicated setups.
    historyApiFallback: true,
    hot:      true,
    inline:   true,
    progress: true,

    // Display only errors to reduce the amount of output.
    stats: 'errors-only',

    // Parse host and port from env so this is easy to customize.
    host: process.env.HOST,
    port: process.env.PORT
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [ // The loaders are evaluated from right to left.
      {
        test:    /\.jsx?/,
        loaders: ['babel'],
        exclude: /node_modules/
      }
    ]
  }
};
```

.babelrc

```
{
    "presets": [
      "react",
      "es2015",
      "stage-1"
    ]
}
```
