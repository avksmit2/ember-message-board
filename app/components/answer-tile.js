import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyAnswer: {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
