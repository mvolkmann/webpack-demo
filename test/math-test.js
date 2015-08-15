/* global describe: false, expect: false, it: false, require: false */

//const assert = require('assert');

import * as Math from '../src/math.js';

describe('Math', () => {
  it('should double', () => {
    //assert.equal(6, Math.double(3));
    expect(Math.double(3)).toBe(6);
  });
});
