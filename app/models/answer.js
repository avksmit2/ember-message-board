import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  timestamp: DS.attr({defaultValue: moment().valueOf()}),
  question: DS.belongsTo('question', {async: true})
});
