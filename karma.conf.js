var path = require('path');
var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    basepath: '',

    browsers: ['PhantomJS'],

    /*
    coverageReporter: {
      type: 'html',
      dir: 'build/coverage/'
    },
    */

    exclude: [],

    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'src/*.js',
      'src/**/*.js',
      'test/*-test.js',
      'test/**/*-test.js'
    ],

    //frameworks: ['mocha', 'chai', 'webpack'],
    frameworks: ['mocha', 'chai'],

    preprocessors: {
      'src/*.js': ['webpack'],
      'src/**/*.js': ['webpack'],
      'test/*-test.js': ['webpack'],
      'test/**/*-test.js': ['webpack']
    },

    plugins: [
      require('karma-webpack'),
      'karma-mocha',
      'karma-chai',
      'karma-phantomjs-launcher',
      'karma-spec-reporter'
      //'karma-coverage',
      //'istanbul-instrumenter-loader',
    ],

    reporters: [
      //'coverage',
      'spec'
    ],

    webpack: {
      module: {
        loaders: [
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
          { test: /\.js$/, loader: 'babel-loader' },
          {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
          } // use ! to chain loaders
        ]
        /*postLoaders: [{
          test: /\.js/,
          exclude: /(node_modules|test)/,
          loader: 'istanbul-instrumenter'
        }]*/
      },
      resolve: {
        extensions: ["", ".js"],
        modulesDirectories: [
          '',
          'node_modules',
          'src',
          'test'
        ]
      }
    },

    webpackMiddleware: {
      noInfo: true
    },
  });
};
