import Ember from 'ember';

export default Ember.Route.extend({
  templateName: 'projects',
  model() {
    let client = this.modelFor('clients.show');
    return this.get('store').query('project', {
      filter: {
        client_id: client.id
      }
    });
  }
});
