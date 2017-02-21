import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  client: DS.belongsTo(),
  start: DS.attr('date'),
  end: DS.attr('date'),
  description: DS.attr('string')
});
