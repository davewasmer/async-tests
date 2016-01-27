import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    asyncAction() {
      console.log('Action starting');
    }
  }

});
