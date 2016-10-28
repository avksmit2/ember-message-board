import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  timestamp: DS.attr(),
  icon: DS.attr(),
  useful_yes: DS.attr(),
  useful_no: DS.attr(),
  question: DS.belongsTo('post', {async: true})
});
