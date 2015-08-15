// When "webpack --watch" or webpack-dev-server is running
// it does not reload changes to this file.

//TODO: Learn how to get this to generate separate files
// instead of one bundle.js file so refreshes are faster
// in development for large projects.

var path = require('path');

module.exports = {
  entry: './test/math-test.js',
  /*
  entry: {
    //app: ['webpack/hot/dev-server', './src/main.js']
    app: ['./src/main.js']
  },
  */
  eslint: {
    configFile: './.eslintrc'
  },
  output: {
    path: './test', //__dirname,
    filename: 'spec.js', //'bundle.js'
    publicPath: '/test',
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ],

    // When multiple loaders match a file,
    // they are processed in the reverse order listed here!
    loaders: [
      // How can I listen for HTML changes and trigger a reload?
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      /*
      {
        test: path.join(__dirname, 'src'),
        loader: 'babel-loader'
      },
      {
        test: path.join(__dirname, 'test'),
        loader: 'babel-loader'
      },
      */
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      } // use ! to chain loaders

      //TODO: There doesn't seem to be a loader for lesslint yet.
      //TODO: However, there is a csslint loader.

      //TODO: Integrate running of Jasmine tests.
      //TODO: There doesn't seem to be a loader for jasmine yet.
      //TODO: However, there is a mocha loader.
    ]
  }
};

