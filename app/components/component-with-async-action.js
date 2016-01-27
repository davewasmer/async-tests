import Ember from 'ember';

export default Ember.Component.extend({

  asyncDidRun: false,

  actions: {
    runLater() {
      Ember.run.later(() => {
        this.set('asyncDidRun', true);
      }, 500);
    },
    promiseWrappedRunLater() {
      new Ember.RSVP.Promise(() => {
        Ember.run.later(() => {
          this.set('asyncDidRun', true);
        }, 500);
      });
    },
    promiseWrappedSetTimeout() {
      // To double check my sanity, every possible layer is wrapped with Ember.run
      Ember.run(() => {
        new Ember.RSVP.Promise((resolve) => {
          Ember.run(() => {
            setTimeout(() => {
              Ember.run(() => {
                this.set('asyncDidRun', true);
                resolve();
              });
            }, 500);
          });
        });
      });
    }
  }

});
