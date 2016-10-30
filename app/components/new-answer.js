import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  isShowingModal: false,
  actions: {
    saveAnswer() {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        content: this.get('content') ? this.get('content') : "",
        timestamp: moment().valueOf()
      };
      this.set('isShowingModal', false);
      this.sendAction('saveAnswer', params);
    },
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    }
  }
});
