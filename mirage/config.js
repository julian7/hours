export default function() {
  this.passthrough('http://127.0.0.1:4000/api/**');
  this.namespace = '/api';
  this.resource('clients');
  this.resource('projects');
}
