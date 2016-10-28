import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  content: DS.attr(),
  timestamp: DS.attr('date', {defaultValue: moment().valueOf}}),
  icon: DS.attr(),
  notes: DS.attr(),
  solved: DS.attr('boolean', {defaultValue: false}),
});
