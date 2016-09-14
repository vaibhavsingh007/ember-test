/**
 * Created by VAISI on 9/12/2016.
 */
import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('library');
  }

});
