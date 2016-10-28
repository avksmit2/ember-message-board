import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    saveQuestion() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        author: this.get('author') ? this.get('author') : "",
        content: this.get('content') ? this.get('content') : "",
        icon: this.get('icon') ? this.get('icon') : "https://dummyimage.com/600x400/000/fff.png&text=??",
        timestamp: moment().valueOf()
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
