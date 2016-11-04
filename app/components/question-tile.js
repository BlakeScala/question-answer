import Ember from 'ember';

export default Ember.Component.extend({
  starredQuestions: Ember.inject.service(),
  showStar: true,
  downvoted: false,
  upvoted: false,

  sortBy: [],

  actions: {
    starThis(question) {
      this.get('starredQuestions').add(question);
      this.set('showStar', 0);
    },

    upvote(question) {
      this.set('upvoted', true);
      this.sendAction('upvote', question);
    },

    downvote(question) {
      this.sendAction('downvote', question);
      this.set('downvoted', true);
    },
  }
});
