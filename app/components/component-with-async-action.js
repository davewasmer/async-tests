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
    runWrappedSetTimeout() {
      Ember.run(null, () => {
        setTimeout(() => {
          Ember.run(null, () => {
            this.set('asyncDidRun', true);
            resolve();
          });
        }, 500);
      });
    },
    promiseWrappedSetTimeout() {
      // To double check my sanity, every possible layer is wrapped with Ember.run
      Ember.run(null, () => {
        new Ember.RSVP.Promise((resolve) => {
          Ember.run(null, () => {
            setTimeout(() => {
              Ember.run(null, () => {
                this.set('asyncDidRun', true);
                resolve();
              });
            }, 500);
          });
        });
      });
    },
    // katiesApproach() {
    //   doSomethingAsync
    // }
  }

});
