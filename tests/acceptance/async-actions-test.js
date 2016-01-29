import { test } from 'qunit';
import moduleForAcceptance from 'async-tests/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | async actions');

test('Ember.run.later()', function(assert) {
  visit('/');
  click('.run-later');
  andThen(() => {
    assert.equal(find('.status').text().trim(), 'Async ran');
  });
});
test('Ember.run.later() wrapped in a promise', function(assert) {
  visit('/');
  click('.promise-wrapped-run-later');
  andThen(() => {
    assert.equal(find('.status').text().trim(), 'Async ran');
  });
});
test('setTimeout wrapped in an Ember.run()', function(assert) {
  visit('/');
  click('.run-wrapped-set-timeout');
  andThen(() => {
    assert.equal(find('.status').text().trim(), 'Async ran');
  });
});
test('setTimeout wrapped in a Promise and Ember.run()', function(assert) {
  visit('/');
  click('.promise-wrapped-set-timeout');
  andThen(() => {
    assert.equal(find('.status').text().trim(), 'Async ran');
  });
});
test(`@katie's approach`, function(assert) {
  visit('/');
  click('.katies-approach');
  andThen(() => {
    assert.equal(find('.status').text().trim(), 'Async ran');
  });
});
