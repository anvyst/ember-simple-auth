import { it } from 'ember-mocha';
import LocalStorage from 'ember-simple-auth/stores/local-storage';
import Configuration from 'ember-simple-auth/configuration';
import itBehavesLikeAStore from './shared/store-behavior';

describe('Stores.LocalStorage', function() {
  beforeEach(function() {
    this.store = LocalStorage.create();
    this.store.clear();
  });

  itBehavesLikeAStore();

  describe('initilization', function() {
    it('defaults key to "ember_simple_auth:session"', function() {
      expect(LocalStorage.create().key).to.eq('ember_simple_auth:session');
    });

    it('assigns localStorageKey from the configuration object', function() {
      Configuration.base.localStorageKey = 'localStorageKey';

      expect(LocalStorage.create().key).to.eq('localStorageKey');
    });
  });
});
