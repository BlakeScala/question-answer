import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    showAnswerForm() {
      this.set('addNewAnswer', true);
    },

    saveAnswer() {
      this.set('addNewAnswer', false);
    }
  }
});
