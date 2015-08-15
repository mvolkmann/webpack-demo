module.exports = {
  entry: './math-test.js',
  eslint: {
    configFile: '../.eslintrc'
  },
  output: {
    path: '.',
    filename: 'bundle.js',
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
      } // ! chains loaders
    ]
  }
};

