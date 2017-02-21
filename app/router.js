import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('clients', function() {
    this.route('show', { path: '/:client_id' }, function() {
      this.route('projects', function() {
        this.route('show', { path: '/:project_id' }),
        this.route('edit', { path: '/:project_id/edit' }),
        this.route('new');
      });
    });
    this.route('edit', { path: '/:client_id/edit'});
    this.route('new');
  });
});

export default Router;
