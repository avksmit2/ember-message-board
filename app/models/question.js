import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  content: DS.attr(),
  timestamp: DS.attr(),
  icon: DS.attr(),
  notes: DS.attr(),
  solved: DS.attr('boolean', {defaultValue: false}),
  answers: DS.hasMany('answer', {async: true})
});
