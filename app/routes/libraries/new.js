/**
 * Created by VAISI on 9/12/2016.
 */
import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('library');
  },

  actions: {

    saveLibrary(newLibrary) {
      newLibrary.save().then(() => this.transitionTo('libraries'));
    },

    /* A built-in Ember.js action (event) called willTransition that is
    called when you leave a page (route). In our case, we use this action
    to reset the model if we haven’t saved it in the database yet.*/
    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
