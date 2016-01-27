/* jshint expr:true */
import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe('Acceptance: AsyncAction', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  it('Ember.run.later() will force tests to wait for app to settle', function() {
    visit('/');
    click('.run-later');
    andThen(function() {
      expect(find('.status').text().trim()).to.equal('Async ran');
    });
  });

  it('Ember.run.later() wrapped in a promise will force tests to wait for app to settle', function() {
    visit('/');
    click('.promise-wrapped-run-later');
    andThen(function() {
      expect(find('.status').text().trim()).to.equal('Async ran');
    });
  });

  it('setTimeout() wrapped in a promise will force tests to wait for app to settle', function() {
    visit('/');
    click('.promise-wrapped-set-timeout');
    andThen(function() {
      expect(find('.status').text().trim()).to.equal('Async ran');
    });
  });

});
