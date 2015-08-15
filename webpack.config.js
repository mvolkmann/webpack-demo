// When "webpack --watch" or webpack-dev-server is running
// it does not reload changes to this file.

//TODO: Learn how to get this to generate separate files
// instead of one bundle.js file so refreshes are faster
// in development for large projects.

module.exports = {
  entry: './src/main.js',
  eslint: {
    configFile: './.eslintrc'
  },
  output: {
    path: '.',
    filename: 'bundle.js'
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
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      } // use ! to chain loaders

      //TODO: There doesn't seem to be a loader for lesslint yet.
      //TODO: However, there is a csslint loader.
    ]
  }
};

