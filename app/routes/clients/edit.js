import Ember from 'ember';

export default Ember.Route.extend({
  reloadModel: Ember.on('deactivate', function() {
    this.currentModel.rollbackAttributes();
  })
});
