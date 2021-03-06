import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  isShowingModal: false,
  actions: {
    saveQuestion() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        author: this.get('author') ? this.get('author') : "",
        content: this.get('content') ? this.get('content') : "",
        icon: this.get('icon') ? this.get('icon') : "https://dummyimage.com/600x400/000/fff.png&text=??",
        notes: this.get('notes') ? this.get('notes') : "",
        timestamp: moment().valueOf()
      };
      this.set('isShowingModal', false);
      this.sendAction('saveQuestion', params);
      this.set('title', "");
      this.set('author', "");
      this.set('content', "");
      this.set('icon', "");
      this.set('notes', "");
    },
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    }
  }
});
