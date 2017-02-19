import Ember from 'ember';

export default Ember.Controller.extend({
  newClient: {
    name: ""
  },
  actions: {
    save() {
      let client = this.get("store").createRecord("client", this.get("newClient"));
      client.save().then((response) => {
        this.transitionToRoute('clients.show', response);
      });
    }
  }
});
