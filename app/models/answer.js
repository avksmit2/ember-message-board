import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  timestamp: DS.attr({defaultValue: moment().valueOf()}),
  icon: DS.attr(),
  useful_yes: DS.attr(),
  useful_no: DS.attr(),
  question: DS.belongsTo('post', {async: true})
});
