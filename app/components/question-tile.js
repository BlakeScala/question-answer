import Ember from 'ember';

export default Ember.Component.extend({
  starredQuestions: Ember.inject.service(),

  actions: {
    starThis(question) {
      this.get('starredQuestions').add(question);
      console.log(this.get('starredQuestions').length);
    }
  }
});
