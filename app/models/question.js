import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  content: DS.attr(),
  timestamp: DS.attr(),
  icon: DS.attr(),
  notes: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
