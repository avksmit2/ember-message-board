import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete: function(question) {
      if(confirm('Are you sure you want to delete this question')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
