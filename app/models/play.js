import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  description: DS.attr('string'),
  title: DS.attr('string'),
  createdAt: DS.attr('number'),
  updatedAt: DS.attr('number')
});
