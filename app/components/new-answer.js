import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    showAnswerForm() {
      this.set('addNewAnswer', true);
    },

    saveAnswer() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        question: this.get('question'),
        rating: 0,
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
      this.set('author', "");
      this.set('content', "");
    }
  }
});
