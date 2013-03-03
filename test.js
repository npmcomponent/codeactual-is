(function() {
  var assert = require('assert');
  var is = require('./build/is');
  var fixtures = {
    Arguments: arguments,
    Function: function() {},
    String: 'foo',
    Number: 120,
    Date: new Date(),
    RegExp: new RegExp('pattern'),
    Array: [1, 2],
    Object: {foo: 'bar'}
  };

  var types = Object.keys(fixtures);
  var method;
  var expected;
  var fix;
  var compare;
  for (fix = 0; fix < types.length; fix++) {
    for (compare = 0; compare < types.length - 1; compare++) {
      method = types[compare] === 'Function' ? types[compare] : types[compare].toLowerCase();
      expected = types[fix] === types[compare];
      assert.equal(
        is[method](fixtures[types[fix]]),
        types[fix] === types[compare],
        types[fix] + ' was ' + (expected ? 'not ' : '') + 'recognized as a ' + types[compare]
      );
    }
  }

  assert.equal(is.object(fixtures.Arguments), true);
  assert.equal(is.object(fixtures.Function), true);
  assert.equal(is.object(fixtures.String), false);
  assert.equal(is.object(fixtures.Number), false);
  assert.equal(is.object(fixtures.Date), true);
  assert.equal(is.object(fixtures.RegExp), true);
  assert.equal(is.object(fixtures.Array), true);
  assert.equal(is.object(fixtures.Object), true);
})();
