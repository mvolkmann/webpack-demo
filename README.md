# This demonstrates using webpack with Babel and Karma.

## Setup steps

* npm install -g webpack
* npm install -g karma
* npm install

## To run the app without watch
npm test

See the steps in the script "test" in package.json.

## To run the app with watch
```
npm start
open localhost:8080
```

This does the following:
* starts the webpack-dev-server
* generates bundle.js, but doesn't write it to file system
* serves files
* watches for changes
* does live reload

This doesn't refresh when the HTML is modified.
How can you make it do that?

## To run the Jasmine tests:

```
cd test
webpack
open index.html
```

The following isn't working yet:
```
npm test
```

## To run the Karma tests:

I still need to figure out how to get this to work.
