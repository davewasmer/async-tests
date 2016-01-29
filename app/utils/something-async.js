import Ember from 'ember';

export default function checkout() {
  return new Ember.RSVP.Promise(function (resolve) {
    let callback = function (response) {
      Ember.run(null, resolve, response);
    };
    // window.StripeCheckout.open( opts );
    setTimeout(function() {
      callback({});
    }, 500);
  });
}
