import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    edit() {
      this.transitionToRoute('clients.edit', this.get('model'));
    },
    delete() {
      this.get('model').destroyRecord().then(() => {
        this.transitionToRoute('clients');
      });
    }
  }
});
