import Ember from 'ember';

export default Ember.Component.extend({
  isShowingModal: false,
  actions: {
    updateQuestion(question) {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        author: this.get('author') ? this.get('author') : "",
        content: this.get('content') ? this.get('content') : "",
        icon: this.get('icon') ? this.get('icon') : "https://dummyimage.com/600x400/000/fff.png&text=??",
        timestamp: moment().valueOf(),
        notes: this.get('notes') ? this.get('notes') : "",
        solved: this.get('solved') ? this.get('solved') : "no"
      };
      this.set('isShowingModal', false);
      this.sendAction('updateQuestion', question, params);
    },
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    }
  }
});
