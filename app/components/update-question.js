import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  isShowingModal: false,
  actions: {
    updateQuestion(question) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content'),
        icon: this.get('icon'),
        timestamp: moment().valueOf(),
        notes: this.get('notes'),
      };
      this.set('isShowingModal', false);
      this.sendAction('updateQuestion', question, params);
    },
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    }
  }
});
