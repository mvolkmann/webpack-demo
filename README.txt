Steps to run this demo:

npm install -g webpack
npm install -g karma
npm install webpack-dev-server --save-dev
npm install babel-loader --save-dev
npm install css-loader --save-dev
npm install eslint-loader --save-dev
npm install less-loader --save-dev
npm install style-loader --save-dev
npm install karma-webpack --save-dev

npm start
- starts webpack-dev-server
  - generates bundle.js,
    but doesn't write it to file system
  - serves files
  - watches for changes
  - does live reload
- see details in package.json
